// select entrire form
var userFormEl = document.querySelector("#user-form");
// select username input field
var nameInputEl = document.querySelector("#username");


var formSubmitHandler = function(event){
    // stop reloading by default
    event.preventDefault();
    console.log(event);

    // get value from form field
    var username = nameInputEl.value.trim();

    // handle error on form
    if(username){
        getUserRepos(username);
        nameInputEl.value = "";
    }else{
        alert("Please enter a GitHub username");
    }
}
userFormEl.addEventListener("submit", formSubmitHandler);

var getUserRepos = function (user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

getUserRepos("CHAUDHARYS1");