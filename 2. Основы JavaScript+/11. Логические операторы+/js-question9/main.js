let pass = prompt("Логин пользователя:", "");
if (pass == "Админ" || pass == "админ" || pass == "Admin" || pass == "admin" ) {
	let passAdmin = prompt("Пароль к аккаунту админа?", "");
	if (passAdmin == "Я главный" || passAdmin == "я главный") {
		alert("Здравствуйте!");
	} else if (passAdmin == "" || passAdmin == null ) {
		alert("Отменено");
		} else if (!(pass == "Админ" || pass == "админ" || pass == "Admin" || pass == "admin" )){ 
			alert("Неверный пароль");
		}
} 