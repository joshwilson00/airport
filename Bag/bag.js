class Bag {
    constructor(weight){
        if (!weight || (typeof weight != 'number')) {
            throw new Error('Invalid value for weight!');
        }
        this.weight = weight;
    }
}

module.exports = Bag;