import img from '../assets/images/download.jpg'
import img2 from '../assets/images/18a219bcab20160d04bbc7209bca6e2b.jpg'
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaGithub, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
const Contact = () => {
    return (
        <div>
            <div className='bg-no-repeat bg-cover bg-center md:h-[55vh] h-[35vh]' style={{ backgroundImage: `url(${img})` }}>
                <h1 className="md:text-5xl text-3xl h-full flex items-center justify-center text-white bg-black/40 font-bold">Contact Us</h1>
            </div>
            <div className='max-w-7xl mx-auto px-5'>
                <div className='grid md:grid-cols-2 grid-cols-1 my-10 gap-5'>
                    <div className='bg-secondary p-5 text-primary space-y-5 flex flex-col justify-center'>
                        <h2 className='md:text-4xl text-3xl font-semibold'>Contact With Us</h2>
                        <p className='text-xl font-medium'>785 15h Street, Office 478 Berlin, De 81566</p>
                        <p className='flex items-center gap-3 text-xl font-medium'><MdEmail></MdEmail> info@gmail.com</p>
                        <p className='flex items-center gap-3 text-xl font-medium'><FaPhone></FaPhone> +88 0160972999</p>
                        <div className='flex gap-4 md:text-4xl text-3xl'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaGithub></FaGithub>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                    <div className='bg-primary p-5 text-white space-y-6'>
                        <div className="grid sm:grid-cols-2 gap-5 ">
                            <div>
                                <p>First Name</p>
                                <input className='className="mt-2 px-3 py-2 w-full text-black mt-3' type="text" placeholder='First Name'/>
                            </div>
                            <div>
                                <p>Last Name</p>
                                <input className='className="mt-2 px-3 py-2 w-full text-black mt-3' type="text" placeholder='Last Name'/>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <p>Email Address</p>
                                <input className='className="mt-2 px-3 py-2 w-full text-black mt-3' type="email" placeholder='Email'/>
                            </div>
                            <div>
                                <p>Phone Number</p>
                                <input className='className="mt-2 px-3 py-2 w-full text-black mt-3' type="text" placeholder='Number'/>
                            </div>
                        </div>
                        <div>
                            <p>Message</p>
                            <textarea className='className="mt-2 px-3 py-2 w-full text-black mt-3' name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
                        </div>
                        <div>
                            <button className='btn flex-1 w-full bg-primary text-white rounded-none md:text-xl font-semibold hover:text-primary'>Send  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;