source "https://rubygems.org"

# Ruby version (choose ONE of these options):
# Option 1: If using Ruby 3.3.4 locally:
ruby "~> 3.3.0"  # Will work with 3.3.4

# Option 2: If you can upgrade to Ruby 3.4.x:
# ruby "~> 3.4.0"

# Core Jekyll (works with both Ruby 3.3 and 3.4)
gem "jekyll", "~> 4.3.3"

# Essential plugins (GitHub Pages compatible)
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-toc", "~> 0.8.0"  # Pinned to stable version
  
  # Optional but recommended:
  gem "jekyll-sitemap"
  gem "jekyll-optional-front-matter"
end

# Development-only gems
group :development do
  gem "webrick"  # Needed for Ruby 3.0+ local serving
end