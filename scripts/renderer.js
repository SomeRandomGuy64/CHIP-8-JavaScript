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
        this.display = new Array(this.cols * this.rows)
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
}

export default Renderer;