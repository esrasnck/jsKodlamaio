function addToCart(productName="Elma",quantity){

console.log("sepete eklendi. ürün : " + productName +" adet : " + quantity)
}

addToCart("esra",10)

// js, siz bunu herhangi bir transpiler ile beslemediğiniz sürece, (typescript gibi) type-safety sağlanmaz.

let sayHello = ()=>{

    console.log("hello world !")
}

sayHello();
//değişkene, sen bir fonksiyonsun ve fonksiyon olarak çalıştıracağım kod blogu da budur.

let sayHello2 = function(){
    console.log("Hello world 2 !")
}
// klasik fonksiyon da bir değişkene atanabilir.

sayHello2();

function addToCart2(productName,quantity,unitPrice) {
    // ürünü sepete eklerken benim birden fazla bilgiye ihtiyacım var.
    // birden fazla parametreyi ayrı ayrı göndermek doğru bir kullanım değildir. bu tip durumlar için bizler obje oluştururuz.
}

// encapsulation
let product1= {  // object notation
    productName:"Elma",
    unitPrice:10,
    quantity:5
}

function addToCart3(product) {
    console.log("ürünün adı : "+ product.productName + " ürünün fiyatı : "+ product.unitPrice + " ürünün sayısı : "+ product.quantity )
}

addToCart3(product1)

let product2 ={productName:"Elma",unitPrice:10,quantity:5}
let product3 ={productName:"Elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName='Karpuz'
console.log(product3.productName)

function addToCart4(x) {
    console.log(products)
}
addToCart4(products) // buradan undefiend gelir. çünkü yukardan aşağı okuyor ve scope bu fonksiyonun altında.

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)  // bu products'a bunun referansını gönderiyorsun. 

function add(number1,number2){
    console.log(number1+number2)
}

function add2(number1,number2,number3){
    console.log(number1+number2+ number3)
}

// bunun sonu olmadığı için (solid => o harfi)

// ...numbers => rest operatörü = bir fonksiyonun içerisinde değişkenin içine ... koyarsanız, o rest operatörü. gelen parametreleri array yapıyor.
// rest'i her zaman fonksiyonun sonuna bırakın !
function add3(bisey, ...numbers) {  // array benzeri bir altyapı ile tutulmuş oluyor.
    let total=0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
        console.log(total)
    }

    console.log(numbers)
    console.log(bisey)
}

add3(1,2,3,4)

let numbers=[30,20,10,50]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))  // => spread operatörü sayıları arraydan ayırır

// destructing

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
   {name:"İç Anadolu", population:"20M"} ,
   {name:"Marmara", population:"30M"} ,
   {name: "Karadeniz", population:"10M"},
   [
       ["Ankara","Konya"],
       ["İstanbul","Bursa"],
       ["sinop","trabzon"]
   ]   
]

// console.log(icAnadolu.name)
// console.log(marmara.population)
//console.log(karadeniz)
// console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice,quantity:newQuantity}
 = {productName:"Elma",unitPrice:10,quantity:5})

 console.log(newProductName)
 console.log(newUnitPrice)
 console.log(newQuantity)

 