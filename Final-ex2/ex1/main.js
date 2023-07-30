
function myFunction() {
    var a = Math.round(Number(document.getElementById('numA').value))
    var b = Math.round(Number(document.getElementById('numB').value))
    if (a < b && a >= 0 ) {
        let arrBetween = [];
        let arrresults = [];
        for (let i = a; i <=b; i+=1 ) {
            arrBetween.push(i)
        }
        // console.log(arrBetween);
        arrBetween.forEach(function(a) {
            let rounding = Math.floor(Math.sqrt(a))
            if (rounding === Math.sqrt(a)) {
                arrresults.push(a)
           }
        }) 
        document.getElementById('title').innerHTML = `Perfect squares in the range ${a} - ${b}`

        document.getElementById('result').innerHTML = arrresults.join(', ')

    } else {
        document.getElementById('result').innerHTML = `Please type again`
        alert('Please type again')

    }
}