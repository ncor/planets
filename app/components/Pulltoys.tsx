'use client';

import useSimulation from "../hooks/useSimulation";
import Body from "./Body";


export default function Pulltoys() {
    const { simulation, update } = useSimulation();

    return <div
        id="canvas"
        className="relative w-[300px] h-[300px] border border-zinc-800"
    >
        {
            simulation && 
            simulation?.bodies.map((body, i) =>
                <Body
                    key={ i }
                    position={ body.position }
                />    
            )
        }  
    </div>;
}
