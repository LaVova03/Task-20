class SuperMath {
    constructor() {
    };

    check(obj = { X, Y, znak }) {
        if (confirm("Підтвердити цей об'єкт?")) {
            this.obj = obj;
            this.calculate();
        } else {
            this.input();
        };
    };

    input() {
        this.obj = {};
        this.obj.X = +prompt('Введіть число');
        if (isNaN(this.obj.X)) {
            alert('Помилка, введіть число');
            this.input();
            return;
        }

        this.obj.Y = +prompt('Введіть число');
        if (isNaN(this.obj.Y)) {
            alert('Помилка, введіть число');
            this.input();
            return;
        }

        const validOperators = ['+', '-', '/', '*', '%'];
        this.obj.znak = prompt('Введіть символ (+ - / * %)');
        if (!validOperators.includes(this.obj.znak)) {
            alert('Помилка, введіть правильний символ');
            this.input();
            return;
        }

        this.calculate();
    }

    calculate() {
        const { X, Y, znak } = this.obj;
        let result = 0;

        switch (znak) {
            case '+':
                result = X + Y;
                break;
            case '-':
                result = X - Y;
                break;
            case '/':
                result = X / Y;
                break;
            case '*':
                result = X * Y;
                break;
            case '%':
                result = X % Y;
                break;
            default:
                console.log('Помилка');
                return;
        };

        console.log(result);
    };
};

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: '/' };
p.check(obj);
