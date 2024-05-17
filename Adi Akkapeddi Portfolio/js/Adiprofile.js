console.log("Hi welcome to Adi Akkapeddi's profile")
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'adinavtoggle') {
      x.className += 'responsive';
    } else {
      x.className = 'adinavtoggle';
    }
  }