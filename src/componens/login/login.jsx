import'./login.css'

export default function Header() {
    return (
        <div className="login">
        <form method="post" action="https://neverblued.info/lesson-http">
      <fieldset>
        <legend>Login</legend>
        <div>
          <input type="email" placeholder="Email" maxlength="30" required />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            maxlength="13"
            required
          />
        </div>
        <div>
          <button><p>Submit</p></button>
        </div>
        <div>
          <button type="reset"><p>Delete</p></button>
        </div>
      </fieldset>
    </form>
    </div>
    );
}