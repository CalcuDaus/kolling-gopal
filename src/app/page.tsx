import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Features from "@/components/Features";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen overflow-hidden">
			<Navbar />
			<Hero />
			<Location />
			<About />
			<Menu />
			<Features />
			<Testimonials />
			<CTA />
			<Footer />
		</main>
	);
}
