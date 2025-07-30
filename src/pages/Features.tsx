import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Workflow, 
  Link2, 
  TrendingUp, 
  Users, 
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      id: "setup",
      title: "CRM Setup & Migration",
      icon: Database,
      description: "Complete end-to-end CRM implementation with seamless data migration and custom configuration.",
      benefits: [
        "Zero-downtime data migration",
        "Custom field configuration",
        "User role management",
        "Complete training program",
        "Go-live support"
      ],
      process: [
        "Discovery & Planning",
        "Data Audit & Mapping", 
        "System Configuration",
        "Data Migration & Testing",
        "User Training & Go-Live"
      ]
    },
    {
      id: "automation",
      title: "Workflow Automation",
      icon: Workflow,
      description: "Design and implement automated workflows that streamline your sales and marketing processes.",
      benefits: [
        "Automated lead routing",
        "Smart email sequences",
        "Task automation",
        "Lead scoring algorithms",
        "Sales pipeline automation"
      ],
      process: [
        "Process Analysis",
        "Workflow Design",
        "Automation Setup",
        "Testing & Optimization",
        "Performance Monitoring"
      ]
    },
    {
      id: "integration",
      title: "System Integration",
      icon: Link2,
      description: "Connect your CRM with existing tools and platforms for unified business operations.",
      benefits: [
        "Marketing tool integration",
        "Email platform sync",
        "Accounting software connection",
        "Custom API integrations",
        "Real-time data sync"
      ],
      process: [
        "Integration Assessment",
        "API Configuration",
        "Data Mapping",
        "Testing & Validation",
        "Ongoing Monitoring"
      ]
    },
    {
      id: "optimization",
      title: "Performance Optimization",
      icon: TrendingUp,
      description: "Ongoing CRM optimization to maximize efficiency and drive better business results.",
      benefits: [
        "Performance analytics",
        "User adoption tracking",
        "Process improvement",
        "ROI measurement",
        "Continuous optimization"
      ],
      process: [
        "Performance Audit",
        "Improvement Planning",
        "Implementation",
        "Results Tracking",
        "Continuous Refinement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete CRM Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From initial setup to ongoing optimization, our comprehensive CRM services are designed to transform your business operations and drive sustainable growth.
          </p>
          <Button variant="corporate" size="lg">
            Schedule Consultation
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="text-sm">
                  {feature.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <feature.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{feature.title}</h2>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="corporate">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle>Implementation Process</CardTitle>
                      <CardDescription>
                        Our proven methodology ensures successful implementation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {feature.process.map((step, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                              {index + 1}
                            </div>
                            <span className="font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground">
              We've helped businesses across industries achieve CRM success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">95%</h3>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">40%</h3>
                <p className="text-muted-foreground">Average Sales Increase</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Successful Implementations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;