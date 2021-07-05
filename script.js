const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navEl = document.getElementById('nav')
const navLinks = document.getElementById('navbar-links')


toggleButton.addEventListener('click', () => {
    navEl.classList.toggle('active')
    navLinks.classList.toggle('active')
})


const listItems = document.querySelectorAll('.list-item')
const simpleLi = document.querySelector('.simple')
const speedyLi = document.querySelector('.speedy')
const easyLi = document.querySelector('.easy')
const changeContainer = document.getElementById('change')


simpleLi.addEventListener('click', ()=> {
    listItems.forEach(item => item.classList.remove('selected'))
    simpleLi.classList.add('selected')
    changeContainer.innerHTML = `
    <div class="about reverse">
      <h1>Bookmark in one click</h1>
      <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.
      </p>
      <button class="btn">More info</button>
    </div>
    <div class="illustration">
      <img src="images/illustration-features-tab-1.svg" alt="illustration-hero" class="illustration-image">
      <div class="blue-background second"></div>
    </div>
    `
})

speedyLi.addEventListener('click', ()=> {
    listItems.forEach(item => item.classList.remove('selected'))
    speedyLi.classList.add('selected')
    changeContainer.innerHTML = `
    <div class="about reverse">
      <h1>Intelligent search</h1>
      <p>
      Our powerful search feature will help you find saved sites in no time at all. 
      No need to trawl through all of your bookmarks.
      </p>
      <button class="btn">More info</button>
    </div>
    <div class="illustration">
      <img src="images/illustration-features-tab-2.svg" alt="illustration-hero">
      <div class="blue-background second third"></div>
    </div>
    `
})

easyLi.addEventListener('click', ()=> {
    listItems.forEach(item => item.classList.remove('selected'))
    easyLi.classList.add('selected')
    changeContainer.innerHTML = `
    <div class="about reverse">
      <h1>Share your bookmarks</h1>
      <p>
      Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.
      </p>
      <button class="btn">More info</button>
    </div>
    <div class="illustration">
      <img src="images/illustration-features-tab-3.svg" alt="illustration-hero">
      <div class="blue-background second third"></div>
    </div>
    `
})

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

const sumbitBtn = document.getElementById('contact-submit')
const inpObj = document.getElementById("email");
const errorIc = document.querySelector('.error-icon')
const messageV = document.querySelector('.message')

function myFunction() {
    
    if (!inpObj.checkValidity()) {
      errorIc.style.display = 'block'
      messageV.style.display = 'block'
    } else if (inpObj.checkValidity()) {
        errorIc.style.display = 'none'
        messageV.style.display = 'none'
    }
}

inpObj.addEventListener('input', myFunction)
