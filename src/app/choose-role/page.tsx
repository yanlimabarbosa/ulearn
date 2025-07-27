import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ChooseRolePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Choose Your Role
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Are you looking to learn or to teach? Select your role to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Card */}
          <Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <CardTitle className="text-2xl">Student</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base mb-6">
                Join thousands of learners and master new skills with expert-led courses. 
                Access high-quality content, earn certificates, and transform your career.
              </CardDescription>
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Access to 10,000+ courses</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Learn at your own pace</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Earn certificates</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Lifetime access</span>
                </div>
              </div>
              <Link href="/signup/student">
                <Button size="lg" className="w-full hover:scale-105 transition-transform duration-200">
                  Join as Student
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Instructor Card */}
          <Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🏫</span>
              </div>
              <CardTitle className="text-2xl">Instructor</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base mb-6">
                Share your expertise with millions of learners worldwide. 
                Create engaging courses, build your brand, and earn while teaching.
              </CardDescription>
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Create unlimited courses</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Earn from your expertise</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Reach global audience</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Professional tools</span>
                </div>
              </div>
              <Link href="/signup/instructor">
                <Button size="lg" className="w-full hover:scale-105 transition-transform duration-200">
                  Join as Instructor
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 