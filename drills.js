//These functions are written differently, but produce the same output!:
/*
let favMovie = (movie = 'The Room', actor = 'Tommy Wiseau') => console.log(`My Favorite movie is ${movie} and my favorite is ${actor}`);
 favMovie();
 favMovie('Lord of The Rings: Return of The King', 'Frodo Baggins');

    
    function favMovie(movie = 'The Room', actor = 'Tommy Wiseau'){
        console.log(`My Favorite movie is ${movie} and my favorite actor is ${actor}`);
    }
    favMovie();
    favMovie('Lord of the Rings: Return of the King', 'Frodo Baggins');
    */



   let favMovie = (movie = 'The Room', actor = 'Tommy Wiseau') => console.log(`My Favorite movie is ${movie} and my favorite is ${actor}`);
   favMovie();
   favMovie('Lord of The Rings: Return of The King', 'Frodo Baggins');

   
   
   let name = 'Reagan Bruce'
   
   let getFirstName = () => {
        return name.split(' ')[0]
   };
   console.log(getFirstName());


   let getFirstNameConcise = () => name.split(' ')[0];
   console.log(getFirstNameConcise());




   let doMath = (num1, num2) => ({ 
       sum: num1 + num2,
       difference: num1 - num2,
   });

   let resultMath = doMath(5,5);
   let {sum} = resultMath;
   let {difference} = resultMath;

   console.log(`The sum is ${sum} and the difference is ${difference}`);









  function aboutMe(name, location, favFood){
     return `${name} ${location} ${favFood}`;
  };


  let arrayAboutMe = ['Reagan', 'Birmingham', 'Tofu'];

   console.log(aboutMe(...arrayAboutMe));

   
   
   let myFirstName = 'Reagan';

    function doSomething(){
        let thisName = [...myFirstName];
        console.log(thisName);
        
        for(let i = 0; i < thisName.length; i++){
            console.log(thisName[i])
        };
    }

doSomething()



   

  
  