import { encode, decode } from "../src/run-length-encoding";

const strings: { [key: string]: string } = {
    "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB": "12WB12W3B24WB",
    "ABBCCCDDDDEEEEEFFFFFFGGGGGGGHHHHHHHHIIIIIIIII": "A2B3C4D5E6F7G8H9I",
};

Object.keys(strings).forEach((strToEncode) => {
    it(strToEncode, () => {
        expect(encode(strToEncode)).toEqual(strings[strToEncode]);
        expect(decode(strings[strToEncode])).toEqual(strToEncode);
    });
});
