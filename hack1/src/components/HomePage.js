/****************************************************************************
  FileName      [ HomePage.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file generates the Home page.  ]
  Copyright     [ 2021 10 ]
****************************************************************************/

import React, { useState } from 'react';
import './css/HomePage.css';

{/* -- TODO 2 -- */}
const HomePage = ({startGameOnClick, mineNumOnChange, boardSizeOnChange, mineNum, boardSize, error /* -- something more... -- */}) => {
    const [showPanel, setShowPanel] = useState(false);      // A boolean variable. If true, the controlPanel will show.
                // A boolean variable. If true, means that the numbers of mines and the board size are invalid to build a game.

    {/* Some functions may be added here! */}

    const showPanelOnClick = () => {
      if(showPanel === false) {
        setShowPanel(true) ;
      }
      else {
        setShowPanel(false) ;
      }
    }

    const errorChange = () => {
      
    }

    



    

    return(
      <div className = 'HomeWrapper'>
          <p className = 'title'>MineSweeper</p>
          <button className = "btn" onClick = {startGameOnClick}>Start Game</button>
          <div className = 'controlContainer'>
            <button className = 'btn' onClick = {showPanelOnClick}>Difficulty Adjustment</button>
            {showPanel ? (
              <div className="controlWrapper">
                {error ? (<div className='error'>ERROR: Mines numner and board size are invalid!</div>) : (null)}
                <div className='controlPanel'>
                  <div className='controlCol'>
                    <p className='controlTitle'>Mines Number</p>
                    <input type='range' value={mineNum} step='1' min="1" max="50"  onChange={mineNumOnChange}/>
                    <p className='controNum'>{mineNum}</p>
                  </div>
                  <div className='controlCol'>
                    <p className='controlTitle'>Board Size (nxn)</p>
                    <input type='range' value={boardSize} step='1' min="1" max="20"  onChange={boardSizeOnChange}/>
                    <p className='controNum'>{boardSize}</p>
                  </div>
                </div>
              </div>

            ) : (null)} 
          </div> 
            {/* -- TODO 1-1 -- */}
          
            {/* -- TODO 6-2 -- */}
            {/* Useful Hint: <input type = 'range' min = '...' max = '...' defaultValue = '...'> */}
            {/* Useful Hint: Error color: '#880000', default text color: '#0f0f4b', invisible color: 'transparent' */}
            {/* Reminder: The defaultValue of 'mineNum' is 10, and the defaultValue of 'boardSize' is 8. */}
            
        </div>
    );

}
export default HomePage;   