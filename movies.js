// example practice-1
const cenima={
    name:"ANR creations",
    location:"hyd",
    movies:[
        {
          name:"pushpa-1",
          shows:["9am","3pm", "12pm"],
          seats:[60,60]  
        },
        {
            name:"pushpa-2",
            shows:["9am","3pm", "12pm"],
            seats:[60,60]  
        },
        {
            name:"sankranthiki vasthunnam",
            shows:["9am","3pm", "12pm"],
            seats:[60,60] 
        }
    ]
}
console.log(cenima)
console.log("theater name:",cenima.name, "theater location:",cenima.location)
console.log(cenima.movies[0].name)
console.log(cenima.movies[0].seats)
console.log(cenima.movies[0].seats[0])

cenima.movies.forEach(copy => {
   console.log(copy.name) 
   console.log(copy.seats[0])
});
// example-2 practice in this we used the forEach that means forEach will iterate the items one by one and it will not return new array
const games={
    name:"outdoor-games ",
    location:"hyd",
    game:"cricket",
    indoor_games:[
        {
          name:"caroom",
          shows:["9am","3pm", "12pm"],
          seats:[60,60]  
        },
        {
            name:"chess",
            shows:["9am","3pm", "12pm"],
            seats:[60,60]  
        },
        {
            name:"lodo",
            shows:["9am","3pm", "12pm"],
            seats:[60,60] 
        }
    ]
}
console.log(games)
console.log("games name:",games.name, "games.location:",games.location)
console.log(games.indoor_games[0].name)
console.log(games.indoor_games[0].seats)
console.log(games.indoor_games[0].seats[0])
cenima.movies.forEach(copy => {
    console.log(copy.name) 
    console.log(copy.seats[0])
 });
