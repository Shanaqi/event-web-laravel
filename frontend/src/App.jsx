import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-page text-textMain">
      <Outlet />
    </div>
  );
}

export default App;
