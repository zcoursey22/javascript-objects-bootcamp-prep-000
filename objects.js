var playlist = {artists: 'song'};

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, {artist: song});
}