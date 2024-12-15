"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Simpan token dan user ID
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_id", data.user?.id);

      // Redirect ke halaman login
      router.push("/login");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f8f2] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Bagian kiri untuk gambar */}
        <div className="hidden md:block w-1/2 bg-yellow-50 p-8">
          <img src="images/register.svg" alt="Register" className="w-full h-auto" />
        </div>

        {/* Bagian kanan untuk form */}
        <div className="w-full md:w-1/2 p-8 space-y-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            {/* Input Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {/* Input Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            {/* Input Confirm Password */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            {/* Tampilkan error jika ada */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {/* Tombol Submit */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
