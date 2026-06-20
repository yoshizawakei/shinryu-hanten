import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';

/* ── 小見出しコンポーネント ── */
function SectionLabel({ en, ja, light = false }) {
    return (
        <div className="text-center mb-12">
            <p className={`text-xs tracking-[0.35em] uppercase font-medium mb-3 ${light ? 'text-gold-light/70' : 'text-gold'}`}>
                {en}
            </p>
            <h2 className={`font-serif text-3xl md:text-4xl font-bold ${light ? 'text-cream' : 'text-text'}`}>{ja}</h2>
            <div className={`mx-auto mt-4 flex items-center justify-center gap-3 ${light ? 'text-accent/60' : 'text-primary/30'}`}>
                <span className="h-px w-16 bg-current" />
                <span className="text-xs">✦</span>
                <span className="h-px w-16 bg-current" />
            </div>
        </div>
    );
}

/* ── こだわりデータ ── */
const KODAWARI = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        title: '本格四川の味',
        desc: '花椒・豆板醤など本場の食材を使い、伝統の技で仕上げた本物の味。',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75" />
            </svg>
        ),
        title: 'リーズナブルな価格',
        desc: 'ボリューム満点で毎日通える、家族みんなが満足できる価格設定。',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
        ),
        title: 'ファミリー経営',
        desc: '地元・座間市で愛されてきた家族経営。温かくアットホームな雰囲気。',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        ),
        title: '安心・安全',
        desc: '食材の鮮度と衛生管理を徹底。お子様連れのご家族にも安心してご来店いただけます。',
    },
];

