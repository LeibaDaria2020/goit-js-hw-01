const userInput = prompt("Введите пароль.")
const ADMIN_PASSWORD = "dasha"
const passwordValidation = ""
let message = ""

if (userInput === null) {
  message = alert("Отменено пользователем!")
} else if (userInput === ADMIN_PASSWORD) {
  message = alert("Добро пожаловать!")
} else {
  message = alert("Доступ запрещен, неверный пароль!")
}
