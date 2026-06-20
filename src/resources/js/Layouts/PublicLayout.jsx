import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const NAV = [
    { href: '/',       label: 'トップ' },
    { href: '/menu',   label: 'メニュー' },
    { href: '/about',  label: '店舗紹介' },
    { href: '/access', label: 'アクセス' },
];

export default function PublicLayout({ children, setting }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">

            {/* ── Header ── */}
            <header className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <span className="text-primary text-xl font-bold leading-none select-none">龍</span>
                        <span className="font-serif text-lg font-bold text-text tracking-wider leading-none">
                            {setting?.store_name ?? '神龍飯店'}
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-7 text-sm">
                        {NAV.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-text/70 hover:text-primary transition-colors duration-200 font-medium"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop right */}
                    <div className="hidden md:flex items-center gap-4 shrink-0">
                        {setting?.phone && (
                            <a
                                href={`tel:${setting.phone.replace(/-/g, '')}`}
                                className="text-text/70 text-sm hover:text-primary transition-colors font-medium"
                            >
                                {setting.phone}
                            </a>
                        )}
                        <Link
                            href="/access"
                            className="bg-primary hover:bg-primary-dark text-white text-xs font-medium px-5 py-2.5 rounded-sm transition-colors duration-200 tracking-wide"
                        >
                            ご予約・お問い合わせ
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="md:hidden text-text/70 p-1"
                        onClick={() => setOpen(v => !v)}
                        aria-label="メニュー"
                    >
                        {open ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile drawer */}
                {open && (
                    <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
                        {NAV.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="block py-3 text-text/70 border-b border-gray-100 hover:text-primary transition-colors font-medium text-sm"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="pt-4 space-y-3">
                            {setting?.phone && (
                                <a
                                    href={`tel:${setting.phone.replace(/-/g, '')}`}
                                    className="block text-center border border-primary/30 text-primary py-3 rounded-sm text-sm font-medium"
                                >
                                    {setting.phone}
                                </a>
                            )}
                            <Link
                                href="/access"
                                className="block text-center bg-primary text-white py-3 rounded-sm text-sm font-medium"
                                onClick={() => setOpen(false)}
                            >
                                ご予約・お問い合わせ
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* ── Main ── */}
            <main className="flex-1 pt-16">{children}</main>

            {/* ── Footer ── */}
            <footer className="bg-dark text-cream">
                {setting?.adsense_footer && (
                    <div
                        className="w-full"
                        dangerouslySetInnerHTML={{ __html: setting.adsense_footer }}
                    />
                )}

                <div className="max-w-7xl mx-auto px-6 py-14">
                    <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-cream/10">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-accent text-2xl font-bold">龍</span>
                                <p className="font-serif text-xl font-bold text-cream">{setting?.store_name}</p>
                            </div>
                            <p className="text-cream/50 text-sm leading-relaxed">
                                {setting?.description?.slice(0, 70)}
                                {(setting?.description?.length ?? 0) > 70 ? '…' : ''}
                            </p>
                        </div>

                        {/* Nav */}
                        <div>
                            <p className="text-xs font-bold tracking-widest text-gold/80 uppercase mb-5">Pages</p>
                            <nav className="space-y-2.5">
                                {NAV.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="block text-sm text-cream/55 hover:text-accent transition-colors"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="text-xs font-bold tracking-widest text-gold/80 uppercase mb-5">Contact</p>
                            <div className="space-y-3 text-sm text-cream/55">
                                {setting?.address && <p>{setting.address}</p>}
                                {setting?.phone && (
                                    <a
                                        href={`tel:${setting.phone.replace(/-/g, '')}`}
                                        className="block text-cream hover:text-accent transition-colors text-base font-medium"
                                    >
                                        {setting.phone}
                                    </a>
                                )}
                                {setting?.business_hours && (
                                    <p className="whitespace-pre-line leading-relaxed">{setting.business_hours}</p>
                                )}
                                {setting?.holiday && <p>定休日：{setting.holiday}</p>}
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-cream/25 text-xs mt-8">
                        © {new Date().getFullYear()} {setting?.store_name}. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
