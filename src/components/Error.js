import React from 'react';
import Chip from '@material-ui/core/Chip';

function Error() {
	return (
        <div className="flex-centered">
            <Chip
                label="Sorry, something went wrong..."
                color="secondary"
            />
        </div>
	);
}

export default Error;