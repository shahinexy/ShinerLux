
const Cards = ({data}) => {
    const {image, estate_title, segment_name, price, description} = data;
    return (
        <div>
            <div className="bg-primary text-white shadow-md shadow-black">
                <div className="relative">
                    <img className="w-full h-56 shadow-md shadow-secondary" src={image} alt="" />
                    <div className="absolute top-2 right-1 flex gap-5 text-white">
                        <small className="bg-primary px-2">Sell</small>
                        <small className="bg-secondary px-2">Rent</small>
                    </div>
                </div>
                <div className="p-4 space-y-3">
                <p className="text-xl font-semibold">{estate_title}</p>
                <div className="flex justify-between">
                    <p>Price: {price.sell}$</p>
                    <small className="bg-secondary px-2 text-primary font-bold">{segment_name}</small>
                </div>
                <p className="border-b border-secondary pb-4">{description}</p>
                <button className="btn bg-secondary border-primary hover:bg-primary text-black hover:text-white font-semibold rounded-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;