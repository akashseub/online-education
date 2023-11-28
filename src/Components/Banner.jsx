

const Banner = () => {
    return (
        <div className="text-white space-y-8 bg-[url('https://i.ibb.co/Vpq2zHs/online-education-background-drop.png')]">
            <div className="grid grid-cols-3 text-white">
                <div className="col-span-2 space-y-12">
                    <h1 className="text-6xl font-bold"><span className="text-[#ba9eff]">Best courses </span>are <br /> waiting to enrich <br /> your skill</h1>
                    <p>Provides you with the latest online learning system and material that help your knowledge growing.</p>
                    <div className="grid grid-cols-3">
                        <div className="items-center relative col-span-2">
                            <input className="w-full py-4 pl-8 rounded-full" type="text" name="" id="" placeholder="Want to learn? " />
                            <button className="absolute right-4 px-8 py-2 top-2 rounded-full bg-[#7c56da]">Explore</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/MhCs6m5/online-education-banner.png" alt="" />
                </div>
            </div>
            <div>
                <fieldset>
                    <legend className="text-white">Hello</legend>
                    <label htmlFor="">hi</label>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default Banner;