import Link from "next/link";

const mockUrls = ['https://utfs.io/f/3c9cd41b-67e2-4c27-a9a9-981e1c26732b-pr278c.jpg', 'https://utfs.io/f/b3160f5f-0d7f-41ef-ae50-c8c25df0e533-hvwnay.jpg']
const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
}));

export default function HomePage() {
    return (
        <main>
            <div className="flex flex-wrap gap-4">{
                mockImages.map((image) => (
                    <div key={image.id} className="w-48 ">
                        <img src={image.url} alt="image" />
                    </div>
                ))
            }
            </div>
        </main>
    );
}
