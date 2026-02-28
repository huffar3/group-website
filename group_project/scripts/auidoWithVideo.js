/*
Developed by: Garrett
Date: 28/2026
Purpose: Responsive Audio Loop
*/

const playlist = [
  "Media/track1.mp3",
  "Media/track2.mp3",
  "Media/track3.mp3"
];

let index = 0;
const bg = document.getElementById('bgMusic');
const vid = document.getElementById('myVideo');

if (bg) {
  bg.src = playlist[index];
  

  bg.addEventListener('ended', () => {
    index++;
    if (index >= playlist.length) {
      index = 0; 
    }
    bg.src = playlist[index];
    bg.play();
  });
}

if (vid && bg) {
  vid.addEventListener('play', () => {
    bg.pause();
  });

  vid.addEventListener('ended', () => {
    bg.play();
  });
}
