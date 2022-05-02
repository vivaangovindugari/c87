
var canvas = new fabric.Canvas("myCanvas")

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);

    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
	
	    new_image('rr1.png');
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	new_image('br.png');
	}

	if(keyPressed == '67')
	{
		block_x = 600;
		block_y = 400;
	new_image('bl.png');
	}
	if(keyPressed == '79')
	{
		block_x = 200;
		block_y = 400;
	new_image('o.png');
	}
	if(keyPressed == '87')
	{
		block_x = 200;
		block_y = 800;
	new_image('p.jpg');
	}
	if(keyPressed == '65')
	{
		block_x = 500;
		block_y = 800;
	new_image('c.png');
	}
	if(keyPressed == '68')
	{
		block_x = 700;
		block_y = 800;
	new_image('br.jpg');
	}
	if(keyPressed == '72')
	{
		block_x = 100;
		block_y = 800;
	new_image('g.png');
	}
	if(keyPressed == '88')
	{
		block_x = 850;
		block_y = 800;
	new_image('s.png');
	}
	if(keyPressed == '90')
	{
		block_x = 450;
		block_y = 800;
	new_image('lg.jpg');
	}
	if(keyPressed == '69')
	{
		block_x = 250;
		block_y = 800;
	new_image('e.png');
	}
	
}

