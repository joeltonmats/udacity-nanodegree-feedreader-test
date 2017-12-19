# Project Overview

This project is a web-based application that reads RSS feeds. This application has a group of suite  testing, made with [Jasmine](http://jasmine.github.io/).

## Get Started

Just open index.html and see the Jasmine Testing Feedback.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

# How did I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. [X] Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
2. [X] Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
3. [X] Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
4. [X] Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
5. [X] Write a new test suite named `"The menu"`.
6. [X] Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
7. [X] Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
8. [X] Write a test suite named `"Initial Entries"`.
9. [X] Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
10. [X] Write a test suite named `"New Feed Selection"`.
11. [X] Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
12. [X] No test should be dependent on the results of another.
13. [X] Callbacks should be used to ensure that feeds are loaded before they are tested.
14. [X] When complete - all of your tests should pass. 
15. [X] Write a README file detailing all steps required to successfully run the application.
