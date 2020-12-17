// adaptive position of the intro block background
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



// dynamic change of text in a block
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



// form processing
let form = document.getElementById('form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("form")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      window.location.href = 'http://127.0.0.1:5500/#connect';
      const formBanner = document.getElementById('formBanner')
      formBanner.classList.add('active')
      const usernameInput = document.getElementById('usernameInput')
      usernameInput.value = ''
      setTimeout(() => {
        //formBanner.classList.remove('active')
      }, 5000)
    });
});


