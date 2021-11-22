const upBtn = document.querySelector('.up-btn')
const downBtn = document.querySelector('.down-btn')
const rigthSlider = document.querySelector('.right-slider')
const leftSlider = document.querySelector('.left-slider')

const totalSlides = document.querySelectorAll('.image-container').length
let activeIndex = 0
const sliderHeight = rigthSlider.clientHeight

leftSlider.style.top = `-${(totalSlides - 1) * 100}vh`

upBtn.addEventListener('click',()=>slideMove('up'))
downBtn.addEventListener('click',()=>slideMove('down'))

function slideMove(direction){
    if(direction === 'up'){
        activeIndex++
        if(activeIndex >= totalSlides){
            activeIndex = 0
        }
    }else if(direction === 'down'){
        activeIndex--
        if(activeIndex < 0){
            activeIndex = totalSlides - 1
        }
    }
    rigthSlider.style.transform = `translateY(-${activeIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(${activeIndex * sliderHeight}px)`

}