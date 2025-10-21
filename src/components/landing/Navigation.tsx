import { Link } from "react-router-dom";
import { Button } from "../ui/button";
export default function Navigation() {
  return (
    <nav className="py-6 px-4 border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-gradient">
          Book N' Glow
        </Link>
        <Link to="/">
          <Button variant="ghost">Retour à l'accueil</Button>
        </Link>
      </div>
    </nav>
  );
}
