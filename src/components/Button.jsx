import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
    icon,
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
            {icon && <span className="btn-icon">{icon}</span>}
        </button>
    );
};

export default Button;
