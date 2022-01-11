let elList = document.querySelector(".pokemons__list");

for (let pokemon of pokemons) {
  //CREATE
  let newItem = document.createElement("li");
  let newCard = document.createElement("div");
  let newImg = document.createElement("img");
  let newCardBody = document.createElement("div");
  let cardBox = document.createElement("div");
  let newCardName = document.createElement("h5");
  let cardBoxImg = document.createElement("img");
  let newCardType = document.createElement("p");
  let cardWeightBox = document.createElement("div");
  let newCardWeight = document.createElement("p");
  let newCardHeight = document.createElement("p");

  //SET ATTRIBUTE
  newItem.setAttribute("class", "pokemons__item");
  newCard.setAttribute("class", "card pokemons__card");
  newImg.setAttribute("class", "top-img");
  newImg.setAttribute("src", pokemon.img);
  newCardBody.setAttribute("class", "card-body");
  cardBox.setAttribute("class", "card-box");
  cardBoxImg.setAttribute("class", "card-box-img");
  cardBoxImg.setAttribute("src", "./images/Mask.png");
  cardWeightBox.setAttribute("class", "card-weight-box");
  newCardWeight.setAttribute("class", "new-card-weight");

  //TEXT CONTENT
  newCardName.textContent = pokemon.name;
  newCardType.textContent = pokemon.type;
  newCardWeight.textContent = pokemon.weight;
  newCardHeight.textContent = pokemon.height;

  //APPEND CHILD
  elList.appendChild(newItem);
  newItem.appendChild(newCard);
  newCard.appendChild(newImg);
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(cardBox);
  cardBox.appendChild(newCardName);
  cardBox.appendChild(cardBoxImg);
  newCardBody.appendChild(newCardType);
  newCardBody.appendChild(cardWeightBox);
  cardWeightBox.appendChild(newCardWeight);
  cardWeightBox.appendChild(newCardHeight);
}
