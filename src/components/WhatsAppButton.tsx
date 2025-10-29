import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519998843237"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
};

export default WhatsAppButton;
