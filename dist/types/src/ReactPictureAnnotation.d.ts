import React from "react";
import { IAnnotation, IComment } from "./Annotation";
import { IAnnotationState } from "./annotation/AnnotationState";
import { IShape, IShapeBase, IShapeStyle } from "./Shape";
import { ITransformer } from "./Transformer";
interface IReactPictureAnnotationProps {
    annotationData?: IAnnotation[];
    selectedId?: string | null;
    scrollSpeed: number;
    marginWithInput: number;
    onChange: (annotationData: IAnnotation[]) => void;
    onSelect: (id: string | null) => void;
    width: number;
    height: number;
    image: string;
    annotationStyle: IShapeStyle;
    defaultAnnotationSize?: number[];
    inputElement: (value: IComment, onChange: (value: IComment) => void, onDelete: () => void) => React.ReactElement;
    loading: boolean;
}
interface IStageState {
    scale: number;
    originX: number;
    originY: number;
}
export default class ReactPictureAnnotation extends React.Component<IReactPictureAnnotationProps> {
    static defaultProps: {
        marginWithInput: number;
        scrollSpeed: number;
        annotationStyle: IShapeStyle;
        inputElement: (value: IComment, onChange: (value: IComment) => void, onDelete: () => void) => JSX.Element;
        loading: boolean;
    };
    state: {
        inputPosition: {
            left: number;
            top: number;
        };
        showInput: boolean;
        inputComment: IComment;
    };
    set selectedId(value: string | null);
    get selectedId(): string | null;
    get annotationStyle(): IShapeStyle;
    get defaultAnnotationSize(): number[] | undefined;
    shapes: IShape[];
    scaleState: IStageState;
    currentTransformer: ITransformer;
    private currentAnnotationData;
    private selectedIdTrueValue;
    private canvasRef;
    private canvas2D?;
    private imageCanvasRef;
    private imageCanvas2D?;
    private currentImageElement?;
    private currentAnnotationState;
    componentDidMount: () => void;
    componentDidUpdate: (preProps: IReactPictureAnnotationProps) => void;
    calculateMousePosition: (positionX: number, positionY: number) => {
        positionX: number;
        positionY: number;
    };
    calculateShapePosition: (shapeData: IShapeBase) => IShapeBase;
    render(): JSX.Element;
    setAnnotationState: (annotationState: IAnnotationState) => void;
    onShapeChange: () => void;
    private syncAnnotationData;
    private syncSelectedId;
    private onDelete;
    private setCanvasDPI;
    private onInputCommentChange;
    private cleanImage;
    private onImageChange;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private onMouseLeave;
    private onWheel;
}
export {};
