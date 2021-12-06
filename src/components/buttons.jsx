export const TransparentPrimaryBtn = ({ children, className, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className={`text-primary border-2 px-10 rounded ${className}`}
        >
            {children}
        </button>
    );
};

export const NavBtn = ({ children }) => {
    return (
        <button className="rounded-md px-2 my-2 bg-tertiary text-white ring-2 ring-primary hover:ring-secondary">
            {children}
        </button>
    );
};
