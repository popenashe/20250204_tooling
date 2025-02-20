export default function SignUp() {
  return (
    <div className="p-4">
      <form className="grid gap-4 form-control w-full max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-center mb-2">
          Create Your Xapped Account
        </h1>
        <p className="text-center mb-4">
          Your one account to test, manage, and access your informatio
        </p>
        <p className="text-center">
          Already have an account?{" "}
          <a href="/signin" className="link">
            Sign in
          </a>
        </p>

        <label className="form-control">
          <span className="label-text">Full Name</span>
          <input
            type="text"
            placeholder="James Doe"
            className="input input-bordered"
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text">Email</span>
          <input
            type="email"
            placeholder="example@domain.com"
            className="input input-bordered"
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text">Phone Number</span>
          <div className="flex gap-1">
            <select className="select select-bordered w-32">
              <option value="+27">🇿🇦 +27</option>
              <option value="+263">🇿🇼 +263</option>
            </select>
            <input
              type="tel"
              placeholder="123456789"
              className="input input-bordered w-full"
              required
            />
          </div>
        </label>

        <label className="form-control">
          <span className="label-text">Password</span>
          <input
            type="password"
            placeholder="********"
            className="input input-bordered"
            required
          />
        </label>

        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="checkbox" required />
          <span className="label-text ml-2">
            I accept the terms and conditions
          </span>
        </label>

        <button className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
}
