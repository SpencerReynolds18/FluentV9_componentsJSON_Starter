import type { Metadata } from 'next';
import './globals.css';
import FluentProviderWrapper from '@/components/FluentProviderWrapper';

export const metadata: Metadata = {
  title: 'GitHub Profile - Fluent UI',
  description: 'GitHub profile clone built with Fluent UI React v9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FluentProviderWrapper>
          {children}
        </FluentProviderWrapper>
      </body>
    </html>
  );
}
