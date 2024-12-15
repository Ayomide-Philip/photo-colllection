const availableSong = ["Duffel-Bag.mp3", "mood.mp3", "Stronger.mp3"];

const randomNumber = Math.floor(Math.random() * availableSong.length);

console.log(randomNumber);

console.log(`./audio/${availableSong[randomNumber]}`);

var song = new Audio(`./public/audio/${availableSong[randomNumber]}`);
song.autoplay = true;
window.addEventListener("click", function (events) {
  if (song.paused) {
    song.play();
  } else {
    console.log("Song is playing");
  }
});
