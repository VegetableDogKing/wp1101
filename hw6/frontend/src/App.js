import {useState} from 'react' ;
import {guess , startGame , restart} from './axios' ;


function App() {
    const [hasStarted , setHasStarted] = useState(false) ;
    const [hasWon , setHasWon] = useState(false) ;
    const [number , setNumber] = useState('') ;
    const [status , setStatus] = useState('') ;

    const handleGuess = async() => {
        const response = await guess(number)
        if(response === 'Equal') {
            setHasWon(true) ;
        }
        else {
            setStatus(response) ;
            setNumber('') ;
        }
    }

    const startGameOnClick = () => {
        setHasStarted(true) ;
        const msg = startGame();
        console.log(msg) ;
    }

    const gameRestart = () => {
        restart() ;
        setHasWon(false) ;
        setNumber('');
    }

    const numOnChange = e => {
        setNumber(e.target.value) ;
    }

    const startMenu = (
        <div>
            <button onClick={startGameOnClick}>
                start game
            </button>
        </div>
    )

    const winningMode = (
        <>
            <p>
                you won! the number was {number}.
            </p>
            <button onClick={gameRestart}>
                restart
            </button>
        </>
    )

    const gameMode = (
        <>
            <p>
                Guess a number between 1 to 100
            </p>
            <input onChange={numOnChange} value={number}>
            </input>
            <button onClick={handleGuess} disabled={!number}>
                guess!
            </button>
            <p>
                {status}
            </p>
        </>
    )

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