import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 🔗 API call goes here
    console.log("Logging in with:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-green-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-md shadow-lg rounded-2xl">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6 text-blue-600">
              <HeartPulse size={40} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">
              Smart Healthcare Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
