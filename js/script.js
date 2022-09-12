//Selecting Elements and Global Variables
const name = document.querySelector("input[type='text']").focus();
const jobRoll = document.getElementById('title');
const otherJobRoll = document.getElementById('other-job-role').style.display = 'none';

// console.log(jobRoll)
// console.log(otherJobRoll)
//event 'change' for jobroll to listen for otherjob roll

jobRoll.addEventListener('change', (e) => {
    const otherJR = e.target.value;
    console.log(otherJR);
    if (otherJR === 'other' ){
        otherJobRoll.style.display = 'block';
    }
   
})




