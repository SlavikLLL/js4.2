let number=prompt("Введите число" );

if(number == false){
    alert("Вы ввели не число")
}
else{
    if(number===1){
        alert(number+ "год")
    }
    if(number>1 && number <5){
        alert(number+ "года")
    }
    if(number>=5){
        alert(number+ "лет")
    }
    if(number = 0){
        alert("Поздравляю получается недавно появились")
    }
}