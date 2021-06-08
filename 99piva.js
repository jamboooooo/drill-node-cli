let pivo = 99;

const yargs = require('yargs')

yargs.command({
    command: 'count',
    describe: 'count piva',
    count: {
        type: 'number',
        demandOption: true,
        describe: 'Количество бутылок'
    },
    handler(item) {
        console.log(generateSongText(item.count));
    }
})

yargs.parse()

function generateSongText(pivoCount) {
    let s = '';
    for (let i = pivoCount; i > 0; i--) {
        if (i === 1) {
            s = s + `${i} бутылка пива на стене
${i} бутылка пива!
Возьми одну, пусти по кругу
нет бутылок пива на стене!

`
        } else if (i % 10 === 2) {
            s = s + `${i} бутылки пива на стене
${i} бутылки пива!
Возьми одну, пусти по кругу
${i-1} бутылка пива на стене!

`
        } else if (i % 10 < 5 && i % 10 > 2) {
            s = s + `${i} бутылки пива на стене
${i} бутылки пива!
Возьми одну, пусти по кругу
${i-1} бутылки пива на стене!

`
        } else {
            s = s + `${i} бутылок пива на стене
${i} бутылок пива!
Возьми одну, пусти по кругу
${i-1} бутылок пива на стене!

`
        }
    }

    return s;
}