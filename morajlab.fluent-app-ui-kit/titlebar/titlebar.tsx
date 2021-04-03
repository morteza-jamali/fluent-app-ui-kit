import React from 'react';

export interface TitlebarProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Titlebar = ( {children, ...rest}: TitlebarProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};