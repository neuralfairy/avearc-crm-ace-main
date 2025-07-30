import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  const benefits = [
    { icon: Users, text: "Better Customer Relationships" },
    { icon: TrendingUp, text: "Higher Conversion Rates" },
    { icon: Zap, text: "Streamlined Sales Process" }
  ];

  const metrics = [
    { value: "50+", label: "CRM Implementations" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "40%", label: "Average Sales Increase" }
  ];

  return (
    <div className="relative bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Smarter CRM,
                <br />
                <span className="text-white/90">Smoother Sales</span>
              </h1>
              <p className="text-xl text-white/80 max-w-lg">
                Implement, integrate, and elevate your customer relationships with our expert CRM services.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <benefit.icon className="h-5 w-5 text-white/90" />
                  <span className="text-white/90">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Book Demo
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Get Pricing
              </Button>
            </div>
          </div>

          {/* Right Column - Metrics Cards */}
          <div className="space-y-6 animate-slide-up">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Success Metrics
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="text-sm text-white/70">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Trusted CRM Partners
              </h3>
              <div className="grid grid-cols-2 gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Salesforce Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">HubSpot Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Zoho Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">ISO Certified</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;