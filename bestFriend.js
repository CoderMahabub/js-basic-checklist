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