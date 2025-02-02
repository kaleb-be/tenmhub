import '@/app/globals.css';
import { cn } from '@/utils';
import { EnvScript } from 'next-runtime-env';
import { Locale } from '@microrealestate/types';
import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Providers from '@/components/providers';
import type { ReactNode } from 'react';
import { Roboto } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const APP_NAME = process.env.APP_NAME || 'MicroRealEstate';
const APP_TITLE = APP_NAME ? [APP_NAME, 'Tenant'] : ['Tenant'];
if (process.env.NODE_ENV === 'development') {
  APP_TITLE.push('DEV');
} else if (process.env.DEMO_MODE === 'true') {
  APP_TITLE.push('DEMO');
}

export const metadata: Metadata = {
  title: APP_TITLE.join(' - '),
  description: 'A platform for landlords to manage their properties.',
  keywords:
    'real estate, landlord, property, rental, property management platform, property management software, property management system'
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  subsets: ['latin', 'latin-ext']
});

export default async function RootLayout({
  params: { lang },
  children
}: {
  params: { lang: Locale };
  children: ReactNode;
}) {
  noStore(); // Opt into dynamic rendering

  return (
    <html lang={lang} translate="no" className="overscroll-none">
      <head>
        <link rel="shortcut icon" href={`${process.env.BASE_PATH}/tmh_logo.svg`} />
        <EnvScript
          env={{
            NEXT_PUBLIC_APP_NAME: process.env.APP_NAME || 'TenM Hub',
            NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH,
            NEXT_PUBLIC_CORS_ENABLED: process.env.CORS_ENABLED,
            NEXT_PUBLIC_DEMO_MODE: process.env.DEMO_MODE,
            DOCKER_GATEWAY_URL: process.env.DOCKER_GATEWAY_URL,
            NEXT_PUBLIC_GATEWAY_URL: process.env.GATEWAY_URL,
            NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV
          }}
        />
      </head>
      <body className={cn('min-h-screen', roboto.className)}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}