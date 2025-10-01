import Image from "next/image";
import SocialNetworks from "../social-networks/Social-networks";
import Technologies from "../technologies/Technologies";

const Header = () => {
    return(
        <>
            <header className="w-full flex flex-col items-center min-h-lvh justify-center p-4 pt-14 gap-6 relative max-w-[1920px]">
                <div className="bg-[url('/background-mobile.webp')] bg-center lg:bg-[url('/background-right.webp')] absolute top-0 left-0 w-full h-full lg:bg-right -z-10 bg-no-repeat"></div>
                <div className="lg:bg-[url('/bakcground-left.webp')] absolute top-0 left-0 w-full h-full bg-left -z-10 bg-no-repeat"></div>
                <Image src="/myPhoto.png" sizes="(max-width: 768px) 140px, 320px" className="object-cover rounded-full" width={140} height={140} alt="Lucas Santos Photo" />
                <h1 className="text-[20] text-center sm:text-3xl font-medium">Lucas Santos - <span className="text-orange-500">FullStack Developer</span></h1>
                <p className="w-full sm:text-3xl text-center font-light text-gray-400 max-w-[680px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac libero at erat feugiat tincidunt . Integer convallis, felis at pretium volutpat, est ligula volutpat ex, eget tincidunt magna lorem ut magna</p>
                <div className="w-full flex flex-row justify-between max-w-[600px]">
                    <div className="flex flex-col justify-start text-xs sm:text-lg text-gray-400 gap-1">
                        <p><a href="mailto:contato@lucass.io">contato@lucass.io</a></p>
                        <p><a href="#">+55 (47) 98823-0826</a></p>

                        <div className="mt-4">
                            <a className="underline text-xs" href="#">Download CV</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <SocialNetworks classname={"w-[24] h-[24]"} />
                    </div>
                </div>
                <div className="overflow-hidden w-full max-w-[650px] mt-10">
                    <div className="marquee">
                        <div className="marquee-track flex gap-2 md:gap-10">
                        <div className="pl-10 marquee-group inline-flex gap-10 [&>*]:w-8 [&>*]:h-8 md:[&>*]:w-12 md:[&>*]:h-12 mt-[20] saturate-[0.0]">
                            <Technologies />
                        </div>
                        <div className="pl-10 marquee-group inline-flex gap-2 [&>*]:w-8 [&>*]:h-8 md:[&>*]:w-12 md:[&>*]:h-12 mt-[20] saturate-[0.0]">
                            <Technologies />
                        </div>
                        </div>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header