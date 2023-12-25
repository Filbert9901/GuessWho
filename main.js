// window.onload = initializeYourPicture();
// function initializeYourPicture() {
//   const backgroundPictures = ["bg-black-panther", "bg-iron-man", "bg-spiderman"];
//   const randomNumber = Math.floor(Math.random() * 3); // Returns a random integer from 0 to 10:
//   const d = document.getElementById("your-picture");
//   d.classList.add(backgroundPictures[randomNumber]);
// }

window.onload = function () {
  const backgroundPictures = [
    "bg-black-panther",
    "bg-iron-man",
    "bg-spiderman",
    "bg-thor",
    "bg-flash",
    "bg-black-widow",
    "bg-scarlet-witch",
    "bg-star-lord",
    "bg-groot",
    "bg-green-arrow",
    "bg-batman",
    "bg-superman",
    "bg-joker",
    "bg-wonder-woman",
    "bg-harley-quinn",
    "bg-supergirl",
    "bg-doctor-strange",
    "bg-hawkeye",
  ];
  const randomNumber = Math.floor(Math.random() * 18); // Returns a random integer from 0 to 17:
  const yourPictureBox = document.getElementById("your-picture");
  const yourPictureBoxText = document.getElementById("your-picture-text");
  yourPictureBox.classList.add(backgroundPictures[randomNumber]);
  yourPictureBoxText.innerHTML = "Your Superhero is : " + resolveNameByBackground(backgroundPictures[randomNumber]);
};

function handleCharacterBoxClick(id) {
  const characterBox = document.getElementById(id);
  if (characterBox.classList.contains("brightness-0")) {
    characterBox.classList.remove("brightness-0");
    characterBox.classList.remove("hover:brightness-50");
  } else {
    characterBox.classList.add("brightness-0");
    characterBox.classList.remove("hover:brightness-50");
  }
}

function onMouseLeave(id) {
  const characterBox = document.getElementById(id);
  if (!characterBox.classList.contains("hover:brightness-50")) characterBox.classList.add("hover:brightness-50");
}

function resolveNameByBackground(background) {
  switch (background) {
    case "bg-black-panther":
      return "Black Panther";
    case "bg-iron-man":
      return "Iron Man";
    case "bg-spiderman":
      return "Spiderman";
    case "bg-thor":
      return "Thor";
    case "bg-flash":
      return "Flash";
    case "bg-black-widow":
      return "Black Widow";
    case "bg-scarlet-witch":
      return "Scarlet Witch";
    case "bg-star-lord":
      return "Star Lord";
    case "bg-groot":
      return "Groot";
    case "bg-green-arrow":
      return "Green Arrow";
    case "bg-batman":
      return "Batman";
    case "bg-superman":
      return "Superman";
    case "bg-joker":
      return "Joker";
    case "bg-wonder-woman":
      return "Wonder Woman";
    case "bg-harley-quinn":
      return "Harley Quinn";
    case "bg-supergirl":
      return "Supergirl";
    case "bg-doctor-strange":
      return "Doctor Strage";
    case "bg-hawkeye":
      return "Hawkeye";
  }
}
