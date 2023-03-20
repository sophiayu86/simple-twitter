import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { LoginInput, RegisterInput, Nav } from './Components';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <LoginInput />
      <RegisterInput/>
      </BrowserRouter>
     
      <p>test</p>
    </div>
  );
}
