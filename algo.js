// dummy dataset type
// User    Python C C++ Node Css Html Django Kotlin Pandas Numpy Jupyter Js React
// user1     1    0  1    0    1   1     1      1      1     1      1     1   1
// user1     1    0  1    0    1   1     0      0      1     0      1     0   0
// user1     0    0  1    1    0   1     1      0      0     0      1     1   0

// Data Set
var user_data = {
    user1: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    user2: [1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    user3: [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    user4: [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    user5: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
    user6: [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    user7: [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
    user8: [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
    user9: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    user10: [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    user11: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    user12: [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    user13: [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0],
    user14: [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
    user15: [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    user16: [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    user17: [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    user18: [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    user19: [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0],
    user20: [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    user21: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    user22: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    user23: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    user24: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    user25: [1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    user26: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    user27: [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    user28: [1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    user29: [1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    user30: [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    user31: [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    user32: [0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
    user33: [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    user34: [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    user35: [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    user36: [0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    user37: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    user38: [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    user39: [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
    user40: [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
    user41: [1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1],
    user42: [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    user43: [0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    user44: [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
    user45: [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
    user46: [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
    user47: [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    user48: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    user49: [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0],
    user50: [1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    user51: [0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    user52: [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    user53: [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
    user54: [0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1]
};

// user for which we need to find recommendation
let new_user = [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1];

// funtion to calculate sum of logical and where value is 1
function sum_logical_and(x, y) {
    let count = 0;
    for (let i = 0; i < x.length; ++i) {
        if (x[i] == 1 && y[i] == 1) {
            count += 1;
        }
    }
    return count;
}
// funtion to calculate total number of tags
function sum_logical_or(x, y) {
    let count = 0;
    // for(let i =0,j=0;i<x.length || j<y.length ;++i,++j){
    //     count+=1;
    // }
    count = 13;
    // we are using constant number because number of tags are fix and does not changes with our data 
    return count;
}

// js object that save similarities between given user and other users
let similarities = {}
for (user in user_data) {
    similarities[user] = sum_logical_and(user_data[user], new_user) / sum_logical_or(user_data[user], new_user)
}

// printing valuse obtained
for (user in similarities) {
    console.log(`${user} = ${similarities[user]}`)
}

// if our database is small then we will sort and then show top users
// otherwise
// if we need to show top 10 user as recomendation then we will just find top 10 valuse

console.log("\n\n Recommended Users \n\n");

var recommended_user = []

for(let i =0;i<10;++i){
    var max=0;
    var user_to_delete = "";
    for(user in similarities){
        if(max<similarities[user]){
            max=similarities[user];
            user_to_delete = user;
        }
    }
    console.log(`${user_to_delete} = ${max}`);
    delete similarities[user_to_delete];
}