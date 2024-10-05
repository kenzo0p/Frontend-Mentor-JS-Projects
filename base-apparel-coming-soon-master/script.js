document.getElementById('email-form').addEventListener('click' ,function(){
    const inp = document.querySelector('.inp');
    const btn = document.querySelector('.btn');
    const err = document.querySelector('.error');
    const errMsg = document.querySelector('.msg-error');
    btn.addEventListener('click' , function(){
        if(inp.checkValidity()){
            // err.style.opacity = '0';
        }else{
            err.style.opacity = '1';
            errMsg.style.opacity ='1';
        }
        

    })
})
