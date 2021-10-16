export default function Register() {
    return (
        <form method="post" action="https://neverblued.info/lesson-http">
          <fieldset>
            <legend>Register</legend>
            <div>
              <input type="email" placeholder="Email" maxlength="30" required />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                maxlength="12"
                required
              />
              <input
                type="text"
                placeholder="Pin"
                maxlength="12"
                required
              />
            </div>
            <div>
              <input type="date" />
            </div>
            <div>
              <select>
                <option>-</option>
                <option>Man</option>
                <option>Women</option>
              </select>
            </div>
            <div>
              <button>Submit</button>
            </div>
            <div>
              <button type="reset">Delete</button>
            </div>
          </fieldset>
        </form>
    );}