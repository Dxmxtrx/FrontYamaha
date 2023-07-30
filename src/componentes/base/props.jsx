import React from 'react'
import Image from './Logo.png'
import Image2 from './Logo2.png'
import Image3 from './MT.png'
import Image4 from './Image.png'
import '../../../src/index.css'



export default function App (props) {
    const textImport = {
        fontFamily: 'Designer, sans-serif'
    }


    return (
        <div id="general">
            <div id="#" class="logo">
                    <img src={Image} width={200} height={200}></img>
                </div>
            <div id="header">
                <ul class="horizontal-list">
                    <li>Buy Now </li>
                    <li>Call us</li>
                    <li>More</li>
            
                </ul>

                <div id="image-container">
                    <img id="img1" src={Image2} widht={120} height={100}></img>
                    <img id="img2" src={Image3} widht={150} height={200}></img>
                </div>
            </div>

            <section class="Vehicle">
                <img id='img4' src={Image4} width={550} height={450}></img>

                <div class="text">

                <p id='pub' style={textImport} >
                Yamaha Hyper Naked bikes are designed to deliver thrills.
                </p>
                </div>
            </section>
        </div>

        
    )
}