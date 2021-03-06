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
      <div className="circle_container">
        <div className="number">

          <div className="one">0</div>
          {
            // 600/2-(300/2)
          }
          <div className="two">{(this.props.circleRange/2)-((this.props.circleRange/2)/2)}</div>
        <div className="three">{this.props.circleRange/2}</div>
          <div className="four">{(this.props.circleRange/2)+((this.props.circleRange/2)/2)}</div>

    <div className="five">{this.props.circleRange}</div>
        </div>

        <div className="total">
          <span>* Toplam Geliriniz</span>
          <h2>{this.props.currentPoint} ₺</h2>

          <p>
            Geliriniz 200₺'nin üzerinde olmadığında şuanda ödeme talebi
            oluşturulamaz.
          </p>
        </div>

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
            d="M 319.27160867883276 334.8120297420204 A 180 180 0 1 0 84.2982302564229 337.88799976141604"
            fill="none"
          />
          <path
            style={style}
            className="purple"
            stroke="url(#gradient)"
            d="M 319.27160867883276 334.8120297420204 A 180 180 0 1 0 84.2982302564229 337.88799976141604"
            fill="none"
          />
        </svg>
      </div>
    )
  }
}
