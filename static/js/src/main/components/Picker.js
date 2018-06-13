import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Header, Select, Segment} from 'semantic-ui-react'

export default class Picker extends Component {
  render() {
    const { value, onChange, options } = this.props
    let keyValue = options.map((item)=>{ return {key: item, value: item, text: item }})

    return (
      <div>
        <Header> {value} </Header>
        <Select options={keyValue} onChange={(e, {value})=>onChange(value)} placeholder='Select subreddit' />
      </div>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
