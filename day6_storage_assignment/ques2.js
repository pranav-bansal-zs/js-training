const submit_button=document.getElementById("submit");
submit_button.addEventListener("click",function(e){
    e.preventDefault();
    const greet=document.getElementById("greet").value.trim();
    sessionStorage.setItem("greeting",greet);
    document.getElementById("greet").value='';
    display_data();
})

function display_data(){
    const greeting=sessionStorage.getItem("greeting");
    if(greeting){
        const data=document.getElementById("data");
        sessionStorage.clear();
        data.innerHTML=
        `<h3>Greeting-</h3>
        <h3><strong>${greeting}</strong></h3>`
    }
}