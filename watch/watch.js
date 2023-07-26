var timeb=document.getElementById('time-btn');
var heartrate=document.getElementById('heart-btn');
var red=document.getElementById('red');
var black=document.getElementById('black');
var pink=document.getElementById('pink');
var blue=document.getElementById('blue');
var watchimg = document.getElementById("watch");
var time = document.getElementById("time");
var heartDiv = document.getElementById("heart");
var buy = document.getElementById('buy-now');

red.addEventListener('click',function(){
    watchimg.src='assets/RED.png';
});
black.addEventListener('click',function(){
    watchimg.src='assets/BLACK.png';
});
pink.addEventListener('click',function(){
    watchimg.src='assets/PINK.png';
});
blue.addEventListener('click',function(){
    watchimg.src='assets/BLUE.png';
}); 
function showtime(){
    let time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let sec=time.getSeconds();
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    sec=sec<10?"0"+sec:sec;
    document.getElementById("time").innerHTML=hours+':'+minutes+':'+sec;
}
showtime();
setInterval(showtime,1000);
heartrate.addEventListener('click',function(){
    time.style.display='none';
    heartDiv.style.display="block";
});
timeb.addEventListener('click',function(){
    time.style.display="block";
    heartDiv.style.display="none";
});
buy.addEventListener('click',function(){
    alert('Item Added To Cart');})



