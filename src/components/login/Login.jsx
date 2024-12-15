"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Simpan token dan data pengguna
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect ke halaman dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f8f2] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Bagian SVG di sebelah kanan */}
        <div className="hidden md:block w-1/2 bg-yellow-50 p-8">
          <img src="images/login.svg" alt="Login" className="w-full h-auto" />
        </div>

        {/* Form Login */}
        <div className="w-full md:w-1/2 p-8 space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome back!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Empowering individuals through art and self-expression
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <a
                href="#"
                className="text-xs text-green-600 hover:text-green-500 absolute right-3 top-3"
              >
                Forgot Password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center space-x-4">
            <hr className="w-16 border-gray-300" />
            <span className="text-sm text-gray-500">or continue with</span>
            <hr className="w-16 border-gray-300" />
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <img src="images/google.png" alt="Google" className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <img src="images/apple.png" alt="Apple" className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <img src="images/facebook.png" alt="Facebook" className="w-4 h-4" />
            </div>
          </div>

          <p className="mt-2 text-center text-sm text-gray-600">
            Not a member?{" "}
            <a
              href="/register"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Register now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
