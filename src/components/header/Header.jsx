import Image from "next/image";
import SocialNetworks from "../social-networks/Social-networks";
import Technologies from "../technologies/Technologies";

const Header = () => {
    return(
        <>
            <header className="w-full flex flex-col items-center min-h-lvh justify-center p-4 px-[18px] pt-14 gap-6 relative max-w-[1920px]">
                <div className="bg-[url('/background-mobile.webp')] bg-center lg:bg-[url('/background-right.webp')] absolute top-0 left-0 w-full h-full lg:bg-right -z-10 bg-no-repeat"></div>
                <div className="lg:bg-[url('/bakcground-left.webp')] absolute top-0 left-0 w-full h-full bg-left -z-10 bg-no-repeat"></div>
                <img src="/myPhoto.png" className="w-[160px] md:w-[240px] object-cover rounded-full" alt="Lucas Santos Photo" />
                <h1 className="text-[22px] sm:text-[28px] text-center font-medium">Lucas Santos - <span className="text-orange-500">FullStack Developer</span></h1>
                <p className="w-full text-[20px] lg:text-[28px] text-center font-light text-gray-400 max-w-[680px]">Sou Lucas, desenvolvedor e empreendedor de Santa Catarina. Aos 25 anos, foco na criação de produtos digitais e soluções SaaS com código limpo, arquitetura sólida e propósito real. Uno visão estratégica e domínio técnico para transformar ideias em sistemas escaláveis.</p>
                <div className="w-full flex flex-row justify-between max-w-[600px] px-[8px] sm:px-[32px]">
                    <div className="flex flex-col justify-start text- sm:text-lg text-gray-400 gap-1">
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