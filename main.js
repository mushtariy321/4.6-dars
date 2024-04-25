// let botPlayer = Math.ceil(Math.random() * 3)

// let UserPlayer = +prompt(`Son kriting \n1)Qaychi \n2)Qog'oz \n3)Quduq`)

// console.log(botPlayer);

// console.log(UserPlayer);

// if (botPlayer === 1) {
//     console.log(`Qaychi`);
// }

// else if (botPlayer === 2) {
//     console.log(`Qog'oz`);
// }

// else if (botPlayer === 3) {
//     console.log(`Quduq`);
// }


// if (botPlayer === 1) {
//     console.log(`Qaychi`);
// }

// else if (botPlayer === 2) {
//     console.log(`Qog'oz`);
// }

// else if (botPlayer === 3) {
//     console.log(`Quduq`);
// }

// if (UserPlayer === botPlayer) {
//     console.log(`Durrang`);
// }

// else if (UserPlayer === 1 && botPlayer === 2) {
//     console.log(`Siz yutdingiz!`);
// }

// else if (UserPlayer === 1 && botPlayer === 3) {
//     console.log(`Bot yutdi!`);
// }

// else if (UserPlayer === 2 && botPlayer === 3) {
//     console.log(`Siz yutdingiz!`);
// }

// 3chi vazifa

let num = +prompt(`Son kriting!`)
let num2 = +prompt(`yana son kriting!`)
let text = +prompt(`amalni tanlang! \n1.qo'shish \n2.ayirish \n3.Kopaytirish \n4.Bo'lish`)
let result;
if (text === 1) {
    result = num + num2
    alert(`1-son :${num} qo'shamiz 2-son :${num2} = ${result}`);
}

else if (text === 2) {
    result = num - num2
    alert(`1-son :${num} ayiramiz 2-son :${num2} = ${result}`);
}

else if (text === 3) {
    result = num * num2
    alert(`1-son :${num} ko'paytirish 2-son :${num2} = ${result}`);
}

else if (text === 4) {
    result = num / num2
    alert(`1-son :${num} bo'lamiz 2-son :${num2} = ${result}`);
}


// 1-vazifa

// let ballPrompt = +prompt('ball kirgizing')

// if (ballPrompt <= 100 && ballPrompt > 85) {
//     console.log('budject');
// }

// else if (ballPrompt < 85 && ballPrompt > 61) {
//     console.log(`Contract`);
// }

// else if (ballPrompt < 60 && ballPrompt > 51) {
//     console.log(`supercontract`);
// }

// else if (ballPrompt < 50 ){
//     console.log(`fail`);
// }

// 2chi vazifa
// let text1 = `webBrain`
// let text2 = `ITBrain`
// console.log (text1.repeat(10))
// console.log(text2.repeat(10))
// console.log(text1.replace(`web`, `IT`))
// console.log(text2.replace(`IT`, `web`))