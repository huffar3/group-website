// Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");
var closeButton = document.querySelector(".close-button");

//Clear answer function
function clearAnswer() {
  heading.textContent = "";
  heading.style.display = "none";
  answer.innerHTML = "";
  closeButton.style.display = "none";
  document.getElementById('answer-container').style.display = 'none';
}
//Hamburger menu function
function hamburger() {

  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");
  if (navlinks.style.display === "block") {
    navlinks.style.display = "";
    menuicon.style.color = "#2a1f14";
  } else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
  // Close menu when a nav link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').style.display = "";  // ← empty string
        document.getElementById('icon').style.color = '#2a1f14';
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.mobile-nav');
    const navLinks = document.getElementById('nav-links');
    if (!nav.contains(event.target)) {
        navLinks.style.display = "";  // ← empty string
        document.getElementById('icon').style.color = '#2a1f14';
    }
});
}

//appetizer functions

function app1() {
  document.getElementById('answer-container').style.display = 'block';
  heading.textContent = "Best-Ever Pigs in a Blanket";
  heading.style.display = "block";
  answer.innerHTML = "<img src='images/pigs_in_a_blanket.png' alt='overhead shot of pigs in a blanket on a plate with mustard on the side source: https://www.thekitchn.com/pigs-in-a-blanket-recipe-23256899'>" +
  "<h3>Ingredients</h3>" +
    "<br></br>" +
    "<strong>Best-Ever Pigs in a Blanket</strong>" +
    "<ul>" +
    "<li>1 large egg</li>" +
    "<li>1 teaspoon water</li>" +
    "<li>1 (12- to 14-ounce) package cocktail-sized smoked sausages or little smokies</li>" +
    "<li>1 (8-ounce) can refrigerated crescent roll dough</li>" +
    "<li>Flaky salt or everything bagel seasoning, for sprinkling (optional)</li>" +
    "</ul>" +
    "<br></br>" +
    "<strong>INSTRUCTIONS</strong>" +
    "<ol>" +
    "<li>    Arrange a rack in the middle of the oven and heat the oven to 375ºF. Line a rimmed baking sheet with parchment paper or a silicone baking mat.</li>" +
    "<li>Whisk 1 large egg and 1 teaspoon water in a small bowl until combined. Pat 1 (12- to 14-ounce) package cocktail-sized smoked sausages or little smokies dry with paper towels.</li>" +
    "<li>Unroll 1 (8-ounce) can refrigerated crescent roll dough on a work surface. Separate the dough along the perforated seams into 8 triangles. Use a pizza cutter or sharp knife to cut each triangle lengthwise into 3 narrow triangles, 24 total.</li>" +
    "<li>Place 1 sausage at the wide end of a dough triangle. Roll towards the pointed end, wrapping the dough around the sausage and allowing the dough to overlap. Place on the baking sheet seam-side down. Repeat with the remaining sausages, spacing them evenly apart on the baking sheet.</li>" +
    "<li>Brush the tops and sides of the dough with a thin layer of the egg wash. Sprinkle with flaky salt or everything bagel seasoning if desired.</li>" +
    "<li>Bake until the dough is puffed and golden brown, 13 to 15 minutes. Serve warm with mustard, ketchup, or your favorite dipping sauce.</li>" +
    "</ol>";
  closeButton.style.display = "block";
  document.getElementById('answer').style.display = 'block';
}

function app2() {
  document.getElementById('answer-container').style.display = 'block';
  heading.textContent = "Football Cheese Ball and Charcuterie Board";
  heading.style.display = "block";
  answer.innerHTML = "<img src='images/Football_Cheese_Ball_and_Charcuterie_Board.png' alt='Stacked Loaded Potato Skins on white plate with dipping sauce in back. source: https://tornadoughalli.com/loaded-potato-skins/'>" +
    "<h3>Ingredients</h3>" +
    "<br></br>" +
    "<strong>Cheese Ball: </strong>" +
    "<ul>" +
    "<li>6 ounces pecan pieces, chopped</li>" +
    "<li>12 slices bacon</li>" +
    "<li>1 1/2 pounds cream cheese, at room temperature</li>" +
    "<li>6 ounces mild yellow Cheddar, shredded (about 1 1/2 cups)</li>" +
    "<li>6 ounces smoked Gouda, shredded (about 1 1/2 cups)</li>" +
    "<li>1 tablespoon Worcestershire sauce</li>" +
    "<li>2 teaspoons hot sauce</li>" +
    "<li>1 teaspoon ground cumin</li>" +
    "<li>4 scallions, finely chopped</li>" +
    "<li>1 piece mozzarella string cheese</li>" +
    "</ul>" +
    "<br></br>" +
    "<strong>Board:</strong>" +

    "<ul>" +
    "<li>1 1/2 pounds thin-sliced charcuterie, such as salami, sweet or hot soppressata, sandwich-size pepperoni, etc.</li>" +
    "<li>Assorted cut green vegetables and fruits, such as grapes, Granny Smith apples, broccoli, snow peas, green bell peppers and cucumbers, for serving</li>" +
    "<li>Square and round snack crackers, for serving</li>" +
    "<li>Prepared ranch dressing, for serving</li>" +
    "<li>Prepared blue cheese dressing, for serving</li>" +
    "</ul>" +
    "<br></br>" +
    "<strong>Instructions</strong>" +
    "<ol>" +
    "<li>For the cheese ball: Preheat the oven to 350 degrees F.</li>" +
    "<li>Spread the pecans on a baking sheet and bake until lightly toasted, 5 to 6 minutes. Set aside to cool.</li>" +
    "<li>Cook the bacon, in batches if needed, in a large skillet over medium-high heat until crisp, about 6 minutes. Drain on paper towels. Chop the bacon.</li>" +
    "<li>Combine the cream cheese, Cheddar, smoked Gouda, Worcestershire, hot sauce and cumin in a food processor, Process, scraping down the work bowl once halfway through, until smooth. Add the scallions, 1/2 cup of the chopped pecans and 1/2 cup of the chopped bacon. Pulse to evenly distribute.</li>" +
    "<li>Combine the remaining bacon and pecans in a medium bowl and toss well.</li>" +
    "<li>Form the cream cheese mixture into a football shape in the middle of a large serving board. Pat the pecan bacon mixture evenly over the tops and sides so it adheres. Brush away any excess. Pull the string cheese into pieces and cut to make the laces of the football. Chill the cheese ball until firm, about 2 hours.</li>" +
    "<li>For the board: To assemble, fold the charcuterie in quarters and shingle them to make a standing rim around the edge of the board. Set 4 shot glass-size cups where goal posts would be in a stadium. Fill in the space around the cheese ball with the vegetables and fruit. Lay a row of each cracker just inside the charcuterie border to resemble little 'seats' in your stadium. Pour ranch and blue cheese dressing into the shot cups for dipping.</li>" +
    "</ol>";
  closeButton.style.display = "block";
}
function app3() {
  document.getElementById('answer-container').style.display = 'block';
  heading.textContent = "Game Day Wings";
  heading.style.display = "block";
  answer.innerHTML = "<img src='images/buffalo-wings-overhead2-WR-768x1024.jpg' alt='overhead view of buffalo wings on a white platter with celery and white sauce. source:https://www.budgetbytes.com/buffalo-wings/'>" +
    "<h3>Ingredients</h3>" + "<br></br>" +
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


