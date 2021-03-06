/*
Description:

Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).

Write a function that given an American floor (passed as an integer) returns the real floor:

get_real_floor(1) == 0 # getRealFloor for JS and Coffeescript
get_real_floor(0) == 0 # Special case to please Europeans
get_real_floor(5) == 4
get_real_floor(15) == 13
Moreover, your function should work for basement floors too: just return the same value than the passed one.

get_real_floor(-3) == -3
*/

function getRealFloor(n) {
  if(n > 0 && n < 13){
      return n - 1
    } 
    else if(n === 0 || n < 0){   
      return n
    }
    else if(n > 13){
      return n -2}
     else {
       return null
     }
}


/*
Description:

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle

So

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return

'found the needle at position 5'
*/

function findNeedle(haystack) {
  var position = haystack.indexOf("needle");
  return "found the needle at position" + " " + position;
}



/*
Description:

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!
*/


function fixTheMeerkat(arr) {
 arr.reverse();
 return arr;
}


/*
Description:

Personalized greeting

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case  return
name equals owner 'Hello boss'
otherwise 'Hello guest'
*/

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss'
    }
    else {
    return 'Hello guest' 
    }
}



/*
Description:

Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
But can you do it in 1 line of code and without any conditionals?
*/

function opposite(number) {
  return (number * (-1))
}

/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5

O is misinterpreted as 0

I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

function correct(str){
  for(var i = 0; i < str.length; i++){
    if (i === 5){
      str.replace(i, "S");
      return str; 
      } else if (i === 0) {
          str.replace(i, "O");
            return str;  
      } else if (i === 1){
          str.replace(i, "I");
            return str;         
      } else {
        return "not quite";
      }
   }
}





















































