/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {

        /* it tests to make sure that the allFeeds variable has been defined 
         * and that it is not empty. */

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('has URL', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });


        /* Loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has Name', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });

    });

    /* The menu test suite */
    describe('The menu', function () {

        /* TODO: Write a test that ensures the menu element is
          * hidden by default. You'll have to analyze the HTML and
          * the CSS to determine how we're performing the
          * hiding/showing of the menu element.
          */
        it('start hidden', function () {
            expect($('body.menu-hidden').length).toEqual(1);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('is visible when menu icon is clicked', function () {
            spyOn($('.menu-icon-link'), 'click');

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });



    /* Initial Entries test suite */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
* function is called and completes its work, there is at least
* a single .entry element within the .feed container.
* Remember, loadFeed() is asynchronous so this test will require
* the use of Jasmine's beforeEach and asynchronous done() function.
*/
    });



    /* New Feed Selection test suite */
    describe('New Feed Selection', function () {
        /* TODO: Write a test that ensures when a new feed is loaded
           * by the loadFeed function that the content actually changes.
           * Remember, loadFeed() is asynchronous.
           */
    });


}());
