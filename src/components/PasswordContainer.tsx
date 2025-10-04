import PasswordArea from "./PasswordArea";
import PasswordCopy from "./PasswordCopy";
import PasswordParameters from "./PasswordParameters";

function PasswordContainer() {
  return (
    <main className="flex flex-col gap-4">
      <PasswordArea />
      <PasswordParameters />
      <PasswordCopy />
    </main>
  );
}
export default PasswordContainer;
