// import { MapPin } from "lucide-react";

const reviews = [
    {
        name: "Sofia A.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        text: "I moved from Spain to do my masters in Paris, and thanks to this app I met my best friends the first week!!! I joined a \"girls living in paris\" group and we all met up and are friends to this day:) super thankful!!",
    },
    {
        name: "Mia R.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        text: "I decided to finally stop waiting for my friends, and went on a trip alone to Thailand. I was TERRIFIED. But with HangoutBff I was able to meet others so easily and was never alone on my trip, everyday there was something to do and people to meet. BEST APP EVER.",
    },
    {
        name: "Max K.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        text: "Used this app while backpacking Europe, absolutely insane!!! So easy to meet people and coordinate plans. In Rome specifically had a blast, everyday joined different groups of things to do and met new friends. 1000/10",
    },
    {
        name: "Sarah L.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        text: "Moved to a new city and didn't know anyone. HangoutBff helped me find my people within the first week. Now I have an amazing friend group and we hang out every weekend!",
    },
    {
        name: "James T.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        text: "As an introvert, this app changed my life. The group format makes it so much easier to meet people without the pressure. Found my crew in Barcelona and we still travel together!",
    },
    {
        name: "Carlos D.",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        text: "Solo travel was intimidating until HangoutBff. Met incredible people in Barcelona, Tokyo, and Bali. It's like having friends everywhere you go. Absolutely love it!",
    },
];

function StarRating() {
    return (
        <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export function Discover() {
    return (
        <>
            <section id="discover" className="py-20 bg-blue-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text Content */}
                        <div className="flex-1 max-w-xl">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-400 text-yellow-900 font-bold text-sm tracking-wide mb-6">
                                GROUPS
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                                Join Groups in <br className="hidden md:block" /> your area
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Discover plans made by travelers all around the world. Find your tribe and make memories together.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" id="groups">
                                Explore groups
                            </button>
                        </div>

                        {/* Phone Mockup Visual */}
                        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
                            <div className="relative w-[300px] md:w-[340px] aspect-[9/19] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden ring-1 ring-gray-900/50">
                                <img
                                    src="/WhatsApp Image 2026-02-10 at 17.52.09.jpeg"
                                    alt="App Interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="py-20 bg-gradient-to-b from-blue-50/30 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight text-center mb-4">
                        Loved by users <br className="hidden md:block" />around the world
                    </h2>
                    <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-16">
                        Don&apos;t just take our word for it — hear from our community.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Image on left */}
                        <div className="flex-shrink-0 relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl w-[300px] md:w-[350px]">
                                <img
                                    src="/reviews.jpg"
                                    alt="App Interface"
                                    className="w-full object-cover"
                                />
                                {/* Gradient overlay to hide watermark at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent" />
                            </div>
                            {/* Blue glow behind image */}
                            <div className="absolute -inset-8 bg-blue-400/20 rounded-full blur-3xl -z-10" />
                        </div>

                        {/* Vertically scrolling reviews on right */}
                        <div className="flex-1 relative h-[500px] overflow-hidden">
                            {/* Top fade */}
                            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-50/30 to-transparent z-10 pointer-events-none" />
                            {/* Bottom fade */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

                            <div className="animate-scroll-up">
                                {[...reviews, ...reviews].map((review, i) => (
                                    <div key={i} className="mb-5">
                                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                                            <StarRating />
                                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                                {review.text}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100"
                                                />
                                                <span className="font-semibold text-gray-900 text-sm">{review.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* App store badges */}
                    <div className="flex items-center justify-center gap-4 mt-16">
                        <a href="#" className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                            <div className="text-left">
                                <div className="text-[10px] opacity-80">Download on the</div>
                                <div className="text-sm font-semibold -mt-0.5">App Store</div>
                            </div>
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.932l2.386 1.381a1 1 0 010 1.688l-2.386 1.381-2.54-2.54 2.54-2.54zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" /></svg>
                            <div className="text-left">
                                <div className="text-[10px] opacity-80">GET IT ON</div>
                                <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
