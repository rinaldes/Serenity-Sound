import { PageIcon, SocialIcon } from "@/assets/Icons";
import { pageProps } from "@/assets/Icons/interface";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const SocialAside = () => (
  <>
    {siteConfig.socialLinks.map(({ href, icon }) => (
      <Link key={href} href={href} target="_blank">
        <SocialIcon
          name={
            icon as "Email" | "Linkedin" | "Instagram" | "Twitter" | "Github"
          }
        />
      </Link>
    ))}
  </>
);
export const PageAside = ({ path }: { path: any }) => (
  <>
    {path.map(({ href, icon }: { href: string; icon: pageProps["icon"] }) => (
      <Link key={href} href={href}>
        <PageIcon isActive={false} icon={icon as pageProps["icon"]} />
      </Link>
    ))}
  </>
);

// export const pageAside = () =>
//   siteConfig[`{}`].map(({ href, icon }) => (
//     <Link key={icon} href={href}>
//       <PageIcon
//         icon={icon as "Home" | "About" | "Service" | "Review"}
//         isActive={false}
//       />
//     </Link>
//   ));

//     case "About":
//       return (
//         <>
//           {siteConfig.aboutLinks.map(({ href, icon }) => (
//             <Link key={icon} href={href}>
//               <PageIcon
//                 icon={icon as "About" | "History" | "Team" | "Culture"}
//                 isActive={false}
//               />
//             </Link>
//           ))}
//         </>
//       );
//     case "Teams":
//       return (
//         <>
//           {siteConfig.teamsLinks.map(({ href, icon }) => (
//             <Link key={icon} href={href}>
//               <PageIcon
//                 icon={
//                   icon as
//                     | "Team"
//                     | "Music Curator"
//                     | "Audio Spesialist"
//                     | "App Developer"
//                 }
//                 isActive={false}
//               />
//             </Link>
//           ))}
//         </>
//       );
//     case "Services":
//       return (
//         <>
//           {siteConfig.servicesLinks.map(({ href, icon }) => (
//             <Link key={icon} href={href}>
//               <PageIcon
//                 icon={icon as "Service" | "Review" | "Pricing"}
//                 isActive={false}
//               />
//             </Link>
//           ))}
//         </>
//       );
//   }
//   return <></>;
// };
