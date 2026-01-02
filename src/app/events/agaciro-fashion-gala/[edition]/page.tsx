import { agaciroEditions, getAllEditionIds } from "@/data/editions";
import { notFound } from "next/navigation";
import EditionClient from "@/components/events/EditionClient";

export function generateStaticParams() {
    return getAllEditionIds().map((id) => ({
        edition: id,
    }));
}

export default function EditionPage({ params }: { params: { edition: string } }) {
    const edition = agaciroEditions.find(e => e.id === params.edition);

    if (!edition) {
        notFound();
    }

    return <EditionClient edition={edition} />;
}
