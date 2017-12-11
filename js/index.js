var Fibonachi = [];

function count() {
    return Fibonachi[i] = Fibonachi[i - 1] + Fibonachi[i - 2]
}

function write() {
    document.write('<br>');
    document.write(Fibonachi);
    document.write('<br>');

}
Fibonachi.length = prompt("Ведіть число Фібоначі");
Fibonachi[0] = 1;
Fibonachi[1] = 1;
let i = 2;
//СПОСІБ 1
while (i < Fibonachi.length) {
    count();
    i++
};
document.write('Спосіб 1');
write();
//СПОСІБ 2
for (i = 2; i < Fibonachi.length; i++) {
    count()
}
document.write('Спосіб 2');
write();
