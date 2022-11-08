const restaurants = [
    {
      name: "Cheesecake Factory",
      cuisine: "American",
      id: 1
    },
    {
      name: "Shokolaat",
      cuisine: "American",
      id: 2
    },
    {
      name: "Gordon Biersch",
      cuisine: "American",
      id: 3
    },
    {
      name: "Crepevine",
      cuisine: "American",
      id: 4
    },
    {
      name: "Creamery",
      cuisine: "American",
      id: 5
    },
    {
      name: "Old Pro",
      cuisine: "American",
      id: 6
    },
    {
      name: 'Nola"s',
      cuisine: "Cajun",
      id: 7
    },
    {
      name: "House of Food",
      cuisine: "Bagels",
      id: 8
    },
    {
      name: "The Prolific Oven",
      cuisine: "Sandwiches",
      id: 9
    },
    {
      name: "La Strada",
      cuisine: "Italian",
      id: 10
    },
    {
      name: "Buca di Beppo",
      cuisine: "Italian",
      id: 11
    },
    {
      name: "Pasta?",
      cuisine: "Italian",
      id: 12
    },
    {
      name: "Madame Tam",
      cuisine: "Asian",
      id: 13
    },
    {
      name: "Sprout Cafe",
      cuisine: "Salad",
      id: 14
    },
    {
      name: 'Pluto"s',
      cuisine: "Salad",
      id: 15
    },
    {
      name: "Junoon",
      cuisine: "Indian",
      id: 16
    },
    {
      name: "Bistro Maxine",
      cuisine: "French",
      id: 17
    },
    {
      name: "Three Seasons",
      cuisine: "Vietnamese",
      id: 18
    },
    {
      name: 'Sancho"s Taquira',
      cuisine: "Mexican",
      id: 19
    },
    {
      name: "Reposado",
      cuisine: "Mexican",
      id: 20
    },
    {
      name: "Siam Royal",
      cuisine: "Thai",
      id: 21
    },
    {
      name: "Krung Siam",
      cuisine: "Thai",
      id: 22
    },
    {
      name: "Thaiphoon",
      cuisine: "Thai",
      id: 23
    },
    {
      name: "Tamarine",
      cuisine: "Vietnamese",
      id: 24
    },
    {
      name: "Joya",
      cuisine: "Tapas",
      id: 25
    },
    {
      name: "Jing Jing",
      cuisine: "Chinese",
      id: 26
    },
    {
      name: 'Patxi"s Pizza',
      cuisine: "Pizza",
      id: 27
    },
    {
      name: "Evvia Estiatorio",
      cuisine: "Mediterranean",
      id: 28
    },
    {
      name: "Cafe 220",
      cuisine: "Mediterranean",
      id: 29
    },
    {
      name: "Cafe Renaissance",
      cuisine: "Mediterranean",
      id: 30
    },
    {
      name: "Kan Zeman",
      cuisine: "Mediterranean",
      id: 31
    },
    {
      name: "Gyros-Gyros",
      cuisine: "Mediterranean",
      id: 32
    },
    {
      name: "Mango Caribbean Cafe",
      cuisine: "Caribbean",
      id: 33
    },
    {
      name: "Coconuts Caribbean Restaurant & Bar",
      cuisine: "Caribbean",
      id: 34
    },
    {
      name: "Rose & Crown",
      cuisine: "English",
      id: 35
    },
    {
      name: "Baklava",
      cuisine: "Mediterranean",
      id: 36
    },
    {
      name: "Mandarin Gourmet",
      cuisine: "Chinese",
      id: 37
    },
    {
      name: "Bangkok Cuisine",
      cuisine: "Thai",
      id: 38
    },
    {
      name: "Darbar Indian Cuisine",
      cuisine: "Indian",
      id: 39
    },
    {
      name: "Mantra",
      cuisine: "Indian",
      id: 40
    },
    {
      name: "Janta",
      cuisine: "Indian",
      id: 41
    },
    {
      name: "Hyderabad House",
      cuisine: "Indian",
      id: 42
    },
    {
      name: "Starbucks",
      cuisine: "Coffee",
      id: 43
    },
    {
      name: 'Peet"s Coffee',
      cuisine: "Coffee",
      id: 44
    },
    {
      name: "Coupa Cafe",
      cuisine: "Coffee",
      id: 45
    },
    {
      name: "Lytton Coffee Company",
      cuisine: "Coffee",
      id: 46
    },
    {
      name: "Il Fornaio",
      cuisine: "Italian",
      id: 47
    },
    {
      name: "Lavanda",
      cuisine: "Mediterranean",
      id: 48
    },
    {
      name: "MacArthur Park",
      cuisine: "American",
      id: 49
    },
    {
      name: 'St Michael"s Alley',
      cuisine: "Californian",
      id: 50
    },
    {
      name: "Osteria",
      cuisine: "Italian",
      id: 51
    },
    {
      name: "Vero",
      cuisine: "Italian",
      id: 52
    },
    {
      name: "Cafe Renzo",
      cuisine: "Italian",
      id: 53
    },
    {
      name: "Miyake",
      cuisine: "Sushi",
      id: 54
    },
    {
      name: "Sushi Tomo",
      cuisine: "Sushi",
      id: 55
    },
    {
      name: "Kanpai",
      cuisine: "Sushi",
      id: 56
    },
    {
      name: "Pizza My Heart",
      cuisine: "Pizza",
      id: 57
    },
    {
      name: "New York Pizza",
      cuisine: "Pizza",
      id: 58
    },
    {
      name: "California Pizza Kitchen",
      cuisine: "Pizza",
      id: 59
    },
    {
      name: "Round Table",
      cuisine: "Pizza",
      id: 60
    },
    {
      name: "Loving Hut",
      cuisine: "Vegan",
      id: 61
    },
    {
      name: "Garden Fresh",
      cuisine: "Vegan",
      id: 62
    },
    {
      name: "Cafe Epi",
      cuisine: "French",
      id: 63
    },
    {
      name: "Tai Pan",
      cuisine: "Chinese",
      id: 64
    }
  ];



function createElement(type,className)  {
  const createdElement = document.createElement(type);
  if(className){

    createdElement.className = className;
  }
  return createdElement;
}

// function for creating a card for a particular object
function getCard (restaurant)  {


// creating elements
  const cardDiv = createElement('div','cards')
  const boxDiv = createElement('div','box')
  const headingDiv = createElement('div','heading');
  const heading = createElement('h2',false);

  heading.innerHTML = restaurant.name;
  headingDiv.appendChild(heading);

  const titleDiv = createElement('div','title');

  titleDiv.innerHTML = restaurant.cuisine;

  const btn = createElement('button',false);
  btn.innerHTML ="Book now" 

  boxDiv.appendChild(headingDiv);
  boxDiv.appendChild(titleDiv);
  boxDiv.appendChild(btn);
  cardDiv.appendChild(boxDiv);
  
  return cardDiv;
}

//creating cards and appending them in the parent container
function createCards(){
  const container = document.getElementById("box-container");
  for(var i =0;i <restaurants.length;i++){
    container.appendChild(getCard(restaurants[i]));
  }
}
createCards();

// search bar logic

// get search bar element
const searchInput = document.getElementById("restaurants.name");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("boxes");

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();
        
        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.style.display = "block";
        } else {
            // no match, don't display name
            nameElement.style.display = "none";
        }
    }
});

//  searchbar1

function searchbar(){

}
