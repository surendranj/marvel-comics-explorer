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
        <section className="text-white m-4 text-center">
            <h1 className="mb-8">{heading}</h1>
            <div>
                {listWithImagesOnly.map(el => (
                    <Card key={el.id} {...el}></Card>
                ))}
            </div>
        </section>
    );
};

export default List;
