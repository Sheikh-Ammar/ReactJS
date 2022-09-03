import React, { Component } from 'react'
export default class Plan extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <>
        <div className='row'>
        <li className='shadow p-2 my-2 col-sm-9'>{this.props.value}</li>
        <button type="button" className="btn btn-danger my-2 col-sm-2 mx-3" onClick={()=>this.props.delete(this.props.id)}>X</button>
        </div>
        </>
    )
  }
}
