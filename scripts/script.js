var body = document.querySelector('body');
var h1 = document.createElement('h1');
h1.setAttribute('id', 'cronometer');
body.appendChild(h1);

let h = 0
let m = 0
let s = 0
let days = 0

setInterval(() => {
    if(s > 59){
        s = 0
        m++
        if(m > 59){
            m = 0
            h++
            if(h > 23){
                h = 0
                days++
            }
        }
    }
    h1.textContent = `| Days: ${days<10?'0'+ days:days} 
    | Hours: ${h < 10?'0'+ h:h} 
    | Minutes: ${m < 10?'0'+ m:m} 
    | Seconds: ${s < 10?'0'+ s:s} |`
    s++
}, 1000);
