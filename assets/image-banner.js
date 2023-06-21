function loadVideoByDevice() {
  var device = "mobile";
  if (window.innerWidth > 768) {
    device = "desktop";
  }

  var videos = document.querySelectorAll('.' + device + ' .video');
  videos.forEach(function(video) {
    var source = video.querySelector('source');
    var dataSrc = source.getAttribute('data-src');
    if (source.getAttribute('src') == null) {
      source.setAttribute('src', dataSrc);
      video.load();
    }
  });
}

loadVideoByDevice();

window.onresize = function() {
  loadVideoByDevice();
};