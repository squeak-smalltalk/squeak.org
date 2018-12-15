---
title:          Seaside
img-src:        projects/seaside.png
href:           https://github.com/SeasideSt/Seaside
quick-install: >
    "For Squeak >= 5.2"
    Installer ensureRecentMetacello.
    (Smalltalk at: #Metacello) new
        baseline:'Seaside3';
        repository: 'github://SeasideSt/Seaside:master/repository';
        load
quick-install-notes: >
    See <a href="https://github.com/SeasideSt/Seaside#install-in-squeak">the Github README</a> for more detailed installation instructions.
---
A layered set of abstractions over HTTP and HTML, that let you build highly interactive web applications.
