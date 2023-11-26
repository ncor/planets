'use client';

import { Simulation } from "@/lib/simulation";
import { FRAMES_PER_SECOND, SIMULATION_BODIES } from "./constants";


export const simulation = new Simulation(
    SIMULATION_BODIES,
    FRAMES_PER_SECOND
);

simulation.start();   
