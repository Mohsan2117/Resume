import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;
import {
  faBrain,
  faCalculator,
  faCertificate,
  faChevronRight,
  faCloud,
  faDownload,
  faEnvelope,
  faFileAlt,
  faGamepad,
  faGlobe,
  faGraduationCap,
  faHeart,
  faKeyboard,
  faLanguage,
  faLaptopCode,
  faLayerGroup,
  faMapMarkerAlt,
  faMicrochip,
  faMobileAlt,
  faRobot,
  faServer,
  faTh,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
const solidIcons: Record<string, IconDefinition> = {
  brain: faBrain,
  file: faFileAlt,
  calculator: faCalculator,
  grid: faTh,
  gamepad: faGamepad,
  keyboard: faKeyboard,
  robot: faRobot,
  layers: faLayerGroup,
  server: faServer,
  cloud: faCloud,
  microchip: faMicrochip,
  "laptop-code": faLaptopCode,
  envelope: faEnvelope,
  "map-marker": faMapMarkerAlt,
  mobile: faMobileAlt,
  globe: faGlobe,
  tools: faTools,
  "graduation-cap": faGraduationCap,
  certificate: faCertificate,
  language: faLanguage,
  heart: faHeart,
  download: faDownload,
  "chevron-right": faChevronRight,
};

const brandIcons: Record<string, IconDefinition> = {
  linkedin: faLinkedinIn,
  github: faGithub,
  stackoverflow: faStackOverflow,
  globe: faGlobe as IconDefinition,
};

type IconProps = {
  name: string;
  className?: string;
  brand?: boolean;
};

export function Icon({ name, className, brand }: IconProps) {
  const icon = brand ? brandIcons[name] : solidIcons[name];
  if (!icon) return null;
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      fixedWidth={className?.includes("fa-fw")}
    />
  );
}
