"use strict";

var rp = require('request-promise');

function Deezer() {
    this.apiUrl = 'https://api.deezer.com/';
}

Deezer.prototype.getAlbum = function(id) {
    var url = 'album/' + id;
    return rp({url: this.apiUrl + url, json:true});
}

Deezer.prototype.getArtist = function(id) {
    var url = 'artist/' + id;
    return rp({url: this.apiUrl + url, json:true});
}

module.exports = Deezer;