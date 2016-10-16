var test = require('unit.js');

var Deezer = require('../');
var dz = new Deezer();

describe('Load module', function() {
    it('Load', function() {
        test.object(dz)
            .isInstanceOf(Deezer)
    });
});

describe('Album', function() {
    it('Get album', function(done) {
        dz.getAlbum(302127).then(function(album) {
            test
                .object(album)
                    .hasProperty('id', 302127)
                    .hasProperty('title')
                    .hasProperty('upc')
                    .hasProperty('link')
                    .hasProperty('share')
                    .hasProperty('cover')
                    .hasProperty('cover_small')
                    .hasProperty('cover_medium')
                    .hasProperty('cover_big')
                    .hasProperty('cover_xl')
                    .hasProperty('genre_id')
                    .hasProperty('genres')
                    .hasProperty('label')
                    .hasProperty('nb_tracks')
                    .hasProperty('duration')
                    .hasProperty('fans')
                    .hasProperty('rating')
                    .hasProperty('release_date')
                    .hasProperty('record_type')
                    .hasProperty('available')
                    .hasProperty('tracklist')
                    .hasProperty('explicit_lyrics')
                    .hasProperty('contributors')
                    .hasProperty('artist')
                    .hasProperty('tracks');
            test
                .object(album.genres)
                    .hasProperty('data');
            test.object(album.contributors);
            test.object(album.artist);
            test
                .object(album.tracks)
                    .hasProperty('data');

        }).finally(done)
    });
});

describe('Artist', function() {
    it('Get artist', function(done) {
        dz.getArtist(27).then(function(album) {
            test
                .object(album)
                    .hasProperty('id', 27)
                    .hasProperty('name')
                    .hasProperty('link')
                    .hasProperty('share')
                    .hasProperty('picture')
                    .hasProperty('picture_small')
                    .hasProperty('picture_medium')
                    .hasProperty('picture_big')
                    .hasProperty('picture_xl')
                    .hasProperty('nb_album')
                    .hasProperty('nb_fan')
                    .hasProperty('radio')
        }).finally(done)
    });
});