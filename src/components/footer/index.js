import React from 'react'
import PropTypes from 'prop-types';

const links = ['all', 'completed', 'active']

const Footer = ({onClick, active='all'}) => (
  <div>
    <span>Show: </span>
    {
      links.map(el => (
        <button
          key={el}
          disabled={el === active}
          onClick={() => {onClick(el)}}
        >
          {el}
        </button>
      ))
    }
  </div>
)

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.oneOf(links)
}

export default Footer
