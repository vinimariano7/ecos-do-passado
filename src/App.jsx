import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );


}


export default App;
