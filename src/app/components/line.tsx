"use client"
import React, { FC } from 'react';
import Box from './box';

interface LineProps {

}

const Line: FC<LineProps> = ({ }) => {
    const [selectedBox, setSelectedBox] = React.useState(0);
    const boxes = [];

    const handleSelection = (index: number) => {
        setSelectedBox(index);
    }

    // create 5 divs
    for (let i = 0; i < 5; i++) {
        boxes.push(<Box onSelect={handleSelection} hasGuessed={false} correctLetter={"a"} word="hello" index={i} selectedIndex={selectedBox}></Box>);
    }

    return (
        <div className="flex">
        {boxes}
        </div>
    );
};

export default Line;