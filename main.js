import { toJadenCase } from "./src/jaden-casing-strings.js" 

(function main(){
    var arg = process.argv[2]
    console.log(toJadenCase(arg));
}())