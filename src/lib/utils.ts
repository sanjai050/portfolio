
export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

export function deterministicShuffle(array : any) {
    const clonedArray = [...array];
    clonedArray.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title or any consistent property
    return clonedArray;
}
