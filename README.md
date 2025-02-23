# html-canvas-example.
html canvas use to Draw a graphics Element allow to create shapes, images and animations Dynamically.

to add canvas in webpage we use canvas element `<canvas>..</canvas>`

```javascript 

const canva = document.getElementById("shape");
        const ctx = canva.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(100,100);
        ctx.lineTo(100,100);
        ctx.lineTo(100,200);
        ctx.lineTo(200,200);

        ctx.stroke();

```
```
this is top left opint of screen in canvas
(0,0)
|--------------------------->
|
|
|
|
|
|


```

using to move we move at perticular point in like `ctx.moveTo(100,100)` **we move at 100 from x and 100 from y**
* it means we are are at point 100,100 on canvas
* `ctx.lineTo(100,200)` our next point we `move 100 from x and 200 from y`
* this will create a vertical line on the canvas like this we can draw any shape on canvas.

* Starting a new path: Before drawing any shape (such as a line or circle), you call beginPath().
* Drawing shapes: After starting the path, you can draw shapes by using methods like moveTo(), lineTo(), arc(), and so on.
* Ending the path: When you're done drawing the shape, you typically call closePath() (to close the path) or stroke() (to render the stroke of the shape) or fill() (to fill it).

```javascript

ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI, false); // (x, y, radius, start angle, end angle, counterclockwise)
ctx.stroke();

```
`(x, y, radius, start angle, end angle, counterclockwise)`

x,y --> the radius of arc will be at (x, y position)
starting angle --> the starting of angle 
end angle --> the end of angle 
>> in arc we work in radius rather Degree so if we wnat to convert degree into radius use formula as follow 
>> radius=degree*(3.14/180)
>>> 3.14 =Pi 

if we want to make half arc then 

starting =>0
end => 180*(3.14/180)= 180

for reference degree to radius:-

![Image](https://github.com/user-attachments/assets/01515570-6485-410c-97fb-dac34d7f7b02)