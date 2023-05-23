const header = document.querySelector('header.header')

document.addEventListener('scroll', () => {
  const scroll = window.pageYOffset

  if (scroll !== 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

let slideIndex = 1
const slides = document.querySelectorAll('.reviews_slider_banner_inside')

const btnBack = document.querySelector('.btn_arrow.left')
const btnNext = document.querySelector('.btn_arrow.right')

btnBack.addEventListener('click', () => prevSlide())
btnNext.addEventListener('click', () => nextSlide())

const nextSlide = () => {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0
  } else {
    slideIndex += 1
  }

  setSlides(slideIndex)
}

const prevSlide = () => {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1
  } else {
    slideIndex -= 1
  }

  setSlides(slideIndex)
}

console.log(slides)

const setSlides = (index) => {
  slides.forEach((slide) => {
    slide.classList.remove('inactive', 'left', 'right', 'active')
    slide.classList.add('inactive')
  })

  if (index === slides.length - 1) {
    slides[0].classList.add('inactive', 'right')
    slides[index - 1].classList.add('inactive', 'left')
  } else if (index === 0) {
    slides[index + 1].classList.add('inactive', 'right')
    slides[slides.length - 1].classList.add('inactive', 'left')
  } else {
    slides[index + 1].classList.add('inactive', 'right')
    slides[index - 1].classList.add('inactive', 'left')
  }

  slides[index].classList.remove('inactive')
  slides[index].classList.add('active')
}
