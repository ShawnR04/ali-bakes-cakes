import PricingCard from "@/components/ui/pricing-card";



const PRICING_CONTENT = [
    { id: 1,title: 'wedding Cakes', path: '/pricing/wedding', image: '/wedding/wedding-cake-1.jpeg'},
    { id: 2, title: 'French Macarons', path: '/pricing/macarons', image: '/macarons/macaron-1.jpeg'},
    { id: 3, title: 'Classic Cakes', path: '/pricing/classic', image: '/classic/classic-cake-1.jpeg'},
    { id: 4, title: 'Cupcakes', path: '/pricing/cupcakes', image: '/cupcakes/cupcake-1.jpeg'},
    { id: 5, title: 'Cake Pops', path: '/pricing/cakepops', image: '/cake-pops/cake-pop-2.jpeg'},
    { id: 6, title: 'Bakes Donuts', path: '/pricing/donuts', image: '/donuts/donuts-2.jpeg'},
    { id: 7, title: 'Custom Cakes', path: '/pricing/custom', image: '/custom-cakes/custom-cake-1.jpeg'},
    { id: 8, title: 'Dessert Tables', path: '/pricing/dessert-table', image: '/dessert-tables/dessert-table-1.jpeg'},

]
export default function PricingPage(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl text-secondary font-bold text-center mb-8">
                    Pricing
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRICING_CONTENT.map((content) => (
                        <PricingCard
                            key={content.id}
                            title={content.title}
                            path={content.path}
                            image={content.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}