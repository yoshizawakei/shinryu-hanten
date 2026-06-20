import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Gallery({ galleries, setting }) {
    return (
        <PublicLayout setting={setting}>
            <Head title={`ギャラリー | ${setting?.store_name ?? '神龍飯店'}`} />

            <div className="bg-warm border-b border-warm py-16 text-center">
                <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-3">Gallery</p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-text">ギャラリー</h1>
                <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-primary/30">
                    <span className="h-px w-16 bg-current" />
                    <span className="text-xs">✦</span>
                    <span className="h-px w-16 bg-current" />
                </div>
            </div>

            <div className="bg-cream py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {galleries.map((g) => (
                            <div key={g.id} className="aspect-square overflow-hidden group relative rounded-sm">
                                <img
                                    src={`/storage/${g.image}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    alt={g.title ?? ''}
                                />
                                {g.title && (
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/75 to-transparent px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-cream text-sm font-medium">{g.title}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
