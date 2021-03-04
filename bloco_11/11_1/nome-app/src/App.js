
import './App.css';
import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const minhasTarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

class App extends React.Component{
  render(){
  return minhasTarefas.map(tarefas = task(tarefas));
  }
}
