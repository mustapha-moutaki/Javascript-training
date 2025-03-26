let arr=['a', 'aa', 'aaaa', 'aaa'];
let arrLenght = arr.length;
for(let i=0; i<arrLenght;i++){
   for(let j=1; j<arrLenght-1;j++){
    if(arr[i].length<arr[j].length){

    }
   }
}


//ex2
let arr1= [1,0,2,3,4];
let arr2=[3,5,6,7,8,13];

let arr1Lenght= arr1.length;
let arr2Lenght = arr2.length;

for(let i=0; i<arr1.length; i++){
    let arr3 = arr1[i]+arr2[i];
}


let arr1=[1,2];
let arr2=['a', 'b'];
let i;

for(i=0; i<arr1.length; i++){
  for(let j=0; j<arr2.length; j++){
    let arr3=[];
  arr3.push(arr1[i],arr2[j]);
  console.log(arr3)
  }
}
Output:

[ 1, 'a' ]
[ 1, 'b' ]
[ 2, 'a' ]
[ 2, 'b' ]
