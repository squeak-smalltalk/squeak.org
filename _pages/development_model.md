---
layout:     default
title:      "The Squeak Development Process"
permalink:  /development_model/
---
{::options parse_block_html="true" /}

The Squeak Development Process tries to enable the community at large to improve Squeak, the core of the system and its supporting libraries. The process builds on few basic ideas: the use of Monticello as the primary source code management system, free access for the developers to the main repositories, an incremental update process for both developers and users of Squeak.

<div class="row">
<div class="col-md-6 col-lg-6">

## Monticello  Repositories

The main development repository is **"[The Trunk](http://source.squeak.org/trunk.html)"**:

* <http://source.squeak.org/trunk>

New code will be committed here, the repository is world-readable and writable for the group of core developers.

The main contribution repository is **"[The Inbox](http://source.squeak.org/inbox.html)"**:

* <http://source.squeak.org/inbox>

This repository is intended as dropbox.  It is world-readable *and* world-writable. Everyone is encouraged to contribute code here. Code that the community accepts as 
fitting after discussion will be moved to *trunk*. 

If contributions do not work or are deemed unfitting, they are moved to **"[The Treated Inbox](http://source.squeak.org/treated)"** for future reference:

* <http://source.squeak.org/treated>


## Developer access

[The board](/board/) manages developer access to the repositories at <http://source.squeak.org/>. Very active contributers can ask the board for direct write acces to the *trunk*. Anybody can suggest other contributers for *trunk* access.

## License

All code submitted to the repositories must be licensed under [the MIT license](https://opensource.org/licenses/MIT).

</div>
<div class="col-md-6 col-lg-6">

## Rules of Engagement

Here are some useful guidelines:

* **Merge often**. In particular when you pick up work and right before you intend to commit.

* **Exercise caution**. This is a running system and breaking it needlessly is generally frowned upon.

* **Restrain yourself**. Getting developer access doesn’t mean you are free to put in every pet extension you always wanted to have without discussion.

* **If in doubt, ask**. This is the corollary to the restrain yourself rule. You’re not under pressure to ship a product, so you have the time to send a note saying “hey, I’m planning to fix this old issue and it may have some side effect here or there. Anyone having a problem with that?”[^1]

* **You break it, you fix it**. If you change something you are generally expected to take care of the consequences, though there are some exceptions. If in doubt, ask.

* **Do good and talk about it**. When you’re done with whatever it is you’ve been working on let people know about it. It can be as short as a note to Squeak-dev saying “hey, some of you might care that I’ve fixed the long standing bug with xyz. Update and enjoy”

* **Unit Testing**. Unit tests are an essential part of maintaining the reliability of our releases. New units tests are always welcome. Keep in mind that a unit test should take as little time to run as possible.  Maintaining the reliability of Squeak is always easier when the tests are all green: if you break something the appearance of a new failure or error is immediately obvious and the cause is more easily found. To that end fixes for failures or errors are extremely valuable and please avoid submitting changes that cause new failures or errors.


</div>

[^1]: Squeak-dev exception: Any response from any non-developer can be entirely ignored in this context.
