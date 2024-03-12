// Immediately Involed Function Expressions


        (function chai()
        {
            //neamed iife
            console.log(`DB CONNECTED`)
        })();

        ( () => {
            //without named iffe
            console.log(`DB CONNECTED TWO`)
        })();
        ( (named) => {
            //without named iffe
            console.log(`DB CONNECTED TWO ${named}`)
        })("Anand bhaiya")
/*
(FUNCTION)()
The parentheses around the function definition create an expression, and the second set of parentheses immediately invokes the function. This means that the function will be executed as soon as it is defined.

IIFEs are often used to create local scopes for variables and functions. This can help to prevent variable conflicts and unintended modifications of data in the global scope. For example, the following code creates a local variable called message and uses it to display an alert message:


*/