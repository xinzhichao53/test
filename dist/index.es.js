function numAdd(value) {
    value += 1;
    return value;
}function NumRe(value) {
    if (value > 0) {
        value -= 1;
    }
    return value;
}

export { NumRe, numAdd };
