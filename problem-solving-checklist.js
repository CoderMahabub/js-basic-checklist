/* // 1. conversion feetToInch
function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}

const inInch = feetToInch(1);
console.log(inInch); */


/* // 2. Conversion sentimeterToMeter
function centimeterToMeter(centimeter) {
    const resultInMeter = centimeter / 100;
    return resultInMeter;
}
const centimeter = centimeterToMeter(1);
console.log(centimeter); */


/* // 3. Calculation pageRequirements():
//book 1 has 100 pages
//book 2 has 200 pages
// book 3 has 300 pages
function pageRequirements(quantityBook1, quantityBook2, quantityBook3) {
    const pagesOfBook1 = 100;
    const pagesOfBook2 = 200;
    const pagesOfBook3 = 300;
    const totalPagesOfBook1 = pagesOfBook1 * quantityBook1;
    const totalPagesOfBook2 = pagesOfBook2 * quantityBook2;
    const totalPagesOfBook3 = pagesOfBook3 * quantityBook3;
    const totalPagesOf3Books = totalPagesOfBook1 + totalPagesOfBook2 + totalPagesOfBook3;
    return totalPagesOf3Books;

}
const numberOfBooksToPrint = pageRequirements(1, 1, 1);
console.log(numberOfBooksToPrint); */


// 4. bestFriend() Find the friend whose name is biggest
function bestFriend(friends) {
    let largestName = friends[0];
    for (friend of friends) {
        if (friend.length > largestName.length) {
            largestName = friend;
        }
    }
    return largestName;
};
let friendList = ['mahbub', 'azam', 'raton', 'masud', 'Umme Habiba', 'afrin', 'Yakub Ali'];
const largestFriendName = bestFriend(friendList);
console.log(largestFriendName);


/* // 5. onlyPositive()  | if - numbers come then stop the loop and print all the numbers before negative reach.
let rolls = [32, 32, 22, 14, 4, 15, 3, 5, 4, -4, 4, 4, 5, 6, 8];
function onlyPositive(rollNumber) {
    for (roll of rollNumber) {
        if (roll > 0) {
            console.log(roll);
        }
        else {
            break;
        }
    }
}
const rollNumbers = onlyPositive(rolls);
console.log(rollNumbers); */

