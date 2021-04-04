import React from "react";
import {
  CommandBar,
  IButtonStyles,
  ICommandBarItemProps,
  ICommandBarStyles,
  IIconStyles,
} from "@fluentui/react";

const titleBarDefaultStyle: ICommandBarStyles = {
  root: {
    backgroundColor: "rgb(51, 51, 51)",
    padding: 0,
    "& button, & a": {
      backgroundColor: "inherit",
    },
    "& i, & button, & a": {
      color: "rgb(204, 204, 204)",
    },
  },
};

const getButtonStyle = (): IButtonStyles => {
  let style: IButtonStyles = {
    menuIcon: { display: "none" },
  };

  let sameRootProps: string[] = [
    "rootHovered",
    "rootFocused",
    "rootExpandedHovered",
    "rootPressed",
  ];

  sameRootProps.forEach((prop) => {
    style[prop] = {
      backgroundColor: "rgba(255,255,255,0.2)",
      color: "rgb(204, 204, 204)",
    };
  });

  return style;
};

const farItemsIconsDefaultStyle: IIconStyles = {
  root: {
    color: "rgb(204, 204, 204) !important",
  },
};

const farItems: ICommandBarItemProps[] = [
  {
    key: "minimizeKey",
    text: "Minimize",
    ariaLabel: "Minimize",
    iconOnly: true,
    iconProps: {
      iconName: "ChromeMinimize",
      styles: farItemsIconsDefaultStyle,
    },
    buttonStyles: getButtonStyle(),
  },
  {
    key: "maximizeKey",
    text: "Maximize",
    ariaLabel: "Maximize",
    iconOnly: true,
    iconProps: {
      iconName: "ArrangeBringForward",
      styles: farItemsIconsDefaultStyle,
    },
    buttonStyles: getButtonStyle(),
  },
  {
    key: "closeKey",
    text: "Close",
    ariaLabel: "Close",
    iconOnly: true,
    iconProps: { iconName: "ChromeClose", styles: farItemsIconsDefaultStyle },
    buttonStyles: {
      rootHovered: {
        backgroundColor: "red",
      },
    },
  },
];

export interface ITitlebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ICommandBarItemProps[];
}

export const Titlebar: React.FunctionComponent<ITitlebarProps> = ({
  items,
  ...rest
}) => {
  items = items.map((item) =>
    Object.assign(item, { buttonStyles: getButtonStyle() })
  );

  return (
    <CommandBar
      items={items}
      farItems={farItems}
      {...rest}
      styles={titleBarDefaultStyle}
    />
  );
};
