// Function to check if a number is Even or Odd
function checkEvenOdd(number) {

    // If number divided by 2 has no remainder
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

// Example:
console.log(checkEvenOdd(4)); // Even
console.log(checkEvenOdd(7)); // Odd

// Simple Calculator Function
function calculator(num1, num2, operator) {

    if (operator === "+") {
        return num1 + num2;

    } else if (operator === "-") {
        return num1 - num2;

    } else if (operator === "*") {
        return num1 * num2;

    } else if (operator === "/") {
        return num1 / num2;

    } else {
        return "Invalid operator";
    }

}

// Examples:
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "/")); // 2
console.log(calculator(10, 5, "%")); // Invalid operator

// Login Function
function login(username, password) {

    if (username === "admin" && password === "12345") {
        return "Login Successful";
    } else {
        return "Invalid Credentials";
    }

}

// Examples:
console.log(login("admin", "12345")); // Login Successful
console.log(login("admin", "11111")); // Invalid Credentials
console.log(login("user", "12345"));  // Invalid Credentials

// Discount Function
function getDiscount(isStudent, purchaseAmount) {

    if (isStudent === true && purchaseAmount > 100) {
        return "20% Discount";

    } else if (isStudent === true) {
        return "10% Discount";

    } else {
        return "No Discount";
    }
    
}

// Examples:
console.log(getDiscount(true, 150));  // 20% Discount
console.log(getDiscount(true, 50));   // 10% Discount
console.log(getDiscount(false, 200)); // No Discount


function changeText() {
  document.getElementById("text").textContent = "welcome Rosisky!";
}
function addItem() {
  var text = document.getElementById("myInput").value;

  var li = document.createElement("li");
  li.textContent = text;

  document.getElementById("myList").appendChild(li);
}

function showAlert() {
  window.alert("Hello! This is a popup window!");
}

function getBrowser() {
  var browser = navigator.userAgent;
  document.getElementById("result").textContent = browser;
}

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById("joke").textContent = data.setup + " ... " + data.punchline;
    });
}

function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayDog(data);
    });
}

function displayDog(data) {
  document.getElementById("dogImage").src = data.message;
  document.getElementById("message").textContent = "Here is your dog!";
}

function getCountry() {
  var country = document.getElementById("countryInput").value;

  fetch("https://restcountries.com/v3.1/name/" + country)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayCountry(data[0]);
    });
}

function displayCountry(data) {
  document.getElementById("name").textContent = "Country: " + data.name.common;
  document.getElementById("capital").textContent = "Capital: " + data.capital[0];
  document.getElementById("population").textContent = "Population: " + data.population;
  document.getElementById("flag").src = data.flags.png;
}


 
fetchData();
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}


