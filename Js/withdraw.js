

document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldText = withdrawField.value;
    const withdrawFieldTextString = parseFloat(withdrawFieldText);
  
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.innerText;
    const withdrawAmountTextString = parseFloat(withdrawAmountText);
  
    const countWithdrawBalance = withdrawAmountTextString + withdrawFieldTextString;
    withdrawAmount.innerText = countWithdrawBalance;
    withdrawField.value = '';
  });
  


