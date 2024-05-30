import { db } from "~/server/db";

//Tell next not to cache because database will change
export const dynamic = "force-dynamic";


export default async function HomePage() {
    const images = await db.query.images.findMany({ orderBy: (model, { desc }) => desc(model.id), });
    return (
        <main>
            <div className="flex flex-wrap gap-4">
                {[...images, ...images, ...images].map((image) => (
                    <div key={image.id} className="w-48 flex flex-col">
                        <img src={image.url} alt="image" />
                        <div>{image.name}</div>
                    </div>
                ))
                }
            </div>
        </main>
    );
}
