//Selecting Elements and Global Variables
const name = document.querySelector("input[type='text']").focus();
const jobRoll = document.getElementById('title');
const otherJobRoll = document.getElementById('other-job-role');

// console.log(jobRoll)
// console.log(otherJobRoll)

//hide the otherJobRoll on page load.
otherJobRoll.style.display = 'none';

//event to hide and unhide the "other text box" on change.
jobRoll.addEventListener('change', (e) => {
    const otherJR = e.target.value;
    // console.log(otherJR);
    if (otherJR === 'other' ){
        otherJobRoll.style.transition = 'all 0.5s ease-in-out';
        otherJobRoll.style.display = 'block';
        
    } else {
        otherJobRoll.style.display = 'none';
    }
});




