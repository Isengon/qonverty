const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+'px');

window.addEventListener('resize', function() {
  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', vh+'px');
});



const setIntroBgPosition = () => {
  var introBlock = document.getElementById('intro')

  if (document.body.clientWidth <= 1030) {
    introBlock.style.backgroundPosition = `calc(-450px) calc(50% + 150px)`
  } else if (document.body.clientWidth > 1030) {
    const containerPaddingLeft = (document.body.clientWidth - 1000) / 2
    introBlock.style.backgroundPosition = `calc(${containerPaddingLeft}px - 450px) calc(50% + 150px)`
  }
}
setIntroBgPosition()

window.addEventListener("resize", function() {
  setIntroBgPosition()
});




let currentString = 1

setInterval(() => {
  document.getElementById(`stringOption${currentString}`).classList.remove("active");

  if (currentString === 3) {
    currentString = 1
  } else {
    currentString = currentString + 1
  }

  document.getElementById(`stringOption${currentString}`).classList.add("active");
}, 4000);