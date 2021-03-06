// Counter code
var button = document.getElementById("counter");

button.onclick = function () {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            // Take some action here accordingly
            if(request.status === 200){
                var counter = request.responseText;
                // Render the variable in the correct span
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
             }
        }
        // Not done yet
    };
    
    // Make the request
    request.open("GET", "http://pramodbhartiinfo.imad.hasura-app.io/counter", true);
    request.send(null);
    
};

var submit = document.getElementById("submit_btn");
submit.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            // Take some action here accordingly
            if(request.status === 200){
                 // Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = "";
                for (var i = 0; i < names.length; i++){
                    list += "<li>" + names[i] + "</li>";
                }
                
                var ul = document.getElementById("ul_list");
                ul.innerHTML = list.toString(); 
             }
        }
        // Not done yet
    };
    
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    
    // Make the request
    request.open("GET", "http://pramodbhartiinfo.imad.hasura-app.io/submit-name?name=" + name, true);
    request.send(null);
   
};
