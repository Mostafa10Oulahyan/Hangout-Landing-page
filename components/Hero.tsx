
export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Dark Overlay for text readability */}
                <img
                    src="/Friends Adventure.jpeg"
                    alt="Friends Adventure"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/20 text-white backdrop-blur-md text-sm font-semibold mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        #1 Community App for Real Life Connections
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        Make friends nearby & <br />
                        <span className="text-blue-300">hang out in real life.</span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        Connect with people who share your interests. No swiping, no endless chatting—just real plans with real people.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#" className="transition-transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                className="h-14 w-auto"
                            />
                        </a>
                        <a href="#" className="transition-transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                className="h-14 w-auto"
                            />
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-4 text-sm text-white/90">
                        <div className="flex -space-x-4">
                            {[
                                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
                                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100",
                                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100",
                                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100&h=100"
                            ].map((src, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                    <img
                                        src={src}
                                        alt={`User ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="drop-shadow-sm">Join <strong className="text-white">570+</strong> people hanging out today</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
