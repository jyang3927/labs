import { useState } from "react";
import styles from '../styles/adDesigner.module.css'; 

export function AdDesigner() {
    const [flavor, setFlavor] = useState<string> ("Strawberry"); 
    const [lightTheme, setLightTheme] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(20); 

    const themeStyle = {
        backgroundColor: lightTheme ? 'white' : '#280000', 
        color: lightTheme? 'black' : 'white', 
    }
    return(
        <div className={`${styles.mainflex}`}>
            <h3>Ad Designer</h3>
            <div className = {`${styles.flex}`}>
                <h5>What to Support</h5>
                <div>
                    <div style = {themeStyle} className = {`${styles.adDesign}`}>
                        <p style={{fontSize: `${fontSize}px`}}>{flavor}</p>
                    </div>
                </div>
                <div>
                    <button disabled = {flavor === 'Chocolate' ? true : false} onClick = {() => setFlavor("Chocolate")}>Chocolate</button>
                    <button disabled = {flavor === 'Vanilla' ? true : false} onClick = {() => setFlavor("Vanilla")}>Vanilla</button>
                    <button disabled = {flavor === 'Strawberry' ? true : false} onClick = {() => setFlavor("Strawberry")}>Strawberry</button>
                </div>
            </div>
            <div>
                <h5>Color Theme</h5>
                <div>
                    <button  disabled = {lightTheme ? true : false} onClick ={() => setLightTheme(true)}>Light</button>
                    <button disabled = {lightTheme ? false : true} onClick ={() => setLightTheme(false)}>Dark</button>
                </div>
            </div>
            <div>
                <h5>Font Size</h5>
                <div>
                    <button onClick ={() => setFontSize(fontSize - 1)}>Down</button>
                    <span>{fontSize}</span>
                    <button onClick = {() => setFontSize(fontSize + 1)}>Up</button>
                </div>
            </div>
        </div>
    )
}