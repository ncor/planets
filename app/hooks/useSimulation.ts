import { useEffect, useState } from "react";
import { Simulation } from "@/lib/simulation";
import { FRAMES_PER_SECOND, SIMULATION_BODIES } from "../simulation/constants";
import { simulation } from "../simulation";


export default function useSimulation() {
    const [ update, setUpdate ] = useState<number>();

    useEffect(() => {
        simulation.onUpdate(() => setUpdate(Date.now()));
    }, []);

    return { simulation, update };
}
