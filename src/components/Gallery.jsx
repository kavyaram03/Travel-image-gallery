import ImageCard from "./ImageCard"

function Gallery() {

    const images = [
        {
            image: "/image1.jpg",
            title: "Mountain Escape",
            location: "Misty Highlands",
            description: "Quiet mornings surrounded by endless mountain views."
        },
        {
            image: "/image2.jpg",
            title: "Coastal Dreams",
            location: "By the Sea",
            description: "Soft waves, warm sunlight and peaceful afternoons."
        },
        {
            image: "/image3.jpg",
            title: "City Stories",
            location: "Urban Nights",
            description: "A glimpse of life glowing beneath the evening sky."
        },
        {
            image: "/image4.jpg",
            title: "Into the Wild",
            location: "Green Forests",
            description: "A slow escape into the beauty of untouched nature."
        },
        {
            image: "/image5.jpg",
            title: "Chasing Waterfalls",
            location: "Hidden Trails",
            description: "Following quiet trails to discover something beautiful."
        },
        {
            image: "/image6.jpg",
            title: "Still Waters",
            location: "Lakeside",
            description: "A peaceful moment where everything feels slower."
        }
        
    ]

    return (
        <div className="gallery">

            {images.map(function (item) {
                return (
                    <ImageCard
                        key={item.title}
                        image={item.image}
                        title={item.title}
                        location={item.location}
                        description={item.description}
                    ></ImageCard>
                )
            })}

        </div>
    )
}

export default Gallery