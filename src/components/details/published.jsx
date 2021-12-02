const Published = ({ dates }) => {
    if (dates && dates.length > 0) {
        const onsaleDate = dates.filter(date => date.type === 'onsaleDate');
        const publishDate = new Date(Date.parse(onsaleDate[0].date));
        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const month = monthNames[publishDate.getMonth()];
        const date = publishDate.getDate();
        const year = publishDate.getFullYear();
        return (
            <div className="px-2">
                <h2>Published:</h2>
                <time>{`${month} ${date}, ${year}`}</time>
            </div>
        );
    }
    return null;
};

export default Published;
