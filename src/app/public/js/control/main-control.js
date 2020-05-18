class MainController {
    
    constructor() {
        let $ = document.querySelector.bind(document);

        this._array = new Array();

        this._InicialView = new InicialView($('#main'));
        this._InicialView.update();

        this._Model1View = new Model1View($('#main'));
        this._Model2View = new Model2View($('#main'));
        this._Model3View = new Model3View($('#main'));

        this._FinalView = new FinalView($('#main'));
    }

    next(event){
        event.preventDefault();
        this._Model1View.update();
    }

    first(event, x){
        event.preventDefault();
        this._array.add(x);
        this._Model2View.update();
    }

    second(event, x){
        event.preventDefault();
        this._array.add(x);
        this._Model3View.update();
    }

    thirt(event, x){
        event.preventDefault();
        this._array.add(x);
        this._FinalView.update(this._valorFinal(this._array.array));
    }

    _valorFinal(array){
        let x = array[0];
        let y = array[1];
        let z = array[2];
        return ((1*x + 3*y + 9*z) + 1)
    }
}