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
    images: string[];
    videoUrl: string;
    videoThumbnail: string;
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
        images: [
            "/images/photo.jpg",
            "/images/photo2.jpg",
            "/images/photo3.jpg",
            "/images/photo4.jpg",
        ],
        videoUrl: "/images/video.mp4",
        videoThumbnail: "/images/photo2.jpg",
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
        date: "2025 (Upcoming)",
        venue: "TBD",
        theme: "Innovation Meets Tradition",
        description: "Building on the success of Edition 1, Edition 2 promises to be even more spectacular, featuring cutting-edge designs that blend traditional Rwandan craftsmanship with modern fashion innovation.",
        stats: {
            attendees: 750,
            designers: 30,
            models: 70,
        },
        images: [
            "/images/photo.jpg",
            "/images/photo2.jpg",
            "/images/photo3.jpg",
            "/images/photo4.jpg",
        ],
        videoUrl: "/images/video.mp4",
        videoThumbnail: "/images/photo2.jpg",
        highlights: [
            "Expanded designer showcase with 30+ participants",
            "International fashion industry representatives",
            "Live music and entertainment",
            "Fashion workshops and masterclasses",
            "Sustainability and ethical fashion focus",
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
