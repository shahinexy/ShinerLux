import { useLoaderData, useParams } from 'react-router-dom';

const SingleCard = () => {
    const datas = useLoaderData()
    const param = useParams()
    const data = datas.find(data => data.id === param.id)
    const {image, estate_title, segment_name, price, description, status, area_sqft, location, facilities, rant_package_facilities, about} = data;
    return (
        <div>
            <div className='max-w-5xl mx-auto'>
                <div>
                    <img className='w-full h-[50vh]' src={image} alt="" />
                </div>
                <div className='md:px-5 px-3 my-3'>
                <div className='flex justify-between flex-wrap'>
                    <p className='text-3xl font-bold'>{estate_title}</p>
                    <p className='bg-primary px-10 text-white'>{segment_name}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;