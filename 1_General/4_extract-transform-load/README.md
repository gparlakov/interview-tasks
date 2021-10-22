# Extract-Transform-Load

We have some crufty, legacy data over in this system, and now we need it in this shiny new system over here, so we're going to migrate this.



## The goal

We're going to extract some Scrabble scores from a legacy system.

The old system stored a list of letters per score:

- 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
- 2 points: "D", "G",
- 3 points: "B", "C", "M", "P",
- 4 points: "F", "H", "V", "W", "Y",
- 5 points: "K",
- 8 points: "J", "X",
- 10 points: "Q", "Z",



The shiny new Scrabble system instead stores the score per letter, which makes it much faster and easier to calculate the score for a word. It also stores the letters in lower-case regardless of the case of the input letters:

- "a" is worth 1 point.
- "b" is worth 3 points.
- "c" is worth 3 points.
- "d" is worth 2 points.
- Etc.



## Input

```typescript
const oldScores: {[key: string]: string[]} = {
  "1": ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  "2": ["D", "G"],
  "3": ["B", "C", "M", "P"],
  "4": ["F", "H", "V", "W", "Y"],
  "5": ["K"],
  "8": ["J", "X"],
  "10": ["Q", "Z"]
}
```

## Output

```typescript
const output: {[key: string]: number} = {
  "A": 1,
  "B": 3,
  "C": 3,
  "D": 2,
  etc...
}
```

