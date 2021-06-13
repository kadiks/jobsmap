const Base = ({ children }) => {
  return (
    <span className="text-yellow-100 inline-block mr-1 mb-1 text-xs border border-yellow-100 bg-yellow-100 bg-opacity-50 py-1 px-2 rounded-lg">
      {children}
    </span>
  );
};

export default Base;
