document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
    const number = document.getElementById("number").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = document.querySelector(".jokes");

            if (response.type === "success") {
                response.value.forEach(function(joke) {
                    output.innerHTML += `<li>${joke.joke}</li>`
                })
            } 
        } else {
            output.innerHTML += `<li>Something went wrong.</li>`
        }
    }

    xhr.send();

    e.preventDefault();
}