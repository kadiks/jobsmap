const Keywords = ({
  keywords = [
    { name: "PHP", value: "php" },
    { name: "C#", value: "c#" },
  ],
  selectedKeywords,
  scrollHeight,
  onClick = () => {},
}) => {
  return (
    <ul
      className="text-white overflow-scroll"
      style={{
        overflow: "scroll",
        height: scrollHeight,
      }}
    >
      {keywords.map((keyword, index) => {
        return (
          <Item
            key={index}
            {...keyword}
            selectedKeywords={selectedKeywords}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

const Item = ({ name, value, selectedKeywords, onClick }) => {
  return (
    <li className="flex p-1 border-b border-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-indigo-800">
      <span className="flex-grow font-sans">{name}</span>
      {/* <span className="text-indigo-300 font-sans">{value}</span> */}
      <input
        type="checkbox"
        onChange={() => onClick(value)}
        checked={selectedKeywords.includes(value)}
        className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:border-transparent focus:outline-none checked:bg-yellow-400 checked:border-transparent"
      />
    </li>
  );
};

export default Keywords;
