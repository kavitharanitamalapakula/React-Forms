import { inputData } from "./data/formData";
export function Forms() {
  return (
    <div className="formContainer">
      <div className="formSection">
        <h2>Login</h2>
        <form action="">
          {inputData.loginForm.map((input) => (
            <div key={input.id}>
              <label htmlFor={input.id}><b>{input.type}: </b></label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                id={input.id}
                required
              />
            </div>
          ))}
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="formSection">
        <h2>Register</h2>
        <form action="">
          {inputData.registerForm.map((input) => (
            <div key={input.id}>
              <label htmlFor={input.id}><b>{input.name}: </b></label>
              <input
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                id={input.id}
                required
              />
            </div>
          ))}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
