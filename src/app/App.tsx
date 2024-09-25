import { Footer, Header } from "src/widges";
import { MainPage } from "../pages/index";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
