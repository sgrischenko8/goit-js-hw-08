import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TrottlingTimeupdate = function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
};

player.on('timeupdate', throttle(TrottlingTimeupdate, 1100));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
