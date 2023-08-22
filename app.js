console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 0; i < count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
        if (count < 0){
            console.log("The number is not positive")
        }
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    if (age >= 16){
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron, 21");

// Exercise 3 Section
function quadrant(x, y){
    if (x > 0 && y > 0) {
        return 1;
    }
    else if (x < 0 && y > 0){
        return 2;
    }
    else if (x < 0 && y < 0){
        return 3;
    }
    else if (x > 0 && y < 0){
        return 4;
    }
    else if (x == 0 && y != 0){
        return "X Axis";
    }
    else if (x != 0 && y == 0){
        return "Y Axis";
    }
    else {
        return "origin";
    }
}

console.log(quadrant(1, 1));
console.log(quadrant(-1, 1));
console.log(quadrant(-1, -1));
console.log(quadrant(1, -1));
console.log(quadrant(0, -1));
console.log(quadrant(1, 0));
console.log(quadrant(0, 0));

// Exercise 4 Section
function validTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}

function typeOfTriangle(a, b, c){
    let isValid = validTriangle(a, b, c,);
    if (isValid){
        if (a < b && a < c && b == c){
            console.log("isosceles");
        }
        else if (a == b && a == c){
            console.log("equilateral");
        }
        else if (a != b && b != c && a != c){
            console.log("scalene");
        }
    }
    else {
        console.log("Not a valid triangle!");
    }
}
console.log(typeOfTriangle(2, 3, 4)); // scalene
console.log(typeOfTriangle(2, 2, 2)); // equilateral
console.log(typeOfTriangle(1, 2, 2)); // isosceles
console.log(typeOfTriangle(1, 1, 2)); // invalid

// Exercise 5 Section
function availableData(planLimit, day, usage){
    let remainingDays = 30 - day;
    let averageDailyGoal = planLimit / 30;
    let actualDailyRate = usage / day;
    let exceedDataBy = (actualDailyRate * 30) - planLimit;
    let bestContinuedRate = (planLimit - usage) / day;
    if (averageDailyGoal >= actualDailyRate){
        console.log(`You are using your data at a great rate! Your daily usage is ${actualDailyRate}.
        Your total usage is ${usage}. Make sure you do use more than ${bestContinuedRate} per day, this is your 
        remaining daily rate.`)
    }
    else{
    console.log(`${day} days used, ${remainingDays} days remaining
    Average daily use: ${averageDailyGoal} GB/day.
    You are EXCEEDING your average daily use (${actualDailyRate} GB/day),
    continuing this high usage, you'll exceed your
    data plan by 
    ${exceedDataBy} GB.
    To stay below yoour data plan, use no more than
    ${bestContinuedRate} GB/day.`);}
}

availableData(100, 15, 56);
availableData(75, 28, 70);
availableData(35, 17, 22);
