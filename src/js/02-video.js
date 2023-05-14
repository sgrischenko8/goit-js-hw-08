import Vimeo from '@vimeo/player';
import Player from '@vimeo/player';

import { throttle } from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function (currentTime) {
  // console.log(currentTime.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1500));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
