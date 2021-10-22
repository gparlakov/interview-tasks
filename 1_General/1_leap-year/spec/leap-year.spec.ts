import { isLeapYear } from "../src/leap-year";

const years: {[key: string]: boolean} = {
    2000: true,
    2400: true,
    1800: false,
    1900: false,
    2100: false,
    2200: false,
    2300: false,
    2500: false,
};

Object.keys(years).forEach((key: string) => {
    it(`${key} is ${!years[key] ? 'not ' : ''}a leap year`, () => {
        expect(isLeapYear(Number(key))).toBe(years[key]);
    });
});
