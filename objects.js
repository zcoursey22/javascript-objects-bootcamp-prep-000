var playlist = {artist: 'song'};

function updatePlaylist(obj, artistName, song) {
  return Object.assign({}, obj, {artistName: song});
}