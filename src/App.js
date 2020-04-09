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

  handleClickRange = (handleClickRange) => {
    console.log(handleClickRange)
    this.setState({calc: {...this.state.calc,circleRange:handleClickRange}})
  }

  render() {
    return (
      <React.Fragment>
        <CircleARC
          circleRange={this.state.calc.circleRange}
          circleArc={this.state.calc.circleArc}
          currentPoint={this.state.calc.currentPoint}
        />
        <Buttons handleClickRange={handleClickRange=>this.handleClickRange(handleClickRange)} handleClick={currentPoint=>this.handleClick(currentPoint)}/>
      </React.Fragment>
    )
  }
}

export default App
