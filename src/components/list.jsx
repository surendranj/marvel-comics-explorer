import Card from './card';
import Footer from './footer';

const List = ({ list, heading }) => {
    return (
        <section className="text-white text-center">
            <h1 className="bg-white fixed md:hidden p-2 text-primary top-10 w-full z-40">
                {heading}
            </h1>
            <div className="grid grid-cols-4 text-sm mt-20 sm:text-lg md:text-xl md:mx-10 md:my-10 md:grid-cols-6 md:gap-2">
                {list.map(el => (
                    <Card key={el.id} {...el}></Card>
                ))}
            </div>
        </section>
    );
};

export default List;
