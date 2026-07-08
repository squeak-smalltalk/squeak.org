module Jekyll
  HEAD = '_head.md'
  TRAILER = '_trailer.md'

  module MarkdownSource
    module_function

    def read_with_front_matter(path)
      text = File.read(path)
      data = {}

      if text =~ Jekyll::Document::YAML_FRONT_MATTER_REGEXP
        data = SafeYAML.load(Regexp.last_match(1)) || {}
        text = Regexp.last_match.post_match
      end

      [data, text]
    end
  end

  class Section < Page
    def initialize(site, collection)
      @site = site
      @dir = collection
      @name = 'index.html'
      section = site.collections[collection]

      self.process(@name)
      self.read_yaml(File.join(site.source, '_layouts'), 'section.html')
      self.data['section'] = section
      self.data['section_label'] = collection
      collections_config = site.config['collections'] || {}
      section_config = collections_config[collection] || {}
      if self.data['title'].to_s.empty? && section_config['title']
        self.data['title'] = section_config['title']
        self.data['section_fallback_title'] = true
      end
      self.data['description'] = section_config['description']
      self.data['section_sort_reversed'] = section_config['sort_reversed']
      self.data['section_overview_page'] = section_config['overview_page']
      if section.entries.include? HEAD
        head_data, head_body = MarkdownSource.read_with_front_matter(File.join(site.source, '_' + collection, HEAD))
        tmpl = (Liquid::Template.parse head_body).render site.site_payload
        html = Kramdown::Document.new(tmpl).to_html
        self.data['head'] = html
        self.data['description'] = head_data['description'] if head_data['description']
      end
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