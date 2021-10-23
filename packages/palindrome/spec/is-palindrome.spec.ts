import { isPalindrome } from "../src/is-palindrome";

const strings: { [key: string]: boolean } = {
    "race car": true,
    "not a palindrome": false,
    "A man, a plan, a canal. Panama": true,
    "never odd or even": true,
    nope: false,
    almostomla: false,
    "My age is 0, 0 si ega ym": true,
    "1 eye for of 1 eye": false,
    "Échele leche": true,
    "Аз обичам мач и боза": true,
};

Object.keys(strings).forEach((stringKey) => {
    it(stringKey, () => {
        expect(isPalindrome(stringKey)).toEqual(strings[stringKey]);
    });
});
