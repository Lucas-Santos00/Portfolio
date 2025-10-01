import Image from "next/image";

const Header = () => {
    return(
        <>
            <header className="w-full flex flex-col items-center min-h-lvh justify-center p-4 pt-14 gap-4 relative max-w-[1920]">
                <div className="bg-[url('/background-mobile.webp')] bg-center lg:bg-[url('/background-right.webp')] absolute top-0 left-0 w-full h-full lg:bg-right -z-10 bg-no-repeat"></div>
                <div className="lg:bg-[url('/bakcground-left.webp')] absolute top-0 left-0 w-full h-full bg-left -z-10 bg-no-repeat"></div>
                <Image src="/myPhoto.png" sizes="(max-width: 768px) 140px, 320px" className="object-cover rounded-full" width={140} height={140} alt="Lucas Santos Photo" />
                <h1 className="text-[20] text-center sm:text-3xl font-medium">Lucas Santos - <span className="text-orange-500">FullStack Developer</span></h1>
                <p className="w-full max-w-3xl sm:text-3xl text-center font-light text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac libero at erat feugiat tincidunt . Integer convallis, felis at pretium volutpat, est ligula volutpat ex, eget tincidunt magna lorem ut magna</p>
                <div>
                    <p>+55 (47) 98823-0826</p>
                </div>
            </header>
        </>
    )
}

export default Header