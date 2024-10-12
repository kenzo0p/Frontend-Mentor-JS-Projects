document.querySelector('form').addEventListener('submit' ,function(e){
    e.preventDefault();
    let btn =document.querySelector('button');
    let email = document.querySelector('.email');
    let err = document.querySelector('.error');
    isFormValid = true;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if(!email.value.match(emailPattern)){
        err.style.display = 'block';
        email.placeholder = 'example@email.com';
        isFormValid = false;
    }else{
        err.style.display = 'none';
    }
    if(isFormValid){
        alert("form submitted successfully");
    }
});
