import { usePassword } from "../context/PasswordContext";
import Button from "./Button";

function PasswordGenerate() {
  const passwordContext = usePassword();
  if (!passwordContext) {
    return null;
  }

  const { generateAgain } = passwordContext;

  return (
    <Button
      action={generateAgain}
      classes="p-2 w-[75%] hover:bg-sky-800 transition-colors bg-sky-950 text-sky-50 self-center"
      aria-label="Generate new password"
    >
      Generate Password
    </Button>
  );
}
export default PasswordGenerate;
