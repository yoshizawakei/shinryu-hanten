import PublicLayout from '@/Layouts/PublicLayout';
import SeoHead from '@/Components/SeoHead';

export default function Access({ setting, url }) {
    return (
        <PublicLayout setting={setting}>
            <SeoHead
                title="アクセス"
                description="神龍飯店へのアクセス。〒252-0028 神奈川県座間市入谷東4-43-24。座間駅より徒歩4分。電話：046-257-8618。ランチ11:30〜14:30・ディナー17:00〜22:00。火曜定休。"
                url={url}
            />

            <div className="bg-warm border-b border-warm py-16 text-center">
                <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-3">Access</p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-text">アクセス</h1>
                <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-primary/30">
                    <span className="h-px w-16 bg-current" />
                    <span className="text-xs">✦</span>
                    <span className="h-px w-16 bg-current" />
                </div>
            </div>

            <div className="bg-cream py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-start">

                        {setting?.google_map_url ? (
                            <div className="rounded-lg overflow-hidden shadow-md w-full h-64 md:h-[420px]">
                                <iframe
                                    src={setting.google_map_url}
                                    className="w-full h-full"
                                    loading="lazy"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <div className="rounded-lg bg-warm w-full h-64 md:h-[420px] flex items-center justify-center text-text/30 text-sm">
                                地図を準備中
                            </div>
                        )}

                        <div className="space-y-5">
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-warm">
                                <div className="bg-primary px-6 py-4">
                                    <h2 className="font-serif text-base font-bold text-cream">店舗情報</h2>
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
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
