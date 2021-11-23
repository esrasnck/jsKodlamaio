export default class User {
  // js de typescript gibi bu sınıfı tanımlayamıyoruz. o yüzden constructorda
  // set ediyoruz. bunu yaparken de prototyping denen yapıyı kullanıyoruz.

  constructor(id, firstName, lastName, city,age) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.city = city
    this.age =age
  }
}
