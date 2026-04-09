import { useState, useRef } from 'react';
import TaskFilter from '../components/TaskFilter';
import Toggle from '../components/Toggle';
import SpotlightCard from '../components/ui/SpotlightCard';
import VariableProximity from '../components/ui/VariableProximity';

export default function Tasks({ tasks, setTasks }) {
  const containerRef = useRef(null);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [filter, setFilter] = useState('All');
  const [focusMode, setFocusMode] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input, priority, completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => (filter === 'All' ? true : t.priority === filter));
  const displayedTasks = focusMode ? filteredTasks.filter(t => t.priority === 'High') : filteredTasks;

  return (
    <div className="flex flex-col gap-8" ref={containerRef}>
      <VariableProximity
        label="My Daily Tasks"
        className="text-5xl font-bold font-display tracking-tight text-[#e8c468]"
        fromFontVariationSettings="'wght' 400"
        toFontVariationSettings="'wght' 900"
        containerRef={containerRef}
        radius={100}
      />
      
      <SpotlightCard className="p-1 rounded-[20px]" spotlightColor="rgba(232, 196, 104, 0.15)">
        <form onSubmit={addTask} className="flex flex-wrap gap-4 p-6 bg-[#16161a] rounded-[18px]">
          <input 
            className="bg-transparent border-b border-white/10 flex-1 outline-none focus:border-[#e8c468] py-2 text-lg text-[#f0eff4]"
            placeholder="Plan something great..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex gap-2">
            <select 
              className="bg-[#1c1c22] border border-white/10 rounded-lg px-3 text-sm outline-none text-[#8b8a99]"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <button className="bg-[#e8c468] text-[#0d0d0f] px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform">
              Add Task
            </button>
          </div>
        </form>
      </SpotlightCard>

      <div className="flex justify-between items-center">
        <TaskFilter filter={filter} setFilter={setFilter} />
        <Toggle label="Focus Mode" enabled={focusMode} setEnabled={setFocusMode} />
      </div>

      <div className="grid gap-4">
        {displayedTasks.map(task => (
          <div key={task.id} className="task-card group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 accent-[#e8c468] cursor-pointer"
                  checked={task.completed} 
                  onChange={() => toggleTask(task.id)} 
                />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e8c468]/60">
                    {task.priority} Priority
                  </span>
                  <span className={`text-lg font-medium transition-all ${task.completed ? 'line-through text-[#55546a]' : 'text-[#f0eff4]'}`}>
                    {task.text}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="opacity-0 group-hover:opacity-100 text-[#55546a] hover:text-red-400 transition-all p-2 text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}