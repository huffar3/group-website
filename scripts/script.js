// Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");
var closeButton = document.querySelector(".close-button");

//Clear answer function
function clearAnswer() {
    heading.textContent = "";
    heading.style.display = "none";
    answer.textContent = "";
    closeButton.style.display = "none";
}

//appetizer functions

function app1() {
  heading.textContent = "Big Game Day Nachos";
  heading.style.display = "block";
  answer.innerHTML = "Ingredients<ul>" +
    "<li>1 pound (453 g) ground beef, cooked</li>" +
    "<li>1 small onion, diced and cooked</li>" +
    "<li>1 tablespoon taco seasoning</li>" +
    "<li>15 ounces refried beans</li>" +
    "<li>1 large bag tortilla chips</li>" +
    "<li>2 cups (113 g) mild cheddar cheese, shredded</li>" +
    "<li>2 cups (113 g) monterey jack cheese, shredded</li>" +
    "<li>½ cup (86 g) black beans, rinsed, drained</li>" +
    "</ul>" +
    "<strong>TOPPINGS</strong>" +
    "<ul>" +
    "<li>½ avocado, diced</li>" +
    "<li>1 large tomato, diced</li>" +
    "<li>¼ cup scallions, sliced</li>" +
    "<li>¼ cup cilantro, chopped</li>" +
    "<li>½ cup jalapeños, diced</li>" +
    "<li>sour cream, for drizzling</li>" +
    "</ul>" +
    "<strong>INSTRUCTIONS</strong>" +
    "<ol>" +
    "<li>Preheat oven to 425ºF.</li>" +
    "<li>In a medium bowl, combine cooked hamburger, cooked onion, refried beans and taco seasoning. Mix well.</li>" +
    "<li>To a large, oven-safe skillet, add ⅓ of the tortilla chips. Top with the beef-bean mixture, ⅓ of the cheese, and ⅓ of the black beans. Repeat two more layers.</li>" +
    "<li>Bake until cheese is melted, about 10 minutes.</li>" +
    "<li>Top with tomato, avocado, green onions and cilantro. Drizzle with sour cream.</li>" +
    "</ol>";
    closeButton.style.display = "block";
}

function app2() {
  heading.textContent = "Loaded Potato Skins";
  heading.style.display = "block";
answer.innerHTML = "Ingredients" +
"<ul>" +
"<li>8 small russet potatoes</li>" +
"<li>1 tablespoon olive oil</li>" +
"<li>2 teaspoons kosher salt</li>" +
"</ul>";

answer.innerHTML += "<strong>For the potato skins:</strong>" +
"<ul>" +
"<li>3 tablespoons salted butter, melted</li>" +
"<li>½ teaspoon black pepper</li>" +
"<li>¼ teaspoon garlic powder</li>" +
"<li>¼ teaspoon onion powder</li>" +
"<li>¼ teaspoon smoked paprika</li>" +
"</ul>" +
"<strong>For the filling:</strong>" +
"<ul>" +
"<li>8 ounces shredded sharp cheddar cheese</li>" +
"<li>8 slices bacon, cooked crispy and crumbled</li>" +
"<li>Sour cream to serve</li>" +
"<li>Thinly sliced green onions to serve</li>" +
"</ul>" +
"<strong>Instructions</strong>" +
"<ol>" +
"<li>Preheat the oven to 400 degrees F. Wash the potatoes and pat them dry with a paper towel, place them on a baking sheet.</li>" +
"<li>Pierce the potatoes all over with a fork so any excess steam can escape.</li>" +
"<li>Brush the outsides with the olive oil, and sprinkle with the salt all over covering the potatoes.</li>" +
"<li>Place in the oven and bake for 30-60 minutes, depending on the size of the potatoes, until a knife inserted into the potatoes goes in smoothly. Let them cool completely, or until they are cool enough to handle on the baking sheet.</li>" +
"<li>In a small bowl, stir together the melted butter, pepper, garlic powder, onion powder, and smoked paprika.</li>" +
"<li>Next, cut the potatoes in half and scoop out the insides, leaving about a ¼ inch border of the potato attached to the skin.</li>" +
"<li>Place the potatoes cut side down onto the baking sheet and brush the outside with half of the butter mixture.</li>" +
"<li>Place back in the oven and bake for 8 minutes, turn them over, and brush the inside of the potatoes with the remaining butter mixture. Bake for an additional 8 minutes until the edges are golden brown and crispy.</li>" +
"<li>Add the cheese and bacon to the inside cup of the potato skins evenly.</li>" +
"<li>Bake for an additional 5 minutes until the cheese is melted.</li>" +
"<li>Serve immediately with sour cream and green onions.</li>" +
"</ol>";
closeButton.style.display = "block";
}
function app3() {
  heading.textContent = "Game Day Wings";
  heading.style.display = "block";
  answer.textContent = "No. This is a myth. The parents will retrieve the baby bird and place it back in its nest. If the parents do not return, contact us.";
  closeButton.style.display = "block";
}