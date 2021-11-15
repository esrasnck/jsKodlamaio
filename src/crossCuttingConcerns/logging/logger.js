export class BaseLogger{

    log(data){
      console.log("default logger : " + data)
    }

}
export class ElasticLogger extends BaseLogger{

    log(data){
      console.log("logged to elastic" + data)
    }

}

export class MongoLogger extends BaseLogger{
    
// override
    log(data){
      console.log("logged to Mongo" + data)
    }

}

