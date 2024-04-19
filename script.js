const form = document.querySelector('.form')
const yourName = form.querySelector('.name')
const email = form.querySelector('.email')
const task = form.querySelector('.task')
const consultation = form.querySelector('.consultation')
const rate = form.querySelector('.rate')
const marks = form.querySelector('.marks')

const removeError = (input) => {
    const parent = input.parentNode

    if (parent.classList.contains('error')){
        parent.querySelector('.error-text').remove()
        parent.classList.remove('error')
    }
}

const removeEmailError = (input) => {
    const parent = input.parentNode

    parent.querySelector('.error-text').remove()
    parent.classList.remove('error')
}

const showError = (input, text) => {
    const parent = input.parentNode
    const errorText = document.createElement('label')

    errorText.classList.add('error-text')
    errorText.textContent = text

    parent.classList.add('error')

    parent.append(errorText)
}


const validation = () => {
    let relult = true

    const inputs = form.querySelectorAll('input,textarea')

    for (const item of inputs) {
        removeError(item)
        if (item.value === ''){
            showError(item, 'Обязательное поле')
            relult = false
        } 
    }

    return relult
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (validation()) {
    alert('Форма принята')
    console.log('name: ', yourName.value)
    console.log('email: ', email.value)
    console.log('task: ', task.value)
    console.log('consultation: ', consultation.checked)
    console.log('rate: ', rate.checked)
    console.log('marks: ', marks.checked)
  }
})


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    
    const id = anchor.getAttribute('href').substr(1)
    
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const imageList = document.querySelector(".cards-slider-wrapper .cards-list")
const slideButtons = document.querySelectorAll(".cards-slider-wrapper .slide-button")
const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth

slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1
        const scrollAmount = imageList.clientWidth * direction
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })
})