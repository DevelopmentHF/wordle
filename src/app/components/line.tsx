import React, { FC } from 'react';
import Box from './box';

interface LineProps {

}

const Line: FC<LineProps> = ({ }) => {

    const boxes = [];

    // create 5 divs
    for (let i = 0; i < 5; i++) {
        boxes.push(<Box hasGuessed={false} correctLetter={"a"}></Box>);
    }

    return (
        <div className="flex">
        {boxes}
        </div>
    );
};

export default Line;