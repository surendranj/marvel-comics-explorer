const Title = ({ name, title }) => {
    return (
        <h1 className="col-span-2 text-center text-3xl w-full bg-white p-1 border-primary border-b border-t">
            {name || title}
        </h1>
    );
};

export default Title;
