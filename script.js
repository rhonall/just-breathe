const text = document.querySelector('.text')
const circle = document.querySelector('.circle')
const playBtn = document.querySelector('.fa-play')
const pauseBtn = document.querySelector('.fa-pause')
const bgMusic = document.querySelector('#bgMusic')

const totalTime = 14000
const breatheTime = (totalTime / 7) * 2.5
const holdTime = (totalTime / 7)

breatheAnimation ()
playBtn.addEventListener('click', playMusic)
pauseBtn.addEventListener('click', pauseMusic)

function breatheAnimation () {
    text.innerHTML = 'Inhale'
    circle.className = 'circle grow'
    text.className = ' text grow'
    

    setTimeout(() => {
        text.innerHTML = 'Hold'

        setTimeout(() => {
            text.innerHTML = 'Exhale'
            circle.className = 'circle shrink'
            text.className = ' text shrink'

            setTimeout(() => {
                text.innerHTML = 'Hold'
            }, breatheTime)

        }, holdTime)

    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)

function playMusic() {
    bgMusic.play()
}

function pauseMusic() {
    bgMusic.pause()
}


