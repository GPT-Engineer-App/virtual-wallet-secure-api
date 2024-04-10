import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddCard from "./pages/AddCard.jsx";
import LoadFunds from "./pages/LoadFunds.jsx";
import Transaction from "./pages/Transaction.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-card" element={<AddCard />} />
        <Route path="/load-funds" element={<LoadFunds />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default App;
