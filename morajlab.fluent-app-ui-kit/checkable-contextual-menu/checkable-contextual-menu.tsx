import { IContextualMenuProps, IContextualMenuItem } from "@fluentui/react";
import { camelCase } from "camel-case";

export interface ICheckableContextualMenuItem
  extends Partial<IContextualMenuItem> {
  text: string;
}

export interface ICheckableContextualMenuProps
  extends Partial<IContextualMenuProps> {
  items: ICheckableContextualMenuItem[];
}

export const CheckableContextualMenu = (
  props: () => ICheckableContextualMenuProps | ICheckableContextualMenuProps
): IContextualMenuProps => {
  let _props: ICheckableContextualMenuProps =
    typeof props === "function" ? props() : props;

  _props.items = _props.items.map((item) => {
    item.key = item.key ?? `${camelCase(item.text)}Key`;

    item.iconProps = { iconName: "CheckMark" };

    return item;
  }) as ICheckableContextualMenuItem[];

  return _props;
};
