class Renderer 
{

    //constructor, takes an argument "scale" which allows me to scale the display
    constructor(scale)
    {
        //display size: 64x32
        this.cols = 64; //64 columns (lines on the x axis)
        this.rows = 32; //32 rows (lines on the y axis)


        //The following code is what lets us scale the pixels up as a 64x32 resolution is incredibly small on a modern display
        this.scale = scale;

        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        //canvas width = column size which is 64
        this.canvas.width = this.cols * this.scale;
        //canvas length = row size which is 32
        this.canvas.height = this.rows * this.scale;

        //an array for the display which will be a size of 64*32 or 2048
        //Each item in the array will represent a pixel and will be either on or off as CHIP-8 is black and white
        this.clear();
    }

    //function "setPixel" will be toggling the pixels on and off
    setPixel(x, y)
    {
        //code for pixels to wrap around the screen
        //if x is greater than 64 it'll be subtracted by 64 to wrap around
        //if x is less than 64 it'll get 64 added to it to wrap around
        if (x > this.cols)
        {
            x -= this.cols;
        }
        else if (x < 0)
        {
            x += this.cols;
        }

        //if y is greater than 32 it'll be subtracted by 32 to wrap around
        //if y is less than 32 it'll get 32 added to it to wrap around
        if (y > this.rows)
        {
            y -= this.rows;
        }
        else if (y < 0)
        {
            y += this.rows;
        }

        //calculate pixel location
        let pixelLoc = x + (y* this.cols);

        //sprites are XOR'd onto the display
        //the code below takes the pixel location and XORs itself with 1
        this.display[pixelLoc] ^= 1;

        //returns a value telling us if the pixel has been erased or not
        return !this.display[pixelLoc];
    }

    //function to clear out the display by reinitializing the array
    clear()
    {
        this.display = new Array(this.cols * this.rows)
    }

    //render function to render the pixels. Will run at 60 times per second or 60hz
    render()
    {
        //clears the display every render cycle
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //loop through the display array
        for (let i = 0; i < this.cols * this.rows; i++)
        {
            //grabs the x postion of the array based of i
            let x = (i % this.cols) * this.scale;
            //grabs the y position of the array based of i
            let y = Math.floor(i / this.cols) * this.scale;

            //if the value at this.display[i] == 1, then draw a pixel
            if (this.display[i])
            {
                //sets pixel colour to black
                this.ctx.fillStyle = '#000';

                //place a pixel at poisiotn (x,y) with a width and height scale
                this.ctx.fillRect(x,y, this.scale, this.scale)
            }
        }
    }

    //testing purposes
    //smiley face
    testRender()
    {
        //y = 1
        this.setPixel(9,1);
        this.setPixel(10,1);
        this.setPixel(11,1);
        this.setPixel(12,1);
        this.setPixel(13,1);
        this.setPixel(14,1);
        this.setPixel(15,1);

        //y=2
        this.setPixel(7,2);
        this.setPixel(8,2);
        this.setPixel(16,2);
        this.setPixel(17,2);

        //y=3
        this.setPixel(5,3);
        this.setPixel(6,3);
        this.setPixel(18,3);
        this.setPixel(19,3);

        //y=4
        this.setPixel(4,4);
        this.setPixel(20,4);

        //y=5
        this.setPixel(4,5);
        this.setPixel(20,5);

        //y=6
        this.setPixel(3,6);
        this.setPixel(5,6);
        this.setPixel(6,6);
        this.setPixel(7,6);
        this.setPixel(13,6);
        this.setPixel(14,6);
        this.setPixel(15,6);
        this.setPixel(16,6);
        this.setPixel(21,6);

        //y = 7
        this.setPixel(3,7);
        this.setPixel(4,7);
        this.setPixel(7,7);
        this.setPixel(8,7);
        this.setPixel(12,7);
        this.setPixel(15,7);
        this.setPixel(16,7);
        this.setPixel(17,7);
        this.setPixel(21,7);

        //y=8
        this.setPixel(2,8);
        this.setPixel(4,8);
        this.setPixel(7,8);
        this.setPixel(8,8);
        this.setPixel(12,8);
        this.setPixel(16,8);
        this.setPixel(17,8);
        this.setPixel(22,8);

        //y=9
        this.setPixel(2,9);
        this.setPixel(4,9);
        this.setPixel(8,9);
        this.setPixel(12,9);
        this.setPixel(17,9);
        this.setPixel(22,9);

        //y=10
        this.setPixel(2,10);
        this.setPixel(5,10);
        this.setPixel(6,10);
        this.setPixel(7,10);
        this.setPixel(8,10);
        this.setPixel(13,10);
        this.setPixel(14,10);
        this.setPixel(15,10);
        this.setPixel(16,10);
        this.setPixel(17,10);
        this.setPixel(22,10);

        //y=11
        this.setPixel(2,11);
        this.setPixel(22,11);

        //y=12
        this.setPixel(2,12);
        this.setPixel(5,12);
        this.setPixel(6,12);
        this.setPixel(7,12);
        this.setPixel(8,12);
        this.setPixel(9,12);
        this.setPixel(10,12);
        this.setPixel(11,12);
        this.setPixel(12,12);
        this.setPixel(13,12);
        this.setPixel(14,12);
        this.setPixel(15,12);
        this.setPixel(16,12);
        this.setPixel(17,12);
        this.setPixel(22,12);

        //y=13
        this.setPixel(2,13);
        this.setPixel(6,13);
        this.setPixel(18,13);
        this.setPixel(22,13);

        //y=14
        this.setPixel(3,14);
        this.setPixel(6,14);
        this.setPixel(18,14);
        this.setPixel(21,14);

        //y=15
        this.setPixel(3,15);
        this.setPixel(6,15);
        this.setPixel(13,15);
        this.setPixel(14,15);
        this.setPixel(15,15);
        this.setPixel(16,15);
        this.setPixel(17,15);
        this.setPixel(18,15);
        this.setPixel(21,15);

        //y=16
        this.setPixel(4,16);
        this.setPixel(7,16);
        this.setPixel(11,16);
        this.setPixel(12,16);
        this.setPixel(17,16);
        this.setPixel(20,16);

        //y=17
        this.setPixel(4,17)
        this.setPixel(8,17);
        this.setPixel(10,17);
        this.setPixel(16,17);
        this.setPixel(20,17);

        //y=18
        this.setPixel(5,18);
        this.setPixel(6,18);
        this.setPixel(9,18);
        this.setPixel(10,18);
        this.setPixel(11,18);
        this.setPixel(12,18);
        this.setPixel(13,18);
        this.setPixel(14,18);
        this.setPixel(15,18);
        this.setPixel(18,18);
        this.setPixel(19,18);

        //y=19
        this.setPixel(7,19);
        this.setPixel(8,19);
        this.setPixel(16,19);
        this.setPixel(17,19);

        //y=20
        this.setPixel(9,20);
        this.setPixel(10,20);
        this.setPixel(11,20);
        this.setPixel(12,20);
        this.setPixel(13,20);
        this.setPixel(14,20);
        this.setPixel(15,20);

    }
}

export default Renderer;