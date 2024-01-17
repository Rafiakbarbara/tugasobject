let sepatu ={
    merk:"adidas",
    warna:"hitam",
    ukuran:"44",
    harga:"800000",
    kondisi:"60"
}

console.log("merk   :"+sepatu.merk);
console.log("warna  :"+sepatu.warna);
console.log("ukuran  :"+sepatu.ukuran);
console.log("harga  :"+sepatu.harga);

if(sepatu.kondisi >=90){
    console.log("sepatu sangat bagus");
}
else if(sepatu.kondisi <=40){
    console.log("sepatu sangat jelek");
}
else if(sepatu.kondisi >=60){
    console.log("sepatu lumayan bagus");
}