source "https://rubygems.org"

ruby "3.2.4"

# Core dependencies
gem "jekyll", "~> 4.3.3"
gem "bundler"

# Standard Jekyll plugins
gem "jekyll-feed"
gem "jekyll-sitemap"
gem "jekyll-paginate-v2"
gem "jekyll-seo-tag"
gem "jekyll-toc"
gem "jekyll-archives"
gem "jekyll-email-protect"
gem "jekyll-twitter-plugin"
gem "jekyll-imagemagick"
gem "jekyll-link-attributes"
gem "jemoji"
gem "jekyll-minifier"
gem "jekyll-get-json"

# Special plugins (from GitHub)
gem "jekyll-scholar", git: "https://github.com/inukshuk/jekyll-scholar"
gem "jekyll-jupyter-notebook", git: "https://github.com/nteract/jekyll-jupyter-notebook"

# Optional: for GitHub Pages compatibility (not used when using custom GitHub Actions)
# gem "github-pages", group: :jekyll_plugins

# Required for GitHub Actions deployment using `peaceiris/actions-gh-pages`
group :jekyll_plugins do
  gem "webrick"  # needed for Ruby 3.x with Jekyll
end
