// Go through age and restrict

const nightClubRegister = [
   {
       name: 'Tony',
       lastname: 'Stark',
       age: 25, 
       gender: 'male',
   },
   {
       name: 'Harry',
       lastname: 'Potter',
       age: '16', 
       gender: 'male',
   },
   {
       name: 'Hermione',
       lastname: 'Granger',
       age: '17',
       gender: 'female'
   },
   {
       name: 'Steve',
       lastname: 'Rogers',
       age: '62',
       gender: 'male'
   }
]


console.log(Object.keys(nightClubRegister))

// Object.keys(nightClubRegister).forEach( function(key) {

//    Object.keys(nightClubRegister[keys])   
//    console.log(key, nightClubRegister[key]);
 
//  });