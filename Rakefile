require 'html-proofer'

task :test do
    sh "bundle exec jekyll build"
    opts = {
        :check_html => true,
        :empty_alt_ignore => true,
        :only_4xx => true,
        :ignore_status_codes => [403],
        :url_ignore => [
          "#",
          /^(https?\:\/\/)?doi.acm\.org\/.+$/,
          /^(https?\:\/\/)?(www\.)?youtube\.com\/.+$/,
          /^https?\:\/\/squeak\.org\/(4|5)0/,
          /^(https?\:\/\/)?(shop\.)?spreadshirt\.com\/.+$/,
          /^(https?\:\/\/)?(www\.)?twitter\.com\/.+$/,
          /^(https?\:\/\/)?(www\.)?kickstarter\.com\/.+$/ ],
        :typhoeus => {
          :ssl_verifypeer => false,
          :ssl_verifyhost => 0 }
    }
    HTMLProofer.check_directory('./_site', opts).run
end
