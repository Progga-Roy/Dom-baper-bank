

// document.getElementById('withdraw-btn').addEventListener('click', function() {
//     const withdrawField = document.getElementById('withdraw-field');
//     const withdrawFieldText = withdrawField.value;
//     const withdrawFieldTextString = parseFloat(withdrawFieldText);
  
//     const withdrawAmount = document.getElementById('withdraw-amount');
//     const withdrawAmountText = withdrawAmount.innerText;
//     const withdrawAmountTextString = parseFloat(withdrawAmountText);
  
//     const countWithdrawBalance = withdrawAmountTextString + withdrawFieldTextString;
//     withdrawAmount.innerText = countWithdrawBalance;

//     const balance = document.getAnimations('balance')
//     const balanceText = balance.innerText
//     const balanceTextString = parseFloat(balanceText)

//    const totalWithdrawBalance = balanceTextString-countWithdrawBalance;
//    balance.innerText= totalWithdrawBalance;
//     withdrawField.value = '';
//   });
  document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
  
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-amount');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
})



