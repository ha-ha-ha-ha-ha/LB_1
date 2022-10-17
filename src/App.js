import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "./style.css"

export function App() {
  return <div style={{
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",
    height: '100vh'
  }}>
    <Header />
    <Main />
    <Footer />
  </div>;
}
