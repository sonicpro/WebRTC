let stream;
let interval;
const video = window.navigator.getUserMedia({ "video": true }, (vid) =>{
  stream = vid;
  interval = startTimer();
}, logError);

function startTimer() {
  return setTimeout(() => {
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    stream = null;
    clearInterval(interval);
    console.log('stopped');
  }, 5000);
}

function logError(error) {
    console.log(error.name + ": " + error.message);
}
