import React from 'react';
import Chip from '@material-ui/core/Chip';

const Error = () => {
    return (
        <div className="flex-centered">
            <Chip
                label="Sorry, network problem or city name is spelt wrong."
                color="secondary"
            />
        </div>
    );
};
export default Error;