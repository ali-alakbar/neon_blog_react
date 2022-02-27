import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';

class WaveSection extends Component{
    render(){
        return(
            <section className='wave-section'>
                <div className="videoContainer">
                    <video  autoPlay muted loop="True" id='myVideo' src={require(`${this.props.myVideo}`)}></video>
                    <h1 className='waveTitle'> 
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 40,
                            strings: [
                                "I Must Find You, Old Sport !!",
                                "Call Me ...",
                            ],
                        }}
                />
                    </h1>
                        <button className='btn btn-send'>Click Me</button>
                </div>
            </section>
        )
    }
}

export default WaveSection