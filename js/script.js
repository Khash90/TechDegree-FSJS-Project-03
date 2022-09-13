//Selecting Elements and Global Variables
const name = document.getElementById("name");
const jobRoll = document.getElementById('title');
const otherJobRoll = document.getElementById('other-job-role');
const design = document.getElementById('design');
const designColor = document.getElementById('color');

//putting focus on name textbox on page load.
name.focus();
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
            colorChildren[i].removeAttribute("selected");
        }
    }
});


/* ------------ "Register for Activities" section. ------------ */
const activityField = document.getElementById('activities');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const total = document.getElementById('activities-cost');
let totalCost = 0;

// console.log(activityField);
// console.log(total);

activityField.addEventListener('change', (e) => {
    const dataCost = +e.target.getAttribute('data-cost');
    // console.log(typeof(dataCost));
    const clicked = e.target;
    const clickedType = clicked.getAttribute('data-day-and-time')
  
    //Not allowing the user to check 2 events with the same date-day-and-time
    for(let i=0 ; i<checkBoxes.length ; i++) {
        const checkboxType = checkBoxes[i].getAttribute('data-day-and-time');
        if(clickedType === checkboxType && clicked !== checkBoxes[i]) {
          if(clicked.checked){
          checkBoxes[i].disabled = true;
          }else{
          checkBoxes[i].disabled = false;
          }
      }
   }
   //calculating the total cost of checked programs
    if (e.target.checked ){
        totalCost += dataCost;
        // console.log('checked')
    } else if(!e.target.checked ){
        totalCost -= dataCost;
        
    }
    // console.log(totalCost)
    total.innerHTML = `Total: $${totalCost}`;
    });

    //adding focus and blur for checkboxes
    for (let i=0 ; i<checkBoxes.length ; i++){
        checkBoxes[i].addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focus');
        });
        checkBoxes[i].addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focus');
        });
}


/*----------"Payment Info" section----------*/

//selecting payments elements
const paymentMenu = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

//hiding paypal and bitcoin sections on pageload
payPal.style.display = 'none';
bitCoin.style.display = 'none';

//setting credit card payment on default
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


/*--------- Validation sections ---------*/
//elements to work with
   //Name ==> already have, variable name = "name";
   const email = document.getElementById('email');
   //The "Register for Activities" variable name = "paymentMenu"
   const ccNumberBox = document.getElementById('cc-num');
   const zipCodeBox = document.getElementById('zip');
   const cvvBox = document.getElementById('cvv');
   const form = document.querySelector('form');
   const blankMailMsg = document.getElementById('email-hint2');


//validation function = "pass and fail"
function validationPass(element) {
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid')
    element.parentElement.lastElementChild.style.display = 'none';
}

function validationFail(element) {
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid')
    element.parentElement.lastElementChild.style.display = 'block';
    
}


/* Helper function to validate name input */
const nameValidator = (e) => {
    // Tests that there is at least a first name containing only letters, and allows for a middle and last name.
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(name.value);
    if(nameIsValid){
      validationPass(name);
      return true;
    } else if(!nameIsValid) {
      e.preventDefault();
      validationFail(name); 
    }    
}


/* Helper function to validate email input */
const emailValidator = (e) => {
    
    // Tests that email is validly formatted.
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
    
    if(emailIsValid) {

      validationPass(email);
     } else if(!emailIsValid && email.value === "") {
        email.parentElement.lastElementChild.style.display = 'none';
        blankMailMsg.parentElement.classList.add("not-valid");
        blankMailMsg.style.display = 'block';
        e.preventDefault();
     }else if(!emailIsValid){
        validationFail(email);
      }
    }
   

/*------------- activity validation-------------*/

const activityBox = document.getElementById('activities-box')
const activityValidator = (e) => {
    const checked = document.querySelectorAll("input[type='checkbox']:checked");
    const checkedAmount = checked.length;
    if(checkedAmount){
        validationPass(activityBox)
    } else if(!checkedAmount) {
        e.preventDefault();
        validationFail(activityBox)
    }
}



/*------------- creadit card requirements validation-------------*/


//validating expiration date
const expMonth = document.getElementById('exp-month');
const expMonthValidator = (e) => {
   
    const div = document.querySelector('.month-box')
    console.log(expMonth.value);
    if(expMonth.value === '0') {
        div.classList.add('not-valid')
        div.classList.remove('valid')
    } else {
        div.classList.add('valid');
        div.classList.remove('not-valid')
    }
}
//validating expiration year
const expYear = document.getElementById('exp-year');
const expYearValidator = (e) => {
    const div = document.querySelector('.year-box')
    console.log(expYear.value);
    if(expYear.value === '0') {
        div.classList.add('not-valid');
        div.classList.remove('valid');
    } else {
        div.classList.add('valid');
        div.classList.remove('not-valid');
    }
}

const ccNumberValidator = (e) => {
    const ccIsValid =  /^\d{13,16}$/.test(ccNumberBox.value);

    if(ccIsValid){
        validationPass(ccNumberBox);
    }else if(!ccIsValid) {
        e.preventDefault();
        validationFail(ccNumberBox);
       
    }
}

const zipCodeValidator = (e) => {
    const zipCodeValid = /^\d{5}$/.test(zipCodeBox.value);

    if(zipCodeValid){
        validationPass(zipCodeBox);
        
    }else if(!zipCodeValid) {
        e.preventDefault();
        validationFail(zipCodeBox);
       
    }
    
}

const cvvValidator = (e) => {
    const cvvValid = /^\d{3}$/.test(cvvBox.value);

    if (cvvValid){
        validationPass(cvvBox);
    }else if(!cvvValid){
        e.preventDefault();
        validationFail(cvvBox);
    }
}

//form listener on submit
form.addEventListener('submit' ,(e) => {
    //  e.preventDefault();
     nameValidator(e);
     emailValidator(e);
     activityValidator(e);
     expMonthValidator(e);
     expYearValidator(e);
     ccNumberValidator(e);
     zipCodeValidator(e);
     cvvValidator(e);



});

/* EventListener for Real Time */

name.addEventListener('input', (e) => {
    nameValidator(e);
});
email.addEventListener('input', (e) => {
    if(email.value === ""){
        e.preventDefault();
        email.parentElement.lastElementChild.style.display = 'none';
        blankMailMsg.parentElement.classList.add("not-valid");
        blankMailMsg.style.display = 'block';
     } else {
        blankMailMsg.style.display = 'none';
        emailValidator(e);
     }
});


activityField.addEventListener('change', (e)=> {
    activityValidator(e);
});

expMonth.addEventListener('change', (e) => {
    expMonthValidator(e);
});

expYear.addEventListener('change', (e) => {
    expYearValidator(e)
});
ccNumberBox.addEventListener('input', (e) => {
    ccNumberValidator(e);
 });
zipCodeBox.addEventListener('input', (e) => {zipCodeValidator(e);})
cvvBox.addEventListener('input', (e) => {
    cvvValidator(e);
 });


