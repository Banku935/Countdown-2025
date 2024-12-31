const secondsC = document.querySelector('#seconds')
const minutesC = document.querySelector('#minutes')
const hoursC = document.querySelector('#hours')
const daysC = document.querySelector('#days')
const nextYearC = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownC = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`january 01 ${nextYear} 00:00:00`)

nextYearC.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValue = ({ days, hours, minutes, seconds }) => {
    secondsC.textContent = getTimeUnit(seconds)
    minutesC.textContent = getTimeUnit(minutes)
    hoursC.textContent = getTimeUnit(hours)
    daysC.textContent = getTimeUnit(days)

}

const updateC = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
    insertCountdownValue({ days, hours, minutes, seconds })
}

const handlecountdownDisplay = () => {
    spinnerLoading.remove()
    countdownC.style.display = 'flex'
}

setTimeout(handlecountdownDisplay, 1000)
setInterval(updateC, 1000)
