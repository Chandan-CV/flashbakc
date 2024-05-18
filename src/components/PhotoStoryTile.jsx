import React from "react";

import PropTypes from 'prop-types';

function PhotoStoryTile({ name, location }) {
    return (
        <div className="m-5">
            <img src="https://via.placeholder.com/280X400" alt="placeholder" />
            <div className="font-bold  text-black uppercase font-sans text-lg">
                {name}
                <span className="ml-2 text-sm font-medium text-[#595959] capitalize">
                    {location}
                </span>
            </div>
        </div>
    );
}

PhotoStoryTile.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default PhotoStoryTile;
