const Keywords = ({
    keywords = [
      { name: "PHP", value: "php" },
      { name: "C#", value: "c#" },
    ],
    onClick = () => {},
  }) => {
    return (
      <ul
        className="text-white overflow-scroll"
        style={{
          overflow: "scroll",
          height: "80vh",
        }}
      >
        {keywords.map((city, index) => {
          return <Item key={index} {...city} onClick={onClick} />;
        })}
      </ul>
    );
  };
  
  const Item = ({ name, value, onClick }) => {
    return (
      <li
        className="flex p-1 border-b border-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-indigo-800"
      >
        <span className="flex-grow font-sans">{name}</span>
        {/* <span className="text-indigo-300 font-sans">{value}</span> */}
        <input
            type="checkbox"
            onChange={() => onClick(value)}
            className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:border-transparent focus:outline-none checked:bg-yellow-400 checked:border-transparent" />
      </li>
    );
  };
  
  export default Keywords;
  