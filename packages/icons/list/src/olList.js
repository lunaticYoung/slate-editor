import React, { Component } from "react";
import pluginListDecorator from "./pluginListDecorator";
import ToolbarIcon from "@young/slate-icon-shared";
import { OL_LIST } from "@young/slate-constant/lib/blocks";

@pluginListDecorator(OL_LIST, "ListOrdered")
export default class OlList extends Component {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
