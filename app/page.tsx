import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Catalogue } from "@/components/catalogue";
import { Footer } from "@/components/footer";
import { WhatsappFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Catalogue />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
