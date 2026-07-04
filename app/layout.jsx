import './globals.css';

export const metadata = {
  title: '泡泡爪宠物洗护',
  description: '猫犬友好洗护空间，提供基础洗护、皮毛养护和精修造型预约。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
