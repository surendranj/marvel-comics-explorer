const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-white text-tertiary text-lg z-50 mt-20">
            <a className=" px-2 " href="https://www.marvel.com/">
                Data provided by Marvel. &copy; {year} Marvel
            </a>
        </footer>
    );
};

export default Footer;
