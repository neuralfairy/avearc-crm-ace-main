import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  MapPin, 
  ArrowRight,
  CheckCircle,
  Quote
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CRM Strategist",
      bio: "15+ years in CRM consulting with Salesforce and HubSpot certifications.",
      certifications: ["Salesforce Certified", "HubSpot Partner"]
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      bio: "Expert in system integrations and workflow automation across all major CRM platforms.",
      certifications: ["Zoho Expert", "API Integration Specialist"]
    },
    {
      name: "Emily Rodriguez",
      role: "Implementation Manager",
      bio: "Specializes in data migration and user training with 10+ years experience.",
      certifications: ["Project Management", "Data Migration Expert"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Every solution is tailored to your specific business needs and goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our service delivery."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as an extension of your team, ensuring long-term success."
    }
  ];

  const certifications = [
    "Salesforce Certified Partner",
    "HubSpot Solutions Partner",
    "Zoho Advanced Partner",
    "Microsoft Certified",
    "ISO 27001 Certified",
    "GDPR Compliant"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Empowering Teams with CRM Clarity
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Founded in Orlando, FL, Avearc Solutions transforms businesses through expert CRM implementation, helping teams build stronger customer relationships and drive sustainable growth.
            </p>
            <div className="flex items-center justify-center gap-4 text-white/80">
              <MapPin className="h-5 w-5" />
              <span>Orlando, Florida Headquarters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that the right CRM system, properly implemented, can transform any business. Our mission is to eliminate the complexity and confusion that often surrounds CRM implementation, replacing it with clarity, confidence, and measurable results.
              </p>
              <p className="text-muted-foreground mb-8">
                Since our founding, we've helped over 50 businesses across various industries optimize their customer relationship management, resulting in an average 40% increase in sales efficiency and 95% client satisfaction rate.
              </p>
              <Button variant="corporate">
                Learn Our Process
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Avearc Solutions didn't just implement our CRM – they transformed how we think about customer relationships. Our sales team's productivity increased by 45% in just three months."
                </blockquote>
                <footer className="text-muted-foreground">
                  — Jennifer Martinez, VP Sales, TechCorp Solutions
                </footer>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-muted-foreground">
              CRM specialists with decades of combined experience and industry certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Our Certifications & Partnerships</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-secondary border-0 p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your CRM?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help your business achieve CRM clarity and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="corporate" size="lg">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;