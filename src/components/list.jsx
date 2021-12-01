import Card from './card';

const List = ({ list, heading }) => {
    return (
        <section className="text-white text-center">
            <h1 className="bg-white fixed md:hidden p-2 text-primary top-10 w-full z-40">
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
