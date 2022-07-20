import logo from './logo.svg';
import './App.css';
import {Testimonio} from './componentes/Testimonio';

function App() {
  const testimoniosData = [
    {
       nombre:'Gonzalo', 
       cargo:'Docente', 
       texto:'El curso va como piña. Arranca desde lo fácil hasta lo más difícil. O bueno, hasta donde vi es así, pero me faltan como 5 hs de video.',
       empresa: 'UNLP',
       pais: 'Ringuelet'
    },
    {
      nombre:'German', 
      cargo:'Estudiante',
      texto:'El curso no me gusta. Usa clases CSS con nombres muy largos y explícitos, y eso me hace doler los ojos.',
      empresa: 'Ensolvers',
      pais: 'Formosa'
    },
    {
      nombre:'Taca', 
      cargo:'APU', 
      texto:'La programación no tiene secretos para mi. Todo lo que dice el curso ya lo había delirado en mis sueños.',
      empresa: '2230 Sistemas',
      pais: 'Claypole'
    },
    {
      nombre:'Pablo', 
      cargo:'Becario', 
      texto:'Yo que se, no entendí nada. Ya no se cómo afrontar esto.',
      empresa: 'Samurai BoyZ',
      pais: 'Esquel'
    }
  ];
  
 let renderTestimonio=function(data,number){
   return (
        <Testimonio persona={data} />
    )
  };

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios</h1>
        { testimoniosData
            .sort( function(a,b){ return a.nombre > b.nombre })
            .map( (
              testimonio,index) => renderTestimonio(testimonio,index)
              ) 
        }    
      </div>
    </div>
  );
}

export default App;
