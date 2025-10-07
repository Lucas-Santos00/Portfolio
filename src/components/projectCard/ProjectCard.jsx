import Image from "next/image";
import TachTag from "./../techTag/TachTag";

const ProjectCard = ( {title, description, imageUrl, tags, projectUrl} = props ) => {

    return(
        <>
            <a href={projectUrl} className="hover:scale-[1.02] transition-transform" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center sm:flex-row gap-4 rounded-md bg-neutral-900 max-w-[550px] p-4">
                    <img src={`${imageUrl}`} alt="Project Image" sizes="(max-width: 600px) 224px, 600px" className="object-cover rounded-sm max-h-[180px]" width={240} height={240} />
                    <div className="flex flex-col items-center sm:items-start justify-center sm:justify-between text-center sm:text-left">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="max-w-[220px] text-gray-300 my-3">{description}</p>
                        <div className="flex flex-row gap-2 justify-center sm:justify-start">
                            {tags.map((tag, index) => (
                                <TachTag key={index} backgroundColor={tag.color}>
                                    {tag.label}
                                </TachTag>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </>
    )

}

export default ProjectCard;