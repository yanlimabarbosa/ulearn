import { Button } from "@/components/ui/button";

export function HeroSection() {
    const heroData = {
        title: "Master New Skills with",
        subtitle: "Expert-Led Courses",
        description: "Join millions of learners worldwide. Access high-quality courses from industry experts and transform your career with hands-on projects and real-world applications.",
        primaryButtonText: "Start Learning Free",
        secondaryButtonText: "Browse Courses",
      };

  return (
    <section className="relative bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            {heroData.title}
            <span className="text-primary block animate-slide-up">{heroData.subtitle}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
              // onClick={() => {}}
            >
              {heroData.primaryButtonText}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
              // onClick={() => {}}
            >
              {heroData.secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 