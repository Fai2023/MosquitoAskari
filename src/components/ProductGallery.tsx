// import removed

const galleryImages = [
    {
        url: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/WhatsApp%20Image%202026-01-19%20at%2015.44.55.jpeg",
        alt: "MosquitoAskari Unit in Action",
    },
    {
        url: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/WhatsApp%20Image%202026-01-19%20at%2015.53.53.jpeg",
        alt: "MosquitoAskari Installation",
    },
    {
        url: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/5cad4e5548bd09f800990a6e4cff1e5.png?updatedAt=1768470769007",
        alt: "MosquitoAskari Device Top View",
    },
    {
        url: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/M3000.1.png?updatedAt=1768470769865",
        alt: "MosquitoAskari M3000 Model",
    },
    {
        url: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/9b69ce77586759c96d548889e74557a.png?updatedAt=1768470758695",
        alt: "MosquitoAskari Component Detail",
    },
    {
        url: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/c34f5451ec9b7734f495894b554e1a6.png?updatedAt=1768470757696",
        alt: "MosquitoAskari Product Illustration",
    },
    {
        url: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/side%201.png?updatedAt=1768470727768",
        alt: "MosquitoAskari Side View 1",
    },
    {
        url: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/side4.png?updatedAt=1768470747886",
        alt: "MosquitoAskari Side View 2",
    },
];

const ProductGallery = () => {
    return (
        <section className="py-24 bg-white" id="gallery">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                        Visual Showcase
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                        Product <span className="text-gradient">Gallery</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A closer look at the MosquitoAskari technology and real-world installations across Tanzania.
                    </p>
                </div>

                {/* Gallery Horizontal Scroll */}
                <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
                    {/* YouTube Short Embed */}
                    <div className="flex-shrink-0 w-48 snap-center relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group">
                        <iframe
                            src="https://www.youtube.com/embed/ksCGH1HZOh8?controls=0&rel=0&autoplay=1&mute=1&loop=1&playlist=ksCGH1HZOh8"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover pointer-events-none group-hover:pointer-events-auto"
                            title="MosquitoAskari Product Short"
                        ></iframe>
                        <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                        <div className="absolute bottom-6 left-6 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                            <span className="text-white font-semibold text-lg">Product Demonstration</span>
                        </div>
                    </div>

                    {/* Image Items */}
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-48 snap-center relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;

