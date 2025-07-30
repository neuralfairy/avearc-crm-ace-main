import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Workflow, 
  Link2, 
  TrendingUp, 
  Users, 
  Shield,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "CRM Setup & Migration",
      description: "Complete CRM implementation from planning to deployment with seamless data migration.",
      features: ["Data Migration", "Custom Configuration", "User Training", "Go-Live Support"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Design and implement automated workflows to streamline your sales and marketing processes.",
      features: ["Sales Automation", "Lead Scoring", "Email Sequences", "Task Management"]
    },
    {
      icon: Link2,
      title: "System Integrations",
      description: "Connect your CRM with existing tools and platforms for unified business operations.",
      features: ["Marketing Tools", "Email Platforms", "Accounting Software", "API Integrations"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Ongoing CRM optimization to maximize efficiency and drive better business results.",
      features: ["Performance Analysis", "Process Improvement", "User Adoption", "ROI Tracking"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive CRM Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial setup to ongoing optimization, we provide end-to-end CRM solutions that drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-white rounded-lg shadow-card p-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Avearc Solutions?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Certified CRM specialists with 10+ years experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Enterprise Security</h4>
                    <p className="text-sm text-muted-foreground">GDPR compliant with enterprise-grade security</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Proven Results</h4>
                    <p className="text-sm text-muted-foreground">Average 40% increase in sales efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground">24/7 technical support and optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button variant="corporate" size="lg">
                Start Your CRM Journey
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;