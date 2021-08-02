import React from "react";
import PropTypes from 'prop-types';

const Movie = ({title, description, year, genre}) => {
    return (
        <div>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <hr></hr>
        </div>
    );
};

export default Movie;

Movie.propTypes = {
    title: PropTypes.string
}