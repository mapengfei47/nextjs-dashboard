/*
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2025-11-21 06:47:16
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2025-11-25 11:11:34
 * @FilePath: /NextJs/nextjs-dashboard/app/layout.tsx
 * @Description:
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts.ts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
