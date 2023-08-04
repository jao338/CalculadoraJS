let calc = document.getElementById('calc');
let equal = document.getElementById('btn-equal')
let area = document.getElementById('area')
let x1 = 0;
let x2 = 0;
let op = 0;

let res;

calc.addEventListener('click', load);
equal.addEventListener('click', operacao);

function load(){

    if(x1.value == 0 && x2.value == 0 && op.value == 0){

        switch (calc) {
            case 0:

                x1 = 0;
                break;

            case 1:
                
                x1 = 1;
                break;
        
            case 2:
        
                x1 = 2;
                break;
            case 3:
                
                x1 = 3;
                break;
        
            case 4:
        
                x1 = 4;
                break;

            case 5:
                
                x1 = 5;
                break;
        
            case 6:
        
                x1 = 6;
                break;
            case 7:
                
                x1 = 7;
                break;
            case 8:
        
                x1 = 8;
                break;
            case 9:
        
                x1 = 9;
                break;
        }
    } else if (x1.value != 0 && op.value != 0) {

        switch (calc) {
            case 0:

                x2 = 0;
                break;

            case 1:
                
                x2 = 1;
                break;
        
            case 2:
        
                x2 = 2;
                break;
            case 3:
                
                x2 = 3;
                break;
        
            case 4:
        
                x2 = 4;
                break;

            case 5:
                
                x2 = 5;
                break;
        
            case 6:
        
                x2 = 6;
                break;
            case 7:
                
                x2 = 7;
                break;
            case 8:
        
                x2 = 8;
                break;
            case 9:
        
                x2 = 9;
                break;
        }    

    } else if (x1.value != 0) {

        switch (calc) {
            case '+':

                op = '+';
                break;

            case '-':
                
                op = '-';
                break;
        
            case 'X':
        
                op = '*';
                break;
            case '/':
                
                op = '/';
                break;
        }
    }
}

function operacao (){
    if(op.value == '+'){

        res = x1 + x2;

    }else if(op.value == '-'){

        res = x1 - x2;

    }else if(op.value == 'X'){

        res = x1 * x2;

    }else if(op.value == '/'){

        res = x1 / x2;

    }

    area.innerHTML = res;
}



function limpar(){

    x1 = 0;
    x2 = 0;
    op = 0;
}

