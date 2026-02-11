import { Calendar, MapPin, MessageCircle, ShieldCheck, Users } from "lucide-react";

const features = [
    {
        title: "Discover Local Groups",
        description: "Find active groups near you based on your interests—from hiking to board games.",
        icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
        title: "Plan Real Hangouts",
        description: "Create or join events with set times and locations. No flaky plans.",
        icon: <Calendar className="w-6 h-6 text-blue-600" />,
    },
    {
        title: "Interactive Map",
        description: "See what's happening around you in real-time on our interactive map.",
        icon: <MapPin className="w-6 h-6 text-blue-600" />,
    },
    {
        title: "Safety First",
        description: "Verified profiles and community guidelines ensure a safe environment for everyone.",
        icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
];

const weekendEvents = [
    {
        title: "Rooftop Chill",
        category: "Social",
        categoryColor: "bg-blue-600",
        location: "Los Angeles, CA",
        image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80",
    },
    {
        title: "Beach Bonfire",
        category: "Outdoors",
        categoryColor: "bg-orange-500",
        location: "Miami, FL",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
    },
    {
        title: "Urban Picnic",
        category: "Food",
        categoryColor: "bg-green-600",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
    },
    {
        title: "Jazz Night",
        category: "Music",
        categoryColor: "bg-purple-600",
        location: "New Orleans, LA",
        image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&q=80",
    },
    {
        title: "Sunset Hike",
        category: "Adventure",
        categoryColor: "bg-emerald-600",
        location: "Denver, CO",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80",
    },
    {
        title: "Street Food Market",
        category: "Food",
        categoryColor: "bg-rose-500",
        location: "Portland, OR",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80",
    },
    {
        title: "Tech Networking",
        category: "Career",
        categoryColor: "bg-cyan-600",
        location: "San Francisco, CA",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    },
    {
        title: "Comedy Club",
        category: "Entertainment",
        categoryColor: "bg-yellow-500",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80",
    },
    {
        title: "Yoga in the Park",
        category: "Wellness",
        categoryColor: "bg-teal-500",
        location: "San Diego, CA",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    },
    {
        title: "Art Gallery Hop",
        category: "Art",
        categoryColor: "bg-pink-600",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80",
    },
    {
        title: "Arcade Night",
        category: "Gaming",
        categoryColor: "bg-indigo-600",
        location: "Seattle, WA",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
    },
    {
        title: "Lake Party",
        category: "Party",
        categoryColor: "bg-blue-500",
        location: "Lake Tahoe, NV",
        image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80",
    },
];

export function Features() {
    return (
        <section id="discover" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to <span className="text-blue-600">connect</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We've built the best tools to help you move from online chatting to offline hanging out.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Additional "Happening Now" Section Preview */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Happening this weekend</h2>
                        <p className="text-lg text-gray-600">Join similar people in your area</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {weekendEvents.map((event, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-4 z-20 text-white">
                                    <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${event.categoryColor} inline-block px-2.5 py-1 rounded-md shadow-sm`}>
                                        {event.category}
                                    </div>
                                    <h3 className="font-bold text-lg mb-1 drop-shadow-md leading-tight">{event.title}</h3>
                                    <p className="text-sm opacity-90 flex items-center gap-1.5 font-medium"><MapPin className="w-3.5 h-3.5" /> {event.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
