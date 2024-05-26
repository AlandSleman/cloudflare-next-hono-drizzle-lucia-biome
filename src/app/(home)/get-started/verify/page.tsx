import type { Metadata } from "next";
import { redirect } from "next/navigation";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Routes } from "@/lib/routes";
import { VerificationForm } from "./verification-form";

export const metadata: Metadata = {
	title: "Verify Your Email",
	description: "Almost there!",
};

export default function VerifyPage({
	searchParams: { email },
}: {
	searchParams: { email: string | string[] | undefined };
}) {
	if (!email || Array.isArray(email)) {
		return redirect(Routes.getStarted());
	}

	return (
		<div className="flex h-full items-center">
			<Card className="mx-auto w-[32rem] max-w-lg">
				<CardHeader>
					<CardTitle>Verify Your Email</CardTitle>
					<CardDescription>Almost there!</CardDescription>
				</CardHeader>
				<CardContent>
					<VerificationForm email={email} />
				</CardContent>
			</Card>
		</div>
	);
}
