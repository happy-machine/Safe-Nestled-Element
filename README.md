

## Installation

using NPM:

    install npm i --save safe-nestled-element
    var safe = require ('safe-nestled-element')
    


----------


Useful function for retrieving elements from foreign objects/arrays.

If an element doesn't exist it will return null. This is particularly useful if you're trying to access an element in a response object that may be undefined. **'safe-nestled-element'** will convert the undefined element to null, avoiding an error.

*Example:*

    var targetObject = {
        a: {b: ['Value One', {c:'Target Value'}]}
    }


    console.log (safe (obj , 'a.b[1].c' ))

will return **'Target Value'**

    console.log (safe (obj , 'a.b[1].d' ))

will return **null**

where

    console.log (obj.a.b[1].d)

would return **'undefined'**


----------


find me on github at 
https://github.com/happy-machine

Stay Happy.
