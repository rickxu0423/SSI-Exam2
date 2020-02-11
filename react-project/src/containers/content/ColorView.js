import React from 'react'

class ColorView extends React.Component {

  render() {

    return (
      <div className="iframe-display">
      <iframe className="iframe" frameBorder="0" src="https://materialuicolors.co/" title="color">
      </iframe>
      </div>
    );
  }
}
export default ColorView