import { Head } from '@inertiajs/react';

const SITE_NAME = '神龍飯店';
const DEFAULT_DESC = '神奈川県座間市入谷東にある本格中華料理店・神龍飯店。花椒・豆板醤を使った本場の味が楽しめます。ランチ11:30〜・ディナー17:00〜。座間駅より徒歩4分。';

export default function SeoHead({ title, description = DEFAULT_DESC, url, type = 'website', jsonLd }) {
    const pageTitle = title && title !== SITE_NAME ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const desc = description || DEFAULT_DESC;

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta head-key="description"       name="description"        content={desc} />
            <meta head-key="og:type"           property="og:type"        content={type} />
            <meta head-key="og:title"          property="og:title"       content={pageTitle} />
            <meta head-key="og:description"    property="og:description" content={desc} />
            <meta head-key="og:site_name"      property="og:site_name"   content={SITE_NAME} />
            <meta head-key="twitter:title"     name="twitter:title"      content={pageTitle} />
            <meta head-key="twitter:description" name="twitter:description" content={desc} />
            {url && <link head-key="canonical" rel="canonical"   href={url} />}
            {url && <meta head-key="og:url"    property="og:url" content={url} />}
            {jsonLd && (
                <script head-key="json-ld" type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Head>
    );
}
