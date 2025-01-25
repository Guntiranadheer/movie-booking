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
 let chesanu =games.indoor_games.forEach(copy => {
    return`
    <div class="container">
    <div class="card col-3">
  <div class="card-body">
    <h5 class="card-title">${copy.indoor_games.name}</h5>
    <p class="card-text">${copy.indoor_games.shows[0]}</p>
  </div>
  </div>
</div>
`
 });
 chuddam.innerHTML=chesanu.join(" ")
 let see=document.getElementById("chuddam")
