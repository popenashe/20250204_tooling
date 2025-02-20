export default function Signin() {
  return (
    <form className="grid gap-4 form-control w-full max-w-xs mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Sign in with Xapped Account
      </h1>

      <label className="form-control">
        <span className="label-text">Email or Phone Number</span>
        <input
          type="email"
          placeholder="example@domain.com"
          className="input input-bordered"
          required
        />
      </label>

      <label className="form-control">
        <span className="label-text">Password</span>
        <input
          type="password"
          placeholder="********"
          className="input input-bordered"
          required
        />
        <div className="label">
          <span className="label-text-alt">
            <a href="/signup" className="link">
              Don't have an account?
            </a>
          </span>
          <span className="label-text-alt">
            <a href="#" className="link">
              Forgot password?
            </a>
          </span>
        </div>
      </label>

      <button className="btn btn-primary">Sign In</button>
    </form>
  );
}
