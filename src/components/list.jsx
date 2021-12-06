import Card from './card';

const List = ({ list, heading }) => {
    return (
        <section className="text-white text-center">
            <h1 className=" fixed md:hidden p-2 top-10 w-full z-40 text-tertiary bg-white">
                {heading}
            </h1>
            <div className="flex flex-col items-center mt-20 gap-y-5">
                {list.map(el => (
                    <Card key={el.id} {...el}></Card>
                ))}
            </div>
        </section>
    );
};

export default List;
