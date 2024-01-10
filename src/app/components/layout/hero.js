import Image  from "next/image";



const Hero = () => {
    return (
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="d-flex">
                        <div className="col-lg-6">
                            <h4 className="">BETTER LEARNING FUTURE WITH US</h4>
                            <h1 className='font-blod pt-2'>Education Is<br/> About Academic <br/>Excellence</h1>
                            <p className=' pt-2'>Sed eu volutpat arcu, a tincidunt nulla quam,<br/> feugiat sit amet ipsum a, dapibus porta velit.</p>
                            <button className="mt-5 btn bg-blue-500 btn-primary">Get Started Today</button>
                        </div>
                        <div className="col-lg-6">
                            <Image src="/assets/images/self-2.png" alt="Picture of the banner"
                                width={500}
                                height={500} />

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;