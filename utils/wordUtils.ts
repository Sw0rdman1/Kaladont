import { words } from './words.js';

export const checkIfWordExists = (word: string) => {
    return words.includes(word.toLowerCase())
}

export const generateRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)].toUpperCase()
}

