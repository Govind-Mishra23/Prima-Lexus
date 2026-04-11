// Hero section with consultation modal integration
import { useEffect, useState } from "react";
import { useConsultation } from "../../context/ConsultationContext";
import Button from "../ui/Button";
import heroImage from "../../assets/premium_hero_bg.png";
import heroImageBlur from "../../assets/premium_hero_bg_blur.png";

const Hero = () => {
  const { openModal } = useConsultation();
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;

    if (img.complete) {
      setIsHeroLoaded(true);
      return;
    }

    img.onload = () => setIsHeroLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Blur-up background image */}
      <div className="absolute inset-0">
        <img
          src={heroImageBlur}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover scale-105 blur-md transition-opacity duration-500 ${isHeroLoaded ? "opacity-0" : "opacity-100"}`}
        />
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHeroLoaded ? "opacity-100" : "opacity-0"}`}
        />
        {!isHeroLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-olive-800/60 via-olive-700/35 to-olive-800/60 animate-pulse" />
        )}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-olive-900/95 via-olive-900/85 to-olive-900/70"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Justice. <span className="text-gold-500">Integrity.</span>{" "}
            Excellence.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-olive-200 mb-8 max-w-2xl leading-relaxed">
            Prima Lexus is a foremost full service law firm practicing and
            providing legal assistance across India. Our extremely professional
            team of specialists, attorneys & consultants delivers comprehensive
            legal solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Book Consultation
            </button>
            <Button to="/practice-areas" variant="outline" size="lg">
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold-500">
                15+
              </p>
              <p className="text-olive-300 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold-500">7</p>
              <p className="text-olive-300 text-sm">Office Locations</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold-500">
                1000+
              </p>
              <p className="text-olive-300 text-sm">Cases Handled</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold-500">
                12+
              </p>
              <p className="text-olive-300 text-sm">Practice Areas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
