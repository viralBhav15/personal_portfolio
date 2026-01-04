export const Hero = () => {
    return <section className="realtive min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img 
                src="/Hero.jpg"
                alt="Hero Image"
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/* Green Dots */}
        <div>
            {[...Array(30)].map((_, i) => (
                <div 
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                    }}
                />
            ))}
        </div>
    </section>;
};