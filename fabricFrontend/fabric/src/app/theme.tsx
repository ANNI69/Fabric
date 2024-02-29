import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="flex space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
        >
          {theme === "light" ? (
            <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          ) : (
            <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    </>
  );
}
