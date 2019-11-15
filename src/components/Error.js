import React from 'react';
import Chip from '@material-ui/core/Chip';

function Error() {
    return (
        <div className="flex-centered">
            <Chip
                label="Sorry, network problem or city spell wrong"
                color="secondary"
            />
        </div>
    );
}

export default Error;