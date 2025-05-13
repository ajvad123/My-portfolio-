
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`section-heading ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              Have a project in mind or want to work together? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-portfolio-blue/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="text-gray-400">Email</h4>
                  <a href="mailto:mohammadajvad5@gmail.com" className="text-white hover:text-portfolio-blue transition-colors">
                    mohammadajvad5@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-portfolio-purple/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="text-gray-400">Phone</h4>
                  <a href="tel:+917510527810" className="text-white hover:text-portfolio-purple transition-colors">
                    +91 7510527810
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-portfolio-indigo/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-portfolio-indigo" />
                </div>
                <div>
                  <h4 className="text-gray-400">Location</h4>
                  <p className="text-white">
                    Malappuram, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <form className="bg-secondary p-8 rounded-lg border border-white/10" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/50 border-white/20 focus:border-portfolio-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary/50 border-white/20 focus:border-portfolio-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-secondary/50 border-white/20 focus:border-portfolio-blue"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-blue/90"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
