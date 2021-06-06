const Checkbox = ({ enabled, onChange }) => {
  return <input type="checkbox" onChange={onChange} checked={enabled} />;
};

export default Checkbox;
