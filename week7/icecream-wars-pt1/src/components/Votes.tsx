import { useState } from "react"
import styles from '../styles/votes.module.css'

export function Votes() {
    const [voteChocolate, setVoteChocolate] = useState<number>(0); 
    const [voteVanilla, setVoteVanilla] = useState<number>(0); 
    const [voteStrawberry, setVoteStrawberry] = useState<number>(0); 
    const [total, setTotal] = useState<number>(0); 

    // // const [percentChoco, setPercentChoco] = useState<number>(0); 
    // const [percentVanilla, setPercentVanilla] = useState<number>(0); 
    // const [percentStrawberry, setPercentStrawberry] = useState<number>(0); 
    
    let percentChoco = voteChocolate / total * 100; 
    let percentVanilla = voteVanilla / total * 100; 
    let percentStrawberry = voteStrawberry / total * 100; 

    return(
        <div className={`${styles.mainflex}`}>
            <h3>Vote Here</h3>
            <div>
                <button onClick = {() => {setVoteChocolate(voteChocolate + 1); setTotal(total + 1)}}>Chocolate</button>
                <button onClick = {() => {setVoteVanilla(voteVanilla + 1); setTotal(total + 1)}}>Vanilla</button>
                <button onClick = {() => {setVoteStrawberry(voteStrawberry + 1); setTotal(total + 1)}}>Strawberry</button>
            </div>
            <div className={`${styles.displayPoll}`}>
                {voteChocolate > 0 ? <div className={`${styles.votingPoll}`} >
                    <span>Chocolate: {voteChocolate} {percentChoco.toFixed(2)}% </span>
                    <div className={`${styles.bar}`} style= {{width: `${percentChoco}%`, backgroundColor: '#4f2c2c'}}></div>
                    </div> : null
                }
                {voteVanilla > 0 ? 
                    <div className={`${styles.votingPoll}`}>
                    <span>Vanilla: {voteVanilla} {percentVanilla.toFixed(2)}%</span>
                    <div className={`${styles.bar}`} style= {{width: `${percentVanilla}%`, backgroundColor: '#cbc0ac'}}></div>
                    </div> : null
                }
                {voteStrawberry > 0 ? 
                    <div className={`${styles.votingPoll}`}>
                    <span>Strawberry: {voteStrawberry} {percentStrawberry.toFixed(2)}%</span>
                    <div className={`${styles.bar}`} style= {{width: `${percentStrawberry}%`, backgroundColor: '#de8c91'}}></div>
                    </div>: null
                }
            </div>
        </div>
    )
}