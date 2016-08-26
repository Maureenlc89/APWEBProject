var btnRegistrar =   document.querySelector('#btnRegistrar');
btnRegistrar.addEventListener('click',function (){

    validarDatos();
});

function validarDatos(){
   console.log("validarDatos");
    var nombre,
        apellido,
        email,
        pass,
        confirmPass,
        patronCorreo = /^\w+\@{1}\w+\.{1}(net|com|ac.cr)$/; 
        var divError = document.querySelector('#msjError');
        nombre  = document.querySelector('#txtnombre');
        apellido = document.querySelector('#txtapellido');
        email = document.querySelector('#txtemail');
        pass = document.querySelector('#txtpass');
        confirmPass = document.querySelector('#txtconfirmPass');
       // console.log(nombre.value,apellido.value,email.value,pass.value,confirmPass.value);
    if(nombre.value==''||apellido.value==''||pass.value==''||confirmPass.value==''||email.valie ==''){
         divError.classList.remove('ocultar');
         divError.classList.add('mostrar');
         divError.innerHTML='*Debe llenar los campos marcados';
        }else{
        if(!patronCorreo.test(email.value)){

            divError.classList.remove('ocultar');
            divError.classList.add('mostrar');
            divError.innerHTML='*Formato incorrecto';
        }else{
            divError.classList.remove('mostrar');
            divError.classList.add('ocultar');
        }
    }
    
        var peticion = $.ajax({
          url: "config_Project.php",
          type: "post",
          data: {
                 'call':'registrar_User',
                 'nombre' : nombre.value,
                 'apellido': apellido.value,
                 'email': email.value,
                ' pass' : pass.value},
          dataType: 'json',

          success: function(){
        
               console.log("Registro exitoso ");
               window.location="http://localhost/Proyecto1Personal/login.php";
          },
            error: function(){

               console.log("Error en el registro");
              
            }
        });

       
} 
