const mario=document.getElementById("mario");
let position=0;
let flag=0;
setInterval(()=>{
    if(position==screen.width && flag==0){
        flag=1;
        mario.style.transform = "scaleX(-1)"
    }
    else if(position==0 && flag==1){
        flag=0;
        mario.style.transform = "scaleX(+1)"
    }
    if(flag==1){
    position--;
    }else{
    position++;}
    mario.style.marginLeft=position+"px";
},2)

document.getElementById("background_music").loop = true;