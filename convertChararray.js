/*Task 1: Decode the Following Reversed Messages
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
arrays dynamically. Then log the messages.
1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam
gnidoC"
2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
gnitirw edoc tuB"
3. Message 3: "!elpoep rehto morf tnereﬃd on era uoy ,elbuort evah uoy fI
.lanoisseforp a ekil leef ot evah t'nod uoY"
4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
Task 2: Write your own reverse messages
1. First, write your own short messages of inspiration (without reversing them).
2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamiclly so that you have a reverse output.
3. Then log the messages.*/

const message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";

const decoded1 = message1.split('').reverse().join('');
console.log(decoded1);
const message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
const decoded2 = message2.split('').reverse().join('');
console.log(decoded2);
const message3 = "!elpoep rehto morf tnereﬃd on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
const decoded3 = message3.split('').reverse().join('');
console.log(decoded3);
const message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";
const decoded4 = message4.split('').reverse().join('');
console.log(decoded4);

// Task 2: Write your own reverse messages
const myMessage1 = "Believe in yourself and all that you are.";
const reversedMyMessage1 = myMessage1.split('').reverse().join('');
console.log(reversedMyMessage1);

const myMessage2 = "Every day is a new opportunity to grow.";
const reversedMyMessage2 = myMessage2.split('').reverse().join('');
console.log(reversedMyMessage2);

const myMessage3 = "Success is not final, failure is not fatal.";
const reversedMyMessage3 = myMessage3.split('').reverse().join('');
console.log(reversedMyMessage3);

const myMessage4 = "Keep pushing forward, no matter the obstacles.";
const reversedMyMessage4 = myMessage4.split('').reverse().join('');
console.log(reversedMyMessage4);    