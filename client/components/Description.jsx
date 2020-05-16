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
              <h1 className="titleText">Trial by</h1>
              <h1 className="titleText2">Seven</h1>

            </div>

          </div>

          <div className="horizontalTwo"></div>

          <div>
            <p className="descriptionBodyText">
              Tales grow tall and tempers short when ale flows freely. After the
              dust clears only two things remain - a noble corpse and the thirst
              for justice.
            </p>
            <p className="descriptionBodyText">
              Duty dictated that you and your companion stand as part of Five
              Champions sworn to defend the honour of their lord...
            </p>
            <p className="descriptionBodyText">
              Cruel fate, that it be on opposing sides of the field
            </p>
          </div>

        </div>
      </div>
    )
  }
}

export default Description

{ /*

            <div>
              <div className="logoDiv">
                <img src="/images/sword.png" />
              </div>

              <div className="logoTextDiv">
                <div className="logoText">
                  <div className="logoTextOne">
                    <h1 className="titleText">Trial by</h1>
                  </div>

                  <div className="logoTextTwo">
                    <h1 className="titleText2">Seven</h1>
                  </div>
                </div>
              </div>
            </div>

            <div>
            <p className="descriptionBodyText">
              Tales grow tall and tempers short when ale flows freely. After the
              dust clears only two things remain - a noble corpse and the first
              for justice.
            </p>
            <p className="descriptionBodyText">
              Duty dictated that you and your companion stand as part of Seven
              Champions sworn to defend the honour of their lord...
            </p>
            <p className="descriptionBodyText">
              Cruel fate, that it be on opposing sides of the field
            </p>
          </div>
           */ }
