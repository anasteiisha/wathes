import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<div>Головна</div>} />
      </Routes>
    </>
  );
}

export default App;
