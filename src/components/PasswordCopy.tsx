import { usePassword } from "../context/PasswordContext";
import { copyPasswordToClipboard } from "../utils";
import Button from "./Button";

function PasswordCopy() {
  const passwordContext = usePassword();
  if (!passwordContext) {
    return null;
  }

  const { password } = passwordContext;

  return (
    <Button
      action={() => copyPasswordToClipboard(password)}
      classes="p-2 w-[75%] hover:bg-sky-800 transition-colors bg-sky-950 text-sky-50 self-center"
    >
      Copy Password
    </Button>
  );
}
export default PasswordCopy;
