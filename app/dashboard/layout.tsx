/*
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2025-11-25 15:57:00
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2025-11-25 15:57:06
 * @FilePath: /NextJs/nextjs-dashboard/app/dashboard/layout.tsx
 * @Description: 
 */
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}