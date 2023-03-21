import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { LoginInput, RegisterInput, Nav,SideNav } from './Components';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <LoginInput />
      <SideNav/>
      <RegisterInput/>
      </BrowserRouter>
     
      <p>test</p>
    </div>
  );
}
