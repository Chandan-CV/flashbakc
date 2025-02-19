import React from "react";

import PropTypes from 'prop-types';

function PhotoStoryTile({ name, location }) {
    return (
        <div className="sm:m-5  p-5 sm:p-20">
            <img src="https://via.placeholder.com/280X400" alt="placeholder" className=" min-w-[280px] h-[400px]" />
            <div className="Boldy  text-black uppercase  text-lg">
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
