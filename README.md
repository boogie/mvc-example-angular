# Angular example

A demo [Angular](http://angularjs.org/) app for my [Client-side MVC talk](https://prezi.com/sxv2t_nambyd/client-side-mvc-backbonemarionette-ember-angular/).

It's for demonstration, I have preferred short and easy to understand code I can present, not perfection.

## Why?

There is [TodoMVC](http://todomvc.com/), but I have found that doesn't answer the questions I had about MVC. This example matches the problems better I had during prototyping our CRM system (admin system for the Prezi Support Team).

## What is it?

The features of this example:
* 2 views with routing: a clock and a search
* There is a navigation menu with 2 tabs for the 2 views, highlights the actual path
* The clock is doing auto-updating, like any status widget on your admin site (you can easily add AJAX call to display something from the server)
* The search is displaying results as you type (you should add a delay and an AJAX call), and also updates the URL so it's bookmarkable

## Installation

You will need [Node.js](http://nodejs.org/) v0.8 (but I recommend v0.10), [Compass](http://compass-style.org/) and [Sass](http://sass-lang.com/). Please make sure you have the latest to avoid problems.

You may also have to install [grunt-cli](https://github.com/gruntjs/grunt-cli), and you will have access to the `grunt` command anywhere on your system:

```bash
sudo npm install -g grunt-cli
```

And if you have them, these are the easy steps for initializing the repository:

```bash
npm install
bower install
grunt server
```

And *voilá*, it will load the page in your default browser. You can run `grunt server` when you want. It will also watch for changes and reload the page in your browser.

## License

You are free to use this code for any purposes.

## Bugfixes, feature requests

Feel free to do pull requests. If the code will remain simple, but will introduce the framework better, they are really welcome.
