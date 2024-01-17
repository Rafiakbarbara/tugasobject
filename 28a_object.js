let motor ={
    merk:"honda",
    model:"supra",
    tenaga:"1000cc",
    kondisi:"100"
}

console.log("merk   :"+motor.merk);
console.log("model   :"+motor.model);
console.log("tenaga   :"+motor.tenaga);

if(motor.kondisi >=100){
    console.log("kondisi motor anda sangat mulus");
}
else if(motor.kondisi <=2){
    console.log("kondisi motor anda kurang bagus");
}

