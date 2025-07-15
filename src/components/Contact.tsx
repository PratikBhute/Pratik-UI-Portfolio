import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Download,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useAppContext } from "@/contaxt/AppContext";

emailjs.init({
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [downloadCount, setDownloadCount] = useState(14);
  const { contactInfo, handleDownload } = useAppContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_name: "Pratik Bhute",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      // It's helpful to log the specific error object
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Let&apos;s Work Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next project
              and create something amazing together.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Get In Touch
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always open to discussing new opportunities, interesting
                    projects, or potential collaborations. Whether you have a
                    question or just want to say hi, I'll do my best to get back
                    to you!
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="gradient-border hover-lift p-4 rounded-xl group transition-all duration-300"
                    >
                      <div
                        className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mb-3 group-hover:scale-110 transition-transform`}
                      >
                        {info.icon}
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="slide-up" style={{ animationDelay: "0.4s" }}>
              <Card className="gradient-border p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        autoComplete="name"
                        className="bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        autoComplete="email"
                        className="bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      required
                      className="bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground hover-lift"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
          <div
            className="slide-up mt-12 text-center"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-full px-8 py-4 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">
                  <button
                    onClick={handleDownload}
                    className="rounded-full text-white hover:scale-1100 transition-transform hover-lift"
                    aria-label="Download Resume"
                  >
                    <Download size={20} />
                  </button>
                </div>
                <div className="text-sm text-muted-foreground">Download CV</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">
                  {downloadCount}+
                </div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl z-[-1]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl z-[-1]"></div>
    </section>
  );
};

export default Contact;
