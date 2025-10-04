import { FaCopy } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { usePassword } from "../context/PasswordContext";
import Button from "./Button";
import { copyPasswordToClipboard } from "../utils";

function PasswordArea() {
  const passwordContext = usePassword();
  if (!passwordContext) {
    return null;
  }

  const { password, strength, generateAgain } = passwordContext;
  const buttonClasses =
    "absolute text-sky-50 hover:text-sky-300 active:text-sky-400 min-h-full min-w-[32px] transition-colors";

  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-row justify-center items-center w-full relative bg-sky-950 p-2">
        <input
          className="w-full text-sky-50 text-lg pr-18"
          type="text"
          disabled
          value={password}
        />
        <Button
          action={() => copyPasswordToClipboard(password)}
          classes={`${buttonClasses} right-8`}
          aria-label="Copy password to clipboard"
        >
          <FaCopy />
        </Button>
        <Button
          action={generateAgain}
          classes={`${buttonClasses} right-0`}
          aria-label="Generate new password"
        >
          <IoReload />
        </Button>
      </div>
      <p className="text-md">{strength}</p>
    </section>
  );
}
export default PasswordArea;
