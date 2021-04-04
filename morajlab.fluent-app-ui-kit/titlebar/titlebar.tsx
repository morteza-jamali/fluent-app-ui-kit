import React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';

export interface ITitlebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ICommandBarItemProps[];
  farItems?: ICommandBarItemProps[];
}

export const Titlebar: React.FunctionComponent<ITitlebarProps> = ({
  items,
  farItems,
  ...rest
}) => <CommandBar items={items} farItems={farItems} {...rest} />;
