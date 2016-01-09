require 'html/proofer'

task :test do
    sh "bundle exec jekyll build"
    sh "rm -rf ./_site/posts"
    HTML::Proofer.new("./_site", {
       :empty_alt_ignore => true,
       :href_ignore => ["#", /^(https?\:\/\/)?(www\.)?youtube\.com\/.+$/],
       :parallel => {:in_processes => 4},
       :only_4xx => true,
       :check_html => true,
       :typhoeus => { 
           :timeout => 3 }
    }).run
end
