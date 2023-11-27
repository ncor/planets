import { Body } from "@/lib/body";
import { Vector } from "@/lib/vector";

export const SIMULATION_SIZE = new Vector(300, 300);
export const FRAMES_PER_SECOND = 60;
const STEP = (Math.PI * 2) / 5 - 0.5;

const generatePolygonVertices = (
    n: number, radius: number, center: Vector
): Vector[] => {
    const vertices = [];

    for (let i = 0; i < n; i++) {
        const angle = (i * 2 * Math.PI) / n;
        vertices.push(center.add({
            x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)
        }));
    }

    return vertices;
}

const VERTICIES = generatePolygonVertices(5, 0.5, new Vector(-0.05, -0.05));

export const SIMULATION_BODIES = [
    new Body(
        VERTICIES[0],
        new Vector(0, 0),
        new Vector(0, 0),
        10
    ),
    new Body(
        VERTICIES[1],
        new Vector(0, 0),
        new Vector(1, 0),
        7
    ),
    new Body(
        VERTICIES[2],
        new Vector(0, 0),
        new Vector(1, 0),
        7
    ),
    new Body(
        VERTICIES[3],
        new Vector(0, 0),
        new Vector(1, 0),
        5
    ),
    new Body(
        VERTICIES[4],
        new Vector(0, 0),
        new Vector(1, 0),
        5
    ),
];
