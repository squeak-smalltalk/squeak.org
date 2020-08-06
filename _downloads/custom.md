---
title:      Custom Installation
order:      3
cols:       6
category:   Advanced
---
The Squeak/Smalltalk programming system consists of three parts:

  - a virtual machine for your platform,
  - both image and changes files of a particular version, and
  - a sources file for the particular image file.

The image, changes, and sources files should be kept in the same folder. The base name of the image file must match the one of the changes file.

<small><small>
**Windows/macOS:** You can either drag the image file onto the virtual machine or double click the virtual machine and a window will appear asking you where the image is.
</small></small>

<small><small>
**Linux:** Make sure that you have 32-bit libraries and X11 installed, and that the `squeak.sh` script is executable. Run the script with the image file as a parameter.
</small></small>
