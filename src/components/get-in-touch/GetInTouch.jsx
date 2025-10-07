import SocialNetworks from "../social-networks/Social-networks";

const GetInTouch = () => {
    return (
        <>
        <section id="contato" className="flex flex-col items-center w-full mt-12 pt-14 gap-6 relative max-w-[1920px]">
            
            <h2 className="text-[38px] md:text-[78px] font-extrabold text-center"><span className="font-light">Get</span> In Touch</h2>

            <div className="flex flex-row gap-8 p-4">
                <SocialNetworks classname={"w-[52] h-[52]"}/>
            </div>

            <div className="flex flex-col justify-center text-md sm:text-lg text-gray-400 gap-2">
                <p><a className="text-center" href="mailto:contato@lucass.io">contato@lucass.io</a></p>
                <p><a className="text-center" href="#">+55 (47) 98823-0826</a></p>
            </div>

        </section>
        </>
    )
}

export default GetInTouch;