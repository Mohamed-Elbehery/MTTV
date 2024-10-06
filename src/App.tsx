import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="home-header bg-primary h-5" />
      <Outlet />
    </main>
  );
};

export default App;
