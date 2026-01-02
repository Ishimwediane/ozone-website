export interface EventEdition {
    id: string;
    title: string;
    edition: number;
    date: string;
    venue: string;
    theme: string;
    description: string;
    stats: {
        attendees: number;
        designers: number;
        models: number;
    };
    albums: {
        name: string;
        images: string[];
    }[];
    videos: {
        title: string;
        url: string;
        thumbnail: string;
    }[];
    highlights: string[];
}

export type AgaciroEdition = EventEdition;

export const agaciroEditions: EventEdition[] = [
    {
        id: "edition-1",
        title: "Agaciro Fashion Gala - Edition 1",
        edition: 1,
        date: "2024",
        venue: "Kigali Convention Centre",
        theme: "Cultural Fusion",
        description: "A spectacular celebration of fashion, culture, and creativity. Edition 1 was a resounding success, bringing together designers, models, and fashion enthusiasts in an unforgettable evening of style and elegance.",
        stats: {
            attendees: 500,
            designers: 20,
            models: 50,
        },
        albums: [
            {
                name: "Main Event Gallery",
                images: [
                    "/images/photo.jpg",
                    "/images/photo2.jpg",
                    "/images/photo3.jpg",
                    "/images/photo4.jpg",
                ]
            },
            {
                name: "Backstage & Preparations",
                images: [
                    "/images/photo.jpg",
                    "/images/photo3.jpg",
                ]
            }
        ],
        videos: [
            {
                title: "Official Highlights",
                url: "/images/video.mp4",
                thumbnail: "/images/photo2.jpg",
            }
        ],
        highlights: [
            "Showcased 20+ emerging and established designers",
            "Featured 50+ professional models on the runway",
            "Attracted 500+ fashion enthusiasts and industry professionals",
            "Celebrated Rwandan culture through fashion",
            "Created networking opportunities for industry professionals",
        ],
    },
    {
        id: "edition-2",
        title: "Agaciro Fashion Gala - Edition 2",
        edition: 2,
        date: "July 2026 (Upcoming)",
        venue: "Kigali, Rwanda",
        theme: "Innovation Meets Tradition",
        description: "Following the ground-breaking success of our first edition, Agaciro Fashion Gala returns in July 2026. This year, we're pushing the boundaries further by merging ancestral Rwandan aesthetics with futuristic high-fashion concepts. Prepare for an immersive experience where history meets the avant-garde.",
        stats: {
            attendees: 1000,
            designers: 30,
            models: 80,
        },
        albums: [
            {
                name: "Concept Art & Moodboard",
                images: [
                    "/images/photo.jpg",
                    "/images/photo2.jpg",
                ]
            }
        ],
        videos: [
            {
                title: "Edition 2 Teaser",
                url: "/images/video.mp4",
                thumbnail: "/images/photo3.jpg",
            }
        ],
        highlights: [
            "Largest runway production in East Africa",
            "International designer collaborations",
            "3D-printed traditional accessories reveal",
            "Gala dinner & creative industry awards",
            "Sustainability spotlight: Eco-friendly textiles",
        ],
    },
];

// Helper function to get edition by ID
export function getEditionById(id: string): EventEdition | undefined {
    return agaciroEditions.find(edition => edition.id === id);
}

// Helper function to get all edition IDs for static generation
export function getAllEditionIds(): string[] {
    return agaciroEditions.map(edition => edition.id);
}
