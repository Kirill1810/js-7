// 1
const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers); // [1, 10, 3]


// 2

const num = [1, 2, 3];
num.push(4);
console.log(num);





//3

const Numbers = [4, 5, 6, 7, 8];
 const all = Numbers.reduce((sum, price) => sum + price, 0)
console.log(all)




// 4



const arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// 5

const arr2 = [ "12354", "123", "1234" ]


for (let i = 0; i < arr2.length; i++){
    if (arr2[i].length >= 5){
        console.log (arr2[i])
    }
}





// 6
const arr3 = [12, 45, 23, 67, 89, 34, 22, 78, 55, 10];
const max = Math.max(...arr3);
console.log(max); 


// 7

const arr4 = [12, 5, 8, 6];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] % 2 === 0) {
        console.log(arr4[i]);
    }
}