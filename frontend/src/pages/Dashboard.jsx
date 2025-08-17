import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleCheck = () => {
    // later this will connect to API
    navigate("/result");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Upload or enter data to check if it’s Fake.</p>
      <button
        onClick={handleCheck}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Run Fake Check
      </button>
    </div>
  );
}

export default Dashboard;
