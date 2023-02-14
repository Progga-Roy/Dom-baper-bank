document.getElementById('submit-btn').addEventListener('click',function(){
    // for email
const inputField = document.getElementById('input-field')
const inputText = inputField.value;
console.log(inputText)

// for password
const passwordField = document.getElementById('password-field')
const passwordText = passwordField.value;
console.log(passwordText)

if(inputText === 'proggaroy2023@gmail.com' && passwordText === 'roy3312progga') {
window.location.href ='bank.html'
}
else{
    alert('WRONG!! try again with validation')
}

})

document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositText = depositField.value;
      console.log(depositText)
})