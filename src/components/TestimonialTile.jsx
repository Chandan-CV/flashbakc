import React from 'react'

import PropTypes from 'prop-types';

function TestimonialTile({name, title, content}) {
  return (
    <div className="m-10">
    <img src="https://via.placeholder.com/750X500" alt="placeholder" />
    <div>
        <p className="font-bold text-[#4A4A4A] uppercase font-sans text-lg">
            {title}
        </p>
        <p className="font-sans text-[#4A4A4A]">
            {content}
        </p>
    </div>
    <div className="font-bold  text-black uppercase font-sans text-lg">
        {name}
    </div>
</div>
  )
}
TestimonialTile.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
export default TestimonialTile