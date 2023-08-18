import MenuMobile from "./MenuMobile";
import { Section } from "../../../types";
interface NavBarMobileProps {
  navigation: Section[];
}
export default function NavBarMobile({ navigation }: NavBarMobileProps) {
  return (
    <div className="lg:hidden flex justify-between bg-primary-secondary">
      <MenuMobile navigation={navigation} />
      <div className="px-2 py-4 font-accent text-light text-step-1 font-medium">
        Spruce Street
      </div>
    </div>
  );
}
