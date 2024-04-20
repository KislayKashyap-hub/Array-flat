function arrayFlat() {
    const arr = [
        ["bob", "rat", "dog"],
        ["bab", "mat", "dog"],
        ["beb", "cat", "gog"],
        ["bob", "cat", "pog"],
        ["obb", "tat", "gog"],
    ];
    const flatArr = arr.flat();
    console.log("FlatArr : ", flatArr);
    const count = flatArr.reduce((index, word) => {
        index[word] = (index[word] || 0) + 1;
        return index;
    }, {});
    console.log("Word Count : ", count);

} arrayFlat();