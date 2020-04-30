const calculator = {
    displayValue: '0',
  };
  
  function deleteLastInput(){
    let display = document.querySelector('.calculator-screen');
    let displayNum = display.value;
    let valLength = displayNum.length;
    displayNum = displayNum.slice(0, valLength-1);
    display.value = displayNum;
  }

  function resetCalculator() {
    updateDisplay();
  }

  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');

  function numClick(val)
  {
      debugger;
      let newValue =  document.getElementsByClassName("calculator-screen")[0];
      let preVal =  document.getElementById("prevResult");
      if( newValue.value === '0'){
       newValue.value = val;
      }
      else{
        newValue.value+=val;
      };
      preVal.innerText = "=" + eval( newValue.value);
   }
  //function for evaluation
  function solve()
  {
  let x = document.getElementsByClassName("calculator-screen")[0].value
  let y = eval(x)
  document.getElementsByClassName("calculator-screen")[0].value = y;
  }
  //function for clearing the display
  function clr()
  {
    document.getElementsByClassName("calculator-screen")[0].value = ""
  }

//   keys.addEventListener('click', (event) => {
//     const { target } = event;
//     inputDigit(target.value);
    

//     updateDisplay();
//     if (!target.matches('button')) {
//         const display = document.querySelector('.calculator-screen');
//         display.value = calculator.displayValue;
//       return;
//     }
  
//     if (target.classList.contains('operator')) {
//       handleOperator(target.value);
//           updateDisplay();
//       return;
//     }
  
//     if (target.classList.contains('decimal')) {
//       inputDecimal(target.value);
//           updateDisplay();
//       return;
//     }
  
//     if (target.classList.contains('all-clear')) {
//         debugger;
//       resetCalculator();
//           updateDisplay();
//       return;
//     }
//     if (target.classList.contains('delete')){
//         deleteLastInput();
//         return;
//     }

//   });