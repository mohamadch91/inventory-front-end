import React, { Component } from 'react'
/**
 * spinner for Loadings when waiting api requests
 */
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner-wrapper">
          <div className="donut"></div>
        </div>
      </div>
    )
  }
}

export default Spinner
