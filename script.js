const buttonVideoPlayer = document.getElementById('buttonVideoPlayer');
const bgMusic = document.getElementById('fullscreen-video4');

$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    sectionsColor: ['#11b2c'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['0', '1', '2'],
    onLeave: function (origin, destination, direction) {
      if (destination.index == 0) {
        document.getElementById('fullscreen-video1').currentTime = 0;
        document.getElementById('fullscreen-video1').play();
      }
      else if (destination.index === 1) {
        document.getElementById('fullscreen-video2').currentTime = 0;
        document.getElementById('fullscreen-video2').play();
      }
    },
    afterLoad: function (origin, destination, direction) {
      if (destination.index === 0) {
        // 禁止滚动
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        console.log('destination.index:', destination.index);
      } else if (destination.index === 1) {
        console.log('destination.index:', destination.index);
      }
    }
  });


});


document.body.addEventListener('click', function () {
  console.log('sdaf');
  var audio = document.getElementById('myAudio');
  // 尝试播放音频
  audio.play().catch(e => console.error(e));
  // 移除监听器，确保只尝试播放一次
  this.removeEventListener('click', arguments.callee);
});

function hideOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.style.animation = 'fadeOut 1s';

  overlay.addEventListener('animationend', function () {
    overlay.style.display = 'none';

    document.getElementById('fullscreen-video1').currentTime = 0;
    document.getElementById('fullscreen-video1').play();

    // 启用滚动
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
  });
}


