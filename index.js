var top_btn = document.getElementById('top_btn');
var list_collapse = document.getElementById('list_collapse');
top_btn.addEventListener('click', function() {
  this.classList.toggle('active');
  list_collapse.classList.toggle('show');
  console.log(this.classList);
});

var sw_btn_1 = document.getElementById('sw_btn_1');
var descr_1 = document.getElementById('descr_1');
sw_btn_1.addEventListener('click', function() {
  console.log("__MOUSE__CLICK__1 ");
  descr_1.classList.toggle('descr_show');
});

var sw_btn_2 = document.getElementById('sw_btn_2');
var descr_2 = document.getElementById('descr_2');
sw_btn_2.addEventListener('click', function() {
  console.log("__MOUSE__CLICK__2_2_2__ ");
  descr_2.classList.toggle('descr_show');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('project-wrapper__item');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  slides[slideIndex-1].style.display = 'flex';
}

function swipedetect(el, callback){
  var touchsurface = el,
      swipedir,
      startX,
      startY,
      distX,
      distY,
      threshold = 150,
      restraint = 100,
      allowedTime = 300,
      elapsedTime,
      startTime,
      handleswipe = callback || function(swipedir){};

  touchsurface.addEventListener('touchstart', function(e){
    var touchobj = e.changedTouches[0];
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime();
  }, false);

  touchsurface.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime){
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        swipedir = (distX < 0)? 'left' : 'right';
      }
      else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){
        swipedir = (distY < 0)? 'up' : 'down';
      }
    }
    handleswipe(swipedir);
  }, false);
}

var el = document.getElementById('swipezone');

swipedetect(el, function(swipedir) {
  if (swipedir === 'left') plusSlides(1);
  if (swipedir === 'right') plusSlides(-1);
});

var iwrap = document.getElementById('iwrap');
var iframe = document.getElementById('iframe');
var mode_btn = document.getElementById('mode-button');
var repair_btn = document.getElementById('repair_btn');
repair_btn.addEventListener('click', () => {
  iwrap.style.display = 'flex';
  iframe.src = './projects/repair-design-project/index.html';
  mode_btn.innerText = 'Mobile';
  iframe.style.width = '100%';
});

var theyal_btn = document.getElementById('theyal_btn');
theyal_btn.addEventListener('click', () => {
  iwrap.style.display = 'flex';
  iframe.src = './projects/theyalow/index.html';
  mode_btn.innerText = 'Mobile';
  iframe.style.width = '100%';
});

var back_btn = document.getElementById('back-button');
back_btn.addEventListener('click', () => {
  iwrap.style.display = 'none';
});

mode_btn.addEventListener('click', () => {
  mode_btn.innerText = mode_btn.innerText === 'Desktop' ? 'Mobile' : 'Desktop';
  iframe.style.width = mode_btn.innerText === 'Mobile' ?  '100%' : '768px';
});