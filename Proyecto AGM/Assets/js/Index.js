function ValidarLogin()
{
    var correo;
    var contra;

    correo = document.getElementById("Correo").value;
    contra = document.getElementById("pwd").value;




    if(correo == "Admin123" && contra == "123" && correo!="" && contra!="")
    {
        alert("Welcome");
    }
    else
    {
        alert("Wrong username or password");
    }

    console.log(correo + " " + contra)
}


function ForgetPassword()
{

    var correo = document.getElementById("Correo").value;
    console.log(correo);

    if(correo != "")
    {
        alert("An email has been sent to verify your account");
    }
    

}

function RegisterAccount()
{

    var usuario = document.getElementById("Usuario").value;
    var correo = document.getElementById("Correo").value;
    var ps2 = document.getElementById("pwd").value;
    var ps3= document.getElementById("pwd2").value;

    
    if(usuario != "" && correo !="" && ps2 != "" && ps3!="")
    {
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("MostrarModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick =function() {
        modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
}
        

    }
    else
    {
        var mensaje = document.getElementById("error");

        mensaje.innerHTML = "Error"
    }
    
}


