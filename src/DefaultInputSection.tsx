import { IComment } from "Annotation";
import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

export interface IDefaultInputSection {
  value: IComment;
  placeholder?: string;
  onChange: (value: IComment) => void;
  onDelete: () => void;
}

export default ({
  value,
  onChange,
  onDelete,
  placeholder = "INPUT TAG HERE",
}: IDefaultInputSection) => {
  const [text, setText] = useState(value.type);

  return (
    <div className="rp-default-input-section">
      <input
        className="rp-default-input-section_input"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <a className="rp-default-input-section_delete" onClick={() => onDelete()}>
        <DeleteButton />
      </a>

      <a
        className="rp-default-input-section_delete"
        onClick={() => {
          onChange({ ...value, type: text });
        }}
      >
        Save Annotation
      </a>
    </div>
  );
};
