export default class UserService{
    constructor(loggerService){
        this.users =[] // getCustomersFromDb() => diyeceğim gerçek hayatta
        this.loggerService =loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
    }
    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=> u.id ===id)
    }
}

// export = public gibi => dışardan import edilebilir.
// default = js dosya bazlı olduğu için, user service 'i import ettiğimde 
// => default olarak bunu import et demek.