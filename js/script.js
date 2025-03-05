import {generateButtons, createSection} from './utils.mjs';
import {chatBots, images, sounds, buttonColors} from './data.js';

const data = [chatBots, images, sounds]

// Array of section titles
const sections = ['Chat Bot', 'Image Generator', 'Music Generator'];

// Get the container where the sections will be appended
const container = document.body; // or any other container element

// Loop through the sections array and append each section to the container
sections.forEach((title, index) => {
    const section = createSection(title);
    container.appendChild(section);
    container.appendChild(document.createElement('br')); // Add a line break after each section
    generateButtons(data[index], section, buttonColors);
});