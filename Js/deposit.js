document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositText = depositField.value;
     const amount = document.getElementById('deposit-amount');

    const totalAmount = amount.innerText;
    amount.innerText = depositText
       depositField.value = '';
})