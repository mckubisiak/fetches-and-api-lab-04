import React, { Component } from 'react'
import transPokeball from './transpokeball.png'



export default class Footer extends Component {

    url = () => { 
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "", "width=20,height=10");

    }
    

    serious = () => { 
        alert('Seriously, respect my boundaries.'); 

    }

    
    roll = () => { 
    alert('Uh oh!');
    setTimeout(this.url, 5000);
    setTimeout(this.url, 8000);
    setTimeout(this.serious, 12000);
    }

    rick = () => { 
    setTimeout(this.roll, 10000); //wait 2 seconds
        // this.transPokeball.onmouseout = function() {  clearTimeout(timer); }
    }
    


    render() {



        return (
            <footer className='footer-text'>
                <img className='vibrate-1' src={transPokeball} onMouseOver={this.rick} alt='trans flag pokeball'/>Alcisiak Code Lab            
            </footer>
        )
    }
}
