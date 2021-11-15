let cart =[
    {id:1, productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2, productName:"Bardak",quantity:2,unitPrice:30},
    {id:3, productName:"Kalem",quantity:1,unitPrice:20},
    {id:4, productName:"Şarj Cihazı",quantity:2,unitPrice:100},
    {id:5, productName:"Kitap",quantity:3,unitPrice:30},
    {id:6, productName:"Pot",quantity:5,unitPrice:150},

]
// bana sepetimi göster dediğinizde (hepsi burada da) o ekranda yapacağınız genel çalışma => map
// map : iterasyon yapıyor. senin arrayini tek tek dolaşmaya yarıyor. hem iterate ediyor.
// hem de arzu edersen bir aksiyon yapabilrsin. istersen bir işlem yapıp, yepyeni bir array döndürebilirsin

console.log("<ul>")

cart.map(product=>{
    console.log("<li>" + product.productName + " : " + product.unitPrice*product.quantity + "</li>")
}) // sepeti dolaş. er bir product içn bu hareketi yap

console.log("</ul>")

//cart.push( {id:7, productName:"Ruhsat Kılıfı",quantity:1,unitPrice:20})
// bu operasyonu yaptığımızda bellekteki yerini değiştirmiyoruz. bellekteki aynı adrese gönderiyoruz
// angular, react, vue değişimi, "referansın değişmesi yöntemini" ele alırlar.
// bu iki framework, push yaptığımızda sayfayı yeniden render ediyor. Fakat bunu react
// yapmaz. bu noktada react'ın statemenagment'ı önemli(react'ın birçok birleşeni için geçerli bu)

// ekrana datanın değiştiğini sistem, bu şekilde anlamıyor.bizim bunu anlatabilmemiz için
// bu referansı değiştirmemiz gerekiyor..

// örnek:

function addToCart(sepet) {
    sepet.push( {id:7, productName:"Ruhsat Kılıfı",quantity:1,unitPrice:20})
}  

addToCart(cart);
// burada referans tip gönderdik. bellekteki adresini gönderdik.
console.log(cart);

let sayi =10

function sayiTopla(number) {
    number += 1
}
// değer tiplerde atamalarda, değer atanıyordu ve işi bitiyordu.
sayiTopla(sayi)
console.log(sayi)


// filter fonksiyonu : aramalarda kullanılır.
// predicate : tahmin. ben bunun içinde bunu arıyorum diye kullanırız.
// derdimiz yeni bir array oluşturmak. 

// sepette 2'den fazla aldığımız ürünleri filtreliyelim
let quantityOver2 = cart.filter(product=>product.quantity>2)

// bu şart buna uyuyorsa, yepyeni bir arraye ata => buraya istediğim kadar şart koyabilirim.

console.log(quantityOver2);

// reduce 

let total = cart.reduce((acc,product)=> acc + product.unitPrice * product.quantity,0)
console.log(total)