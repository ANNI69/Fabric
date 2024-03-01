"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function RegisterComp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      toast.error("Error", {
        description: "Please fill all fields to create an account.",
        action: {
          label: "Okay",
          onClick: () => console.error("No Data"),
        },
      });
      return;
    } else {
      setIsSubmitted(true);
      toast.success("Account Created", {
        description: "Account has been created successfully",
        action: {
          label: "Okay",
          onClick: () => {
            console.log("Account Created Successfully");
          },
        },
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="container flex flex-col items-center justify-center p-4 md:grid md:grid-cols-2 lg:px-0 gap-8">
          <Link
            href="/login"
            className="self-center mb-4 md:mb-0 md:self-auto absolute right-4 top-10 md:right-8 md:top-8"
          >
            <Button variant="outline">Login</Button>
          </Link>
          <div className="lg:p-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center space-y-6 max-w-md mx-auto w-full"
            >
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">
                    Create an account
                  </CardTitle>
                  <CardDescription className="text-center">
                    Enter your email and password to sign up
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <span className="text-blue-600 hover:underline text-sm">
                    Forget password?
                  </span>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full" type="submit">
                    Sign Up
                  </Button>
                  <p className="mt-2 text-xs text-center text-gray-700">
                    Already have an account?{" "}
                    <span className="text-blue-600 hover:underline">
                      <a href="/login">Sign In</a>
                    </span>
                  </p>
                </CardFooter>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
