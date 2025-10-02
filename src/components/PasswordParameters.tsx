function PasswordParameters() {
  return (
    <section>
      <div className="">
        <p>Length</p>
        <div className="">
          <label htmlFor="passLength">24</label>
          <input type="range" min="1" max="24" id="passLength" />
        </div>
      </div>
      <div className="">
        <input type="checkbox" id="passUppercase" />
        <label htmlFor="passUppercase">Uppercase</label>
      </div>
      <div className="">
        <input type="checkbox" id="passLowercase" />
        <label htmlFor="passLowercase">Uppercase</label>
      </div>
      <div className="">
        <input type="checkbox" id="passNumbers" />
        <label htmlFor="passNumbers">Uppercase</label>
      </div>
      <div className="">
        <input type="checkbox" id="passSymbols" />
        <label htmlFor="passSymbols">Uppercase</label>
      </div>
    </section>
  );
}
export default PasswordParameters;
