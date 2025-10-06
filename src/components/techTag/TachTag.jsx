const TechTag = ({ children, backgroundColor }) => {
    return (
        <div style={{ backgroundColor: `${backgroundColor}`}} className="inline-block rounded-2xl px-3 py-0.5 text-sm">
            {children}
        </div>
    );
}

export default TechTag;