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
    async function play() 
    {
        let score = 0;
        let gameOver = false;
        
        const gameTimer = setTimeout(() =>
        {
            gameOver =true;
        },120 * 1000
        );
        
            for (const q of questions) 
            {
                if (gameOver) 
                {
                    console.log("Game time is up!");
                    break;
                }   
                console.log("\n" + q.text);
            for (let i = 0; i < q.options.length; i++) 
            {
                console.log((i + 1) + ") " + q.options[i]);
            }

        let tooSlow = false;
        const questionTimer = setTimeout(() => 
        {
            tooSlow = true;
        }, 15 * 1000);

        const reply = await rl.question("Your answer: ");
            clearTimeout(questionTimer);

                if (tooSlow) 
                {
                    console.log("Too slow! No point.");
                } 
                else if (Number(reply) === q.answer) 
                {
                    console.log("Correct!");
                    score++;
                } 
                else 
                {
                    console.log("Wrong. Answer was " + q.answer);
                }
            }   
    
        
            clearTimeout(gameTimer);
                console.log("\nScore: " + score + "/" + questions.length);
                rl.close();
    }
            
    play();