const timerInputs = document.getElementById('timer-inputs')
const studyHoursElement = document.getElementById('study-hours-input')
const intervalMinutsElement = document.getElementById('interval-minuts-input')
const shortBreakMinutsElement = document.getElementById('short-break-minuts-input')
const longBreakMinutsElement = document.getElementById('long-break-minuts-input')
const startBtn = document.getElementById('start')


startBtn.addEventListener('click',() => {
    // timerInputs.classList.add('hidden')
    studyMinutes = +studyHoursElement.value * 60
    intervalMinuts = +intervalMinutsElement.value
    shortBreakMinuts = +shortBreakMinutsElement.value
    longBreakMinuts = +longBreakMinutsElement.value

    let totalStudyingTime =
    studyMinutes +
    ((Math.floor(studyMinutes/intervalMinuts)-2) * shortBreakMinuts) + 
    longBreakMinuts
    console.log(totalStudyingTime)

    // let timer = setInterval(function(){
    // },1000)
})