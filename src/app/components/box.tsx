import React, { FC } from 'react';

interface BoxProps {
    correctLetter: string,
    guessedLetter?: string,
    hasGuessed: boolean,
}

const Box: FC<BoxProps> = ({ ...props }) => {
    return (
        <>
        {props.hasGuessed && props.guessedLetter == props.correctLetter ? (
            <div className="p-4 m-2 bg-green-500">
            {props.guessedLetter}
        </div>
        ) : (
            <div className="p-4 m-2 bg-zinc-800">
            {props.guessedLetter}
        </div>
        )}

        </>
    );
}

export default Box;