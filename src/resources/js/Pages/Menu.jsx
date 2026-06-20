import PublicLayout from '@/Layouts/PublicLayout';
import SeoHead from '@/Components/SeoHead';

function MenuCard({ menu }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-warm">
            <div className="h-52 overflow-hidden bg-warm">
                {menu.image ? (
                    <img
                        src={`/storage/${menu.image}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={menu.name}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl text-text/10">🍜</div>
                )}
            </div>
            <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-text text-base">{menu.name}</h3>
                    {menu.is_recommended && (
                        <span className="shrink-0 bg-primary text-white text-[10px] font-medium px-2 py-0.5 rounded-sm">
                            おすすめ
                        </span>
                    )}
                </div>
                {menu.description && (
                    <p className="text-text/50 text-xs leading-relaxed mb-3 line-clamp-2">{menu.description}</p>
                )}
                <p className="text-primary font-bold text-lg">
                    {menu.price.toLocaleString()}
                    <span className="text-xs font-normal text-text/40 ml-0.5">円</span>
                </p>
            </div>
        </div>
    );
}

export default function Menu({ menus, setting, url }) {
    const recommended = menus.filter(m => m.is_recommended);
    const others      = menus.filter(m => !m.is_recommended);

    return (
        <PublicLayout setting={setting}>
            <SeoHead
                title="メニュー"
                description="神龍飯店のメニュー一覧。パラパラチャーハン・プリプリ海老・餃子など、本場の食材を使った本格中国料理をリーズナブルな価格でご提供。座間市入谷東。"
                url={url}
            />

            {/* ページヘッダー */}
            <div className="bg-warm border-b border-warm py-16 text-center">
                <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-3">Menu</p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-text">お品書き</h1>
                <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-primary/30">
                    <span className="h-px w-16 bg-current" />
                    <span className="text-xs">✦</span>
                    <span className="h-px w-16 bg-current" />
                </div>
            </div>

            <div className="bg-cream py-20">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                    {recommended.length > 0 && (
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="h-px flex-1 bg-primary/15" />
                                <h2 className="font-serif text-xl font-bold text-text">おすすめメニュー</h2>
                                <span className="h-px flex-1 bg-primary/15" />
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {recommended.map(m => <MenuCard key={m.id} menu={m} />)}
                            </div>
                        </div>
                    )}

                    {others.length > 0 && (
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="h-px flex-1 bg-primary/15" />
                                <h2 className="font-serif text-xl font-bold text-text">一品料理</h2>
                                <span className="h-px flex-1 bg-primary/15" />
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {others.map(m => <MenuCard key={m.id} menu={m} />)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
