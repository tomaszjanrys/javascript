let amounts = [11, 1, 2]
sum = 0;
let czas = new Date()
let s = czas.setUTCSeconds(00);
let m = czas.setUTCMinutes(00);
let y = s + m;



for (let i = 0; i < 10000000; i++) {
    amounts.push("x");
    value = amounts[i];
    sum = value + sum

    console.log("value " + i + " = " + value);
}
let ss = czas.setUTCSeconds(00);
let mm = czas.setUTCMinutes(00);
let x = ss + mm;
let wynik = x + y;
let koniec = wynik - y;
console.log("||TEST ||" + amounts.length + "||RAZY ||" + "||sekundy start : " + s + " || Minuty start ||:" + m + "||Wynik sekundy||" + ss + "|| Wynik minuty  ||" + mm + "||SUMA||" + wynik + "||POTRZEBOWALES NA TO TYLE CZASU: ||" + koniec);

//tu jest moj wynik 3170361600102