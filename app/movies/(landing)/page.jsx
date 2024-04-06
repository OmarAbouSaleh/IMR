import Movie from "@/app/components/Movie";

export default function Home() {
    return (
        <div>
            <section className="py-20 px-4">
                <h2 className="text-4xl font-bold text-center">Featured Movies</h2>
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    <Movie/>
                </div>
            </section>
        </div>
    );
}