class FinalView extends View {
    
    constructor(elemento) {
        
       super(elemento);
    }
    
   template(number) {
       return `<p>Seu número foi:</p>
       <p>${number}</p>`;
   }
}; 