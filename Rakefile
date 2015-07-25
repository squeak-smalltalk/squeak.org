require 'html/proofer'

task :test do
    sh "bundle exec jekyll build"
    HTML::Proofer.new("./_site", {
        :empty_alt_ignore => true,
        :href_ignore => ["#", /^(https?\:\/\/)?(www\.)?youtube\.com\/.+$/],
        :only_4xx => true,
        :check_html => true,
        :typhoeus => { 
            :timeout => 3 }
    }).run
end