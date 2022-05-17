---
title:          Xtreams
img-src:        projects/xtreams.png
href:           https://www.lshift.net/blog/2010/11/29/xtreams-framework-for-squeak/
quick-install: >
    Installer ss
      project: 'MetacelloRepository';
      install: 'ConfigurationOfXtreams'.
    (Smalltalk at: #ConfigurationOfXtreams) project bleedingEdge load
---
A generalized stream/iterator framework providing simple, unified API for
reading from different kinds of sources and writing into different kinds of
destinations (Collections, Sockets, Files, Pipes, etc).
