
document.getElementById("name").innerHTML = localStorage.getItem('name');
let elem = document.getElementById('name');
document.getElementById('btn').onclick = function(){

    let name = prompt('Как вас зовут?',null)
    alert("Вас зовут: "+name);
    localStorage.setItem('name',name);
    console.log("=================");
    console.log(localStorage.getItem('name'));
  }
  const user = document.getElementById('name');
const changeName = document.getElementById('changeName');
    
user.innerHTML = localStorage.getItem('Username');

changeName.addEventListener('click',()=>{
    let newName = prompt("Введите ваше новое имя:");
        if(newName != null || newName != "" && newName.length === 15){
            localStorage.setItem('Username',newName);
            user.innerHTML = localStorage.getItem('Username') + "! ";
            $('#userName').hide().fadeIn(500)
        }
        
    
})
  document.getElementById('btn1').onclick = function(){
     let a = prompt('a=');
     let b = prompt('b='); 
     let S;
    S = (1 / 2) * (a * b);
    alert("S="+S);
  }
  document.getElementById('btn2').onclick = function(){
    let ab = prompt('Введите 1 строку:');
    let ba = prompt('Введите 2 строку:'); 
    let S=false;
    if(ab.length==ba.length)
    {
        S = true;
        alert('Строка равны: '+S);
    }
    else
    {
        alert('Строка не равны: '+S);
    }
  }
  document.getElementById('btn3').onclick = function(){
      let arr = [];
      let minimum=undefined;
      let maximum=0;
    for(let i=0;i<5;i++)
    {
        let num = prompt("введите значение");
        arr.push(num);
        minimum=Math.min(...arr);
        maximum=Math.max(...arr);
    }
    alert('max='+maximum+'min='+minimum);
    
  }
  
      function FiveQ(){
        let timeStart = parseInt(prompt("Введите время для таймера(в минутах):"))
    const minuteElement = document.querySelector('.minute')
    minuteElement.innerText = timeStart + ":";
    const secondElement = document.querySelector('.second');
    const isTimeElement = document.querySelector('.isTime');

    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const pauseButton = document.querySelector('.pause');
    const howLongButton = document.querySelector('.hlong');

    startButton.addEventListener('click',() =>{
        clearInterval(interval)
        interval = setInterval(startTimer,1000)
    })
    pauseButton.addEventListener('click',() =>{
        clearInterval(interval)
    })
    stopButton.addEventListener('click',()=>{
        clearInterval(interval)
        clearFields();
    })
    howLongButton.addEventListener('click',()=>{
        // $('.time-block').hide(100);
        //     $('.time-block .isTime').show(100)
            howMin = (timeStart-1) - minute
                howSec = 60 - second;
        isTimeElement.innerHTML = " Прошло:  " + howMin + " min " + howSec + " sec";
            $('.isTime').hide().show(500);
    })
    function clearFields(){
        minute = 00
        second = 00
        minuteElement.textContent = "00:"
        secondElement.textContent = "00"
    }
    let minute = timeStart,
        second = 00,
        interval
        function startTimer()
        {
            if(second > 0){
                second--;
            }
            if(second < 9)
            {
                secondElement.innerText = ":0" + second;
            }
            if(second > 9){
                secondElement.innerText = ":"+second;
            }
            if(second <= 0)
            {
                if(minute > 0){
                --minute;
                minuteElement.innerText =  minute;
                second = 59;
                secondElement.innerText = ":"+ second;
                }
                else{
                    return false;
                }
            }
            // if(minute < 0){
            //     return false;
            // }
            if(minute > 9){
                secondElement.innerText = ":"+ second;
            }
        };
        }
          function check()
 
          {
        
             var question;
             var value1;
             var value2;
                            
             question = 1;
             value1 = 0;
             value2 = 0;
     
             result = "";
        
             var choice;
              
             for (question = 1; question <= 10; question++) {
              
                var q = document.forms['quiz'].elements['q'+question];
        
                   for (var i = 0; i < q.length; i++) {
                      if (q[i].checked) {
                         choice = q[i].value;
                      }
                   }
        
                   if (choice == "value1") {
                      value1++;
                   }
        
                   if (choice == "value2") {
                      value2++;
                   }        
                }
             alert("количество верных ответов: "+value2)
        
          };
          function toggleFullscreen(){
            let image = $('#bg')
            console.log(image)
            let bgButton = $('.toggleFullscreenImage')
                bgButton.on('click',()=>{
                    $('.background-image').css('display','block')
                    if(document.fullscreenElement){
                        document.exitFullscreen()
                        $('.background-image').css('display','none')
                    }else{
                        document.getElementById('bg').requestFullscreen()
                    }
                })
            }
        window.onload = toggleFullscreen()