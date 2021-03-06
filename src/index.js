import './styles/base.less';

console.log('Your project is set up');
// run with node src/index.js
// next move it to the project script folder
const Handlebars = require('handlebars');

var radioButtons = document.querySelectorAll('.form-check-input');
radioButtons.forEach(function (button) {
  button.addEventListener('click', function() {
    if (button.checked) {
      button.parentElement.classList.toggle('checked'); 
      uncheckOtherBoxes();
    }
  });
});

function uncheckOtherBoxes() {
  radioButtons.forEach(function(button) {
    if (!button.checked) {
      button.parentElement.classList.remove('checked');
    }
  });
}



document.getElementById('Calculate-Total').onclick = function (e) {
  e.preventDefault();
  var tipPercent = checkRadioButton();
  if (tipPercent) {
    var target = e.target;
    var form = target && target.form;
    var formElements = form && form.elements;
    var inputElement = formElements && formElements[0];
    var value = inputElement.value;
    var inputValueToNum = parseInt(value);

    if (inputValueToNum) {
      var suggestedTip = inputValueToNum * tipPercent;
      showTip(suggestedTip);
    } else {
      console.log('please enter an amount');
    }
  } else {
    console.log('please select a tip amount');
  }
}

function showTip(amountToTip) {
  var displayTip = document.getElementsByClassName('display-tip')[0];
  var suggestText = 'We suggest you tip: $ ';
  if (displayTip.innerHTML === '') {
    displayTip.innerHTML += suggestText + amountToTip;
  } else {
    displayTip.innerHTML = suggestText + amountToTip;
  }
}

function checkRadioButton() {
  var radioSelected = document.querySelectorAll('input[type="radio"]:checked')[0];

  if (radioSelected) {
    var tipAmount = parseInt(radioSelected.value, 10);
    var tipPercentage = tipAmount / 100;
    return tipPercentage;
  }
  return null;
}
