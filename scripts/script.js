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
  answer.innerHTML = "<h3>Ingredients</h3>" +
    "<br></br>" +
    "<strong>Nachos</strong>" +
    "<ul>" +
    "<li>1 pound (453 g) ground beef, cooked</li>" +
    "<li>1 small onion, diced and cooked</li>" +
    "<li>1 tablespoon taco seasoning</li>" +
    "<li>15 ounces refried beans</li>" +
    "<li>1 large bag tortilla chips</li>" +
    "<li>2 cups (113 g) mild cheddar cheese, shredded</li>" +
    "<li>2 cups (113 g) monterey jack cheese, shredded</li>" +
    "<li>½ cup (86 g) black beans, rinsed, drained</li>" +
    "</ul>" +
    "<br></br>" +
    "<strong>TOPPINGS</strong>" +
    "<ul>" +
    "<li>½ avocado, diced</li>" +
    "<li>1 large tomato, diced</li>" +
    "<li>¼ cup scallions, sliced</li>" +
    "<li>¼ cup cilantro, chopped</li>" +
    "<li>½ cup jalapeños, diced</li>" +
    "<li>sour cream, for drizzling</li>" +
    "</ul>" +
    "<br></br>" +
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
  answer.innerHTML = "<h3>Ingredients</h3>" +
    "<br></br>" +
    "<strong>Potato Skins</strong>" +
    "<ul>" +
    "<li>8 small russet potatoes</li>" +
    "<li>1 tablespoon olive oil</li>" +
    "<li>2 teaspoons kosher salt</li>" +
    "</ul>" +
    "<ul>" +
    "<li>3 tablespoons salted butter, melted</li>" +
    "<li>½ teaspoon black pepper</li>" +
    "<li>¼ teaspoon garlic powder</li>" +
    "<li>¼ teaspoon onion powder</li>" +
    "<li>¼ teaspoon smoked paprika</li>" +
    "</ul>" +
    "<br></br>" +
    "<strong>For the filling:</strong>" +

    "<ul>" +
    "<li>8 ounces shredded sharp cheddar cheese</li>" +
    "<li>8 slices bacon, cooked crispy and crumbled</li>" +
    "<li>Sour cream to serve</li>" +
    "<li>Thinly sliced green onions to serve</li>" +
    "</ul>" +
    "<br></br>" +
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
  answer.innerHTML = "<h3>Ingredients</h3>" + "<br></br>" +
    "<ul>" +
    "<strong>Chicken Wings</strong>" +
    "<li>1 Tbsp cornstarch ($0.03)</li>" +
    "<li>1/2 tsp paprika ($0.05)</li>" +
    "<li>1/2 tsp smoked paprika ($0.05)</li>" +
    "<li>1/2 tsp garlic powder ($0.05)</li>" +
    "<li>1/4 tsp onion powder ($0.03)</li>" +
    "<li>1/8 tsp cayenne pepper ($0.03)</li>" +
    "<li>1/4 tsp freshly cracked black pepper ($0.02)</li>" +
    "<li>1/2 tsp salt ($0.03)</li>" +
    "<li>1 Tbsp cooking oil ($0.08)</li>" +
    "<li>2.5 lbs. chicken wings or drumettes ($9.98)</li>" +
    "</ul>" +
    "<br></br>" +
    "<strong>Buffalo Sauce</strong>" +
    "<br></br>" +
    "<ul>" +
    "<li>4 Tbsp butter ($0.53)</li>" +
    "<li>1/2 cup Frank’s Redhot Sauce ($1.26)</li>" +
    "<li>1 tsp Worcestershire sauce ($0.05)</li>" +
    "<li>1/2 tsp garlic powder ($0.05)</li>" +
    "</ul>" +
    "<br></br>" +
    "<strong>Instructions</strong>" +
    "<br></br>" +
    "<ol>" +
    "<li>Preheat the oven to 400ºF. In a small bowl, combine the cornstarch, paprika, smoked paprika, garlic powder, onion powder, cayenne, pepper, and salt.</li>" +
    "<li>Pat the wings dry, then place them in a bowl. Drizzle the cooking oil over top, then toss until the wings are coated in oil. Add the cornstarch-seasoning mixture, then toss to coat again.</li>" +
    "<li>Line a baking sheet with parchment paper for easy cleanup, then place wire cooling racks on top. Place the seasoned chicken wings on the wire racks with space between each wing.</li>" +
    "<li>Bake the wings for 30 minutes, then flip and bake for 20-25 minutes, or until the wings have achieved the amount of browning desired (this will depend on the size of your wings).</li>" +
    "<li>While the wings are in the oven, melt the butter in a small saucepot over medium heat, then add the remaining ingredients (hot sauce, Worcestershire, garlic powder).</li>" +
    "<li>Transfer the wings to a large bowl. Pour the sauce over the wings and toss until fully coated.</li>" +
    "</ol>";
  closeButton.style.display = "block";
}