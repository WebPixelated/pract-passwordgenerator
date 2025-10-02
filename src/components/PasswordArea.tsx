import { FaCopy } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

function PasswordArea() {
  return (
    <section>
      <div className="">
        <textarea name="" id="" />
        <span>Strength</span>
      </div>
      <button>
        <FaCopy />
      </button>
      <button>
        <IoReload />
      </button>
    </section>
  );
}
export default PasswordArea;
