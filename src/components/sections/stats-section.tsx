
export function StatsSection() {
  const statsData = [
    { value: "10,000+", label: "Courses Available" },
    { value: "2M+", label: "Active Learners" },
    { value: "500+", label: "Expert Instructors" },
  ];

  return (
    <section className="bg-accent/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary mb-2 animate-count-up">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 