import { Instagram, MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-backgammon.jpg";
import logo from "@/assets/backgammon-logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bozeman Backgammon Club logo" className="h-8 w-auto rounded" />
            <span className="font-heading text-lg font-bold text-foreground">Bozeman Backgammon</span>
          </div>
          <a
            href="https://www.instagram.com/bozemanbackgammonclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Backgammon board in warm bar lighting"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <h1 className="font-heading text-5xl md:text-7xl font-black text-foreground leading-tight tracking-tight">
            Bozeman<br />
            Backgammon<br />
            Club
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md font-body">
            Roll dice, meet friends, and enjoy the world's oldest board game in the heart of Bozeman.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            icon={<Clock className="w-6 h-6" />}
            title="Every Tuesday"
            description="6:00 – 9:00 PM"
          />
          <InfoCard
            icon={<MapPin className="w-6 h-6" />}
            title="gute Laune"
            description="Bozeman, MT"
            link="https://www.google.com/maps/place/gute+Laune/@45.6790349,-111.0376606,15z/data=!4m6!3m5!1s0x534545889edc4d97:0x86be3bc244731936!8m2!3d45.6790349!4d-111.0376606!16s/g/11ldvj1262"
          />
          <InfoCard
            icon={<Users className="w-6 h-6" />}
            title="All Welcome"
            description="BYO board if you have one"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Come play with us
        </h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Whether you're a seasoned player or picking up the game for the first time, there's a seat at the table for you.
        </p>
        <a
          href="https://www.instagram.com/bozemanbackgammonclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          <Instagram className="w-5 h-5" />
          Follow us on Instagram
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Bozeman Backgammon Club</span>
          <a
            href="https://www.instagram.com/bozemanbackgammonclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            @bozemanbackgammonclub
          </a>
        </div>
      </footer>
    </div>
  );
};

const InfoCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}) => {
  const content = (
    <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors group">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default Index;
