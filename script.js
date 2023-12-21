let day = document.querySelector(".day")
let month = document.querySelector(".month")
let year = document.querySelector(".year")
let ageDay = document.querySelector(".age-day")
let ageMonth = document.querySelector(".age-month")
let ageYear = document.querySelector(".age-year")
const svg = document.querySelector("svg")

function getAge(){
    const date = new Date
    let yearDate = date.getFullYear()
    let monthDate = date.getMonth() + 1

    year.addEventListener("keyup", (e) => {
        year = Number(e.target.value)
        const curYearDate = yearDate - year

        svg.addEventListener("click", () => {
            ageYear.textContent = curYearDate
        })
    })  

      month.addEventListener("keyup", (e) => {
        month = Number(e.target.value)
        const curMonthDate = (yearDate - year) * monthDate  

        svg.addEventListener("click", () => {
            ageMonth.textContent = curMonthDate
        })
    })  

    day.addEventListener("keyup", (e) => {
        day = Number(e.target.value)
        const curDayDate = (yearDate - year) * 365

        svg.addEventListener("click", () => {
            ageDay.textContent = curDayDate
        })
    })
}
getAge()