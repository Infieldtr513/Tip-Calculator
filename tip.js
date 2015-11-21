var bill = document.getElementById('bill');
var button = document.getElementsByName('button') [0];
var percent = 0;
var btnPercents = document.getElementsByClassName('btn-default');
var customPercent = document.getElementById('custom');

var setPercent = function (value) {
  customPercent.value = value.replace('%', '');  percent = Number(value.replace('%', '')).toFixed(2) / 100;
};

btnPercents[0].addEventListener('click', function (e) {
  setPercent(this.innerHTML);
  calculate();
});
btnPercents[1].addEventListener('click', function (e) {
  setPercent(this.innerHTML);
  calculate();
});
customPercent.addEventListener('keyup', function (e) {
  setPercent(this.value);
  calculate();
});
bill.addEventListener('keyup', function () {
  calculate();
});

var calculate = function () {
  var formattedBill = Number(bill.value).toFixed(2);
  var tip = Number(formattedBill * percent).toFixed(2);
  var total = Number(formattedBill) + Number(tip);
  console.log(formattedBill, tip, total);
  document.getElementById('tip-amt').innerHTML = 'Tip: $' + tip;
  document.getElementById('total-amt').innerHTML = 'Total $' + total.toFixed(2);
};
