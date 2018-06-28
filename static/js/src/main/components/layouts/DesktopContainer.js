import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Responsive,
  Visibility,
  Segment,
  Menu,
  Button,
  Sidebar,
  Container} from 'semantic-ui-react'

  import {
    Route,
    Link,
    BrowserRouter
  } from 'react-router-dom';

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth = {Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >

          <Segment
            // inverted
            textAlign='center'
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              // style={borderBottom: 'none'}
            >
              <Container>
                <Link to='/' className='item' activeClassName='active'> Home </Link>
                <Link to='/reddit' className='item' activeClassName='active'>Reddit</Link>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a'
                  // inverted={!fixed}
                  >
                    Profile
                  </Button>

                </Menu.Item>
              </Container>
            </Menu>
            <Sidebar.Pushable as={Segment}>
            <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            vertical
            visible
            >
            <Link to='/' className='item' > Home </Link>
            <Link to='/reddit' className='item' >Reddit</Link>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Profile in</Menu.Item>
            </Sidebar>
            </Sidebar.Pushable>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;
