---
title:  Advanced
order:  2
cols:   12
---
The Squeak/Smalltalk programming system consists of three parts to get up and running: (1) a virtual machine for your platform, (2) both image and changes files of a particular version, and (3) a sources file for the particular image file.

The image file, the changes file, and the sources file should be kept in the same folder. The base file name of the image file must match the one of the changes file.

**Mac/Windows** You can either drag the image onto the virtual machine or double click the virtual machine and a window will appear asking you where the image is.

**Linux** Check you have: 1) X Windows (i.e. X11) installed; 2) 32-bit libraries installed; 3) file permissions have been addressed. Put the squeak script found in the top directory on the command line followed by the path to the image.
