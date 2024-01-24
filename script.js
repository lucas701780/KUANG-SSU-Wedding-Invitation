
$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    sectionsColor: ['#11b2c'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Last page'],
    onLeave: function (origin, destination, direction) {
      // 在這裡添加你想要執行的代碼，當頁面切換時觸發
      console.log("Leaving section " + origin.index);
      console.log("Entering section " + destination.index);
      console.log("Scrolling " + direction);
      if (destination.index == 0) {
        console.log('DDDD');
        // $("#section1").load(window.location.href + "#section1");
        // location.reload();
       
        document.getElementById('fullscreen-video1').currentTime = 0;
        document.getElementById('fullscreen-video1').play();
        
      }
      else if (destination.index === 1) {
        console.log('456');
        document.getElementById('fullscreen-video2').currentTime = 0;
        document.getElementById('fullscreen-video2').play();
      }
      else if (destination.index === 2) {
        console.log('456');
        document.getElementById('fullscreen-video3').currentTime = 0;
        document.getElementById('fullscreen-video3').play();
      }
    },
    afterLoad: function (origin, destination, direction) {
      console.log('AAAA');

      if (destination.index === 0) {
        console.log('123');
        // stopTypingFunction();
        // $('.typing-text').eq(0).addClass('typing-active');
        // type()
        // myVideo.play();
        // document.getElementById('fullscreen-video1').currentTime = 0;
        // document.getElementById('fullscreen-video1').play();

        

      } else if (destination.index === 1) {
        // console.log('456');
        // document.getElementById('fullscreen-video2').currentTime = 0;
        // document.getElementById('fullscreen-video2').play();

        // stopTypingFunction();
        // type();
        // $('.typing-text').eq(1).addClass('typing-active');

      } else if (destination.index === 2) {

      }
    }
  });
});

const paragraph = document.querySelector('.typing-active');

let lineIndex = 0;
const typingSpeed = 100;
let timeoutId; // 保存 setTimeout 返回的 ID

const textContent = `交往多年的光明與思蒨，竟然終於要結婚了(哈)
給每個曾經看見我們忽胖忽瘦的你、
打打鬧鬧吃吃喝喝講幹話的你、
一起學習合作完成任務的你、
喜怒哀樂共同分享的你、
用愛心及耐心教導及陪伴的你
參與我們成長過程的你。
真的有說不完的感謝，
誠摯地邀請你來見證我們的重要時刻，
無論能否前來，我們都能感受到你的祝福！
这是第三行文本。`;

function type() {

  const currentChar = textContent.charAt(lineIndex);
  paragraph.textContent += currentChar;
  lineIndex++;

  if (lineIndex < textContent.length) {
    timeoutId = setTimeout(type, 100);
  }
}

var myVideo = document.getElementById("video1"); 
    
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 

const videoElement = document.getElementById('fullscreen-video');
const fullscreenButton = document.getElementById('fullscreen-button');

fullscreenButton.addEventListener('click', () => {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome、Safari 和 Opera
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
    }
});



let video=document.getElementById("startvideo");
let videoPlay = video.play ();
videoPlay.then(() => {
}).catch((err) => {

video.muted=true;
video.play ()
})