import FormName from '../form-name/form-name';
import NameInput from '../form-inputs/name-input/name-input';
import EmailInput from '../form-inputs/email-input/email-input';
import Button from '../button/button';


export default function Main() {
  return(
    <div className=''>
    <FormName />
    <NameInput /> 
    <EmailInput />
    <Button />
    </div>
  );
}
