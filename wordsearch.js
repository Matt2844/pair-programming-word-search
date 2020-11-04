const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
        // console.log(`l of horizontalJoin is: ${l}`)
        if (l.includes(word)) {
            return true;
        }
        // map function to transpose vertical array into horizontal array. 
        // iterate through the transposed vertical array, similar to the first step 
        const verticalArray = letters[0].map((col, index) => letters.map((row, jndex) => row[index]))
        console.log(verticalArray);
        const verticalJoin = verticalArray.map(index => index.join(''));
        for (l of verticalJoin) {
            console.log(`l of verticalJoin is: ${l}`)
            if (l.includes(word)) {
                return true;
            }
        };
    }
    return false;
}



module.exports = wordSearch

