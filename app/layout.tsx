import Navigation from 'components/navigation';
import { GeistSans } from 'geist/font/sans';
import { ensureStartsWith } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 selection:bg-teal-300 dark:bg-neutral-900 dark:selection:bg-pink-500 dark:selection:text-white">
        <div className="container">
          <div className="boxy">
            <Navigation />
          </div>
          <div className="grid">
            <div className="column w-[220px] p-[10px]">
              <Link href="/">
                <Image
                  src="/ascii.webp"
                  alt="Description of the image"
                  width={200}
                  height={112.82}
                />
              </Link>
              <h3 className="mb-2 mt-4 font-bold">Alumni Directory</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://remilia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    CLICK to be saved by Maisy
                  </a>
                </li>
                <li>
                  <a
                    href="https://remilia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    CLICK to be saved by Harmony
                  </a>
                </li>
                <li>
                  <a
                    href="https://throne.com/awhmaisy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    CLICK to buy an angel
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitch.tv/awhmaisy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-pre italic"
                  >
                    CLICK to watch angels
                  </a>
                </li>
                <li>More to come.. we're buried in paperwork for the time being &lt;3 </li>
              </ul>
              <h3 className="mb-2 mt-4 font-bold">Conglomerate Associates</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://awhmaisy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    Maisy's Homepage
                  </a>
                </li>
                <li>
                  <a
                    href="https://envymgt.be/bbyeva02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    Harmony's Homepage
                  </a>
                </li>
                <li>
                  <a
                    href="https://egirlcorp.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    Egirl Corp
                  </a>
                </li>
                <li>
                  <a
                    href="https://hardanimeshirts.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    We love when you get hard
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
