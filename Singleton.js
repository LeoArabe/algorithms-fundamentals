class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        // Inicialização da instância
        this.data = [];
        Singleton.instance = this;
    }

    addData(item) {
        this.data.push(item);
    }

    getData() {
        return this.data;
    }
}

// Uso do Singleton
const instance1 = new Singleton();
instance1.addData("Item 1");

const instance2 = new Singleton(); // Esta instância será a mesma que a instância1
instance2.addData("Item 2");
instance1.addData('item 3')

console.log(instance1 === instance2); // Ambas as instâncias são as mesmas

console.log(instance1.getData()); // [ 'Item 1', 'Item 2' ]
console.log(instance2.getData()); // [ 'Item 1', 'Item 2' ]

