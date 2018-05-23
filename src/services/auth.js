import Api from "./Api";


function register(data){
    Api.post("/system/login",data)
    .then(function(response){
        alert(response);
    })
    .catch(function(error){
        alert(error)
    })

}

export {
    
}