export default function Top({ menus, galleries, setting, url }) {
    const heroBg = '/images/hero.jpg';
    const conceptBg = galleries[3] ? `/storage/${galleries[3].image}` : (galleries[1] ? `/storage/${galleries[1].image}` : null);

    const restaurantSchema = {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: setting?.store_name ?? '神龍飯店',
        alternateName: 'シンリュウハンテン',
        description: setting?.description ?? '神奈川県座間市入谷東にある本格中華料理店',
        servesCuisine: ['中華料理', '中国料理'],
        priceRange: '¥¥',
        url: url ?? '',
        telephone: setting?.phone ?? '046-257-8618',
        openingHours: [
            'Mo We Th Fr Sa Su 11:30-14:30',
            'Mo We Th Fr Sa Su 17:00-22:00',
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: '入谷東4-43-24',
            addressLocality: '座間市',
            addressRegion: '神奈川県',
            postalCode: '252-0028',
            addressCountry: 'JP',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 35.481,
            longitude: 139.391,
        },
        hasMap: 'https://maps.google.com/?q=神龍飯店+座間市入谷東4-43-24',
        nearbyAttractions: [
            { '@type': 'TrainStation', name: '座間駅', description: '徒歩4分' },
            { '@type': 'TrainStation', name: '入谷駅（神奈川）', description: '徒歩12分' },
        ],
    };

    return (
        <PublicLayout setting={setting}>
            <SeoHead
                title={setting?.store_name ?? '神龍飯店'}
                description="神奈川県座間市入谷東にある本格中華料理店・神龍飯店。花椒・豆板醤を使った本場の中国料理をご提供。ランチ11:30〜・ディナー17:00〜。座間駅より徒歩4分。駐車場あり。"
                url={url}
                jsonLd={restaurantSchema}
            />

            {/* ════════════════════════════════
                HERO
            ════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* 背景画像 */}
                {heroBg && (
                    <img
                        src={heroBg}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover scale-105"
                        style={{ transform: 'scale(1.05)' }}
                    />
                )}
                {/* オーバーレイ：左から右へグラデーション＋全体に薄いウォームオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/55 to-dark/15" />
                <div className="absolute inset-0 bg-primary/10" />

                {/* 装飾文字 */}
                <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-bold select-none pointer-events-none"
                    style={{ fontSize: 'clamp(12rem, 25vw, 22rem)', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}
                >
                    龍
                </div>

                {/* コンテンツ */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
                    <p className="text-gold-light text-xs tracking-[0.4em] uppercase font-medium mb-6">
                        Shinryu Hanten — 神龍飯店
                    </p>
                    <h1 className="font-serif font-bold text-cream leading-[1.1] mb-8"
                        style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
                        本場の味を、<br />家族で気軽に。
                    </h1>
                    <p className="text-cream/80 text-base md:text-lg max-w-md mb-10 leading-relaxed">
                        神奈川県座間市で愛され続ける本格中華料理店。<br />
                        厳選素材と伝統の技でお届けする、一皿一皿。
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/menu"
                            className="bg-primary hover:bg-accent text-white px-8 py-3.5 text-sm font-medium transition-colors duration-200 rounded-sm"
                        >
                            メニューを見る
                        </Link>
                        <Link
                            href="/access"
                            className="border border-cream/50 text-cream hover:bg-cream/10 px-8 py-3.5 text-sm font-medium transition-colors duration-200 rounded-sm"
                        >
                            ご予約・アクセス
                        </Link>
                    </div>

                    {/* スクロール誘導 */}
                    <div className="absolute bottom-10 left-6 flex items-center gap-3 text-cream/40">
                        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                        <span className="block h-8 w-px bg-cream/30" />
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════
                人気メニュー
            ════════════════════════════════ */}
            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionLabel en="Popular Menu" ja="人気メニュー" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {menus.slice(0, 4).map((menu) => (
                            <div
                                key={menu.id}
                                className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-warm"
                            >
                                <div className="h-48 overflow-hidden bg-warm">
                                    {menu.image ? (
                                        <img
                                            src={`/storage/${menu.image}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            alt={menu.name}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-5xl text-text/20">🍜</div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-text text-base mb-1">{menu.name}</h3>
                                    {menu.description && (
                                        <p className="text-text/50 text-xs leading-relaxed mb-3 line-clamp-2">
                                            {menu.description}
                                        </p>
                                    )}
                                    <p className="text-primary font-bold text-lg">
                                        {menu.price.toLocaleString()}
                                        <span className="text-xs font-normal text-text/40 ml-0.5">円</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/menu"
                            className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-10 py-3 rounded-sm text-sm font-medium transition-colors duration-200"
                        >
                            メニューをすべて見る
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════
                コンセプト帯
            ════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-5">Our Concept</p>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-text leading-[1.7] mb-5">
                        地域に親しまれた、<br />本格中華料理店。
                    </h2>
                    <div className="flex items-center justify-center gap-3 text-primary/25 mb-6">
                        <span className="h-px w-16 bg-current" />
                        <span className="text-xs">✦</span>
                        <span className="h-px w-16 bg-current" />
                    </div>
                    <p className="text-text/60 text-sm leading-relaxed max-w-xl mx-auto">
                        {setting?.description}
                    </p>
                </div>
            </section>

            {/* ════════════════════════════════
                店内紹介（画像＋テキスト 2カラム）
            ════════════════════════════════ */}
            <section className="bg-warm">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2">
                        {/* 画像 */}
                        <div className="h-72 md:h-auto overflow-hidden">
                            {conceptBg ? (
                                <img
                                    src={conceptBg}
                                    alt="店内の様子"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-warm flex items-center justify-center text-8xl text-text/10">龍</div>
                            )}
                        </div>
                        {/* テキスト */}
                        <div className="flex flex-col justify-center px-10 py-16">
                            <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">About</p>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text mb-6 leading-snug">
                                神龍飯店について
                            </h2>
                            <div className="space-y-4 text-text/65 text-sm leading-relaxed">
                                <div className="flex gap-3">
                                    <span className="text-primary mt-0.5 shrink-0">📍</span>
                                    <span>{setting?.address}</span>
                                </div>
                                {setting?.phone && (
                                    <div className="flex gap-3">
                                        <span className="text-primary mt-0.5 shrink-0">📞</span>
                                        <a href={`tel:${setting.phone.replace(/-/g,'')}`} className="hover:text-primary transition-colors">
                                            {setting.phone}
                                        </a>
                                    </div>
                                )}
                                {setting?.business_hours && (
                                    <div className="flex gap-3">
                                        <span className="text-primary mt-0.5 shrink-0">🕐</span>
                                        <span className="whitespace-pre-line">{setting.business_hours}</span>
                                    </div>
                                )}
                                {setting?.holiday && (
                                    <div className="flex gap-3">
                                        <span className="text-primary mt-0.5 shrink-0">📅</span>
                                        <span>定休日：{setting.holiday}</span>
                                    </div>
                                )}
                            </div>
                            <Link
                                href="/about"
                                className="mt-8 self-start inline-flex items-center gap-2 text-primary border-b border-primary pb-0.5 text-sm font-medium hover:text-accent hover:border-accent transition-colors"
                            >
                                店舗詳細を見る
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════
                こだわり（明るい背景）
            ════════════════════════════════ */}
            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionLabel en="Our Pride" ja="神龍飯店のこだわり" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {KODAWARI.map((item) => (
                            <div
                                key={item.title}
                                className="bg-white p-8 rounded-lg text-center border border-warm group hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/8 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-base font-bold text-text mb-3">{item.title}</h3>
                                <p className="text-text/55 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════
                店舗の様子
            ════════════════════════════════ */}
            <section className="py-24 bg-warm">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionLabel en="Our Space" ja="店舗の様子" />

                    {/* フィーチャードグリッド */}
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[480px]">
                        {/* メイン大画像 */}
                        {galleries[0] && (
                            <div className="col-span-2 row-span-2 overflow-hidden group rounded-l-lg">
                                <img
                                    src={`/storage/${galleries[0].image}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt={galleries[0].title ?? ''}
                                />
                            </div>
                        )}
                        {/* サブ2枚 */}
                        {galleries.slice(1, 3).map((g, i) => (
                            <div key={g.id} className={`overflow-hidden group ${i === 0 ? 'rounded-tr-lg' : 'rounded-br-lg'}`}>
                                <img
                                    src={`/storage/${g.image}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt={g.title ?? ''}
                                />
                            </div>
                        ))}
                    </div>

                    {/* 下段サムネイル */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
                        {galleries.slice(3, 9).map((g) => (
                            <div key={g.id} className="aspect-square overflow-hidden group rounded">
                                <img
                                    src={`/storage/${g.image}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt={g.title ?? ''}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-10 py-3 rounded-sm text-sm font-medium transition-colors duration-200"
                        >
                            店舗紹介を見る
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════
                アクセス
            ════════════════════════════════ */}
            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionLabel en="Access" ja="アクセス" />

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* マップ */}
                        {setting?.google_map_url ? (
                            <div className="rounded-lg overflow-hidden shadow-md h-80 md:h-[420px]">
                                <iframe
                                    src={setting.google_map_url}
                                    className="w-full h-full"
                                    loading="lazy"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <div className="rounded-lg bg-warm h-80 flex items-center justify-center text-text/30">地図準備中</div>
                        )}

                        {/* 情報 */}
                        <div className="space-y-5">
                            <div className="bg-white rounded-lg border border-warm overflow-hidden shadow-sm">
                                <div className="bg-primary px-6 py-4">
                                    <h3 className="font-serif text-base font-bold text-cream">店舗情報</h3>
                                </div>
                                <div className="divide-y divide-warm">
                                    {[
                                        { label: '住所',   value: setting?.address },
                                        { label: '電話番号', value: setting?.phone },
                                        { label: '営業時間', value: setting?.business_hours, pre: true },
                                        { label: '定休日',  value: setting?.holiday },
                                    ].map(({ label, value, pre }) => value && (
                                        <div key={label} className="flex gap-4 px-6 py-4">
                                            <span className="text-primary font-bold text-xs w-16 shrink-0 pt-0.5 tracking-wide">{label}</span>
                                            <span className={`text-text/70 text-sm leading-relaxed ${pre ? 'whitespace-pre-line' : ''}`}>
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {setting?.phone && (
                                <a
                                    href={`tel:${setting.phone.replace(/-/g, '')}`}
                                    className="flex items-center justify-center gap-3 bg-primary hover:bg-accent text-white py-4 rounded-lg font-bold text-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    {setting.phone}
                                </a>
                            )}

                            <Link
                                href="/access"
                                className="flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                            >
                                詳しいアクセスを見る
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
