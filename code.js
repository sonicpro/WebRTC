let stream;
let interval;
window.navigator.mediaDevices.getUserMedia({ "video": true })
  .then((vid) =>{
    stream = vid;
    interval = startTimer();
  })
  .catch(logError);

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
