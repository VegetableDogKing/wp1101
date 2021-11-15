import {useState} from 'react' ;
import {guess , startGame , restart} from './axios' ;


function App() {
    const [hasStarted , setHasStarted] = useState(false) ;
    const [hasWon , setHasWon] = useState(false) ;
    const [number , setNumber] = useState('') ;
    const [status , setStatus] = useState('') ;

    const startMenu = (
        <div>
            <button onClick={startGameOnClick}>
                start game
            </button>
        </div>
    )

    const startGameOnClick = () => {
        startGame
    }

    const winningMode = (
        <>
            <p>
                you won! the number was {number}.
            </p>
            <buttom onClick={gameRestart}>
                restart
            </buttom>
        </>
    )

    const gameRestart = () => {
        restart ;
    }

    const gameMode = (
        <>
            <p>
                Guess a number between 1 to 100
            </p>
            <input onChange={numOnChange}>
            </input>
            <button onClick={handleGuess} disabled={!number}>
                guess!
            </button>
            <p>
                {status}
            </p>
        </>
    )

    const handleGuess = async() => {
        guess ;
        const response = await processGuessByBackend(number)
        if(response === 'Equal') {
            setHasWon(true) ;
        }
        else {
            setStatus(response) ;
            setNumber('') ;
        }
    }

    const numOnChange = e => {
        setNumber(e.target.value) ;
    }

    const game = (
        <div>
            {hasWon ? winningMode : gameMode}
        </div>
    ) 

    return (
        <div className="App">
            {hasStarted ? game : startMenu}
        </div>
    )
}
export default App