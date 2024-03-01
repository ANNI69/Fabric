import { LoginComp } from "@/components/ui/login";
import "./page.css";
export default function Login() {
    return (
        <div id="login" className="flex justify-center items-center h-screen m-10">
           <LoginComp />
        </div>
    )
}