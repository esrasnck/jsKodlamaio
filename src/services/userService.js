import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
  constructor(loggerService) {
    //  this.users =[] // getCustomersFromDb() => diyeceğim gerçek hayatta
    this.employees = [];
    this.customers = [];
    this.errors = []; // refaktör et
    this.loggerService = loggerService;
  }

  load() {
    // todo : refaktör et --- magic string ?

    for (const user of users) {
      //console.log(user);
      switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidtyForErrors(user)) {
            this.customers.push(user);
          }

          break;
        case "employee":
          if (!this.checkEmployeeValidtyForErrors(user)) {
            this.employees.push(user);
          }

          break;
        default:
          this.errors.push(new DataError("Wrong user type", user));
          break;
      }
    }
  }

  //hocam global bir UserValidate class ı yapmak daha mantıklı olmaz mı
  // user type geçilecek. kredi kartı hariç hepsi zorunlu olsun istiyorum.
  checkCustomerValidtyForErrors(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }

    // refactöring alanı :)  => bunu da bölmek gerekiyor
    if (Number.isNaN(Number.parseInt(user.age))) {
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number`, user)
      );
      hasErrors = true;
    }

    return hasErrors;
  }

  // refactor et.
  checkEmployeeValidtyForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }
    if (Number.isNaN(Number.parseInt(user.age))) {
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number`, user)
      );
      hasErrors = true;
    }
    return hasErrors;
  }

  add(user) {
    switch (user.type) {
      case "customer":
        if (!this.checkCustomerValidtyForErrors(user)) {
            this.customers.push(user);
          }

        break;
      case "employee":
        if (!this.checkEmployeeValidtyForErrors(user)) {
            this.employees.push(user);
          }
        break;
      default:
        this.errors.push(new DataError("this user Cannot be added, wrong user type", user));
        break;
    }
    this.loggerService.log(user);
  }

  // ayrı service yapcam
  listCustomers() {
     return this.customers
  }

  getCustomerById(id) {
     return this.customers.find(u=> u.id ===id)
  }

  getCustomersSorted(){

    // elimizdeki datalar obje. ilkel tip arrayi. bu yüzden bizim bir sort mantığını vermemiz lazım.
    return  this.customers.sort((customer1,customer2)=>{
          // buraları dinamik yapabiliriz customer1["firstName"] => gibi
          if(customer1.firstName>customer2.firstName){
              return 1;
          }else if(customer1.firstName===customer2.firstName){
              return 0;

          }else{
              return -1;

          }
      })
  }
}
