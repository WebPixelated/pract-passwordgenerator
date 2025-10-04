import { usePassword } from "../context/PasswordContext";

function PasswordParameters() {
  const passwordContext = usePassword();
  if (!passwordContext) {
    return null;
  }
  const { params, setNewParams } = passwordContext;

  return (
    <section>
      <div className="flex flex-col flex-nowrap relative">
        <p>Length</p>
        <label htmlFor="passLength" className="absolute top-0 right-0">
          {params.length}
        </label>
        <input
          type="range"
          min={4}
          max={24}
          id="passLength"
          value={params.length}
          onChange={(e) =>
            setNewParams({ ...params, length: Number(e.target.value) })
          }
          className="w-full accent-sky-950"
        />
      </div>
      <Checkbox
        id="passUppercase"
        label="Uppercase"
        checked={params.uppercase}
        onChange={(e) =>
          setNewParams({ ...params, uppercase: e.target.checked })
        }
      />
      <Checkbox
        id="passLowercase"
        label="Lowercase"
        checked={params.lowercase}
        onChange={(e) =>
          setNewParams({ ...params, lowercase: e.target.checked })
        }
      />
      <Checkbox
        id="passNumbers"
        label="Numbers"
        checked={params.numbers}
        onChange={(e) => setNewParams({ ...params, numbers: e.target.checked })}
      />
      <Checkbox
        id="passSymbols"
        label="Symbols"
        checked={params.symbols}
        onChange={(e) => setNewParams({ ...params, symbols: e.target.checked })}
      />
    </section>
  );
}
export default PasswordParameters;

function Checkbox({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-row flex-nowrap gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="accent-sky-950 min-h-[18px] min-w-[18px] hover:accent-sky-800"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
