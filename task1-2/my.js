task1();
task2();

function task1() {
    let array = [1, 2, 7, 5, 6, 8, 4];

    $(".task1--input").html(array);

    let even = array.filter(x => x % 2 === 0).sort((a ,b) => a-b);
    let odd = array.filter(x => x % 2 !== 0).sort((a ,b) => b-a);
    array = array.map(function (x) {
        return x % 2 === 0 ? even.shift() : odd.shift();
    });

    $(".task1--output").html(array);
}

function task2() {
    let result = $(".task2--input").text().replace(/\br\w*\b/ig, word => "<span class='task2--word-red'>" + word.split("").reverse().join("") + "</span>");
    $(".task2--output").html(result);
}
