const Checkbox = ({ enabled, onChange }) => {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      checked={enabled}
      className="form-tick cursor-pointer appearance-none h-6 w-6 border border-gray-300 rounded-md checked:border-transparent focus:outline-none checked:bg-yellow-400 checked:border-transparent"
    />
  );
};

export default Checkbox;
