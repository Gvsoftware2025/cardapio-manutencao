import React from "react";
import { Truck, Clock, CreditCard, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-md border-t border-border/50 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Features Icons */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <Truck className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm">Delivery de bebidas</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary-glow rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm">Entrega rápida</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-glow to-primary rounded-full flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm">Pagamento fácil</span>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground border-t border-border/30 pt-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-primary font-semibold mb-1">© 2024 Bebidas ON</p>
            <p>Todos os direitos reservados</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <span>Desenvolvido por</span>
            <div className="flex items-center space-x-2">
              <span className="text-primary font-semibold">GV Software</span>
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md flex items-center justify-center">
                <Instagram className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs text-muted-foreground">@gv.software</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;