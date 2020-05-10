import React, { Component } from 'react';

//RANDOM PORTRAIT
var unitType = 'warrior'


function randomPortrait(type){
  let randomNumber = Math.floor(Math.random() * Math.floor(3))
  let portraitSrc = 'images/portraits/' + unitType + randomNumber + '.png'
  return portraitSrc
}



class UnitDisplay extends Component {
  render() {
    return (
      <div className='udUnitContainer'>
        <div className='udImageContainer'>
          <div className='idImageRondel'>
           {/* <img src={randomPortrait(unitType)} /> */}
           {randomPortrait(unitType)}
          </div>
        </div>
        <div className='udText'>
          <p>
            'dynamic text paragraph'
          </p>
        </div>
      </div>
    );
  }
}

export default UnitDisplay;


<img src="images/portraits/"/>