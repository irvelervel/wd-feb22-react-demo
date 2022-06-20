// a Class Component is the most powerful way of writing a react component
// superpowerful react components!

import { Component } from 'react'
// Component is the main class component that exists!

class ThirdComponent extends Component {
  // we still need a mandatory method called render()
  render() {
    return (
      <h2 style={{ color: this.props.customColor }}>Class Component here!</h2>
      // this is the an object pointing to the current "instance" of the class
      // class = blueprint / factory
      // instance = tower / chair
      // the "this" object can be found ONLY in class components!
    )
  }
}

export default ThirdComponent
