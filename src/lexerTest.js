const Parser = require("./parser");
const evaluate = require("./Runtime/evaluator");

const input = "asdf";

const parser = new Parser();

let program = parser.produceAST(input);

const result = evaluate(program);

console.log(result);
