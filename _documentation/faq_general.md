---
title: General
order: 400
category: Frequently Asked Questions
---
1. Some method sources look strange and have t1, t2, etc. used as temporary variables. What's wrong?<br />
The sources file might not be found. Verify that it is in the same folder as the image and the changes.

2. Squeak cannot open the changes file.<br />
Make sure that it has the same base name as the image file and that it is in the same folder. There may also be only one virtual machine running that locks the changes file for write access.