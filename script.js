let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'Click':
                 randomNumber =Math.random(4)*9;
                 display.innerText = Math.round(randomNumber);
                 break;
            case 'Clear':
                display.innerText ='';
                break;
            case '1':
                display.innerText ='তোমার জন্য নীলচে তারার..';
                break;
            case '2':
                display.innerText ='সে যে বসে আছে একা এক..';
                break;
            case '3':
                display.innerText ='আলো আলো আমি কখনও..';
                break;
            case '4':
                display.innerText ='মেয়ে তুমি এখনো আমায় বন্ধু ভাবো..';
                break;
            case '5':
                display.innerText ='চাঁদ মামা আজ বড্ড একা...';
                break;
            case '6':
                display.innerText ='Cheep Nouko..';
                break;
            case '7':
                display.innerText ='প্রেম তুমি আসবে এভাবে,আবার হারিয়ে যাবে ভাবিন..';
                break;
            case '8':
                display.innerText ='মাঝে মাঝে তব দেখা পাই..';
                break;
            case '9':
                display.innerText ='তুমি আর তো কারো নও, শুধুআমার..';
                break;
            case '0':
                display.innerText ='As your wish';
                break;
            
        }
    })
})