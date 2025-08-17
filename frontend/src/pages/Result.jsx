import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Result Page</h1>
      <p className="mb-4">This is where we’ll show if data is real or fake.</p>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default Result;

