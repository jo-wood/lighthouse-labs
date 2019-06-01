/*jshint esversion:6*/

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printDetails: function (details) {
    var itemDetails = "";

    for (var detail in details) {

      var prefix = details[detail],
        prefixOpeningBracket = '(' + details[detail],
        id = 'id',
        name = 'name',
        tracks = 'tracks',
        album = 'album',
        artist = 'artist',
        suffix,
        suffixColon = ": ",
        suffixDash = ' - ',
        suffixSpace = ' ',
        suffixNewLine = '\n',
        suffixTracks = 'track(s)',
        suffixBy = ' by ',
        suffixClosingBracket = ') ';

      switch (detail) {
        case id:
          suffix = suffixColon;
          break;
        case name:
          if ((this.playlists).hasOwnProperty(details[id])) {
            suffix = suffixDash;
          } else if ((this.tracks).hasOwnProperty(details[id])) {
            suffix = suffixBy;
          }
          break;
        case tracks:
          var numTracks = details[detail].length;
          prefix = numTracks + ' ';
          suffix = suffixTracks + suffixNewLine;
          break;
        case artist:
          suffix = suffixSpace;
          break;
        case album:
          prefix = prefixOpeningBracket;
          suffix = suffixClosingBracket + suffixNewLine;
          break;
      }

      itemDetails += prefix + suffix;

    } //for detail in details

    return itemDetails;
  },

  displayListInfo: function (passedObj, passedId) {

    var displayInfo = "";

    // if arg 1 this is for display tracklist and playlists
    if (arguments.length === 1) {
      var additionalInfo = "";
      for (var item in passedObj) {

        additionalInfo += this.printDetails(passedObj[item]);
      } //for item in passed object

      displayInfo = additionalInfo;

    } else if (arguments.length === 2) {

      displayInfo += this.printDetails(passedObj[passedId]);

      specificIdDisplay = passedObj[passedId];

      var playlistsTracks = specificIdDisplay.tracks;

      for (var trackId of playlistsTracks) {
        displayInfo += this.printDetails((this.tracks)[trackId]);
      }
    }

    return displayInfo;
  },

  printPlaylist: function (playlistId) {
    var playlistTrackDetails;
    // if (playlistId == 'p01' || playlistId == 'p02'){
    playlistTrackDetails = this.displayListInfo(this.playlists, playlistId);
    //}
    return playlistTrackDetails;
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    var messsage;
    var currentTracks = (this.playlists)[playlistId].tracks;

    for (var track of currentTracks) {
      if (trackId === track) {
        message = "this track already exists on this playlist!";
        return message;
      } else {
        currentTracks.push(trackId);
        message = trackId + ' was successfully added to ' + playlistId;
        return message;
      }
    }
  }, 

  addTrack: function(name, artist, album){
    var newId = uid();
    this.tracks[newId] = {id: newId, 'name': name, 'artist': artist, 'albmum': album};
    return this.tracks;
  },

  addPlaylist: function(name, playlistFn) {
    var newId = uid();
    this.playlists[newId] = {
      id: newId,
      'name': name
    };
    return this.displayListInfo(this.playlists);
    }

  }; //library object


  function addNew(libObj, listType, obj)  {
    var getAddingFn;
    if (listType === 'playlist'){
      getAddingFn = this.addPlaylist();
    }
    getAddingFn(obj.name, this.displayListInfo)

  }

 console.log(addNew(library, 'playlist', {name: 'Time to get groovy!'}));

// console.log('prints list of all PLAYLISTS:');
// console.log('-------');
// console.log(library.displayListInfo(library.playlists));

// console.log('prints list of all TRACKS:');
// console.log('-------');
// console.log(library.displayListInfo(library.tracks));

// console.log('prints list of all TRACKS in a playlist:');
// console.log('-------');
// console.log(library.printPlaylist('p02'));

// console.log('adds a track to a playlist:');
// console.log('-------');
// console.log(library.addTrackToPlaylist('t02', 'p02'));

