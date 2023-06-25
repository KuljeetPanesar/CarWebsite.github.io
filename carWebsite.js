
// header nav bar
// Select the toggle button and navigation bar elements
const bar = document.querySelector(".fa-bars");
const navBar = document.querySelector(".navBar");

// Select all navigation items within the navigation bar
const navItems = document.querySelectorAll(".navBar a");

// Toggle the visibility of the navigation bar when the toggle button is clicked
bar.addEventListener("click", () => {
  navBar.classList.toggle("showNavBar");
});

// Close the navigation bar when a navigation item is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navBar.classList.remove("showNavBar");
  });
});

// Function to update the visibility of the toggle button based on screen width
function updateToggleButtonVisibility() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1300) {
    // Display the toggle button if the screen width is less than 1300 pixels
    bar.style.display = "block";
  } else {
    // Hide the toggle button if the screen width is 1300 pixels or greater
    bar.style.display = "none";
    // Additionally, remove the "showNavBar" class to hide the navigation bar
    navBar.classList.remove("showNavBar");
  }
}

// Initially update toggle button visibility
updateToggleButtonVisibility();

// Update toggle button visibility when the window is resized
window.addEventListener("resize", updateToggleButtonVisibility);



// popup for login

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


// Dropdown options
var carModels = {
        "Audi": ["A3", "A4", "A5", "A6"],
        "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series"],
        "Citroën": ["DS1", "DS2", "DS3", "DS4", "DS5"],
        "Fiat": ["500", "Panda", "Tipo",],
        "Ford": ["Fiesta", "Puma", "Focus", "Mustang", "Kuga", "Galaxy", "Ecosport"],
        "Hyundai": ["I20", "I30", "I40", "Tuscon", "KONA"],
        "Land Rover": ["Defender", "Evoque"],
        "Mercedes-Benz": ["A Class", "B Class", "C Class", "G Class", "E Class", "S Class"],
        "Nissan": ["Trail", "QASHQUI", "Mica", "Leaf", "Ariya", "Juke"],
        "Peugeot": ["208", "2008", "308", "3008", "408", "4008", "508", "5008"],
        "Renault": ["Clio", "Megane", "Austral", "Captur"],
        "SEAT": ["Ibiza", "Leon", "Ateca", "Arona", "Tarraco"],
        "Toyota": ["CHR", "AYGO", "Pruis", "Yaris", "Corolla"],
        "Vauxhall": ["Corsa", "Astra", "Grandland", "Insignia", "Vectra"],
        "Volkswagen": ["T-Cross", "Passat", "Tiguan", "Sharan", "Polo", "Golf"],
        "Volvo": ["S40", "S60", "S90", "XC60", "XC90"],
}

window.onload = function() {
    var makeSel = document.getElementById("make");
    var modelSel = document.getElementById("model");
    
    for (var makes in carModels) {
      makeSel.options[makeSel.options.length] = new Option(makes, makes);
    }
    makeSel.onchange = function() {
    modelSel.length = 1;
      var models = carModels[this.value];
      for (var i = 0; i < models.length; i++) {
        modelSel.options[modelSel.options.length] = new Option(models[i], models[i]);
      }
    }
  }

  // Reviews

  const reviews = [
    {
        name: "Beulah N.",
        userImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        carImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        text: "Fine Motors should be nominated for service of the year. Fine Motors tended to all of our needs to get us our dream car for the best price out there.",
    },
    {
        name: "Dayle Q.",
        userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        carImage: "https://images.unsplash.com/photo-1676847391332-5697224a69d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
        text: "Fine Motors impressed me on multiple levels. I did not expect to find the perfect van for all my working needs. Cannot fault the service I recieved.",
    },
    {
        name: "Yance J.",
        userImage: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        carImage: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80",
        text: "It's just amazing. I don't know what else to say. Dude, your services are the bomb! We have no regrets choosing our newest addition to our car collection with you!",
    },
  ];

  const imgE1 = document.querySelector(".userPhoto");
  const imgE2 = document.querySelector(".carBought");
  const textE1 = document.querySelector(".reviewText");
  const usernameE1 = document.querySelector(".username");

  let index = 0;

  updateReview();

  function updateReview(){
    const {name, userImage, carImage, text} = reviews[index];
    imgE1.src = userImage;
    imgE2.src = carImage;
    textE1.innerText = text;
    usernameE1.innerText = name;
    index++;
    if (index === reviews.length){
        index =0;
    }
    setTimeout(() => {
        updateReview()
    }, 10000);
  }