var playlist = {artist: 'song'};

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, {obj[artist]: song});
}