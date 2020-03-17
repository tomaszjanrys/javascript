let day;

switch (new Date().getDay()){
case 0:
    day = "niedziela";
    break;
    case 1:
        day = "poniedzialek";
        break;
        case 2:
            day = "wtorek";
            break;
            case 3:
                day = "sroda";
                break;
                case 4:
                    day = "czwartek";
                    break;
                    case 5:
                        day = "piatek";
                        break;
                        case 6:
                            day = "sobota";
                            break;

}
console.log("Dzis mamy " + day)
if (day == "niedziela"){
    console.log('Wytrzezwij jutro do roboty :D')
}else if (day == "piatek") {
    console.log("Hura - dzis juz piatek !")
} else if (day == "sobota"){
    console.log("Dzis mozesz sie wyspac.")
} else {
    console.log("Niestety jeszcze trzeba chodzic do roboty.")
}
console.log(new Date())