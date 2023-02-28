const obj = {
    name:"simplyjs",
    age:"age",
    address:"jharkhand"
}

console.log(obj);

const jsondata=JSON.stringify(obj);

console.log(jsondata);

const objdata = JSON.parse(jsondata);

console.log(objdata);
