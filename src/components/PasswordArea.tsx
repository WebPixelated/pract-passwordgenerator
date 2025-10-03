import { FaCopy } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { usePassword } from "../context/PasswordContext";

function PasswordArea() {
  const passwordContext = usePassword();
  if (!passwordContext) {
    return null;
  }

  const { password, generateAgain } = passwordContext;

  return (
    <section>
      <div className="">
        <textarea name="" id="" disabled value={password} />
        <span>Strength</span>
      </div>
      <button>
        <FaCopy />
      </button>
      <button onClick={generateAgain}>
        <IoReload />
      </button>
    </section>
  );
}
export default PasswordArea;
