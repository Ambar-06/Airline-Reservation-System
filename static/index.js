var a = 1;

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.prev').onclick = function(){
        a--;
        if (a>=0){
            let s = 'slide';
            document.querySelector('.'+s+a).style = 'display : flex;';
            console.log(a + 'A');
            var c = a+1;
            document.querySelector('.'+s+c).style = 'display : none;';
            }
        else if (a<0){
            let s = 'slide';
            a = 2;
            document.querySelector('.'+s+a).style = 'display : flex;';
            console.log(a + 'A');
            var c = 0;
            document.querySelector('.'+s+c).style = 'display : none;';
            }
        }
    }
)
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.next').onclick = function(){
        a++;
        if (a>2){
            let s = 'slide';
            a = 0;
            document.querySelector('.'+s+a).style = 'display : flex;';
            console.log(s+a);
            var c = 2;
            document.querySelector('.'+s+c).style = 'display : none;';
            }
        else if (a<=2){
            let s = 'slide';
            document.querySelector('.'+s+a).style = 'display : flex;';
            console.log(s+a);
            var c = a-1;
            document.querySelector('.'+s+c).style = 'display : none;';
            }
        }
    }
)

document.addEventListener('DOMContentLoaded', function(){
    setInterval(function(){
        a++;
        if (a>2){
            let s = 'slide';
            a = 0;
            document.querySelector('.'+s+a).style = 'display : flex;';
            console.log(s+a);
            var c = 2;
            document.querySelector('.'+s+c).style = 'display : none;';
            }
        else if (a<=2){
            let s = 'slide';
            document.querySelector('.'+s+a).style = 'display : flex;';
            console.log(s+a);
            var c = a-1;
            document.querySelector('.'+s+c).style = 'display : none;';
            }
        }, 5000)
    }
)
var x = 0
document.addEventListener('DOMContentLoaded', function(){
    const interval = setInterval(() => {
            for(let i = 0; i<1; i++){
                x++;
                document.getElementById('numberOfFlights').innerHTML = x;
                if (x === 359) {
                    clearInterval(interval);
                  }
            }
        }, 10)
})
var x1 = 0
document.addEventListener('DOMContentLoaded', function(){
    const interval1 = setInterval(() => {
            for(let j = 0; j<51; j++){
                x1++;
                document.getElementById('numberOfPassengers').innerHTML = x1;
                if (x1 === 17950) {
                    clearInterval(interval1);
                  }
            }
        }, 10)
})