const Title = ({ name, title }) => {
    return (
        <h1 className="flex justify-center p-1 border-primary border-b border-t">
            {name || title}
        </h1>
    );
};

export default Title;
