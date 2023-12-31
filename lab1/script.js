let btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    getDay();
});

function getDay() {
    let Birth = document.getElementById("birth");
    let currentDate = new Date();
    let birthDate = new Date(Birth.value);

    let difference = currentDate - birthDate;
    let totalDays = difference / (1000 * 60 * 60 * 24);
    
    let txt = document.getElementById("txt");

    if (!isNaN(birthDate) ) {
        txt.innerHTML = Math.round(totalDays) + " day";
    }else{
        txt.innerHTML = "Enter Correct Value "
    }
}

/* ################################ */
// mark here 
//###########################################################

const dropdown = document.getElementById('numberDropdown');
for (let i = 0; i < 100; i++) {
    const option = document.createElement("option") ;
    option.value = i ; 
    option.text = i ;
    dropdown.appendChild(option)
}
let arr = [];
dropdown.addEventListener("change", function () {
    let selectedValue = dropdown.value;
    let numCont = document.getElementById("numCont");
    numCont.innerHTML = "";

    arr = [];

    for (let i = 0; i < selectedValue; i++) {
        numCont.innerHTML += `
            <input type="number" id="numInput${i}" class='number-input' />
        `;
    }

    calc.addEventListener("click", function () {
        findMin(arr);
    });

    for (let i = 0; i < selectedValue; i++) {
        let numInput = document.getElementById(`numInput${i}`);
        numInput.addEventListener("input", function () {
            arr[i] = parseFloat(numInput.value); 
        });
    }

    function findMin() {
        if (arr.length === 0) {
            return;
        }

        let minNumber = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < minNumber) {
                minNumber = arr[i];
            }
        }

        console.log("Minimum value:", minNumber);

        let minDiv = document.getElementById("minDiv");
        if (!minDiv) {
            minDiv = document.createElement("div");
            minDiv.id = "minDiv";
            document.getElementById("result").appendChild(minDiv);
        }
        minDiv.innerHTML = "Minimum value: " + minNumber;
    }
});


/* ################################ */
// mark here 
//###########################################################


function descOrder(num){

    let maxRes = document.getElementById("maxRes")
    let numArr = Array.from(String(num) , Number) ;

    numArr.sort(function(a,b){
        return b-a ; 
    })
    let result = parseInt(numArr.join(" "))
    maxRes.innerHTML = result ; 
}

calcmax.addEventListener("click" , function(){
    let TxtInput = document.getElementById("TxtInput").value;
    let calcmax = document.getElementById("calcmax")
    descOrder(TxtInput)
})






/* ################################ */
// mark here 
//###########################################################
console.log([1] == [1]);   // false
console.log({} == {});  // false
/* using (==) in comapare between two arr or obj its compare the reference not the contant 
*/


/* ################################ */
// mark here 
//###########################################################

/* print code from top to bottom
-first => will print "A" 
-sec Line => the function will print after 0 Millsec But willNot excute direct but will placed in msg queue
-cont Loop => will print "c" ;
-check msg queue for any pending task 
-print "B" */


var num = 8;
var num = 10;  // overwrite value
console.log(num);


// function sayHi() {
//     console.log(name);  
//     console.log(age); 
//     var name = 'Ayush';
//     let age = 21;
//     }
//     sayHi();

    /*
- var is hosted but it declared after so the output // undefined
- let is not hosted but it declared after so the output // referenceError
*/