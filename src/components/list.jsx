import Card from './card';

const List = ({ list, heading }) => {
    console.log(list);
    const listWithImagesOnly = list.filter(el => {
        if (el.thumbnail) {
            return !el.thumbnail.path.includes('image_not_available');
        } else {
            return el;
        }
    });
    return (
        <section className="text-white text-center">
            <h1 className="sm:hidden sticky top-10 z-40 mb-8 p-2 text-primary bg-white">
                {heading}
            </h1>
            <div>
                {listWithImagesOnly.map(el => (
                    <Card key={el.id} {...el}></Card>
                ))}
            </div>
        </section>
    );
};

export default List;
