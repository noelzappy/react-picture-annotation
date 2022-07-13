import { IShapeData } from "Shape";

export interface IComment {
  comment: string;
  type: string;
  severity: string;
}
export interface IAnnotation<T = IShapeData> {
  comment?: IComment;
  id: string;
  mark: T;
}
