import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Shop} from "./components/Shop";

function App() {
    return (
        <div className={"app"}>
            <Header/>
            <Shop/>
            <Footer/>
        </div>
    );
}

export default App;
