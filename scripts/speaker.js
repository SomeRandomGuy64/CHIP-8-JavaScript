class Speaker
{
    contructor()
    {
        const AudioContext = window.AudioContext || window.webkitAudioContext;

        this.audioCtx = new AudioContext();

        //create a gain, which will allow us to control the volume
        this.gain = this.audioCtx.createGain();
        this.finish = this.audioCtx.destination;

        //connect the gain to the audio context
        this.gain.connect(this.finish);
    }

    //mute the audio
    muteAudio()
    {
        this.gain.setValueAtTime(0, this.audioCtx.currentTime);
    }

    //unmute the audio
    unmuteAudio()
    {
        this.gain.setValueAtTime(1, this.audioCtx.currentTime);
    }
}

export default Speaker;