function setcookie(name,value,days){
    let currdate=new Date();
    currdate.setTime(currdate.getTime()+24*60*60*1000);
    document.cookie=`${name}=${value};expires=${currdate.toUTCString()};path=/`;
}
function themeapply(value){
    document.body.className=value;
}
const lightbutton=document.getElementById("lightbutton");
lightbutton.addEventListener("click",function(e){
    e.preventDefault();
    setcookie("theme","light",7);
    themeapply("light");
})

const darkbutton=document.getElementById("darkbutton");
darkbutton.addEventListener("click",function(e){
    e.preventDefault();
    setcookie("theme","dark",7);
    themeapply("dark");
})

function cookievalue(){
    const cookies=document.cookie.split(";");
    for(let cookie of cookies){
        let [key,value]=cookie.split("=");
        if(key=="theme"){
            return value;
        }
    }
    return null;
};

window.addEventListener("load",function(){
    const theme=cookievalue();
    if(theme){
        themeapply(theme);
    }else{
        themeapply("light")
    }
})
