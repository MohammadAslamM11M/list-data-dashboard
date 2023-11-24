import Home from "./components/pages/Home/Home";
import { SnackbarProvider } from "notistack";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Module2 from "./components/pages/Module2/Module2";
import Module3 from "./components/pages/Module3/Module3";
import Module4 from "./components/pages/Module4/Module4";
import Module5 from "./components/pages/Module5/Module5";
import Module6 from "./components/pages/Module6/Module6";
import "./App.css";

function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/accounts" exact element={<Module2 />}></Route>
                        <Route path="/payroll" exact element={<Module3 />}></Route>
                        <Route path="/reports" exact element={<Module4 />}></Route>
                        <Route path="/advisor" exact element={<Module5 />}></Route>
                        <Route path="/contact" exact element={<Module6 />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </SnackbarProvider>
    );
}

export default App;
