import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "KolinGopal - Kopi Keliling | #SelaluDisekitarmu",
	description:
		"Kopi gerobak keliling berbasis sepeda listrik — ramah lingkungan & fresh brew. GO-PAL Kopi Keliling hadir di sekitarmu.",
	keywords:
		"kopi keliling, kolingopal, go-pal, kopi gerobak, sepeda listrik, kopi fresh",
	openGraph: {
		title: "KolinGopal - Kopi Keliling",
		description:
			"Kopi enak, datang ke kamu. Kopi gerobak keliling berbasis sepeda listrik.",
		images: ["/images/logo.jpg"],
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="id" suppressHydrationWarning>
			<body className={`${poppins.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
