import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const Contact = ({ onClose }: { onClose: () => void }) => (
  <form className="flex flex-col gap-4" onSubmit={() => onClose()}>
    <Input type="text" label="Your Name" isRequired />
    <Input type="email" label="Your Email" isRequired />
    <Textarea label="Your Message" className="mb-4" isRequired />
    <Button type="submit" color="secondary">
      Send Message
    </Button>
  </form>
);

export default Contact;
