
function visible(){
    console.log('entered');
    if (see.style.display == 'none'){
        see.style.display = 'inline';
    } else{
        see.style.display = 'none';
    }
}

function invisible(){
    if (no.style.display == 'none'){
        no.style.display = 'inline';
    } else{
        no.style.display = 'none';
    }
}


var see= document.getElementById('see');
var no = document.getElementById('no');
var span = document.getElementById('myspan');
see.style.display = 'none';
no.style.display = 'inline';
var pass = document.getElementById('password');

span.onclick = meee;
function meee(){
    if ((see.style.display == 'none') && (no.style.display=='inline')){
        see.style.display = 'inline';
        no.style.display = 'none';
        pass.type = 'text';
    }
    else{
        no.style.display = 'inline';
        see.style.display = 'none';
        pass.type = 'password';
}}


var login = document.getElementById('loginSpan');
var login_a= document.getElementById('a');
var register_b= document.getElementById('b');
var register = document.getElementById('registerSpan');
var login_shift= document.getElementById('log');
var reg_shift = document.getElementById('reg');
login.onclick= function (){
   login_shift.style.width ='100%';
   login_shift.style.height ='100%';
   login_shift.style.display ='block';
    login_a.style.backgroundColor ='black';
    login_a.style.color ='white'
    register_b.style.backgroundColor ='white';
    register_b.style.color ='black'
    reg_shift.style.width ='0%';
   reg_shift.style.height ='0%';
   reg_shift.style.display ='none';
   
}

register.onclick= function (){
    reg_shift.style.width ='100%';
    reg_shift.style.height ='100%';
    reg_shift.style.display ='block';
    register_b.style.backgroundColor ='black';
    register_b.style.color ='white'
    login_a.style.backgroundColor ='white';
    login_a.style.color ='black'


    login_shift.style.width ='0%';
    login_shift.style.height ='0%';
    login_shift.style.display ='none';
    
 }
 








