import { db } from "~/server/db";
import { SignedOut, SignedIn } from '@clerk/nextjs';

//Tell next not to cache because database will change
export const dynamic = "force-dynamic";

async function Images() {
    const images = await db.query.images.findMany({ orderBy: (model, { desc }) => desc(model.id), });
    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image, index) => (
                <div key={index + '-' + image.id} className="w-48 flex flex-col">
                    <img src={image.url} alt="image" />
                    <div>{image.name}</div>
                </div>
            ))
            }
        </div>
    )
}


export default async function HomePage() {
    return (
        <main>
            <SignedOut>
                <div className="w-full h-full text-2xl text-center">Please Sign in Above</div>
            </SignedOut>
            <SignedIn><Images /></SignedIn>
        </main>
    );
}
