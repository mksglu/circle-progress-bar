import React from 'react'
import CircleARC from './components/circle'
import Buttons from "./components/buttons"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calc: {
        circleRange: 200,
        circleArc: 880,
        currentPoint: 25
      }
    }
  }

  handleClick = (currentPoint) => {
    this.setState({calc: {...this.state.calc,currentPoint}})
  }

  render() {
    return (
      <React.Fragment>
        <CircleARC
          circleRange={this.state.calc.circleRange}
          circleArc={this.state.calc.circleArc}
          currentPoint={this.state.calc.currentPoint}
        />
        <Buttons handleClick={currentPoint=>this.handleClick(currentPoint)}/>
      </React.Fragment>
    )
  }
}

export default App
