import React from "react";

import PropTypes from 'prop-types';

function VideoStoryTile({ name, location }) {
    return (
        <div className="m-5">
            <img src="https://via.placeholder.com/480X300" alt="placeholder" />
            <div className="font-bold  text-[#D8CAB1] uppercase font-sans text-lg">
                {name}
                <span className="ml-2 text-sm font-medium text-[#D8CAB1] capitalize">
                    {location}
                </span>
            </div>
        </div>
    );
}

VideoStoryTile.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default VideoStoryTile;
