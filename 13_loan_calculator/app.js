// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function (e) {
  hideElement(document.getElementById('results'));
  showElement(document.getElementById('loading'));
  setTimeout(calculate, 2000);
  e.preventDefault();
});

function showElement(element) {
  element.style.display = 'block';
}

function hideElement(element) {
  element.style.display = 'none';
}

function calculate(e) {
  // UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    // display results
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    hideElement(document.getElementById('loading'));
    showElement(document.getElementById('results'));
  } else {
    hideElement(document.getElementById('loading'));
    hideElement(document.getElementById('results'));
    showError('Please check your numbers');
  }
}

function showError(error) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.insertBefore(errorDiv, heading);

  // clear after 3 seconds
  setTimeout(function (params) {
    document.querySelector('.alert').remove();
  }, 3000);
}