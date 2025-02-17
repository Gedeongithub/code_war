function replace(s) {
    return s.split('').map(char => "aeiouAEIOU".includes(char) ? '!' : char).join('');
}