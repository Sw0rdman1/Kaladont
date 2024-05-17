import { words } from './words.js';

export const checkIfWordExists = (word: string) => {
    return words.includes(word.toLowerCase())
}

