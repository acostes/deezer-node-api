# Deezer API wrapper
[![Build pass](https://travis-ci.org/acostes/deezer-node-api.svg)](https://travis-ci.org/acostes/deezer-node-api?branch=master)

This is *Nodejs* wrapper for the [Deezer API](http://developers.deezer.com/api) that return promises.

## Installation
    npm install deezer-node-api --save

## Usage example
``` JavaScript
var Deezer = require('deezer-node-api');
var dz = new Deezer();

// Get info for the given album id
dz.getAlbum(302127).then(function(album) {
    console.log(album);
});

// Find all the tracks that match the query 'eminem'
dz.findTracks('eminem').then(function(result) {
    console.log(result);
});

// Find all the tracks from the album 'good things'
dz.findTracks({album: 'good things'}).then(function(result) {
    console.log(result);
});
```

## Available methods
* getAlbum(albumId)
* getArtist(artistId)
* findTracks(options, index, order)
* findAlbums(query, index)
* findArtists(query, index)

## Testing
    npm test
