function vowelsCount(str){
    let count = 0;
    let vowels = ["a","e","i","o","u"];

    for(let letter of str.toLowerCase()){
        for(let v of vowels){
            if(letter===v){
                count++;
            }
        }
    }
    return count;
}
const string = "the quick brown fox";
console.log(vowelsCount(string));