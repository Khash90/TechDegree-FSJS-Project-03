//Selecting Elements and Global Variables
const name = document.querySelector("input[type='text']").focus();
const jobRoll = document.getElementById('title');
const otherJobRoll = document.getElementById('other-job-role');
const design = document.getElementById('design');
const designColor = document.getElementById('color');

// console.log(designColor.children);
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

//disabling the color menu by default
designColor.disabled = true;

design.addEventListener('change', (e) => {
    designColor.disabled = false;
    for (let i=0 ; i<designColor.children ; i++){
        const colorValue = e.target.value;
        const colorAtt = designColor[i].getAttribute('data-theme');
        console.log(colorValue);
        console.log(colorAtt);
    }
});



