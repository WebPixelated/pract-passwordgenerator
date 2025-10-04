import PasswordArea from "./PasswordArea";
import PasswordGenerate from "./PasswordGenerate";
import PasswordParameters from "./PasswordParameters";

function PasswordContainer() {
  return (
    <main className="flex flex-col gap-4">
      <PasswordArea />
      <PasswordParameters />
      <PasswordGenerate />
    </main>
  );
}
export default PasswordContainer;
