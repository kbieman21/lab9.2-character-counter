
import './App.css';
 import CharacterCounter from './components/CharacterCounter';
import StatsDisplay from './components/StatsDisplay';
//import StatsDisplay from './components/StatsDisplay';
import TextInput from './components/TextInput';



function App(){

  return (
    <div className="bg-color">
    

      
      {/* <TextInput 

      onTextChange={(e) => console.log('TextChanged')
      }/> */}

      {/* <CharacterCounter/> */}
        <StatsDisplay/> 
      
    </div>
  )
}

export default App;