import LoginForm from "../Components/LoginForm";

function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black">

      {/* Left Section */}
      <div
        className="hidden lg:flex items-end p-12 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative z-10 text-5xl font-bold text-white leading-tight">
          Welcome Back <br />
          to Super App
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center px-8">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;