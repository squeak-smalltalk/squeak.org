require 'uri'
require 'cgi'

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  config = doc.site.config

  next unless doc.data['rewrite_code_links']

  doc.output = doc.output.gsub(/<a\s+([^>]*?)href="(code:[^"]+)"([^>]*)>/) do
    before = $1
    raw_url = $2.strip
    url = CGI.unescapeHTML(raw_url)
    after = $3

    version = doc.data['title'].to_s[/\d+\.\d+/]
    # clamp down to 6.0, the first version that supports --doit, and hope that older URLs do still work here
    version = '6.0' if version.nil? || Gem::Version.new(version) < Gem::Version.new('6.0')

    argv = [
      "squeakjs", # vm name
      "squeak.image", # image name (dummy)
      "--doit",
      "(TextURL url: '#{url.gsub("'", "''")}') future actOnClickFor: nil",
    ]

    new_url = URI::HTTPS.build(
      host: 'try.squeak.org',
      path: '/',
      # todo for later: support highres on try.squeak.org
      # todo it would also be nice if we could open the image in the demo mode (including the remarks on SqueakJS vs OSVM)
      query: URI.encode_www_form({
        zip: "images/Squeak#{version}.zip",
        wizard: 'false',
        argv: argv.to_json,
      }).gsub('+', '%20')
    ).to_s

    %Q(<a #{before}href="#{CGI.escapeHTML(new_url)}" title="#{CGI.escapeHTML(url)}"#{after}>)
  end
end
