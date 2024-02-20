import React, { FC, useState } from 'react';

interface BoxProps {
    correctLetter: string,
    guessedLetter?: string,
    hasGuessed: boolean,
    word: string,
    index: number,
    selectedIndex: number,
    onSelect: (index: number) => void;
}

const Box: FC<BoxProps> = ({ ...props }) => {
    let content;
    let isSelected: boolean = false;

    props.selectedIndex == props.index ? isSelected=true : isSelected=false;

    const handleClick = () => {
        props.onSelect(props.index);
        console.log("Box" + props.index + "clicked");
    }

    switch (true) {
        // temporary selection thing\
        case isSelected:
            content = (
                <div onClick={handleClick}>
                    <input className=" p-4 w-full bg-zinc-500"
                    type="text"
                    maxLength={1}>
                    </input>
                </div>
                
            );
        break;
        case props.hasGuessed && props.guessedLetter === props.correctLetter:
        content = (
            <div className="p-4 m-2 bg-green-500" onClick={handleClick}>
            {props.guessedLetter}
            </div>
        );
        break;
        case props.hasGuessed && props.guessedLetter != props.correctLetter && props.word.includes(props.guessedLetter!):
            content = (
                <div className="p-4 m-2 bg-yellow-500" onClick={handleClick}>
                    {props.guessedLetter}
                </div>
            );
        break;
        case props.hasGuessed:
            content = (
                <div className="p-4 m-2 bg-zinc-800" onClick={handleClick}>
                    {props.guessedLetter}
                </div>
            );
        default:
        content = (
            <div onClick={handleClick}>
                <input className="p-4 w-full bg-zinc-800"
                type="text"
                maxLength={1}>
                </input>
            </div>
        );
    }

    return (
        <div className="w-20 h-20 m-2"> {/* Adjust the width based on your design */}
          {content}
        </div>
      );
}

export default Box;