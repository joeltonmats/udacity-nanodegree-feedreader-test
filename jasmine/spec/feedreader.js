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

    /* This suite is all about the RSS feeds definitions.*/
    describe('RSS Feeds', function () {

        /*----------------------------------------
        This tests to make sure that the allFeeds variable has been defined  and that it is not empty.
         ----------------------------------------*/
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*----------------------------------------
        This tests to make sure that each feed in allFeeds object has a URL defined and that the URL is not empty.
        ----------------------------------------*/
        it('has URL', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });

        /*----------------------------------------
        This tests to make sure that each feed in allFeeds object has a name defined and that the name is not empty.
        ----------------------------------------*/
        it('has Name', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });

    });

    /* The menu test suite */
    describe('The menu', function () {

        /*----------------------------------------
        This tests to make sure that the menu element is hidden by default.
        ----------------------------------------*/
        it('start hidden', function () {
            expect($('body.menu-hidden').length).toEqual(1);
        });

        /*----------------------------------------
        This tests to make sure that the menu changes visibility when the menu icon is clicked
        ----------------------------------------*/
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

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /*----------------------------------------
        This tests to make sure that  when the loadFeed function is called and completes its work, 
        there is at least a single .entry element within the .feed container.
        ----------------------------------------*/
        it('has at least a single entry', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* New Feed Selection test suite */
    describe('New Feed Selection', function () {

        var startFeedElementSelection;

        beforeEach(function (done) {
            loadFeed(0, function () {
                startFeedElementSelection = $('.feed').html();
                console.log('startFeedElementSelection', startFeedElementSelection);
                loadFeed(1, function () {
                    done();
                });
            });
        });

        /*----------------------------------------
        Make sure when new feed is loaded by loadFeed function the content actually changes. 
        ----------------------------------------*/
        it("changes its loaded content", function (done) {
            var currentElementSelection = $('.feed').html();
            expect(startFeedElementSelection).not.toBe(currentElementSelection);
            done();
        });
    });
}());