// console.log('adds a new track');
// console.log('-------');
// console.log(library.addTrack("I am Dope at Singing", 'Jo The Superstar', 'Debut'));

// console.log('adds a new track');
// console.log('-------');
// console.log(library.addPlaylist('Time to get groovy!', this.displayListInfo));






/*********************** independent fn's, not as object methods  **********************************/


//     tracksObj = library.tracks;
// var playlistObj = library.playlists,

//     var printDetails = function(details){
//       var itemDetails = "";
//
//       for (var detail in details) {
//
//         var prefix = details[detail],
//             prefixOpeningBracket = '(' + details[detail],
//             id = 'id',
//             name = 'name',
//             tracks = 'tracks',
//             album = 'album',
//             artist = 'artist',
//             suffix,
//             suffixColon = ": ",
//             suffixDash = ' - ',
//             suffixSpace = ' ',
//             suffixNewLine = '\n',
//             suffixTracks = 'track(s)',
//             suffixBy = ' by ',
//             suffixClosingBracket = ') ';
//
//         switch (detail){
//           case id:
//             suffix = suffixColon;
//             break;
//           case name:
//             if (playlistObj.hasOwnProperty(details[id])){
//               suffix = suffixDash;
//             } else if (tracksObj.hasOwnProperty(details[id])){
//               suffix = suffixBy;
//             }
//             break;
//           case tracks:
//             var numTracks = details[detail].length;
//             prefix = numTracks + ' ';
//             suffix = suffixTracks + suffixNewLine;
//             break;
//           case artist:
//             suffix = suffixSpace;
//             break;
//           case album:
//             prefix =  prefixOpeningBracket;
//             suffix = suffixClosingBracket + suffixNewLine;
//             break;
//           }
//
//         itemDetails += prefix + suffix;
//
//       }//for detail in details
//
//       return itemDetails;
//
// };//print detail



// var displayListInfo = function (passedObj, passedId) {
//
//   var displayInfo = "";
//
//     if (arguments.length === 1) {
//       var additionalInfo = "";
//         for (var item in passedObj){
//           additionalInfo += printDetails(passedObj[item]);
//         } //for item in passed object
//
//       displayInfo = additionalInfo;
//
//     } else if (arguments.length === 2) {
//
//         displayInfo += printDetails(passedObj[passedId]);
//
//         specificIdDisplay = passedObj[arguments[1]];
//
//         var playlistsTracks = specificIdDisplay.tracks;
//         for (var trackId of playlistsTracks){
//           displayInfo += printDetails(tracksObj[trackId]);
//         }
//       }
//
// return displayInfo;
//
// }; //fn displayListInfo




// var printPlaylist = function (playlistId) {
//   var playlistTrackDetails;
//     if (playlistId == 'p01' || playlistId == 'p02'){
//       playlistTrackDetails = displayListInfo(playlistObj, playlistId);
//     }
//   return playlistTrackDetails;
//
// };//fn printPlaylist




// var addTrackToPlaylist = function (trackId, playlistId) {
//   var messsage;
//   var currentTracks = playlistObj[playlistId].tracks;
//
//   for (var track of currentTracks){
//     if (trackId === track){
//       message = "this track already exists on this playlist!";
//       return message;
//     } else {
//       currentTracks.push(trackId);
//       message = trackId + ' was successfully added to ' + playlistId;
//       return message;
//     }
//   }
//
// }; //addTrackToPlaylist


// console.log('prints list of all PLAYLISTS:');
// console.log('-------');
// console.log(displayListInfo(playlistObj));
//
// console.log('prints list of all TRACKS:');
// console.log('-------');
// console.log(displayListInfo(tracksObj));
//
// console.log('prints list of all TRACKS in a playlist:');
// console.log('-------');
// console.log(printPlaylist('p02'));
//
// console.log('adds a track to a playlist:');
// console.log('-------');
// console.log(addTrackToPlaylist('t02', 'p02'));






// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// var printPlaylists = function () {
//
// }

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// var printTracks = function () {
//
// }

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


// adds an existing track to an existing playlist






// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function (query) {

};