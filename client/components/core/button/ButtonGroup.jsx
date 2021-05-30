import Base from './Base';

const ButtonGroup = ({
    buttons,
    selectedId,
    onChange = () => {}
}) => {
    if (!selectedId) {
        selectedId = buttons[0].id;
    }
    const onClick = (id) => {
        onChange(id);
    } 
    return (
        <div className="tab-group flex justify-center text-white">
            {buttons.map(({ id, name }, index) => {
                console.log("buttons.map");
                const classes = [
                    "border", "py-1", "px-2",
                    "hover:bg-indigo-100", "hover:text-indigo-600",
                    "hover:shadow-inner", "hover:border-indigo-200"
                ];
                if (index === 0) {
                    classes.push('rounded-l-lg');
                    classes.push('border-r-0');
                }
                if (buttons.length === index + 1) {
                    classes.push('rounded-r-lg');
                }
                if (selectedId === id) {
                    classes.push('bg-indigo-100');
                    classes.push('text-indigo-600');
                }
                return (
                    <Base
                        key={id}
                        className={classes.join(' ')}
                        onClick={() => onClick(id)}>
                        {name}
                    </Base>
                );
            })}
        </div>
    );
};

export default ButtonGroup;