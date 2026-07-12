require 'cgi'

module Jekyll
  module DescriptionSource
    module_function

    RELEASE_NOTES_MARKER = /\A\*{3,}.*\*{3,}\z/  # redundant header in release notes

    def plain_text(html)
      CGI.unescapeHTML(html.to_s.gsub(/<[^>]+>/, ' '))
        .gsub(/\s+/, ' ')
        .gsub(/\s+([,.;:!?])/, '\1')
        .strip
    end

    def normalized_text(text)
      plain_text(text).downcase.gsub(/[^a-z0-9]+/, ' ').strip
    end

    def paragraph_texts(html)
      html.to_s
        .scan(%r{<p\b[^>]*>(.*?)</p>}mi)
        .flatten
        .map { |paragraph| plain_text(paragraph) }
        .reject(&:empty?)
    end

    def meaningful_paragraph?(paragraph, normalized_title)
      normalized = normalized_text(paragraph)

      return false if normalized.empty?
      return false if !normalized_title.empty? && normalized == normalized_title
      return false if paragraph.match?(RELEASE_NOTES_MARKER)

      true
    end

    def first_meaningful_paragraph(html, title: nil)
      normalized_title = normalized_text(title)

      paragraph_texts(html).find do |paragraph|
        meaningful_paragraph?(paragraph, normalized_title)
      end
    end

    def first_front_page_item_description(section)
      item = section&.docs
        &.select { |doc| doc.data['front-page'] }
        &.min_by { |doc| doc.data['order'].to_i }

      plain_text(item.content) if item
    end

    def section_description(doc)
      section_config = doc.site.config.dig('collections', doc.data['section_label'].to_s) || {}

      section_config['description'] ||
        first_meaningful_paragraph(doc.data['head'], title: doc.data['title']) ||
        first_front_page_item_description(doc.data['section'])
    end

    def description(doc)
      return if doc.data['description']

      if doc.data['section_label']
        description = section_description(doc)
        return description if description
      end

      first_meaningful_paragraph(doc.output, title: doc.data['title'])
    end
  end

  # :post_convert is only available in newer Jekyll versions :(
  Hooks.register [:pages, :documents], :post_render do |doc|
    next unless doc.output_ext == '.html'

    if doc.data['section_fallback_title']
      section_config =
        doc.site.config.dig('collections', doc.data['section_label'].to_s) || {}

      og_title = "#{doc.site.config['title']} | #{section_config['title']}"
      escaped_title = CGI.escapeHTML(og_title)

      doc.output = doc.output.sub(
        /<meta property="og:title" content="[^"]*" \/>/,
        %(<meta property="og:title" content="#{escaped_title}" />)
      )
    end

    description = DescriptionSource.description(doc)
    next if description.to_s.empty?

    escaped_description =
      CGI.escapeHTML(DescriptionSource.plain_text(description))

    doc.output = doc.output.sub(
      /<meta name="description" content="[^"]*" \/>/,
      %(<meta name="description" content="#{escaped_description}" />)
    )
    doc.output = doc.output.sub(
      /<meta property="og:description" content="[^"]*" \/>/,
      %(<meta property="og:description" content="#{escaped_description}" />)
    )
  end
end
