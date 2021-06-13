import Base from "./Base";

const ButtonGroup = ({ buttons, selectedId, onChange = () => {} }) => {
  if (!selectedId) {
    selectedId = buttons[0].id;
  }
  const onClick = (id) => {
    onChange(id);
  };
  return (
    <div className="tab-group flex justify-center text-white">
      {buttons.map(({ id, name }, index) => {
        const classes = [
          "border",
          "py-1",
          "px-2",
          "hover:bg-yellow-100",
          "hover:text-yellow-600",
          "hover:shadow-inner",
          "hover:border-yellow-200",
        ];
        if (index === 0) {
          classes.push("rounded-l-lg");
          classes.push("border-r-0");
        }
        if (buttons.length === index + 1) {
          classes.push("rounded-r-lg");
        }
        if (selectedId === id) {
          classes.push("bg-yellow-100");
          classes.push("text-yellow-600");
        }
        return (
          <Base
            key={id}
            className={classes.join(" ")}
            onClick={() => onClick(id)}
          >
            {name}
          </Base>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
