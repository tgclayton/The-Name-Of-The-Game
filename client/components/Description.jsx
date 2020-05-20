import React from 'react'

class Description extends React.Component {
  render () {
    return (
      <div className="descriptionBorder">
        <div className="descriptionDiv">
          <div className="horizontalOne"></div>

          <div className="logoDiv">
            <img src="images/sword.png"/>

            <div>
              <h1 className="titleText alagard-text">Trial by</h1>
              <h1 className="titleText2 alagard-text">Seven</h1>

            </div>

          </div>

          <div className="horizontalTwo"></div>

          <div>
            <p className="descriptionBodyText alagard-text">
              Tales grow tall and tempers short when ale flows freely. After the
              dust clears only two things remain - a noble corpse and the thirst
              for justice.
            </p>
            <p className="descriptionBodyText alagard-text">
              Duty dictated that you and your companion stand as part of Five
              Champions sworn to defend the honour of their lord...
            </p>
            <p className="descriptionBodyText alagard-text">
              Cruel fate, that it be on opposing sides of the field
            </p>
          </div>

        </div>
      </div>
    )
  }
}

export default Description
