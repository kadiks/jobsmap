const Cities = ({
  cities = [
    { name: "Paris", value: 1234 },
    { name: "Paris", value: 1234 },
  ],
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
      {cities.map((city, index) => {
        return <Item key={index} {...city} onClick={onClick} />;
      })}
    </ul>
  );
};

const Item = ({ name, value, coords, onClick }) => {
  return (
    <li
      onClick={() => onClick(coords)}
      className="flex p-1 border-b border-yellow-100 cursor-pointer hover:bg-yellow-100 hover:text-gray-800"
    >
      <span className="flex-grow font-sans">{name}</span>
      <span className="text-yellow-300 font-sans">{value}</span>
    </li>
  );
};

export default Cities;
