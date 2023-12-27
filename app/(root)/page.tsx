"use client"
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Login from "../auth/login/page";
import Register from "../auth/register/page";


export default function Home() {
  return (
    <main className="flex">
      <Register />
    </main>
  )
}
