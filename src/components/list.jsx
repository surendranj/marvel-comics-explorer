import Card from './card';
import FullScreenLoader from './loader';

const List = ({ list, heading }) => {
    return (
        <section className="text-white text-center md:text-base md:px-4">
            <h1 className=" fixed md:hidden p-2 top-10 w-full z-40 text-tertiary bg-white">
                {heading}
            </h1>
            {list ? (
                <div className="flex flex-col items-center mt-20 gap-y-5 md:items-stretch md:grid md:grid-cols-6 md:gap-2 ">
                    {list.map(el => (
                        <Card key={el.id} {...el}></Card>
                    ))}
                </div>
            ) : (
                <FullScreenLoader />
            )}
        </section>
    );
};

export default List;
