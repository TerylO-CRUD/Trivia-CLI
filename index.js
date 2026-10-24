const readline = require("node:readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const questions = 
[
    { 
        text: "Which keyword declares a block-scoped variable?", options: 
        [
            "var", "let", "def", "dim"
        ], answer: 2 
    },
    {
        text: "What does Array.prototype.map return?", options: 
        [
            "The original array", "A single value", "A new array", "undefined"
        ], answer: 3 
    },
    {
        text: "Which function runs code once after a delay?", options: 
        [
            "setInterval", "setTimeout", "setImmediate", "delay"
        ], answer: 2 
    },
    {
        text: "What is typeof [] in JavaScript?", options: 
        [
            "array", "list", "object", "undefined"
        ], answer: 3 
    },
    {
        text: "Which method keeps only items that pass a test?", options: 
        [
            "filter", "reduce", "find", "some"
        ], answer: 1 
    },
];