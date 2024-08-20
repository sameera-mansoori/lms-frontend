function validation(values){
    let error={}
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    
    if(values.email===""){
        error.email="name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email ="email didi not match"
    } else{
        error.email=""
    }
    
    if(values.password===""){
        error.password="password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password ="password didi not match"
    } else{
        error.password=""
    }
    return error;
    
    }
    export default validation