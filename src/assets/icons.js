import { library } from "@fortawesome/fontawesome-svg-core";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";

export default function icons() {
  return library.add(
    faInstagram,
    faMobileRetro,
    faGem,
    faAmazon,
    faFacebook,
    faLocationDot,
    faEnvelope,
    faSquarePhone
  );
}
