const text = "Hello, world! My name is ";
const name = [
    {char: 'd', class: 'one'},
    {char: 'a', class: 'two'},
    {char: 'v', class: 'three'},
    {char: 'i', class: 'four'},
    {char: 'd', class: 'five'}
];
const developerText = "and I'm a software developer...";
let index = 0;

function typeText() {
    const typingTextElement = document.getElementById('typing-text');
    const developerTextElement = document.getElementById('developer-text');

    if (index < text.length) {
        typingTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
    } else if (index < text.length + name.length) {
        const nameIndex = index - text.length;
        typingTextElement.innerHTML += `<span class="${name[nameIndex].class}">${name[nameIndex].char}</span>`;
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
    } else if (index < text.length + name.length + developerText.length) {
        const developerTextIndex = index - text.length - name.length;
        developerTextElement.innerHTML += developerText.charAt(developerTextIndex);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
    }
}

window.onload = typeText;
