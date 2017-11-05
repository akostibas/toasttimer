# toasttimer
A timer application for Toastmasters.

# Try it out

Currently deployed here: http://dev.toasttimer.com

# Development

If you want to help improve the Toast Timer, you'll need the following tools:

* Node & NPM (`brew install node`)

Then:
1. Clone this repository.
1. Make your changes.
1. Test your changes locally with `npm start`.
1. Open a Pull Request!

If you want to host your own copy if it, I've included some simple Terraform configs that will set it up on S3.
At a minimum, you'll need to modify the Route53 domain name and zone id.

# Origin Story
The genesis for this project was the discovery that there are no reasonably priced Toastmasters timers available. My club, [Golden Gate Toastmasters](https://www.goldengatetoastmasters.com), used to have a hardware device, but it evenutally broke. I did a quick search and found that our device would cost $450 on Amazon!
![An expensive, crappy timer.](https://github.com/akostibas/toasttimer/raw/master/docs/images/crappytimer2.png "An expensive crappy timer")

There are cheaper options. For a mere $100 you can get this stoplight looking thing... timer _not_ included:
![Another crappy timer.](https://github.com/akostibas/toasttimer/raw/master/docs/images/crappytimer1.png "A cheaper crappy non-timer")

This led me to look for iOS apps that we might run on an iPad. Nothing came up! So, here I'm making a simple web app that can be run on an iPad, and configured as necessary.
