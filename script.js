var pythonImgUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/810379/python.png';
const rubyImgUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/810379/ruby.png';

// document.getElementById('picture').addEventListener("click", function(){
//   this.value = null;
// });
//
// document.getElementById('picture').addEventListener("change", function(){
//   pythonImgUrl=this.value;
// });



  document.getElementById('picture').onclick = function(){
    this.value = null;
  };

  document.getElementById('picture').onchange = function(){
    pythonImgUrl=this.value;
  }




document.getElementById('start_game').addEventListener("click", function(){
  var str = "";
  var number = parseInt(document.getElementById('grid_size').value);
  var pythonIndex = getRandomnNum(1,number*number);
  var rubyIndex=0;
  var turns=0;

  var num = getRandomnNum(1,number*number);
  if( num == pythonIndex){
    rubyIndex = pythonIndex+1;
  }
  else{
    rubyIndex = num;
  }
  var count = 0;

    for(var index= 0; index < number ; index++){
      str += "<div class='row'>";
      for(var i =0; i<number; i++){
        count++;
        if(count == pythonIndex){
          str+= "<div  id='"+count+"' class='game-space'><img id='python' src='" + pythonImgUrl + "'/></div>";
        }
        else if(count == rubyIndex){
          str += "<div id='"+count+"' class='game-space'><img id='ruby' src='"+ rubyImgUrl +"' /></div>";
        }
        else{
          str+= "<div id='"+count+"' class='game-space'></div>";
        }
      }
      str+= "</div>";
    }

    document.getElementById('frames')
    .innerHTML =str;
    this.disabled = true;

    document.onkeydown = function (e){

     e = e || window.event;

      if( (e.keyCode == '37') && (pythonIndex != 1)){
        if(pythonIndex-1 == rubyIndex){
          alert("The number of turns you took is : "+turns);
        }
        else{
          document.getElementById('python').remove();
          document.getElementById(pythonIndex-1).innerHTML = "<img id='python' src='" + pythonImgUrl + "'/>";
          pythonIndex = pythonIndex-1;
          turns = turns+1;
        }
      }
      if((e.keyCode == '39')&&(pythonIndex != number*number)){
        if(pythonIndex+1 == rubyIndex){
          alert("The number of turns you took is : "+turns);
        }else{
        document.getElementById('python').remove();
        document.getElementById(pythonIndex+1).innerHTML = "<img id='python' src='" + pythonImgUrl + "'/>";
        pythonIndex = pythonIndex+1;
        turns = turns+1;
        }
      }
      if((e.keyCode == '38')&&(pythonIndex >= number)){
        if(pythonIndex-number == rubyIndex){
          alert("The number of turns you took is : "+turns);
        }
        else{
        document.getElementById('python').remove();
        document.getElementById(pythonIndex-number).innerHTML = "<img id='python' src='" + pythonImgUrl + "'/>";
        pythonIndex= pythonIndex-number;
        turns = turns+1;
        }
      }
      if((e.keyCode == '40')&&(pythonIndex <= (number*number)-(number-1))){
        if(pythonIndex+number == rubyIndex){
          alert("The number of turns you took is : "+turns);
        }else{
        document.getElementById('python').remove();
        document.getElementById(pythonIndex+number).innerHTML = "<img id='python' src='" + pythonImgUrl + "'/>";
        pythonIndex = pythonIndex+number;
        turns = turns+1;
      }
      }
      };

});

function getRandomnNum (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max-min + 1))+min;
}
