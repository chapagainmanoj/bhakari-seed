import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {List} from 'semantic-ui-react'

export default class Posts extends Component {
  render() {
    return (
      <List celled>
        {this.props.posts.map((post, i) =>
          <List.Item key={i}>
            <List.Content>
            {post.title}
            </List.Content>
          </List.Item>
        )}
      </List>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
