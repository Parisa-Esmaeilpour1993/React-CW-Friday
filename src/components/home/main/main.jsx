import FormName from "../form-name/form-name";
import NameInput from "../form-inputs/name-input/name-input";
import EmailInput from "../form-inputs/email-input/email-input";
import Button from "../button/button";
import Cart from "../../../cart/cart";

export default function Main() {
  return (
    <div className="main">
      <Cart />
      <div>
        <FormName />
        <NameInput />
        <EmailInput />
        <Button />
      </div>
    </div>
  );
}
