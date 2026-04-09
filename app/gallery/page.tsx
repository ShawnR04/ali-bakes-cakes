

import ImageCard from '@/components/ui/image-card';
import { IMAGES } from '@/data/images';


export default function Gallery(){
    return(
        <>
        <div className="py-5 md:py-5 px-5">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl text-secondary font-bold text-center mb-8">
                Gallery
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {IMAGES.map((content) => (
                    <ImageCard
                        key={content.id}
                        image={content.image}
                    />
                ))}
            </div>
        </div>
        </>
    );
}