x= 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square = "";
draw_star = "";
var SpeechRecognition = window.webkitSpeechRecognition;

 var recognition = new SpeechRecognition();

 function start(){
     document.getElementById("status").innerHTML="System is Listening Please Speak";
     recognition.start();
 }
 recognition.onresult = function(event){
     console.log(event);

     var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(content == "circle"){
      x = Math.floor(Math.random() * 800);
      y = Math.floor(Math.random() * 500);
      document.getElementById("status").innerHTML = "Started Drawing Circle";
      draw_circle = "set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started Drawing Rectangle";
        draw_rect = "set";
      }
      if(content == "Square"){
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started Drawing Square";
        draw_square = "set";
      }
      if(content == "Star"){
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started Drawing Star";
        draw_star = "set";
      }
 }

 function setup(){
     canvas = createCanvas(900,600);
 }
 function draw(){
     if(draw_circle == "set"){
         radius = Math.floor(Math.random()*100);
         circle(x,y,radius);
         document.getElementById("status").innerHTML= "circle is drawn";
         draw_circle = "";
     }
     if(draw_rect == "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML= "rectangle is drawn";
        draw_rect = "";
    }
    if(draw_square == "set"){
        rect(x,y,70,70);
        document.getElementById("status").innerHTML= "Square is drawn";
        draw_square = "";    
    }
    if(draw_star == "set"){
        ellipse(x,y,70,70);
        document.getElementById("status").innerHTML= "Star is drawn";
        draw_star = "";    
    }
 }