let country = prompt("Выберите страну доставки")
let deliveryCost = ""
let message = ""

if (country === null) {
  message = alert("Отменено пользователем!")
}

switch (country.toLowerCase()) {
  case "китай":
    deliveryCost = "100 кредитов"
    break

  case "чили":
    deliveryCost = "250 кредитов"
    break

  case "австралия":
    deliveryCost = "170 кредитов"
    break

  case "индия":
    deliveryCost = "80 кредитов"
    break

  case "ямайка":
    deliveryCost = "120 кредитов"
    break

  default:
    message = alert("В вашу страну доставка не доступна")
}

console.log((message = alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`)))
