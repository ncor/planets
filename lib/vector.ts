export type IVector = {
    x: number,
    y: number
};

export class Vector implements IVector {
    constructor(
        public x: number,
        public y: number
    ) {}

    static fromPlain(vector: IVector) {
        return new Vector(vector.x, vector.y);
    }

    public divn(n: number) {
        return new Vector(this.x / n, this.y / n);
    }

    public addn(n: number) {
        return new Vector(this.x + n, this.y + n);
    }

    public add(vector: IVector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    public sub(vector: IVector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    public subn(n: number) {
        return new Vector(this.x - n, this.y - n);
    }

    public multn(n: number) {
        return new Vector(this.x * n, this.y * n);
    }

    public mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    public norm() {
        const mag = this.mag();
        return new Vector(this.x / mag, this.y / mag);
    }

    public sqdist(vector: IVector) {
        return (this.x - vector.x) ** 2 + (this.y - vector.y) ** 2;
    }

    public dist(vector: IVector) {
        return Math.sqrt(this.sqdist(vector));
    }

    public rad(vector: IVector) {
        return Math.atan2(vector.y - this.y, vector.x - this.x);
    }

    public deg(vector: IVector) {
        return ((this.rad(vector) * 180) / Math.PI + 360) % 360;
    }
}
