import React from "react";
import type { ICommandBarItemProps } from "@fluentui/react";
import { Titlebar } from "./titlebar";

const _items: ICommandBarItemProps[] = [
  {
    key: "newItem",
    text: "New",
    cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
    subMenuProps: {
      items: [
        {
          key: "emailMessage",
          text: "Email message",
          iconProps: { iconName: "Mail" },
          ["data-automation-id"]: "newEmailButton", // optional
        },
        {
          key: "calendarEvent",
          text: "Calendar event",
          iconProps: { iconName: "Calendar" },
        },
      ],
    },
  },
  {
    key: "upload",
    text: "Upload",
  },
  {
    key: "share",
    text: "Share",
  },
  {
    key: "download",
    text: "Download",
  },
];

export const BasicTitlebar = () => {
  return <Titlebar items={_items} />;
};
