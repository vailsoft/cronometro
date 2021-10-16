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
    h1.innerHTML = 
    "<div class='cronometro'><div class='divD'><label for='days'>Days</label><span class='days'>" + (days<10?'0'+ days:days) + "</span></div>" +
    "<div class='divH'><label for='hours'>Hours</label><span class='hours'>" + (h < 10?'0'+ h:h) + "</span></div>"+
    "<div class='divM'><label for='minutes'>Minutes</label><span class='minutes'>" + (m < 10?'0'+ m:m) + "</span></div>"+
    "<div class='divS'<label for='seconds'>Seconds</label><span class='seconds'>" + (s < 10?'0'+ s:s) + "</span></div></div>"
    s++
}, 1000);
