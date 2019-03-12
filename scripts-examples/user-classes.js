class Polygon {
    constructor(width, height) {
        this.length = width;
        this.height = height;
    }

    square() {
        return this.length * this.height
    }

    static description() {
        return 'this is polygon'
    }
}

let figure = new Polygon(10, 20 );
console.log(figure.square());
console.log(Polygon.description());

// inheritance

class Square extends Polygon {
    constructor(width) {
        super(width, width)
    }
    square() {
        console.log('this is a square');
        return super.square();
    }

}

let square = new Square(30);
square.square();