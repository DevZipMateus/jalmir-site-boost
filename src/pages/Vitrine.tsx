import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Prevent scroll on html and body
    const html = document.documentElement;
    const body = document.body;
    
    html.style.overflow = "hidden";
    html.style.height = "100%";
    body.style.overflow = "hidden";
    body.style.height = "100%";
    body.style.margin = "0";
    body.style.padding = "0";

    // Hide Montesite badge on vitrine page
    const style = document.createElement("style");
    style.id = "hide-montesite-badge";
    style.textContent = `
      #montesite-footer-badge,
      [id*="montesite"],
      [class*="montesite"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function to restore overflow on unmount
    return () => {
      html.style.overflow = "";
      html.style.height = "";
      body.style.overflow = "";
      body.style.height = "";
      body.style.margin = "";
      body.style.padding = "";
      
      // Remove the style tag
      const styleTag = document.getElementById("hide-montesite-badge");
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Demonstração de Vitrine - Jalmir Piscinas</title>
      <meta name="description" content="Confira nossa vitrine completa de produtos" />
      
      {/* Fixed Header - 80px height */}
      <div className="fixed top-0 left-0 right-0 h-20 w-full z-10 bg-background">
        <Header />
      </div>

      {/* Iframe Container - full height without badge */}
      <iframe
        src="https://jalmirpiscina.egestor.com.br/vitrine/"
        title="Vitrine Jalmir Piscinas"
        className="fixed left-0 right-0 w-full border-none"
        style={{
          top: "80px",
          bottom: "0",
          height: "calc(100vh - 80px)",
          zIndex: 0,
          overflowY: "auto",
        }}
        allowFullScreen
      />
    </>
  );
};

export default Vitrine;
