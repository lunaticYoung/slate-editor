import React, { Component } from "react";
import ToolbarIcon, {
  markDecorator,
  markPlugin
} from "@young/slate-icon-shared";
import { ITALIC } from "@young/slate-constant/lib/marks";

export const ItalicPlugin = opt => {
  const options = Object.assign(
    {
      type: ITALIC,
      tagName: "i"
    },
    opt
  );

  return markPlugin(options, "cmd+i");
};
@markDecorator(ITALIC, "Italic")
export default class Italic extends Component {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
