window.addEventListener('DOMContentLoaded', event => {
    getVisitCount();
})

const functionapiUrl = 'https://httptriggercounter.azurewebsites.net/api/GetResumeCounter?code=g_A7kcK2Q45yv8-ytNmddFDNJFje4M3RUd2epUk2gbdyAzFuah62Nw==';
const localfunctionapi ='http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionapiUrl).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}