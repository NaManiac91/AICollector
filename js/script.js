import {generateButtons, createSection} from './utils.mjs';

// Get the container where the sections will be appended
const container = document.body;

fetch('./data.json')
    .then((response) => response.json())
    .then(data => {
        // Loop through the data and append each section to the container
        Object.keys(data).forEach((title) => {
            const section = createSection(title);
            container.appendChild(section);
            container.appendChild(document.createElement('br')); // Add a line break after each section
            generateButtons(data[title], section);
        });
    });