const total = 100
const ordered = 98
const goodsNumber = ordered <= total ? "достаточно" : "не достаточно"
console.log(goodsNumber)

if (ordered <= total) {
  console.log("Заказ оформлен, с вами свяжется менеджер")
} else if (ordered > total) {
  console.log("На складе недостаточно твоаров!")
}
