
var question, x, ip, y, patratPl, patratSl;

function calculatorTeoremaLuiPitagora() {
    question = prompt('Ce trebuie sa afli? **raspunde doar cu: cateta 1/cateta 2/ipotenuza**');
    if (question === 'cateta 1' || question === '1') {
        y = prompt('care este lungimea catetei 2?');
        notString(y);
        
        ip = prompt('care este lungimea ipotenuzei?');
        notString(ip);
        checker();
        
        patratPl = y * y;
        patratSl = ip * ip;
        
        x = Math.sqrt(patratSl - patratPl);
        
        alert('Lungimea catetei 1 este: ' + x);
    } else if (question === 'cateta 2' || question === '2') {
        x = prompt('care este lungimea catetei 1?');
        notString(x);
        
        ip = prompt('care este lungimea ipotenuzei?');
        notString(ip);
        
        checker();
        
        patratPl = x * x;
        patratSl = ip * ip;
        
        y = Math.sqrt(patratSl - patratPl);
        
        alert('Lungimea catetei 2 este: ' + y);
    } else if (question === 'ipotenuza' || question === '3') {
        x = prompt('care este lungimea catetei 1?');
        notString(x);
        
        y = prompt('care este lungimea catetei 2?');
        notString(y);
        
        patratPl = x * x;
        patratSl = y * y;
        
        ip = Math.sqrt(patratPl + patratSl);
        
        checker();
        
        alert('lungimea ipotenuzei este: ' + ip);
    } else {
        alert('Error!!!!!! Plase try again');
        calculatorTeoremaLuiPitagora();
    }
}

function notString(u) {
    if (isNaN(u) || u < 0) {
        alert('Error!!! Try again');
        calculatorTeoremaLuiPitagora();
    }
}


function calculatorReciprocaTeoremeiLuiPigora() {
    x = prompt('care este valoarea catetei 1?');
    doarNumar(x);
    
    y = prompt('care este valoarea catetei 2?');
    doarNumar(y);
    
    patratPl = x * x;
    patratSl = y * y; 
    
    ip = prompt('care este valoarea ipotenuzei?');
    doarNumar(ip);
    
    if (patratPl + patratSl === ip * ip) {
        alert('Triunghiul este dreptunghic');
    } else {
        alert('Triunghiul NU este dreptunghic');
    }
    
} 

function checker() {
    if (x > ip || y > ip) {
        alert('Error!! Try again!');
        calculatorTeoremaLuiPitagora();
    }
}

function doarNumar(g) {
    if (isNaN(g) || g < 0) {
        alert('Error!!! Try again!');
        calculatorReciprocaTeoremeiLuiPigora();
    }
}
        
function calculatorEcuatieDeGradulAlDoilea() {
     var a, b, c, t, q, delta, primaValoare, aDouaValoare;
    
    a = prompt('Care este valoarea coeficientului lui x^2?');
    ecChecker(a);
    
    b = prompt('Care este valoarea coeficientului lui x?');
    ecChecker(b);
    
    c = prompt('Care este valoarea termenului liber?');
    ecChecker(c);
    
    q = b * (-1);
    
    if (a === 0) {
        primaValoare = q / c;
        alert('x este egal cu: ' + primaValoare);
    } else if (a !== 0) {
        t = b * b;
        delta = t - 4 * a * c;
    
        if (delta === 0) {
            primaValoare = q / (2 * a);
            alert('x este egal cu: ' + primaValoare);
        } else if (delta > 0) {
            primaValoare = (q + Math.sqrt(delta)) / (2 * a);
            aDouaValoare = (q - Math.sqrt(delta)) / (2 * a);
            alert('x poate lua urmatoarele valori: ' + primaValoare + ' si ' + aDouaValoare);
        } else if (delta < 0) {
            alert('Delta mai mic decat 0 => x nu poate lua valori reale');
        }
}

function ecChecker(s) {
    if (isNaN(s)) {
        alert('Error!! Please try again!');
        calculatorEcuatieDeGradulAlDoilea();
    }
}




















































