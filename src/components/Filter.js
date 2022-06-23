import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
        <div className='filter'>
            <div className='filter-head'> All Courses</div>
            <div className='filter-sort'>Course Price {" "}
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value="lowest">Low to High</option>
                    <option value="highest">High to Low</option>
                </select>
            </div>
        </div>
    )
  }
}
