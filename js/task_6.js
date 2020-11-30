let total = +" "
const message = alert("Отменено пользователем")

while (true) {
  let input = prompt("Введите число!")

  if (input === null) {
    message
    break
  }

  let amount = Number.parseInt(input)

  total += amount
}

console.log(`Общая сумма чисел равна ${total}`)
