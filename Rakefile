require 'html-proofer'

task :test do
    sh "bundle exec jekyll build"
    opts = {
        :check_html => true,
        :empty_alt_ignore => true,
        :only_4xx => true,
        :url_ignore => [
          "#",
          /^(https?\:\/\/)?(doi|dl).acm\.org\/.+$/,
          /^(https?\:\/\/)?(www\.)?youtube\.com\/.+$/,
          /^https?\:\/\/squeak\.org\/(4|5)0/,
          /^(https?\:\/\/)?(shop\.)?spreadshirt\.com\/.+$/,
          /^(https?\:\/\/)?(www\.)?twitter\.com\/.+$/,
          /^(https?\:\/\/)?(www\.)?kickstarter\.com\/.+$/,
          /^(https?\:\/\/)?onlinelibrary.wiley\.com\/.+$/,
          /^(https?\:\/\/)?(www\.)?opensource\.org\/.+$/,
          /^(https?\:\/\/)?(www\.)?doi\.org\/10\.5381\/jot.+$/,
          /^(https?\:\/\/)?(www\.)?doi\.org\/10\.1145\/.+$/,
          /^(https?\:\/\/)?(www\.)?portal\.acm\.org\/citation\.cfm.+$/,
          /^(https?\:\/\/)?(www\.)?github\.com\/search\?.+$/,
          /^(https?\:\/\/)?(www\.)?aidaweb\.si\/.*$/,
          /^(https?\:\/\/)?(www\.)?learntechlib\.org\/p\/.+$/ ],
        :typhoeus => {
          :ssl_verifypeer => false,
          :ssl_verifyhost => 0 }
    }
    HTMLProofer.check_directory('./_site', opts).run
end
