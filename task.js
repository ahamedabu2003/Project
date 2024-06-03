function sentmail(){
    let param  = {
        name:document.getElementById("fname").value,
        email:document.getElementById("ed").value,
        number:document.getElementById("mn").value,
        message:document.getElementById("textarea").value,

    }
    emailjs.send("service_3eekbl7","template_1vaaqlt",param).then(alert("email sent"))
}







