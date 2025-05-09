export const buttonColors = [
    'btn-primary',
    'btn-secondary',
    'btn-success',
    'btn-danger',
    'btn-warning',
    'btn-info',
    'btn-light',
    'btn-dark'
];

function createButton(index, bot) {
    const node = document.createElement("button");
    node.type = "submit";
    node.className = "btn btn-lg ";

    if (buttonColors.length > 0) {
        index = buttonColors.length > index ? index : Math.floor(Math.random() * buttonColors.length-1);
        node.className += buttonColors[index];
    }

    node.textContent = bot.name;

    const a = document.createElement("a");
    a.href = bot.link;
    return {node, a};
}

export function generateButtons(array, element) {
    array.forEach((bot, index) => {
        const {node, a} = createButton(index, bot);
        a.appendChild(node);
        element.append(a)
    })
}

export function createSection(title) {
    const section = document.createElement('div');
    section.className = 'buttons text-center';

    const heading = document.createElement('h3');
    heading.className = 'text-center';
    heading.textContent = title;

    section.appendChild(heading);

    return section;
}