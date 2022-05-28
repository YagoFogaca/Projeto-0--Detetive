const prompt = require('prompt-sync')();

let sim = 0;
let nao = 0;
let respostas = [];
let pergunta1 = prompt('Pergunta - 1 ').toLowerCase();
while (pergunta1 != 'sim' && pergunta1 != 'nao') {
    pergunta1 = prompt('Pergunta - 1 ').toLowerCase();
}
let pergunta2 = prompt('Pergunta - 2 ').toLowerCase();
while (pergunta2 != 'sim' && pergunta2 != 'nao') {
    pergunta2 = prompt('Pergunta - 2 ').toLowerCase();
}
let pergunta3 = prompt('Pergunta - 3 ').toLowerCase();
while (pergunta3 != 'sim' && pergunta3 != 'nao') {
    pergunta3 = prompt('Pergunta - 3 ').toLowerCase();
}
let pergunta4 = prompt('Pergunta - 4 ').toLowerCase();
while (pergunta4 != 'sim' && pergunta4 != 'nao') {
    pergunta4 = prompt('Pergunta - 4 ').toLowerCase();
}
let pergunta5 = prompt('Pergunta - 5 ').toLowerCase();
while (pergunta5 != 'sim' && pergunta5 != 'nao') {
    pergunta5 = prompt('Pergunta - 5 ').toLowerCase();
}
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
