import { useState } from 'react'
import './App.css'


function App() {
   // useState hook to keep track of counter value.
  const [count, setCount] = useState(0);

  // FUnction to increase count
  const increase = () => setCount(count + 1); 

  // FUnction to decrease count
  const decrease = () => setCount(count -1);

  // Function to rest count value
  const reset = () => setCount(0);


  return (
    <div className="text-center p-5 bg-indigo-700">
      <h1 className="text-2xl font-bold text-white">Simple React Counter App</h1>

      <h2 className='text-xl text-white mb-3'>{count}</h2>
      {/* Button to increase count */}
      <button  className='p-2 bg-blue-500 text-white rounded mr-3' onClick={increase}>Increase</button>
      
        {/* Button to decrease count */}
      <button className='p-2 bg-pink-400 text-white rounded mr-3' onClick={decrease}>Decrease</button>

        {/* Button to decrease count */}
        <button className='p-2 bg-gray-400 text-white rounded ' onClick={reset}>Reset</button>


    </div>
  );
}


export default App;

