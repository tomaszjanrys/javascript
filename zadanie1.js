// Ile razy musze wylosować liczbę z zakresu [0, 1] tak, aby suma liczb była większa od 1 (Math.random). 
// Wynik, każdej próby zapisz do tablicy, policz średnią dla 1_000_000_000 prob.

function getAmount() {
    sum = 0;
    amount = 0;
    while (sum < 1) {
        value = Math.random()
        sum = sum + value;
        amount = amount + 1;
        //console.log(amount + " : " + sum);
    }
    return amount
}

//console.log(getAmount())
let amounts = [];
for (let i = 0; i < 100000; i++) {
    amounts[i] = getAmount()
}
//console.log(amounts)

sum = 0;

for (let i = 0; i < amounts.length; i++) {
    value = amounts[i];
    sum = value + sum;
    //console.log("value " + i + " = " + value);
}

let average = sum / amounts.length;
console.log("av = " + average + " sum = " + sum + " length = " + (amounts.length));