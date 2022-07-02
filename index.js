const prompt = require('prompt-sync')();
console.clear();

let sim = 0;

let nao = 0;

let respostas = [];

let pergunta1 = prompt(
    'Você estava com a vitima na noite do crime? ',
).toLowerCase();

while (pergunta1 != 'sim' && pergunta1 != 'nao') {
    pergunta1 = prompt(
        'Você estava com a vitima na noite do crime? ',
    ).toLowerCase();
}

console.clear();

let pergunta2 = prompt('Você conversou com ela nessa noite? ').toLowerCase();

while (pergunta2 != 'sim' && pergunta2 != 'nao') {
    pergunta2 = prompt('Você conversou com ela nessa noite? ').toLowerCase();
}

console.clear();

let pergunta3 = prompt('Vocês brigaran? ').toLowerCase();

while (pergunta3 != 'sim' && pergunta3 != 'nao') {
    pergunta3 = prompt('Vocês brigaran? ').toLowerCase();
}

console.clear();

let pergunta4 = prompt('Você gritou com ela? ').toLowerCase();

while (pergunta4 != 'sim' && pergunta4 != 'nao') {
    pergunta4 = prompt('Você gritou com ela? ').toLowerCase();
}

console.clear();

let pergunta5 = prompt('Você tocou nela? ').toLowerCase();

while (pergunta5 != 'sim' && pergunta5 != 'nao') {
    pergunta5 = prompt('Você tocou nela? ').toLowerCase();
}

console.clear();

respostas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];

for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] == 'sim') {
        sim++;
    } else if (respostas[i] == 'nao') {
        nao++;
    }
}

if (sim >= 4) {
    console.log('Vocé é CULPADO!');
} else if (sim == 3) {
    console.log('Você é SUSPEITO!');
} else if (sim >= 1) {
    console.log('Você é INOCENTE!');
}
