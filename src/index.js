"use strict";

var rp = require('request-promise');

class Deezer {
    constructor() {
        this.apiUrl = 'https://api.deezer.com/';
    }

    getAlbum(id) {
        var url = 'album/' + id;
        return rp({url: this.apiUrl + url, json:true});
    }

    getArtist(id) {
        var url = 'artist/' + id;
        return rp({url: this.apiUrl + url, json:true});
    }
}

module.exports = Deezer;