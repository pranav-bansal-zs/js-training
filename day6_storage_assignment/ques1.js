const register_form=document.getElementById("register");
register_form.addEventListener("submit",function(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    display_data();
    register_form.reset();
})

function display_data(){
    const name=localStorage.getItem("name");
    const email=localStorage.getItem("email");
    if(name && email){
    const displaydata=document.getElementById("data");
    data.innerHTML=`
    <h2>data</h2
    <p><strong>Your name is : ${name}</strong></p>
    <p><strong>Your email is : ${email}</strong></p>
    `
}}