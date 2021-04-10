import React from "react";
import {
  DefaultButton,
  ContextualMenuItemType,
  IContextualMenuProps,
} from "@fluentui/react";
import { useConst } from "@uifabric/react-hooks";
import { CheckableContextualMenu } from "./checkable-contextual-menu";

export const BasicCheckableContextualMenu = () => {
  const menuProps = useConst<IContextualMenuProps>(
    CheckableContextualMenu({
      shouldFocusOnMount: true,
      items: [
        {
          text: "New",
          onClick: () => console.log("New clicked"),
        },
        { itemType: ContextualMenuItemType.Divider },
        {
          text: "Rename",
          onClick: () => console.log("Rename clicked"),
        },
        {
          text: "Edit",
          onClick: () => console.log("Edit clicked"),
        },
        {
          text: "Properties",
          onClick: () => console.log("Properties clicked"),
        },
        {
          text: "Link same window",
          href: "http://bing.com",
        },
        {
          text: "Link new window",
          href: "http://bing.com",
          target: "_blank",
        },
        {
          name: "Link click",
          href: "http://bing.com",
          onClick: (
            ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
          ) => {
            alert("Link clicked");
            ev.preventDefault();
          },
          target: "_blank",
        },
        {
          text: "Disabled item",
          disabled: true,
          onClick: () =>
            console.error("Disabled item should not be clickable."),
        },
      ],
    })
  );

  return (
    <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} />
  );
};
