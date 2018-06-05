import PropTypes from 'prop-types'
import React, { Component } from 'react'

import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'

const ResponsiveContainer = ({ children }) => (
  <div>
    <MobileContainer>{children}</MobileContainer>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

export default ResponsiveContainer;
