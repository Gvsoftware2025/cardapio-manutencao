import React from "react";
import { Clock, Wrench, Smartphone, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";
import FloatingIcons from "./FloatingIcons";
import Footer from "./Footer";
import bebidasLogo from "@/assets/bebidas-on-logo.png";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcons />
        
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-pulse-soft opacity-30" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary rounded-full animate-float opacity-20" />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse-soft opacity-40" />
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-accent rounded-full animate-float opacity-25" />
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 text-center py-12">
        {/* Logo Section with Intense Animations */}
        <div className="mb-8 animate-fade-in-scale">
          <div className="relative">
            <img 
              src={bebidasLogo} 
              alt="Bebidas ON Delivery"
              className="w-48 h-48 mx-auto animate-logo-main rounded-full shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.5))' }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto space-y-8 animate-slide-in-up">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-pulse-soft">
              Cardápio em
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary-glow to-primary bg-clip-text text-transparent">
              Manutenção
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Estamos atualizando nosso cardápio para trazer ainda mais opções deliciosas para você! 
            <br className="hidden md:block" />
            <span className="text-primary font-semibold">Em breve estaremos de volta.</span>
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Coffee className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Novos Produtos
                </h3>
                <p className="text-muted-foreground text-sm">
                  Adicionando novas bebidas premium ao nosso catálogo
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-accent to-primary-glow rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Wrench className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Melhorias
                </h3>
                <p className="text-muted-foreground text-sm">
                  Otimizando sua experiência de pedidos e delivery
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary-glow to-primary rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Nova Interface
                </h3>
                <p className="text-muted-foreground text-sm">
                  Design renovado para uma navegação ainda mais fácil
                </p>
              </div>
            </Card>
          </div>

          {/* Status Section */}
          <Card className="p-8 bg-card/60 backdrop-blur-md border-primary/20 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-primary animate-pulse-soft" />
              <h3 className="text-xl font-semibold text-card-foreground">
                Previsão de Retorno
              </h3>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">
              Muito Em Breve!
            </p>
            <p className="text-muted-foreground text-sm">
              Nossa equipe está trabalhando 24h para finalizar as melhorias
            </p>
          </Card>

          {/* Status Message */}
          <div className="pt-8">
            <Card className="p-6 bg-card/60 backdrop-blur-md border-primary/20 max-w-lg mx-auto">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Aguarde as novidades! 
                </h4>
                <p className="text-muted-foreground">
                  Logo estaremos de volta com um cardápio ainda mais completo e uma experiência de compra aprimorada.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MaintenancePage;