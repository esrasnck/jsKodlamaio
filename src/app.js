console.log("merhaba kodlama.io")

// js'tip güvenli değildir.

// ecmascript standartlar

// saf js için => var

// saf js tip güvenli değildir.
// degiskenler tanımlandıkları kapsamda geçerlidir.
// let: bunu korurken, var bunu koruyamaz. en son atandığı değeri alır.
// var, global bir değişkenmiş gibi çalışır.(local alanda yazılsa da)

// const : constantdan geliyor. sabit demek.
let dolarDun = 9.20;
dolarDun ="Ankara";
{
    let dolarDun =9.10
}

console.log(dolarDun)

const euroDun =11.2;
// euroDun =11;  //  euroDun is read-only' hatası alırız. const ilk atandığında başka birşey atanmaz. read-only'dir.


console.log(euroDun);

//array
// camelCasing
//PascalCasing
//snake_casing vs. 
let konutKredisi =[12,"konut kredisi","emlak konut kredisi","kamu konut kredisi"]

for (let index = 0; index < konutKredisi.length; index++) {
    const element = konutKredisi[index];
    console.log(element);
}

console.log(konutKredisi)