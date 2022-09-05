import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Pages/Registration/Register";
import Login from "./Components/Pages/LogIn/Login";
import Inbox from "./Components/Pages/Chats/Inbox/Inbox";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
