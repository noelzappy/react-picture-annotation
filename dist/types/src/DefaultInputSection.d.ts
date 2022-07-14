/// <reference types="react" />
import { IComment } from "Annotation";
export interface IDefaultInputSection {
    value: IComment;
    placeholder?: string;
    onChange: (value: IComment) => void;
    onDelete: () => void;
}
declare const _default: ({ value, onChange, onDelete, placeholder, }: IDefaultInputSection) => JSX.Element;
export default _default;
