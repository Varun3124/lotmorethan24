let a=0;

function clickFun(){
    if(a%2==0){
        document.getElementById("screen1").style.display="none";
        document.getElementById("screen2").style.display="block"; 
    }
    else{
        document.getElementById("screen1").style.display="block";
        document.getElementById("screen2").style.display="none"; 
    }
    a++;
}

