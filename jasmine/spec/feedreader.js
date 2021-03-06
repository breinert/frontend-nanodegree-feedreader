/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    //First test suite
    describe('RSS Feeds', function() {
        //ensure that the RSS feeds are defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //ensure that the RSS feeds have a url
        it('has url', function() {
            for (let i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        //ensure that the RSS feeds have a name
        it('has name', function() {
            for (let i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });
    //second test suite
    describe('The menu', function() {

        //ensure that the menu is hidden by default
        it('menu element hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //ensure that the menu changes visability on click, and then back on second click
        it('menu changes visibility', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    //third test suite
    describe('Initial Entries', function() {

        //ensure that there is an entry in the RSS feed after the page is loaded
        beforeEach(function(done) {
            loadFeed(0, done);
            done;
        });
        it('loadfeed completes its work', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });
    //fourth test suite
    describe('New Feed Selection', function() {
        let newFeed =[];

        //ensure that the RSS feed changes on a new feed load
        beforeEach(function() {
            loadFeed(0, function(done) {
                newFeed.push($('.feed').html());
                loadFeed(1, done);
                done;
            });
            newFeed.push($('.feed').html());
            console.log(newFeed);
        });
        it('content changes on new feed load', function() {
            expect(newFeed[0]).not.toBe(newFeed[1]);
        });
    });
}());
