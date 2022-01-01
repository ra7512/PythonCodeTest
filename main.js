function storeJSON(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;
    var key = document.getElementById('name').value;

    const person ={
        name: name,
        age: age,
        city: city,
    }
    
    window.localStorage.setItem(key,JSON.stringify(person))

}

function retrieveJSON(){
    var key = document.getElementById('retrieveKey').value;
    var record = window.localStorage.getItem(key);
    var para = document.createElement('p');
    var data = document.createTextNode(record);
    para.appendChild(data);
    var element = document.getElementById("retrieve")
    element.appendChild(para);
}

window.onload = function(){
    document.getElementById('form').onsubmit = storeJSON
    document.getElementById('retrieveButton').onclick= retrieveJSON
}