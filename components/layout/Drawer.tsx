import { siteConfig } from "@/config/site";
import Link from "next/link";

const Drawer = ({ onClose }: { onClose: () => void }) => (
  <>
    {siteConfig.navItems.map(({ href, label }) => (
      <Link
        color="foreground"
        href={href}
        scroll={false}
        key={label}
        onClick={() => onClose()}
      >
        {label}
      </Link>
    ))}
  </>
);

export default Drawer;
