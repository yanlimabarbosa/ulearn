import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CategoriesSection() {

  const categoriesData = {
    title: "Explore Our Categories",
    subtitle: "Find the perfect course for your learning goals.",
    categories: [
      { name: "Web Development", courses: "100+", icon: "🌐" },
      { name: "Programming Languages", courses: "50+", icon: "💻" },
      { name: "Data Science", courses: "30+", icon: "📊" },
      { name: "Artificial Intelligence", courses: "20+", icon: "🤖" },
    ],
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {categoriesData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {categoriesData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.categories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in" 
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="text-3xl mb-2 hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription>{category.courses} courses</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 