import Card from './card';

const List = ({ list, heading }) => {
    return (
        <section className="text-white text-center">
            <h1 className="md:hidden sticky top-10 z-40 mb-8 p-2 text-primary bg-white">
                {heading}
            </h1>
            <div className="grid grid-cols-4 text-sm sm:text-lg md:text-xl md:my-10 md:mx-1">
                {list.map(el => (
                    <Card key={el.id} {...el}></Card>
                ))}
            </div>
        </section>
    );
};

export default List;
