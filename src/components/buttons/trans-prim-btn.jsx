const TransparentPrimaryBtn = ({ children, className, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className={`text-primary border-2 px-10 rounded ${className}`}
        >
            {children}
        </button>
    );
};

export default TransparentPrimaryBtn;
