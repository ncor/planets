import { Body } from "./body";
import { D } from "./constants";


export type UpdateCallback = (simulation: Simulation) => any;

export class Simulation {
    public updateInterval?: NodeJS.Timeout;
    public listeners: UpdateCallback[] = [];

    constructor(
        public bodies: Body[],
        public framesPerSecond: number
    ) {}

    public get delta() {
        return 1 / this.framesPerSecond * D;
    }

    public addBody(body: Body) {
        this.bodies.push(body);
    }

    // Keep the reference.
    public removeBody(body: Body) {
        this.bodies = this.bodies.filter(b => b != body);
    }

    public calculateNextFrame() {
        for (let body of this.bodies)
            if (!body.attractor)
                body.applyGravity(this.bodies.filter(b => b != body));

        for (let body of this.bodies)
            body.updatePosition(this.delta);
    }

    public publishUpdateEvent() {
        this.listeners.forEach(listener =>
            listener(this)
        );
    }

    public stop() {
        if (this.updateInterval) clearInterval(this.updateInterval);
    }

    public start() {
        this.stop();

        this.updateInterval = setInterval(() => {
            this.calculateNextFrame();
            this.publishUpdateEvent();
        }, 1000 / this.framesPerSecond);
    }

    public onUpdate(callback: UpdateCallback) {
        this.listeners.push(callback);
    }

    // Keep the reference.
    public unlisten(callback: UpdateCallback) {
        this.listeners = this.listeners.filter(l => l != callback);
    }
}
