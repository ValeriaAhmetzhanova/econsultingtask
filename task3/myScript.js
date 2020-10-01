window.onload = () => task3();

function task3() {
    let match = document.body.textContent.match(/\b\w*ing\b/ig);
    for (let i = 0; i < match.length; i++) {
        document.body.innerHTML = document.body.innerHTML.replace(match[i], "<span class='task3--word-highlighted'>" + match[i] + "</span>");
    }
}