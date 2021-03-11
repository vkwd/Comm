//window.addEventListener('DOMContentLoaded', isValidInput);

function isValidInput() {
    if (emptyInput()) {
        // output.textContent = 'Error: one or more inputs need correct data';
        // output1.textContent = 'error';
        return;
    }
    output1.textContent = '';
    outputResults();
}

function mreset() {
    output.textContent = '';
    output1.textContent = '';
}

function emptyInput() {
    if (basicPay() === '' || basicPay() < 3500) {
        alert(' BP is not valid data');
        output1.textContent = ' BP is not valid data';
        //     'entered BP is not valid data';
        return true;
    } else if (
        doBirth() === '' ||
        new Date(doBirth()).getFullYear() < 1920 ||
        new Date(doBirth()).getFullYear() > 1990
    ) {
        //|| getEntree2a()===""
        //|| (new Date(getEntree2a()).getFullYear())>2019)
        alert('Date of birth is not valid data');
        output1.textContent = 'dob is not valid data';

        return true;
    } else if (
        doRetirement() === '' ||
        new Date(doRetirement()).getFullYear() > 2020 ||
        new Date(doRetirement()).getFullYear() < 1960 ||
        isNaN(doRetirement())
    ) {
        alert('Date of retirement is not valid data');
        output1.textContent = 'date of Retirement  is not valid data';
        return true;
    }
    // else if (getEntree2()==="" || getEntree2().getFullYear()<1925)
    //{
    // alert ("Date of birth is not valid data");
    // return true;}
    else {
        output.textContent = '';
        output1.textContent = '';
        return false;
    }
}

//   if (getEntree1() === ''|| getEntree1 <3500|| getEntree2() === ''|| getEntree2a()==="" || (getEntree2a().getFullYear()>2000)) {
// alert("dates are wrong reenter!")
//  return true;}
// else if (isNaN(getEntree2a()))
//{
//  alert("DATe is invalid reneter");
//  return true;

//}
//  else {
//  return false;
// }
// }
function outputResults() {
    let BPay = basicPay();
    let DOB = doBirth();
    let DOR = doRetirement();
    let AgeNxt = AgeNxtBday();
    let CF = getCF();
    let CV = getCV();
    // let CV = getCV();

    // let subTotal = entree1 + entree2 + entree3
    //subTotal = Math.round(subTotal * 100) / 100
    //let printSubTotal = `Entree 1: ${entree1} + Entree 2: ${entree2} + Entree 3: ${entree3} = Subtotal: ${subTotal}`;
    document.querySelector(
        '#fourth'
    ).innerHTML = `your estimated Basic pension is: ₹${Math.floor(
    basicPay() - basicPay() / 3
  )}`;

    document.querySelector('#third').innerHTML =
        'your age next birthday' + ' ' + '<b>' + AgeNxt + '</b>';

    /*let total = (subTotal * (1 + tax / 100));
                                                                                                                                                                                              total = Math.round(total * 100) / 100;
                                                                                                                                                                                              let printTotal = `Total: ${total}`;*/
    document.querySelector('#second').innerHTML =
        'Applicable commutation factor  ' + 'is <strong>' + CF + '</strong>';
    // "Total :<span class='color-class'> " + total+"</span>";
    // let totalTip = total * (1 + tip / 100);
    //totalTip = Math.round(totalTip * 100) / 100;
    //let printTotalTip = `Total Plus Tip: ${totalTip} `;
    document.querySelector(
        '#first'
    ).innerHTML = `Commutaion value is: '<b>' ₹${CV}  '</b>'`;

    //console.log(AgeNxt);
}

function basicPay() {
    return document.querySelector('#BPay').value;
}

function doBirth() {
    return document.querySelector('#dob').value;
}

function doRetirement() {
    return new Date(document.querySelector('#dor').value);
}
//var today =new Date( document.querySelector('#item2a').value);
/* if (isNaN(today)){
                   alert("date is not valid- RE-ENTER");
                   throw new Error;}
                   //return;}
                   else {
                     alert(today);
                     return document.querySelector('#item2a').value;*/
// }
/* function validate2(){
                      console.log(getEntree2a());
                      if (isNaN(getEntree2a())){
                        alert("date is not valid- RE-ENTER");
                        return true;
                      }
                      else{
                        return false;
                      }
                    }*/

function AgeNxtBday() {
    //return document.querySelector('#item3').value;
    //function calculate(){

    var birthDate = new Date(doBirth());
    if (!isNaN(birthDate) &&
        birthDate.getFullYear() > 1920 &&
        birthDate.getFullYear() < 1990
    ) {
        alert(birthDate);
        //return birthDate;
        //= new Date(document.getElementById("date").value);
        //birthDate=calculate();
        var today = new Date(doRetirement());
        console.log(today.getFullYear());
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        var actualAge = age + 1;
        console.log(actualAge);
        alert(actualAge);
        return (document.querySelector('#agNbd').value = actualAge);
    } else {
        console.log(' birthdate date is invalid');
        // document.querySelector('.message-container').textContent =
        //     'dob is not valid data';
        alert(' birthdate date is invalid');
        return false;
    }
}

//parseInt((document.getElementById("age").value = actualAge));

//  else{
//  console.log("date is invalid");
//   return;
//   alert ("date is invalid");
//}

//}
//document.querySelector('#item3').value=actualAge;
//function getTax() {
//  return document.querySelector('#tax').value;

function getCF() {
    var actualAge = AgeNxtBday();
    var cf = {
        50: 10,
        51: 11,
        52: 12,
        53: 13,
        54: 14,
        55: 15,
        57: 10.69,
        58: 10.0,
        61: 9.89,
    };
    //return  cf[actualAge];
    //console.log(cf[actualAge]);
    alert(cf[actualAge]);
    var actualCF = cf[actualAge];
    console.log(actualCF);
    return (document.getElementById('CF').value = actualCF);
}

function getCV() {
    BPay = basicPay();
    BPay = parseInt(BPay / 6);
    let CV = Math.floor(BPay * 12 * getCF());
    return (document.getElementById('CV').value = CV);
}

let output = document.querySelector('span');
let output1 = document.querySelector('.message-container');
let button = document.querySelector('button');
button.addEventListener('click', isValidInput);