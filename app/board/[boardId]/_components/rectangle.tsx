import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
    id: string;
    layer: RectangleLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export const Rectangle = ({
    id,
    layer,
    onPointerDown,
    selectionColor,
}: RectangleProps) => {
    // console.log({
    //     id,
    //     layer,
    // })
    const { x, y, width, height, fill } = layer;

    // console.log({ x, y, width, height});

    return (
        <rect
            className="drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(${x}px ${y}px)`
            }}
            x={x}
            y={y}
            width={width}
            height={height}
            strokeWidth={1}
            fill="#000"
            stroke="transparent"
        />
    )
}