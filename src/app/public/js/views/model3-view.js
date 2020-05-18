class Model3View extends View {
    
    constructor(elemento) {
        
       super(elemento);
    }
    
   template() {
       return`
       <table>
           <thead>
               <tr>
                   <th>1º</th>
                   <th>2º</th>
                   <th>3º</th>
               </tr>
           </thead>
       
           <tbody>
                   
                   <tr>
                       <td>1</td>
                       <td>10</td>
                       <td>19</td>
                   </tr>
                   <tr>
                       <td>2</td>
                       <td>11</td>
                       <td>20</td>
                   </tr>
                   <tr>
                       <td>3</td>
                       <td>12</td>
                       <td>21</td>
                   </tr>
                   <tr>
                       <td>4</td>
                       <td>13</td>
                       <td>22</td>
                   </tr>
                   <tr>
                       <td>5</td>
                       <td>14</td>
                       <td>23</td>
                   </tr>
                   <tr>
                       <td>6</td>
                       <td>16</td>
                       <td>24</td>
                   </tr>
                   <tr>
                       <td>7</td>
                       <td>17</td>
                       <td>25</td>
                   </tr>
                   <tr>
                       <td>8</td>
                       <td>18</td>
                       <td>26</td>
                   </tr>
                   <tr>
                       <td>9</td>
                       <td>19</td>
                       <td>27</td>
                   </tr>
                                  
           </tbody>
                 
           <tfoot>
           <td><buttom onclick="mainController.thirt(event, 0)">Coluna 1</buttom></td>
           <td><buttom onclick="mainController.thirt(event, 1)">Coluna 2</buttom></td>
           <td><buttom onclick="mainController.thirt(event, 2)">Coluna 3</buttom></td>
           </tfoot>
           
       </table>`;
   }
}; 