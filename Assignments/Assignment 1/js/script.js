// Assignment 1: See N' Speak Storymaker
// Author: Brock Mowry
// Student Number: 200475649

/**
 * The people array
 */
const people = [
  new Element("John", "👨"),
  new Element("Jane", "👩"),
  new Element("Joe", "👦"),
  new Element("Jill", "👧"),
  new Element("Jack", "👶"),
];

/**
 * The actions array
 */
const actions = [
  new Element("sees", "👀"),
  new Element("waves at", "👋"),
  new Element("hugs", "🤗"),
  new Element("kisses", "💋"),
  new Element("high-fives", "🙌"),
];

/**
 * The adjectives array
 */
const adjectives = [
  new Element("an angry", "😡"),
  new Element("a happy", "😊"),
  new Element("a sad", "😢"),
  new Element("a scared", "😱"),
  new Element("a surprised", "😳"),
];

/**
 * The things array
 */
const things = [
  new Element("dog", "🐶"),
  new Element("cat", "🐱"),
  new Element("bird", "🐦"),
  new Element("fish", "🐠"),
  new Element("rabbit", "🐰"),
];

/**
 * The places array
 */
const places = [
  new Element("at the park", "🏞"),
  new Element("at the beach", "🏖"),
  new Element("at the school", "🏫"),
  new Element("at the zoo", "🦁"),
  new Element("at the museum", "🏛"),
];

var selectedPerson = 0;
var selectedAction = 0;
var selectedAdjective = 0;
var selectedThing = 0;
var selectedPlace = 0;

/**
 * Populates the people column (#people-column) with the people array
 */
function populatePeople() {
  const peopleColumn = document.getElementById("people-column");
  people.forEach((person) => peopleColumn.appendChild(person.createElement()));
}

/**
 * Populates the actions column (#actions-column) with the actions array
 */
function populateActions() {
  const actionsColumn = document.getElementById("actions-column");
  actions.forEach((action) => actionsColumn.appendChild(action.createElement()));
}

/**
 * Populates the adjectives column (#adjectives-column) with the adjectives array
 */
function populateAdjectives() {
  const adjectivesColumn = document.getElementById("adjectives-column");
  adjectives.forEach((adjective) => adjectivesColumn.appendChild(adjective.createElement()));
}

/**
 * Populates the things column (#things-column) with the things array
 */
function populateThings() {
  const thingsColumn = document.getElementById("things-column");
  things.forEach((thing) => thingsColumn.appendChild(thing.createElement()));
}

/**
 * Populates the places column (#places-column) with the places array
 */
function populatePlaces() {
  const placesColumn = document.getElementById("places-column");
  places.forEach((place) => placesColumn.appendChild(place.createElement()));
}

/**
 * Increments the selected person and speaks the name
 */
function incrementPerson() {
  selectedPerson = selectedPerson === people.length - 1 ? 0 : selectedPerson + 1;
  const utterance = new SpeechSynthesisUtterance(people[selectedPerson].name);
  speechSynthesis.speak(utterance);
}

/**
 * Increment the selected action and speaks the action
 */
function incrementAction() {
  selectedAction = selectedAction === actions.length - 1 ? 0 : selectedAction + 1;
  const utterance = new SpeechSynthesisUtterance(actions[selectedAction].name);
  speechSynthesis.speak(utterance);
}

/**
 * Increment the selected adjective and speaks the adjective
 */
function incrementAdjective() {
  selectedAdjective = selectedAdjective === adjectives.length - 1 ? 0 : selectedAdjective + 1;
  const utterance = new SpeechSynthesisUtterance(adjectives[selectedAdjective].name);
  speechSynthesis.speak(utterance);
}

/**
 * Increment the selected thing and speaks the thing
 */
function incrementThing() {
  selectedThing = selectedThing === things.length - 1 ? 0 : selectedThing + 1;
  const utterance = new SpeechSynthesisUtterance(things[selectedThing].name);
  speechSynthesis.speak(utterance);
}

/**
 * Increment the selected place and speaks the place
 */
function incrementPlace() {
  selectedPlace = selectedPlace === places.length - 1 ? 0 : selectedPlace + 1;
  const utterance = new SpeechSynthesisUtterance(places[selectedPlace].name);
  speechSynthesis.speak(utterance);
}

/**
 * Generates the story given the current selected elements.
 */
function generateStory() {
  const person = people[selectedPerson];
  const action = actions[selectedAction];
  const adjective = adjectives[selectedAdjective];
  const thing = things[selectedThing];
  const place = places[selectedPlace];

  const story = `${person.name} ${action.name} ${adjective.name} ${thing.name} ${place.name}`;

  const output = document.getElementById("output-text");
  output.innerHTML = story;

  const utterance = new SpeechSynthesisUtterance(story);
  speechSynthesis.speak(utterance);
}

/**
 * Generates a random story
 */
function generateRandom() {
  const person = people[Math.floor(Math.random() * people.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const thing = things[Math.floor(Math.random() * things.length)];
  const place = places[Math.floor(Math.random() * places.length)];

  const story = `${person.name} ${action.name} ${adjective.name} ${thing.name} ${place.name}`;

  const output = document.getElementById("output-text");
  output.innerHTML = story;

  const utterance = new SpeechSynthesisUtterance(story);
  speechSynthesis.speak(utterance);
}

// Initial population of the columns
populatePeople();
populateActions();
populateAdjectives();
populateThings();
populatePlaces();
