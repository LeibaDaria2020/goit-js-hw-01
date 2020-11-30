let credits = 29000
const pricePerDroid = 3000
const whantsBuyMessage = prompt("How many droids do you need?")
let totalPrice = ""
let message = ""

if (whantsBuyMessage === null) {
  message = alert("Canseled by user!")
} else if (credits < whantsBuyMessage * pricePerDroid) {
  message = alert("You have no enough credits on the balance")
} else {
  let amount = Number.parseInt(whantsBuyMessage)
  credits = credits - whantsBuyMessage * pricePerDroid
  message = alert(`You bought ${amount} droids, you have ${credits} on a balance`)
}
