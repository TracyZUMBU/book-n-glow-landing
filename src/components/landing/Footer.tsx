import { Instagram, Send, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">Book N' Glow</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Votre page de réservation beauté, aussi belle que votre feed.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Produit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/tarifs" className="hover:text-primary transition-colors">Fonctionnalités</Link></li>
              <li><Link to="/tarifs" className="hover:text-primary transition-colors">Tarifs</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Entreprise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carrières</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@booknglow.com"
                className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Book N' Glow. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
