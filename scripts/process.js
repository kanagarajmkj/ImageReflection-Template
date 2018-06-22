        
var imageWidth = 260;
var imageHeight = 260;
var imageLeft = imageWidth;
var imageTop = imageHeight;

//Let the Browser finish rendering the HTML content
window.onload = function(){
var canvas = document.getElementById('imageCanvas'),
context = canvas.getContext('2d');

//Draw the source image
make_base(context);
//Left reflection panel
draw_rect(context,0,imageTop, imageWidth,imageHeight);
//Top reflection panel
draw_rect(context,imageLeft,0, imageWidth,imageHeight);
//Right reflection panel
draw_rect(context,imageLeft+imageWidth,imageTop, imageWidth,imageHeight);
//Bottom reflection panel
draw_rect(context,imageLeft,imageTop+imageHeight, imageWidth,imageHeight);

//Reflect on the LEFT panel
Reflect(context,0,imageLeft, imageTop,0, imageTop, imageWidth, imageHeight);
//Reflect on the TOP panel
Reflect(context,1,imageLeft, imageTop,imageLeft, 0, imageWidth, imageHeight);
//Reflect on the RIGHT panel
Reflect(context,2,imageLeft, imageTop,imageLeft + imageWidth, imageTop, imageWidth, imageHeight);
//Reflect on the BOTTOM panel
Reflect(context,3,imageLeft, imageTop, imageLeft, imageTop + imageHeight, imageWidth, imageHeight);

}

function Reflect(drawingContext, side,sourceX, sourceY, targetX, targetY, width,height)
{
  // Side parem
  //  0 == left panel reflection
  //  1 == top panel reflection
  //  2 == right panel reflection
  //  3 == bottom panel reflection

  // Modify the below code such that it works for all side reflections

     for(var i=0;i<width;i++)
     {
       for(var j=0;j<height;j++)
       {
         var color = getPixel(drawingContext,i+sourceX,j+sourceY); // if you get CORS error, add CORS plugin to your browser and turn it on
         putPixel(drawingContext, i+targetX, j+targetY, color);
       }
     }
}

function make_base(drawingContext)
{
  base_image = new Image();
  drawingContext.drawImage(document.getElementById('picture'), imageLeft, imageTop, imageWidth, imageHeight);
  
}

function draw_rect(drawingContext, x, y, width, height)
{
  drawingContext.strokeStyle="#FF0000";
  drawingContext.strokeRect(x,y,width,height);
}

function getPixel(drawingContext,x,y)
{
  return drawingContext.getImageData(x,y,1,1);
}

function putPixel(drawingContext,x,y,color)
{
  drawingContext.putImageData(color, x, y);
}



