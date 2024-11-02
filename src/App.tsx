import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <header className="home-header bg-primary h-5" />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
