// Selection Methods Demo 
console.log("====== Selection Methods Demo ======");

// 1. getElementById - returns single element or null
// Use this when you know the element has a unique ID
const pageTitle = document.getElementById('page-title');
console.log("getElementById('page-title'):", pageTitle);
console.log("Page title text:", pageTitle ? pageTitle.textContent : 'Not found');

// 2. getElementsByClassName - returns HTMLCollection
// HTMLCollection is a live collection that updates automatically
const cards = document.getElementsByClassName('card');
console.log("getElementsByClassName")

// 3. getElementsByTagName -  returns HTMLCollection
// Gets all elements with the specified tag name
const paragraphs = document.getElementsByTagName('p');
console.log("getElementsByTagName('p'):", paragraphs);
console.log("Number of paragraphs found:", paragraphs.length);

// 4. querySelector - returns first matching element or null
// Uses CSS selector syntax, returns only the FIRST match
const firstCard = document.querySelector('.card');
console.log("querySelector('.card'):", firstCard);
console.log("First card title:", firstCard ? firstCard.querySelector('h3').textContent : 'Not found');

// 5. querySelectorAll - returns NodeList
// Uses CSS selector syntax, returns ALL matches as a NodeList
const allCards = document.querySelectorAll('.card');
console.log("querySelectorAll('.card'):", allCards);
console.log("Number of cards found:", allCards.length);

// 6. Show the difference between HTMLCollection and NodeList
// HTMLCollection updates automatically, NodeList is static
console.log("HTMLCollection VS NodeList:");
console.log("HTMLCollection length:", cards.length);
console.log("NodeList length:", allCards.length);
console.log("Are they the same length?", cards.length === allCards.length);

// 7. Iterating through collections
// NodeList has forEach method, HTMLCollections doesn't
console.log("Card Titles:")
allCards.forEach((card, index) => {
    const title = card.querySelector('h3').textContent;
    console.log(`Card ${index + 1}: ${title}`);
});

// 8. Accessing individual elements from collections
// Both HTMLCollection and NodeList support array-like access with [index]
console.log("First card from HTMLCollection:", cards[0]);
console.log("First card from NodeList:", allCards[0]);
console.log("Are they the same element?", cards[0] === allCards[0]);

// 9. Converting collections to arrays (for advanced methods)
// Array.from() converts any array-like object to a real array
const cardsArray = Array.from(cards);
console.log("Cards as array:", cardsArray);
console.log("Can use array methods:", cardsArray.map(card => card.querySelector('h3').textContent));