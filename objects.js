var playlist = {artists: 'song'};

function updatePlaylist(obj, artist, song) {
  return Object.assign(playlist, obj, {artist: song});
}