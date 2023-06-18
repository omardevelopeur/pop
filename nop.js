one=document.getElementById("1")
two=document.getElementById("2")
three=document.getElementById("3")
four=document.getElementById("4")
five=document.getElementById("5")
six=document.getElementById("6")
seven=document.getElementById("7")
eight=document.getElementById("8")
nine=document.getElementById("9")
ten=document.getElementById("10")
eleven=document.getElementById("11")
tweleve=document.getElementById("12")
coco=document.querySelectorAll("[class^='popo']")
span2=document.querySelector("span.two")
span1=document.querySelector("span.one")
coco.forEach(function(e){
e.onclick=function(){
    if (e===one){
        e.style.display="none";
        two.style.display="block";
    }else if (e===two){
        e.style.display="none"
        three.style.display="block"
    }else if(e===three){
        e.style.display="none"
        four.style.display="block"
    }else if(e===four){
        e.style.display="none"
        five.style.display="block"
    }else if (e===five){
        e.style.display="none"
        six.style.display="block"
    }else if(e===six){
        e.style.display="none"
        seven.style.display="block"
    }else if(e===seven){
        e.style.display="none"
        eight.style.display="block"
    }else if (e===eight){
        e.style.display="none"
        nine.style.display="block"
    }else if(e===nine){
        e.style.display="none"
        ten.style.display="block"
    }else if(e===ten){
        e.style.display="none"
        eleven.style.display="block"
    }else if(e===eleven){
        e.style.display="none"
        tweleve.style.display="block"
    }else if(e===tweleve){
        e.style.display="none"
        one.style.display="block"
    }
}
}
)

