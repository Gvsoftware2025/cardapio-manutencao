import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone = "5517996311727", // Número padrão - deve ser alterado
  message = "Olá! Gostaria de fazer um pedido de bebidas. Podem me ajudar?",
  className = ""
}) => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    try {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
      
      // Verificar se o dispositivo suporta abertura de URLs
      if (typeof window !== 'undefined') {
        const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        
        // Fallback se a janela não abrir
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          toast({
            title: "Redirecionamento",
            description: "Se o WhatsApp não abrir automaticamente, copie este link: " + whatsappUrl,
            duration: 5000,
          });
        }
      }
    } catch (error) {
      console.error("Erro ao abrir WhatsApp:", error);
      toast({
        title: "Erro",
        description: "Não foi possível abrir o WhatsApp. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      size="lg"
      className={`bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group ${className}`}
      onClick={handleWhatsAppClick}
      aria-label="Fazer pedido pelo WhatsApp"
    >
      <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
      Fazer Pedido pelo WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
