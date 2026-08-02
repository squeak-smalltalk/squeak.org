require 'uri'
require 'cgi'

# Rewrites links with the "code:" scheme to point to try.squeak.org to open/run the linked code snippet in SqueakJS.
Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|

  next unless doc.data['rewrite_code_links']

  doc.output = doc.output.gsub(/<a\s+([^>]*?)href="(code:[^"]+)"([^>]*)>/) do
    before = $1
    raw_url = $2.strip
    url = CGI.unescapeHTML(raw_url)
    after = $3

    version = doc.data['title'].to_s[/\d+\.\d+/]

    argv = [
      # vm name
      "squeakjs",
      # image name (dummy)
      "squeak.image",
      # first argument: DoItFirst is supported since Squeak 6.0; for older versions, the images on try.squeak.org offer a shim (a `--doit` file next to the image file)
      "--doit",
      # second argument: Code snippet to run.
      if Gem::Version.new(version) >= Gem::Version.new('5.2')
        # TextURL class>>#url: is only supported since Squeak 6.0.
        "(TextURL new url: '#{url.gsub("'", "''")}') future actOnClickFor: nil"
      else
        # code:// URLs were only introduced in Squeak 5.1, but the release notes for 4.5-5.0 have been later patched to use them anyway:
        # https://github.com/squeak-smalltalk/squeak-app/commit/b3e7b89f41a51eb133b2c7e613ee78143c50c810
        # As a shim, the rough behavior of TextURL>>#url: is hardcoded here.
        expression = url[7..]
        browseExpression = case expression
          when /^\s*(\p{Lu}\w*(?:\s+class)?)\s*$/ then "#{$1} browse"
          when /^\s*(\p{Lu}\w*(?:\s+class)?)\s*>>\s*(#\w[\w:]+)\s*$/ then "ToolSet browse: #{$1} selector: #{$2}"
          when /^\s*(#\w[\w:]+)\s*$/ then "SystemNavigation default browseAllImplementorsOf: #{$1}.
SystemNavigation default browseAllCallsOn: #{$1}."
          else "Compiler evaluate: '#{expression.gsub("'", "''")}'"  # Strictly speaking, we should check here whether the result needs to be browsed, but no real URL in the affected release notes uses that.
        end

        "[#{browseExpression}] future value"
      end
    ]

    new_url = URI::HTTPS.build(
      host: 'try.squeak.org',
      path: '/',
      # todo for later: support highres on try.squeak.org
      # todo it would also be nice if we could open the image in the demo mode (including the remarks on SqueakJS vs OSVM)
      query: URI.encode_www_form({
        url: "images",
        zip: "Squeak#{version}.zip",
        wizard: 'false',
        demo: 'true',
        **(if Gem::Version.new(version) >= Gem::Version.new('5.1')
        # TODO: If the 6.1 image opens the release notes by default, we can skip this here.
          { navigateToReleaseNotes: 'true' }
        else {} end),
        argv: argv.to_json
      }).gsub('+', '%20')
    ).to_s
    new_url.sub!('?', '#')  # unconventional SqueakJS convention (so follow-up links on the demo page replace former parameters, I suppose)

    %Q(<a target="_blank" #{before}href="#{CGI.escapeHTML(new_url)}" title="#{CGI.escapeHTML(url)}"#{after}>)
  end
end
