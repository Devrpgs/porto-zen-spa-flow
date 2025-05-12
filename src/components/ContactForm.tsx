
import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-spa-text mb-1">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-spa-text mb-1">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-spa-text mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-spa-text mb-1">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
            required
            className="w-full"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-spa-text mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          required
          className="min-h-[150px] w-full"
        />
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="bg-spa-blue hover:bg-spa-blue-dark text-white">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
