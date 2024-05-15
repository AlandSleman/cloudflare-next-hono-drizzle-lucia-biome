"use client"
import { Button } from "@/components/ui/button"
import { Routes } from "@/lib/routes";
import { logout } from "@/server/actions"
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push(Routes.login());
    };

    return (
        <Button onClick={handleLogout}>Logout</Button>
    )
}

