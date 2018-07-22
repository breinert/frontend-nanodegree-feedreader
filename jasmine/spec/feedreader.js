/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('has url', function() {
            for (let i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });


        it('has name', function() {
            for (let i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });

    describe('The menu', function() {
     

        it('menu element hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
   
        it('menu changes visibility', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        it('loadfeed completes its work', function() {
            beforeEach(function(done) {
                loadFeed(0, done);
            });
            expect($('.feed').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function() {
            
        it('content changes on new feed load', function() {
            const currentFeed = $('.feed');
            beforeEach(function(done) {
                loadFeed(0, done);
            });
            expect($('.feed')).not.toBe(currentFeed);
        });
    });
}());
