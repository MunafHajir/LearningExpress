"use strict";

class ExampleController{

    getExample(req,res){
        return res.send("/GET Examples")
    }
}

// export function getExampleController(){
//     ExampleControllerInstance = new ExampleController();
//     return ExampleControllerInstance;
// }

// export ExampleController = ExampleController;