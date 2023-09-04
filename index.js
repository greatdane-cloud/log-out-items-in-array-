let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function toDay (keep){
    for (let i = 0; i < keep.length; i++){
        console.log(keep[i])
    }

}

toDay(myCourses)

// We need always call the functin with the array as the method 
// always need to use a for loop to aquire info on an array 