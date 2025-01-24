import HeaderDescriptive from "../header-descriptive/header-descriptive";
import HeaderMenuIcon from "../header-menu-icon/header-menu-icon";
import Logo from "../../shared/logo/logo";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <HeaderDescriptive />
      <HeaderMenuIcon />
    </div>
  );
}
