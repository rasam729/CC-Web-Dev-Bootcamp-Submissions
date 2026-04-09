export default function TaskFilter({ filter, setFilter }) {
  const options = ['All', 'High', 'Medium', 'Low'];
  
  return (
    <div className="flex gap-2 mb-6">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => setFilter(opt)}
          className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
            filter === opt ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}