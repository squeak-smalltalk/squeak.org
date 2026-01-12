# Squeak.org [![Build Status](https://github.com/squeak-smalltalk/squeak.org/actions/workflows/build.yml/badge.svg)](https://github.com/squeak-smalltalk/squeak.org/actions/workflows/build.yml)

## How to add your Squeak project
If you want your project to be listed on https://squeak.org/projects/, simply open a [Pull Request](https://help.github.com/articles/using-pull-requests/) and add your project's logo to [img/projects](img/projects) as well as a markdown file to [_projects](_projects). We will then review your description and logo, which will usually result in a quick accept and update of our website.

For example, the markdown file *myproject.md* should look like this:

```markdown
---
title:      My Project
img-src:    projects/myprojectlogo.png
href:       https://www.myprojectwebsite.com
---
Brief description about my project goes here.
```

The logo should have the size of 200x200 pixels. The description should be in English and consist of about 50 words or less. Please choose a distinctive name for the files (i.e. markdown and logo). Double-check with the [existing projects](_projects).

## Building Locally

1. Install Ruby using [rbenv](https://rbenv.org/):
   ```bash
   rbenv install 2.7.8
   ```

2. Initialize Ruby environment:
   ```bash
   eval "$(rbenv init -)"
   ```

3. Install dependencies:
   ```bash
   bundle install
   ```

4. Build and serve locally:
   ```bash
   bundle exec jekyll serve
   ```
   
   Then visit http://localhost:4000 in your browser. Changes to files will auto-rebuild.

> [!NOTE]
> If you are seeing errors about incompatible gems during building, you might have installed conflicting packages on your machine. To ignore them, run the following in your current shell before performing the above steps:
> 
> ```bash
> unset GEM_HOME GEM_PATH
> unset rvm_bin_path
> ```
