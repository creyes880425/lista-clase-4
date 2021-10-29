import { useState } from 'react';
import './App.css';
import Form from './components/form/form';
import List from './components/list/list';

function App() {

  const [lista, setLista] = useState([]); 
  return (
    <>
      <Form data={{ lista , setLista}}/>
      <List data={{ lista , setLista}}/>
    </>    
  );
}

export default App;
