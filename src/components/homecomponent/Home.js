
import React from 'react';
import Profilecard from './profilecard';
import "./homecss.css";


export default function Home() {
    return (
        <div class="box-size-1">
            <div class="profilecard-container"> <Profilecard /></div>
            <div class="function-container">
                <div class="function-area"></div>
                <div class="function-area"></div>
                <div class="function-area"></div>
                <div class="function-area"></div>
                <div class="function-area"></div>
            </div>
        </div>
    )
}

