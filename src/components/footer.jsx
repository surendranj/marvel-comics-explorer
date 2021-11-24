const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="mt-auto mx-4 text-tertiary text-lg">
            <a href="https://www.marvel.com/">Data provided by Marvel. &copy; {year} Marvel</a>
        </footer>
    );
};

export default Footer;
