class Model2View extends View {
    
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
                       <td>4</td>
                       <td>7</td>
                   </tr>
                   <tr>
                       <td>2</td>
                       <td>5</td>
                       <td>8</td>
                   </tr>
                   <tr>
                       <td>3</td>
                       <td>6</td>
                       <td>9</td>
                   </tr>
                   <tr>
                       <td>10</td>
                       <td>13</td>
                       <td>16</td>
                   </tr>
                   <tr>
                       <td>11</td>
                       <td>14</td>
                       <td>17</td>
                   </tr>
                   <tr>
                       <td>12</td>
                       <td>15</td>
                       <td>18</td>
                   </tr>
                   <tr>
                       <td>19</td>
                       <td>22</td>
                       <td>25</td>
                   </tr>
                   <tr>
                       <td>20</td>
                       <td>23</td>
                       <td>26</td>
                   </tr>
                   <tr>
                       <td>21</td>
                       <td>24</td>
                       <td>27</td>
                   </tr>
                                  
           </tbody>
                 
           <tfoot>
           <td><buttom onclick="mainController.second(event, 0)">Coluna 1</buttom></td>
           <td><buttom onclick="mainController.second(event, 1)">Coluna 2</buttom></td>
           <td><buttom onclick="mainController.second(event, 2)">Coluna 3</buttom></td>
           </tfoot>
           
       </table>`;
   }
}; 