class Renderer 
{

    //constructor, takes an argument "scale" which allows me to scale the display
    constructor(scale)
    {
        //display size: 64x32
        this.cols = 64;
        this.rows = 32;


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
}

export default Renderer;