import {useState} from 'react'

const Dummy = () => {
    const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange} className="bg-gray-300 text-sm  w-40 p-2 ">
          <option value="Option 1">A-Z</option>
          <option value="Option 2">Z-A</option>
          <option value="Option 3">Newest</option>
          <option value="Option 4">Oldest</option>
        </select>


    </div>
  )
}

export default Dummy
