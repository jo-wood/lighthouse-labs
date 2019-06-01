var chalk = require('chalk');

var message = 'Hello ' + chalk.yellow('World'), 
    name = chalk.bold.magenta('Joanna'),
    coffee = chalk.underline.greenBright('Coffeeeeee'),
    strike = chalk.strikethrough.red('STRIKE!'),
    inverse = chalk.inverse.bgCyanBright('Inverse inverse inverse'),
    cssTomato = chalk.keyword('tomato').bold('This should be tomato color');


console.log(message);
console.log(name);
console.log(coffee);
console.log(strike);
console.log(inverse);
console.log(cssTomato);


//gradient string is a cool related pkg

