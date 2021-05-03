canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var back="V5nl.gif"
var rover="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lamborghini_660_140220101539.jpg"

var rover_x=10
var rover_y=20
var rover_width=30
var rover_height=30
function add() {
back_tg=new Image()
back_tg.onload=uploadBackground
back_tg.src=back


rover_tg=new Image()
rover_tg.onload=uploadrover
rover_tg.src=rover
    
    
}
function uploadBackground() { 
    ctx.drawImage(back_tg, 0, 0, canvas.width, canvas.height); }
    
    function uploadrover() {
         ctx.drawImage(rover_tg, rover_x, rover_y, rover_width, rover_height); }

window.addEventListener("keydown",my_keydown);

 function my_keydown(e)
{keyPressed = e.keyCode;

if(keyPressed =='38')
 {
     up();   
       console.log ("up")          
 }if(keyPressed =='40')
 {
     down();   
       console.log ("down")          
 }if(keyPressed =='37')
 {
     left();   
       console.log ("left")          
 }if(keyPressed =='39')
 {
     right();   
       console.log ("right") 
 }}

  function  up()
{
if(rover_y>0)
{
   rover_y-= 10
    uploadBackground();
 uploadrover();

 }}
 function down(){
 if(rover_y<1000)
{
   rover_y+= 10
    uploadBackground();
 uploadrover();

 }}
 function left(){
 if(rover_x>0)
{
   rover_x-= 10
    uploadBackground();
 uploadrover();

 }}
 function right(){
if(rover_x<700)
{
   rover_x+= 10
    uploadBackground();
 uploadrover();

 }}










