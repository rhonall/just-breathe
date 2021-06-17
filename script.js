const text = document.querySelector('.text')
const circle = document.querySelector('.circle')

const totalTime = 14000
const breatheTime = (totalTime / 7) * 2.5
const holdTime = (totalTime / 7)

breatheAnimation ()

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

