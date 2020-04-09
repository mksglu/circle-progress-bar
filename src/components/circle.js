import React, { Component } from 'react'
import './circle.css'

export default class circle extends Component {
  render() {
    const style = {
      strokeDashoffset:
        this.props.circleArc +
        (this.props.circleArc * this.props.currentPoint) /
          this.props.circleRange
    }
    return (
      <div className="chart">
        <div className="circle">
          <svg>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e5405e" />
                <stop offset="25%" stopColor="#ffdb3a" />
                <stop offset="50%" stopColor="#3fffa2" />
                <stop offset="75%" stopColor="#1a9be0" />
                <stop offset="100%" stopColor="#ba68ed" />
              </linearGradient>
            </defs>
            <path
              className="grey"
              d="M 315.7017697435771 337.88799976141604 A 180 180 0 1 0 84.2982302564229 337.88799976141604"
              fill="none"
            />
            <path
              style={style}
              className="purple"
              stroke="url(#gradient)"
              d="M 315.7017697435771 337.88799976141604 A 180 180 0 1 0 84.2982302564229 337.88799976141604"
              fill="none"
            />
          </svg>
        </div>
        <div className="total">
          <span className="current-point">{this.props.currentPoint} TRY</span>
        </div>
      </div>
    )
  }
}
