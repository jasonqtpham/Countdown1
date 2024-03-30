/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */


const bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];

const addNewEntry = (title, author) => {
    bookList.push({title: title, author: author})
};  

const removeEntry = (title) => {
    bookList.splice(bookList.indexOf(title), 1);
};

const getAllAuthor = (booklist) => {
    let authorList = [];
    bookList.forEach(book => authorList.push(book.author));
    return authorList;
}
const getAllTitle = (booklist) => {
    let authorList = [];
    bookList.forEach(book => authorList.push(book.title));
    return authorList;
}
removeEntry("Moby Dick")
console.log(getAllAuthor(bookList));

  /* Intermediate Challenge */
  
  /* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
    number is positive or negative using a ternary operator (assume the number will never be zero) */
  const signOfNum = (number) => {return (number>=0)?"POSITIVE":"NEGATIVE"}
  console.log(signOfNum(0));
  /* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
    the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
  const day = "thursday";
  
  switch(day.toLowerCase()) {
    case "monday":
        console.log("good luck");
        break;

    case "tuesday":
        console.log("taco tuesday");
        break;

    case "wednesday":
        console.log("hump day");
        break;

    default:
        console.log("party time");
  }
  /* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */
  const sumUp = input => {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumUp(7));
  /* Harder Challenge */
  
  /* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
      me what I should wear accordingly */
  const celToFaren = degree => {
    const faren = (degree * (9/5)) + 32;
    if (faren > 60) console.log("Short sleeves weather");
    else console.log("long sleeves");
    return faren
  }
  console.log(celToFaren(50));
  /* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
    using .forEach() */
  
  const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

  const countTruthy = arr => {
    let count = 0;
    arr.forEach(item => {
        if (item) {
            count++;
        }
    })
    console.log(count)
  }
  countTruthy(exampleArray)
  /* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */
  
  const attendance = [
    { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
    { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
    { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
    { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
    { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
    { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
    { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
  ];
  
  /* Hardest Challenge (Don't do this without completing harder challenges) */
  
  /* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
      an array of the path you took to make it equal four
      ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
      For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
  
  // assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
  // does not support leading zeros