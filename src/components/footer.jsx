const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-white mt-auto text-tertiary text-lg fixed bottom-0 w-full z-50">
            <a className=" px-2 " href="https://www.marvel.com/">
                Data provided by Marvel. &copy; {year} Marvel
            </a>
        </footer>
    );
};

export default Footer;
