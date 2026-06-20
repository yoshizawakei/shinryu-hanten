import PublicLayout from '@/Layouts/PublicLayout';
import SeoHead from '@/Components/SeoHead';

const INFO_ROWS = [
    { label: '店名',   key: 'store_name' },
    { label: '住所',   key: 'address' },
    { label: '電話番号', key: 'phone' },
    { label: '営業時間', key: 'business_hours', pre: true },
    { label: '定休日',  key: 'holiday' },
];

export default function About({ setting, galleries = [], url }) {
    return (
        <PublicLayout setting={setting}>
            <SeoHead
                title="店舗紹介"
                description="神龍飯店は神奈川県座間市入谷東の本格中華料理店。花椒・豆板醤など本場の食材を使用。営業：月・水〜日 11:30〜14:30／17:00〜22:00。火曜・第4水曜定休。座間駅徒歩4分。"
                url={url}
            />

            <div className="bg-warm border-b border-warm py-16 text-center">
                <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-3">About</p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-text">店舗紹介</h1>
                <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-primary/30">
                    <span className="h-px w-16 bg-current" />
                    <span className="text-xs">✦</span>
                    <span className="h-px w-16 bg-current" />
                </div>
            </div>

            <div className="bg-cream py-20">
                <div className="max-w-4xl mx-auto px-6 space-y-10">

                    {setting?.description && (
                        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary">
                            <h2 className="font-serif text-xl font-bold text-text mb-4">お店について</h2>
                            <p className="text-text/65 leading-relaxed text-sm">{setting.description}</p>
                        </div>
                    )}

                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-warm">
                        <div className="bg-primary px-8 py-4">
                            <h2 className="font-serif text-base font-bold text-cream">店舗情報</h2>
                        </div>
                        <table className="w-full">
                            <tbody>
                                {INFO_ROWS.map(({ label, key, pre }) => {
                                    const value = setting?.[key];
                                    if (!value) return null;
                                    return (
                                        <tr key={key} className="border-b border-warm last:border-0">
                                            <th className="text-left px-8 py-4 text-xs font-bold text-primary bg-primary/5 w-28 align-top tracking-wide">
                                                {label}
                                            </th>
                                            <td className={`px-8 py-4 text-sm text-text/70 leading-relaxed ${pre ? 'whitespace-pre-line' : ''}`}>
                                                {value}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-5">
                        {[
                            { icon: '🔥', title: '本格の素材', desc: '花椒・豆板醤など、本場から取り寄せた食材を使用' },
                            { icon: '👨‍👩‍👧', title: 'アットホーム', desc: '家族みんながくつろげる温かな店内の雰囲気' },
                            { icon: '✨', title: '清潔な厨房', desc: '衛生管理を徹底し、安心してお食事いただけます' },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm text-center border border-warm hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-bold text-text text-sm mb-2">{item.title}</h3>
                                <p className="text-text/50 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {galleries.length > 0 && (
                        <div>
                            <h2 className="font-serif text-xl font-bold text-text mb-6 text-center">店舗の様子</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {galleries.map((g) => (
                                    <div key={g.id} className="aspect-square overflow-hidden rounded-lg group">
                                        <img
                                            src={`/storage/${g.image}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            alt={g.title ?? '店舗の様子'}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
