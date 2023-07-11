const day = document.querySelector("#Day");
const month = document.querySelector("#Month");
const year = document.querySelector("#Year");
const button = document.querySelector("#button");
const resDays = document.querySelector("#result-days");
const resMonths = document.querySelector("#result-months");
const resYears = document.querySelector("#result-years");
const d = new Date(); 
const currentYear =  d.getFullYear();
const currentMonth =  d.getMonth();
const currentDay =  d.getDate();
const dayMsg = document.querySelector("#day-msg");
const monthMsg = document.querySelector("#month-msg");
const yearMsg = document.querySelector("#year-msg");
const labelYear = document.querySelectorAll("label");
console.log(labelYear)



button.addEventListener("click", (e) =>{
    e.preventDefault();

    resYears.innerHTML = currentYear-year.value;
    resMonths.innerHTML = (currentMonth-month.value)+1;
    resDays.innerHTML = (currentDay-day.value);
    resYears.style.color = "rgb(232, 48, 223)";
    resMonths.style.color = "rgb(232, 48, 223)";
    resDays.style.color = "rgb(232, 48, 223)";


    if(year.value > currentYear || month.value > 11 || day.value > 30){
        year.style.border = "red solid 1px";
        month.style.border = "red solid 1px";
        day.style.border = "red solid 1px";
        year.style.color = "red";
        month.style.color = "red";
        day.style.color = "red";
        monthMsg.style.display ="block";
        dayMsg.style.display ="block";
        yearMsg.style.display ="block";
        labelYear.forEach((c) => {
            c.style.color = "red";
        });
        resYears.innerHTML = "--";
        resMonths.innerHTML = "--";
        resDays.innerHTML = "--"; 
    }
    else{yearMsg.style.display ="none";
         monthMsg.style.display ="none";
         dayMsg.style.display ="none";
         year.style.color = "black";
        month.style.color = "black";
        day.style.color = "black";
        year.style.border = "black solid 1px";
        month.style.border = "black solid 1px";
        day.style.border = "black solid 1px";   

    }
    
    if(resDays.innerHTML < 0){
        resDays.innerHTML = 0;
    }
})


