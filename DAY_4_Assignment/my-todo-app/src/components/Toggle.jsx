export default function Toggle({ label, enabled, setEnabled }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setEnabled(!enabled)}>
      <div className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${enabled ? 'bg-green-500' : 'bg-gray-600'}`}>
        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${enabled ? 'translate-x-6' : ''}`} />
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}