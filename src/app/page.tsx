import { SignedOut, SignedIn } from '@clerk/nextjs';
import Image from 'next/image';
import { getMyImages } from '~/server/queries';

//Tell next not to cache because database will change
export const dynamic = "force-dynamic";

async function Images() {
    const images = await getMyImages();
    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image, index) => (
                <div key={index + '-' + image.id} className="w-48 flex flex-col">
                    <img src={image.url} alt={image.name} style={{ objectFit: "contain" }} />
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
