const loginButton = document.getElementById('login')
const accountInput = document.getElementById('account')
const passwordInput = document.getElementById('password')
const resultOutput = document.getElementById('result')
function login() {
 resultOutput.style.color = '#00f'
 resultOutput.innerText = 'Login..'
 setTimeout(function() {
  const accountValue = accountInput.value
    passwordValue = passwordInput.value
  if (accountValue === '1' &&
    passwordValue === '1') {
   document.location.href="1.html"
   resultOutput.style.color = '#0f0'
   resultOutput.innerText = 'Hi, welcome Ruko'
  }
  else if{
  accountValue === '2' &&
    passwordValue === '2') {
   document.location.href="2.html"
   resultOutput.style.color = '#0f0'
   resultOutput.innerText = 'Hi, 小帥' 
  }
   else {
   resultOutput.style.color = '#f00'
   resultOutput.innerText = '請檢查帳號密碼是否正確'
  }
 }, 2000)
}
loginButton.addEventListener('click', login)
