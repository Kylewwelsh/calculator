'use strict'
const calculator = document.querySelector('.calculator');
const calculatorButtons = calculator.querySelector('.calculatorButtons');

calculatorButtons.addEventListener (
  'click', e => {
    if (e.target.matches('button')) {
    
    const key = e.target
    const action = key.dataset.action

    if (!action) {
      console.log('number')
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator')
    }

    if (action === 'decimal') {
      console.log('decimal key!')
    }

    if (action === 'clear') {
      console.log('clear')
    }

    if (action === 'calculate') {
      console.log('equal')
    }



  }
});
