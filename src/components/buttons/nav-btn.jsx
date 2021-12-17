const NavBtn = ({ children }) => {
    return (
        <button className="rounded-md px-2 my-2 w-36 bg-tertiary text-white ring-2 ring-primary hover:ring-secondary">
            {children}
        </button>
    );
};

export default NavBtn;
