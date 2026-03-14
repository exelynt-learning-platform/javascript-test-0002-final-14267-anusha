let row = 5;
for(let i = 1; i <= rows; i++)
{
  let output = "";
  for(let s = 1; s < i; s++)
  {
    output += "";
  }
  let num = 1;
  for (let j = i; j <= rows; j++)
  {
    output += num + "";
    num++;
  }
  num -= 2;
  for(let j = i; j < rows; j++)
  {
    output += num + "";
    num--;
  }
    
  console.log(output);
}
