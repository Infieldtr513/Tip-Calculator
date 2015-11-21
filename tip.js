var bill = document.getElementById('bill');
var percentOptions = document.getElementsByName('percent-box')[0];
var button = document.getElementsByName('button') [0];
var customerPercentInput = document.getElementById('cust-percent');

var customerPercentSelected = percentOptions.addEventListener('change', function () {
  var classList = customerPercentInput.classList;
  if(percentOptions[percentOptions.selectedIndex].value === 'custom'){
    classList.remove('cust-percent-hide');
    classList.add('cust-percent-show');
  } else {
    classList.add('cust-percent-hide');
    classList.remove('cust-percent-show');
  }
});

var calculate = button.addEventListener('click', function () {
  var formattedBill = Number(bill.value).toFixed(2);
  var percent;

  if(percentOptions[percentOptions.selectedIndex].value === 'custom'){
    percent = Number(document.getElementById('custom').value).toFixed(2) / 100;
  } else {
    percent = percentOptions[percentOptions.selectedIndex].value / 100;
  }

  var tip = Number(formattedBill * percent).toFixed(2);
  var total = Number(formattedBill) + Number(tip);
  document.getElementById('tip-amt').innerHTML = 'Tip: $' + tip;
  document.getElementById('total-amt').innerHTML = 'Total $' + total.toFixed(2);
});
