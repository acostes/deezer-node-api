# Deezer API wrapper
[![NPM version](https://img.shields.io/npm/v/deezer-node-api.svg?style=flat-square)](https://www.npmjs.com/package/deezer-node-api)
[![Build pass](https://api.travis-ci.org/acostes/deezer-node-api.svg?branch=master)](https://travis-ci.org/acostes/deezer-node-api?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/acostes/deezer-node-api/badge.svg?branch=master)](https://coveralls.io/github/acostes/deezer-node-api?branch=master)

This is *Nodejs* wrapper for the [Deezer API](http://developers.deezer.com/api) that return promises.

## Installation
    npm install deezer-node-api --save

## Usage example
```js
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
