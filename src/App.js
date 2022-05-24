import { Route, Routes } from "react-router-dom";
import { Portafolio } from "./page/Portafolio/Portafolio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portafolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
