# _plugins/my_custom_filters.rb (for Jekyll)
module Jekyll
  module MyCustomFilters
    def deslugify(input)
      input.split('-').map(&:capitalize).join(' ')
    end
  end
end

Liquid::Template.register_filter(Jekyll::MyCustomFilters)
