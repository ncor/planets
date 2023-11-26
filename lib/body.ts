import { G, S } from "./constants";
import { Vector } from "./vector";


export class Body {
    constructor(
        public position: Vector,
        public velocity: Vector,
        public acceleration: Vector,
        public mass: number,
        public attractor?: boolean
    ) {}

    public updateVelocity(delta: number) {
        this.velocity = this.velocity.add(this.acceleration.multn(delta));
    }

    public updatePosition(delta: number) {
        this.updateVelocity(delta);
        this.position = this.position.add(this.velocity.multn(delta));
    }

    public applyGravity(bodies: Body[]) {
        this.acceleration = new Vector(0, 0);

        for (let body of bodies) {
            const bodyVector = body.position.sub(this.position);
            const squaredDistance = this.position.sqdist(body.position) + S ** 2;
            const forceMagnitude = (G * this.mass * body.mass) / squaredDistance;
            const forceDirection = bodyVector.norm();

            this.acceleration = this.acceleration.add({
                x: forceDirection.x * (forceMagnitude / this.mass),
                y: forceDirection.y * (forceMagnitude / this.mass)
            });
        }
    }
}
