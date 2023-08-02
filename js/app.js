let badwords = ["clear", "water", "tie"];
let count;

function checkWord() {
number = 0;

let text = "";
text = document.getElementById ("sent"). value;

let words = [];
words = text.split ("");

for (let i = 0; i <badwords.length; i ++) {
for (let j = 0; j <words.length; j ++) {
if (words [j] == badwords [i]) {
count ++;
}
}}


if (count == 0) {
document.querySelector (".message"). innerHTML = "No bad name found";
}

else {
document.querySelector (".message"). innerHTML = "Bad word detected <br> Total nouns:" + count;
}


document.getElementById ("sent"). value = "";
};