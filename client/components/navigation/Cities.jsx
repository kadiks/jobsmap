const Cities = ({
  cities = [
    { name: "Paris", value: 1234 },
    { name: "Paris", value: 1234 },
  ],
  onClick = () => {},
}) => {
  return (
    <ul
      className="text-white overflow-scroll"
      style={{
        height: "80vh",
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
      className="flex p-1 border-b border-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-indigo-800"
    >
      <span className="flex-grow">{name}</span>
      <span className="text-indigo-300">{value}</span>
    </li>
  );
};

export default Cities;
