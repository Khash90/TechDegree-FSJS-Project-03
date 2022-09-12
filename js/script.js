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

//eventlistener for theme selecting and its related colors.
design.addEventListener('change', (e) => {
    const colorChildren = designColor.children;
    designColor.disabled = false;
    for (let i=0 ; i<colorChildren.length ; i++){
        const colorValue = e.target.value;
        const colorAtt = colorChildren[i].getAttribute('data-theme');
        console.log(colorValue);
        console.log(colorAtt);
        if (colorValue === colorAtt){
            colorChildren[i].hidden = false;
            colorChildren[i].setAttribute('selected', true) ;
        } else if(colorValue !== colorChildren){
            colorChildren[i].hidden = true;
            colorChildren[i].setAttribute("selected", false);
        }
    }
});


//"Register for Activities" section.
const activityField = document.getElementById('activities');
const total = document.getElementById('activities-cost');
let totalCost = 0;

// console.log(activityField);
// console.log(total);

activityField.addEventListener('change', (e) => {
    const dataCost = +e.target.getAttribute('data-cost');
    // console.log(typeof(dataCost));
    if (e.target.checked){
        totalCost += dataCost;
        console.log('checked')
    } else if(!e.target.checked){
        totalCost -= dataCost;
        
    }
    // console.log(totalCost)
    total.innerHTML = `Total: $${totalCost}`;
});


//"Payment Info" section
//selecting payments elements
const paymentMenu = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

//hiding paypal and bitcoin sections on pageload
payPal.style.display = 'none';
bitCoin.style.display = 'none';

paymentMenu.children[1].setAttribute('selected',true);
// console.log(paymentMenu);

//setting listener for displaying related elements from payment menu
paymentMenu.addEventListener('change',(e) => {
    
    if (e.target.value === 'paypal'){
        creditCard.style.display = 'none';
        bitCoin.style.display = 'none';
        payPal.style.display = 'block';
    } else {
        creditCard.style.display = 'block';
        bitCoin.style.display = 'none';
        payPal.style.display = 'none';
    }
    if (e.target.value === 'bitcoin') {
        creditCard.style.display = 'none';
        payPal.style.display = 'none';
        bitCoin.style.display = 'block';
    }
    
});
