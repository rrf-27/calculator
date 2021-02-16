// calculator ecuatie de gradul al ii-lea 
    // variabile
        //a, b, c;
        //delta = b^2*4ac;
        // sqOfb = b*b;
        // negativb = b * (-1);
            // if (a!=0)... else ...
        // firstValue = (negativeb + Math.sqrt(delta))/(2*a);
        // secondValue = (negativeb - Math.sqrt(delta))/(2*a);

function calculator() {
    var a, b, c, delta, sqOfb, negativeb, firstValue, secondValue;
    
    a = document.getElementById('first-value').value;
    b = document.getElementById('second-value').value;
    c = document.getElementById('third-value').value;
    
    sqOfb = b * b;
    negativeb = b * (-1);
    
    if (a == 0) {
        firstValue = (-1) * b / c;
        document.getElementById('rezultat').value = 'x= ' + firstValue;
    
        document.getElementById('box').style.display = 'none';
    
        document.getElementById('result').style.display = 'block';
        
    } else {
        delta = sqOfb - 4 * a * c; 
        
        if (delta == 0 || delta > 0) {
            firstValue = (negativeb + Math.sqrt(delta)) / (2 * a);
            secondValue = (negativeb - Math.sqrt(delta)) / (2 * a);
            
            if (firstValue === secondValue) {
                document.getElementById('rezultat').value = 'x= ' + firstValue;
                
                document.getElementById('box').style.display = 'none';
    
                document.getElementById('result').style.display = 'block';
            } else {
                document.getElementById('rezultat').value = 'x = ' + firstValue + ' or ' + 'x = ' + secondValue;
    
                document.getElementById('box').style.display = 'none';
    
                document.getElementById('result').style.display = 'block';    
            }  
        } else {
            document.getElementById('rezultat').value = 'delta = ' + delta + ' => x nu poate lua valori reale';
    
            document.getElementById('box').style.display = 'none';
    
            document.getElementById('result').style.display = 'block'; 
        }
    }
}

function back() {
    document.getElementById('result').style.display = 'none';    
    document.getElementById('box').style.display = 'block';
}
