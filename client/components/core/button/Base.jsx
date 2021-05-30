const Base = ({
    children,
    className = "",
    onClick = () => {}
}) => {
    const classes = [
        "focus:outline-none",
        ...className.split(' ')
    ];
    return (
        <button className={classes.join(' ')} onClick={onClick}>{children}</button>
    );
};

export default Base;