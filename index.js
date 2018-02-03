function art() {
//                           VARIABLES
  var smallSquares = document.getElementById('smallSquares')
  var varietyOfColors = document.getElementById('varietyOfColors')
  var arrayOfColors = ['black','gray','red', 'blue','green','yellow','orange','Aqua','purple','lime','brown','pink','gold','olid'];
  var color;



//                         LOOP THROUGH
  for (var i = 0; i < 1056; i++) {
    var square = document.createElement('div')
    square.classList.add('square')
    smallSquares.appendChild(square)
  }

  for (var j = 0; j < arrayOfColors.length; j++) {
    var colors = document.createElement('div')
    colors.classList.add('colors')
    varietyOfColors.appendChild(colors)

    colors.style.backgroundColor = arrayOfColors[j]
  }



  //                   ADD EVENT LISTENER
  varietyOfColors.addEventListener('click', function(event){
    color = event.target.style.backgroundColor
    console.log(color);
  })

  smallSquares.addEventListener('click', function(event) {
    event.target.style.backgroundColor = color
  })

}
document.addEventListener("DOMContentLoaded", function (event){
  art()
})
