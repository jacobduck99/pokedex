
function cleanInput(input: string): string[] {
    const splitWords = input.split(" ");
    const lowerCase = splitWords.map(w => w.toLowerCase().trim());
    return lowerCase;
}
