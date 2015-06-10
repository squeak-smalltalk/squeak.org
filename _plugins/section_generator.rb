module Jekyll
  TRAILER = '_trailer.md'

  class Section < Page
    def initialize(site, collection)
      @site = site
      @dir = collection
      @name = 'index.html'
      section = site.collections[collection]

      self.process(@name)
      self.read_yaml(File.join(site.source, '_layouts'), 'section.html')
      self.data['section'] = section
      if section.entries.include? TRAILER
        tmpl = File.read File.join site.source, '_' + collection, TRAILER
        tmpl = (Liquid::Template.parse tmpl).render site.site_payload
        html = Kramdown::Document.new(tmpl).to_html
        self.data['trailer'] = html
      end
    end
  end

  class SectionGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'section'
        site.collections.each_key do |collection|
          site.pages << Section.new(site, collection)
        end
      end
    end
  end

end