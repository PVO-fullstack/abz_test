import { Nunito } from "next/font/google";
import "./styles/index.css";

const nunito = Nunito({ weight: "400", subsets: ["cyrillic"] });

export const metadata = {
  title: "TestTask",
  description: "Cool task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
