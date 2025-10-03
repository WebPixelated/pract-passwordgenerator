import { usePassword } from "../context/PasswordContext";

function PasswordParameters() {
  const passwordContext = usePassword();
  if (!passwordContext) {
    return null;
  }
  const { params, setParams } = passwordContext;

  return (
    <section>
      <div className="">
        <p>Length</p>
        <div className="">
          <label htmlFor="passLength">{params.length}</label>
          <input
            type="range"
            min={4}
            max={24}
            id="passLength"
            value={params.length}
            onChange={(e) =>
              setParams({ ...params, length: Number(e.target.value) })
            }
          />
        </div>
      </div>
      <div className="">
        <input
          type="checkbox"
          id="passUppercase"
          checked={params.uppercase}
          onChange={(e) =>
            setParams({ ...params, uppercase: e.target.checked })
          }
        />
        <label htmlFor="passUppercase">Uppercase</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          id="passLowercase"
          checked={params.lowercase}
          onChange={(e) =>
            setParams({ ...params, lowercase: e.target.checked })
          }
        />
        <label htmlFor="passLowercase">Lowercase</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          id="passNumbers"
          checked={params.numbers}
          onChange={(e) => setParams({ ...params, numbers: e.target.checked })}
        />
        <label htmlFor="passNumbers">Numbers</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          id="passSymbols"
          checked={params.symbols}
          onChange={(e) => setParams({ ...params, symbols: e.target.checked })}
        />
        <label htmlFor="passSymbols">Symbols</label>
      </div>
    </section>
  );
}
export default PasswordParameters;
