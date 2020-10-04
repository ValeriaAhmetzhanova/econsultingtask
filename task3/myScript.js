var text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

for (let i = 0; i < text.length; i++) {
    let match = text[i].textContent.match(/\b\w*ing\b/ig);
    if (match !== null) {
        for (let j = 0; j < match.length; j++) {
            text[i].innerHTML = text[i].innerHTML.replace(match[j], "<span class='task3--word-highlighted'>" + match[j] + "</span>");
        }
    }
}