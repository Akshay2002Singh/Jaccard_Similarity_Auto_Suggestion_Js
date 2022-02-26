// User    Python C C++ Node Css Html Django Kotlin Pandas Numpy Jupyter Js React
// user1     1    0  1    0    1   1     1      1      1     1      1     1   1
// user1     1    0  1    0    1   1     0      0      1     0      1     0   0
// user1     0    0  1    1    0   1     1      0      0     0      1     1   0
var user_data = {
    user1 : [1,0,1,0,1,1,1,1,1,1,1,1,1],
    user2 : [1,0,1,0,1,1,0,0,1,0,1,0,0],
    user3 : [0,0,1,1,0,1,1,0,0,0,1,1,0],
    user4 : [0,1,0,1,0,1,1,0,0,1,1,0,1]
};

let new_user = [0,1,0,0,0,0,1,1,0,0,0,0,1];


function sum_logical_or(x,y){
    let count = 0;
    for(let i =0;i<x.length ;++i){
        if(x[i]==1 && y[i]==1){
            count+=1;
        }
    }
    return count;
}

c = sum_logical_or(user_data['user1'],new_user);
console.log(c)