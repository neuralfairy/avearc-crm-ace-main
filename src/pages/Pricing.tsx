import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses getting started with CRM",
      badge: null,
      features: [
        "Basic CRM setup & configuration",
        "Data migration (up to 1,000 records)",
        "2 integrations included",
        "Basic user training (2 sessions)",
        "30-day support included",
        "Standard security setup"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "one-time",
      description: "Advanced features and training for growing businesses",
      badge: "Most Popular",
      features: [
        "Advanced CRM setup & customization",
        "Data migration (up to 10,000 records)",
        "5 integrations included",
        "Workflow automation setup",
        "Comprehensive training program",
        "90-day support included",
        "Advanced reporting setup",
        "Custom field configuration"
      ],
      cta: "Start Professional"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Full-stack deployment with ongoing support & optimization",
      badge: "Best Value",
      features: [
        "Complete CRM transformation",
        "Unlimited data migration",
        "Unlimited integrations",
        "Advanced workflow automation",
        "Custom API integrations",
        "Dedicated account manager",
        "1-year support & optimization",
        "Priority support",
        "Custom security configuration",
        "ROI tracking & analytics"
      ],
      cta: "Contact Sales"
    }
  ];

  const addOns = [
    { name: "Additional Integration", price: "$500", description: "per integration" },
    { name: "Extra Training Session", price: "$300", description: "per session" },
    { name: "Data Migration (additional 1K records)", price: "$200", description: "per 1,000 records" },
    { name: "Priority Support", price: "$200", description: "per month" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transparent CRM Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect CRM implementation package for your business. No hidden fees, just clear value.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative shadow-card hover:shadow-corporate transition-all duration-300 ${
                  plan.badge ? 'border-primary shadow-lg scale-105' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-gradient-primary">
                      <Star className="h-3 w-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period !== "pricing" && (
                      <span className="text-muted-foreground ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.badge ? "corporate" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Optional Add-ons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="text-center p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-1">{addon.price}</div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold mb-2">What's included in implementation?</h3>
                <p className="text-muted-foreground text-sm">
                  Complete CRM setup, data migration, user training, and initial support to ensure your team is ready to go.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How long does implementation take?</h3>
                <p className="text-muted-foreground text-sm">
                  Typically 2-6 weeks depending on complexity, data volume, and customization requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer ongoing support?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, all packages include initial support, with extended support available for Professional and Enterprise plans.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I upgrade my plan later?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! You can add features or upgrade to a higher tier at any time during your implementation.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-secondary border-0 p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your CRM?</h2>
              <p className="text-muted-foreground mb-6">
                Get a custom quote tailored to your specific business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="corporate" size="lg">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Get Custom Quote
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;