import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {

  const ctaData = {
    title: "Ready to Start Your Learning Journey?",
    description: "Join thousands of learners who have already transformed their careers with our courses.",
    primaryButtonText: "Get Started Today",
    secondaryButtonText: "View All Courses",
  }; 
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {ctaData.title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          {ctaData.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/choose-role">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
            >
              {ctaData.primaryButtonText}
            </Button>
          </Link>
          <Link href="/choose-role">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
            >
              {ctaData.secondaryButtonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 