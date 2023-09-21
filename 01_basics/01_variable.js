const accountId = 1456789
let accountEmail = "archit@xyz.com"
var accountPassword = "123456"
accountCity = "Mumbai"
let accountState;

// accountId cannot be changed as it is a constant.

accountEmail = "sumit@xyz.com"
accountPassword = "760591"
accountCity = "Ajmer"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])