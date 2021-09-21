import {BrowserRouter, Router, Switch, Link, Route} from 'react-router-dom'

import Teste1 from './Exercícios/Teste1'
import Teste2 from './Exercícios/Teste2';
import Exercicio01 from './Exercícios/01'
import Exercicio02 from './Exercícios/02'
import Exercicio03 from './Exercícios/03'
import Exercicio04 from './Exercícios/04'

import './App.css';

function App() {
  return (
    <>
      <h1>React Hooks</h1>      
        <blockquote>        
          <em>Hooks</em> são funções especiais do React que podem ser usadas
          dentro de componentes funcionais para armazenar dados ou para realizar 
          ações atreladas ao ciclo de vida do componente (efeitos colaterais). 
          Essas funções incluem <code>useState</code>, <code>useEffect</code> 
          e <code>useRef</code>.
        </blockquote>

        <BrowserRouter>
          <ul>
            <li>
              <Link to="teste1">Teste 1</Link>
            </li>
            <li>
              <Link to="teste2">Teste 2</Link>
            </li>
            <li>
              <Link to="ex01">Exercício 01 </Link>
            </li>
            <li>
              <Link to="ex02">Exercício 02 </Link>
            </li>
            <li>
              <Link to="ex03">Exercício 03 </Link>
            </li>
            <li>
              <Link to="ex04">Exercício 04 </Link>
            </li>
            
          </ul>

          <div style={{border:'1px solid blue', padding: '20px'}}>
          <Switch>
            <Route path="/teste1">
              <Teste1/>
            </Route>
            <Route path="/teste2">
              <Teste2/> 
            </Route>
            <Route path="/ex01">
              <Exercicio01/> 
            </Route>
            <Route path="/ex02">
              <Exercicio02/> 
            </Route>
            <Route path="/ex03">
              <Exercicio03/> 
            </Route>
            <Route path="/ex04">
              <Exercicio04/> 
            </Route>
          </Switch>
          </div>
        </BrowserRouter>
    
    </>
  );
}

export default App;