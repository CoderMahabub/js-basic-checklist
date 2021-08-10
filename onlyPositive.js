// 5. onlyPositive()  | if - numbers come then stop the loop and print all the numbers before negative reach.
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
console.log(rollNumbers);