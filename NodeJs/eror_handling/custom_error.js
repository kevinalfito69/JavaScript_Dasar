class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = 'Validation Error'
    }
}

let json = '{"umur":32}'

try{
    const user = JSON.parse(json)
    if(!user.name){
        throw new SyntaxError('"name", Required')
    }
}catch(error){
    if(error instanceof SyntaxError){
        console.log(`Error pada ${error.message}`)
    }else if (error instanceof ValidationError) {
      console.log(`Error pada${error.name} ${error.message}`);
    }else if (error instanceof ReferenceError) {
      console.log(`Error pada ${error.message}`);
    }else{
        console.log(error.stack)
    }

}