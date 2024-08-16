import './App.css';
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx"
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';

function App() {

  const buttonProps = {
    text: "mail",
    color: "red",
    a:1,
    b:2,
    c:3
  }

  return (
    <>
      <Button {...buttonProps}/>
      <Button text = {"cafe"}/>
      <Button text = {"blog"}>
        <div>childComponents</div>
        <Header/>
      </Button>
    </>
  )
}

export default App
