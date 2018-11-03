let Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

let Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

let Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Playlist.prototype.overallRating = function (tracks) {
  let ratingSum = 0;
  for (let i = 0; i < this.tracks.length; i++) {
    ratingSum += this.tracks[i].rating;
  }
  let result = ratingSum / this.tracks.length;
  return result;
}

Playlist.prototype.totalDuration = function (tracks) {
  let duration = 0;
  for (let i = 0; i < this.tracks.length; i++) {
    duration += this.tracks[i].length;
  }
  return duration;
}

let track01 = new Track("Drops of Jupiter", 5, 180);
let playlist01 = new Playlist("Favourites");
let library01 = new Library("My Songs", "Angela");

playlist01.addTrack(track01);
library01.addPlaylist(playlist01);

console.log(library01);
