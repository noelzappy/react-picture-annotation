import { IComment } from "Annotation";
import React from "react";
import DeleteButton from "./DeleteButton";

export interface IDefaultInputSection {
  value: IComment;
  placeholder?: string;
  onDelete: () => void;
}

export default ({
  value,
  onDelete,
  placeholder = "INPUT TAG HERE",
}: IDefaultInputSection) => {
  return (
    <div className="rp-default-input-section">
      <input
        className="rp-default-input-section_input"
        placeholder={placeholder}
        value={value.type}
        // onChange={(e) => onChange({ type: e.target.value })}
      />
      <a className="rp-default-input-section_delete" onClick={() => onDelete()}>
        <DeleteButton />
      </a>
    </div>
  );
};
