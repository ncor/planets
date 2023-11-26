import { Vector } from "@/lib/vector";
import { SIMULATION_SIZE } from "../simulation/constants"

export interface BodyProps {
    position: Vector
}

export default function Body({
    position: p
}: BodyProps) {
    const position = {
        top: p.y * SIMULATION_SIZE.y + SIMULATION_SIZE.y / 2,
        left: p.x * SIMULATION_SIZE.x + SIMULATION_SIZE.x / 2,
    };
    const opacity = 1 - p.dist({ x: 0, y: 0 });

    return <div
        className="absolute w-3 h-3 flex items-center justify-center font-semibold bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_16px_rgba(255,255,255,0.25)]"
        style={{ ...position, opacity }}
    >
        
    </div>
}
