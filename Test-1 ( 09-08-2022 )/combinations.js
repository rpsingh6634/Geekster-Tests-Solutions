let combinations = (str) =>{
    let allcombinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            allcombinations.push(str.slice(i , j));
        }
    }
   return allcombinations;
}
console.log(combinations('dog'));