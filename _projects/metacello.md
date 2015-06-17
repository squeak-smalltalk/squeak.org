---
title:          Metacello
img-src:        projects/metacello.png
img-border:     true
href:           https://github.com/dalehenrich/metacello-work#squeak
quick-install: >
    Installer swasource
      project: 'SwaUtilities';
      addPackage: 'ConfigurationOfMetacello';
      install.

    "Bootstrap Metacello Preview, using mcz files (#'previewBootstrap' symbolic version"
    
    ((Smalltalk at: #ConfigurationOfMetacello) project version: #'previewBootstrap') load.
---
A package management system for Squeak/Smalltalk.