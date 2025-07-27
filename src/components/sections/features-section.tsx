import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  const featuresData = {
    title: "Why Choose Our Courses",
    subtitle: "Our courses are designed to help you master new skills and transform your career.",
    features: [
      { title: "Expert Instructors", description: "Learn from industry experts with real-world experience.", icon: "👨‍🏫" },
      { title: "Hands-On Projects", description: "Build practical skills through real-world projects and applications.", icon: "💻" },
      { title: "Flexible Learning", description: "Learn at your own pace with flexible scheduling and resources.", icon: "🕒" },
    ],
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {featuresData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {featuresData.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.features.map((feature, index) => (
            <Card 
              key={index}
              className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg"
              
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors duration-200">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 