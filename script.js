// Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}; 


// Question 2
const heading = document.querySelector("h3"); 
console.dir(heading); 


// Question 3
heading.style.fontSize = "2em";


// Question 4
heading.classList.add("subheading"); 


// Question 5
const paragraphs = document.querySelectorAll("p"); 


// Question 6
const resultsContainer = document.querySelector(".results"); 
resultsContainer.innerHTML = `<p>New paragraph</p>`; 


// Question 7
function catName (list) {
 for (let i = 0; i < list.length; i++) {
     console.log(list[i].name);
 }
}

catName(cats);



// Question 8 
function catName(createCats) {
    let name; 
    let age; 
    let returnValue; 
    for (let i= 0; i < createCats.length; i++) {
        name = createCats[i].name;
        if(createCats[i].age == null) {
            age = "Age unknown";    
        }
        else {
            age = createCats[i].age;
        }
        if(returnValue == null) {
            returnValue = `<div>\n  <h5>${name}</h5>\n  <p>${age}</p>\n</div>\n`
        }
        else {
            returnValue = returnValue += `<div>\n    <h5>${name}</h5>\n    <p>${age}</p>\n</div>\n`; 
        }
    }
    return returnValue;
}

console.log(catName(cats)); 
