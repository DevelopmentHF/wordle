import React, { FC } from 'react';

interface HeaderProps {
  titleText: string;
}

const Header: FC<HeaderProps> = ({ titleText }) => {

      return (
        <div className="border-b-2 p-4 border-zinc-900 flex justify-center">
          <h2 className="font-satoshiBold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">{titleText}</h2>
        </div>
      );
};

export default Header;