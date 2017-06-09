var myarr = [1,5,25, 125,42];
for (var index in myarr){
console.log(myarr[index]*5);
}

x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
x.push(100);
x.push(['hello', 'world', 'javascript is funt'])
for (var idx =0; idx<x.length; idx++){

  console.log(x[idx])
}
sum=0;
for(var x = 2; x < 500; x++){
  sum+=x;
}
console.log(sum)

arr = [100, 88, 50,90,25,-3,0];
sum=0;
min = arr[0];
for(var idx=0; idx<arr.length; idx++){
  sum=sum+arr[idx];
  if(arr[idx]<min){
    min=arr[idx];

    console.log(sum);
    console.log(min);
  }
  avg=sum/arr.length;
}
console.log('min is', min)
console.log(sum, arr.length, avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja){
  console.log(key, newNinja[key]);
}
