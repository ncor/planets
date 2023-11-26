import { Body } from "@/lib/body";
import { Vector } from "@/lib/vector";


export const SIMULATION_SIZE = new Vector(300, 300);
export const FRAMES_PER_SECOND = 60;

export const SIMULATION_BODIES = [
    new Body(
        new Vector(0, 0),
        new Vector(0, 0),
        new Vector(0, 0),
        10000,
        true
    ),
    new Body(
        new Vector(0, 0.5),
        new Vector(-Math.PI * 2, 0),
        new Vector(1, 0),
        1
    ),
    new Body(
        new Vector(0, -0.25),
        new Vector(Math.PI * 2, 0),
        new Vector(1, 0),
        1
    )
];
