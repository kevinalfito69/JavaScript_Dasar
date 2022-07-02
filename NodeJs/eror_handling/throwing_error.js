//  kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror kita sendiri:
let json = '{"age":20}'

try{
    let user = JSON.parse(json)
    if(!user.name){
        throw new SyntaxError('Name required')
    }
    console.log(user.name); // undefined
    console.log(user.age); 
}catch(error){
     if (error instanceof SyntaxError) {
       console.log(`JSON Error: ${error.message}`);
     } else if (error instanceof ReferenceError) {
       console.log(error.message);
     } else {
       console.log(error.stack);
     }
}