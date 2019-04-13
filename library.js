let library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

let playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

let track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

playlist.prototype.addToLibrary = function(library) {
  library.playlists.push(this);
}

playlist.prototype.overallRating = function() {
  let totalRating = 0;
  let tracksCount = 0;
  this.tracks.forEach((track) => {
    totalRating += track.rating;
    tracksCount += 1;
  });
  return (totalRating / tracksCount);
}

playlist.prototype.totalDuration = function() {
  let totalDuration = 0;
  this.tracks.forEach((track) => {
    totalDuration += track.length;
  });
  return totalDuration;
}

track.prototype.addToPlaylist = function(playlist) {
  playlist.tracks.push(this);
}

var firstLibrary = new library("firstLibrary", "Kapish");
var kapPlaylist = new playlist("Kap");
kapPlaylist.addToLibrary(kapPlaylist);
var firstSong = new track("Some Rnadom Song", 5, 240);
firstSong.addToPlaylist(kapPlaylist);
console.log(firstLibrary);
console.log(kapPlaylist);
console.log(firstSong);
console.log(kapPlaylist.overallRating());
console.log(kapPlaylist.totalDuration())