
function validate(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	if (username == null || username == "") {
		alert("Пожалуйста введите Email")
		return false
	}
	if (password == null || password == "") {
		alert("Пожалуйста введите пароль")
		return false
	}
	if (CheckEmail(username) == true && CheckPassword(password) == true) {
		alert("Вы вошли!")
	}
}
function CheckEmail(username){
	var reg_email = /^([A-Za-z0-9_\-\.])+\@([a-z])+\.([a-z]{2,4})$/
	if (reg_email.test(username) == false) {
		alert("Введите Email формата: name@mymail.com")
		return false
	}
	else{
		return true
	}
}
function CheckPassword(password){
	if (/(?=.*[0-9])/.test(password) == false){
		alert("Пароль должен содржать хотя бы одно число")
		return false
	} 
	else if (/(?=.*[!@#$%&*;])/.test(password) == false){
		alert("Пароль должен содержать хотя бы один спецсимвол")
		return false
	}
	else if (/(?=.*[a-z])/.test(password) == false){
		alert("Пароль должен содержать хотя бы одну  латинскую букву в нижнем регистре")
		return false
	}
	else if (/(?=.*[A-Z])/.test(password) == false) {
		alert("Пароль должен содержать хотя бы одну  латинскую букву в верхнем регистре регистре")
		return false
	}
	else if (/([0-9a-zA-Z!@#$%^&*]{8,})/.test(password) == false){
		alert("Паполь должен быть не короче 8 символов")
		return false
	}
	else if (/(?=.*[",'^:/.])/.test(password) == true){
		alert("Пароль не должен содержать сиволов (\",',,,^,:,/,/.)")
		
		}
	else{
		return true
	}
}
	

