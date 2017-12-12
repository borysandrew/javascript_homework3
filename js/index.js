const maxNumber = parseInt(prompt('Введіть число'));

function loop(maxNumber) {
    let prev = 1,
        next = 1;
    for (let i = 3; i <= maxNumber; i++) {
        [prev, next] = [next, prev + next]
    }
    return next;
}
document.write('Цикл ' + loop(maxNumber));

function recurs(maxNumber) {
    return maxNumber <= 1 ? maxNumber : recurs(maxNumber - 1) + recurs(maxNumber - 2)
}
document.write('<br>');
document.write('Рекурсія ' + recurs(maxNumber));

function array() {
    let fibonachi = [1, 1];
    for (let i = 2; i < maxNumber; i++) {
        fibonachi[i] = fibonachi[i - 1] + fibonachi[i - 2]
    }
    return fibonachi.pop()
}
document.write('<br>');
document.write('Масив ' + array(maxNumber))