import { Helmet } from "react-helmet-async";
import Cards from "../components/Cards";
import Slider from "../components/Slider";
import { useLoaderData } from 'react-router-dom';
import HomeEnd from './../components/HomeEnd';

const Home = () => {
    const datas = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>ShinerLux | Home</title>
            </Helmet>
            <Slider></Slider>
            <div className="max-w-7xl mx-auto p-5">
                {/* card section  */}
                <div className="md:my-8 my-5">
                    <div className="md:w-2/3 mx-auto text-center">
                        <h2 data-aos="fade-down-right" className="md:text-4xl text-2xl font-bold my-5">GET YOUR <span className="text-secondary">LUXURIOUS</span> PROPERTIES</h2>
                        <p data-aos="fade-down-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatem provident necessitatibus tempore voluptates laudantium earum? Pariatur, odio nostrum, cum officia beatae culpa.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:my-12 my-5">
                        {
                            datas.map((data, idx) => <Cards key={data.id} data={data} idx={idx}></Cards>)
                        }
                    </div>
                </div>
                {/* other section of home */}
                <HomeEnd></HomeEnd>
            </div>
        </div>
    );
};

export default Home;