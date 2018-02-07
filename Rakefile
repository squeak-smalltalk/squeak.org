require 'html-proofer'

task :test do
    sh "bundle exec jekyll build"
    sh "rm -rf ./_site/posts"
    opts = {
        :check_html => true,
        :empty_alt_ignore => true,
        :only_4xx => true,
        :url_ignore => [
          "#",
          /^(https?\:\/\/)?(www\.)?youtube\.com\/.+$/,
          /^http\:\/\/squeak\.org\/(4|5)0/,
          /^(https?\:\/\/)?(shop\.)?spreadshirt\.com\/.+$/ ],
        :typhoeus => {
          :ssl_verifypeer => false,
          :ssl_verifyhost => 0 }
    }
    HTMLProofer.check_directory('./_site', opts).run
end
