import React from "react";
import { Value } from "slate";
import Editor from "../../../packages/editors/lunatic-editor/src";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "A line of text in a paragraph."
              }
            ]
          }
        ]
      }
    ]
  }
});

export default class LunaticEditor extends React.component {
  state = {
    value: initialValue
  };

  render() {
    const { value } = this.state;
    const onChange = ({ value }) => this.setState({ value });

    return (
      <div style={{ margin: "20px" }}>
        <Editor
          value={value}
          onChange={onChange}
          serviceConfig={{
            name: "image",
            accept: "image/*",
            action: "https://api.imgur.com/3/image",
            headers: {
              Authorization: "Client-ID a214c4836559c77",
              "X-Requested-With": null
            }
          }}
          galleryConfig={null}
        />
      </div>
    );
  }
}
