import Link from "next/link";
import { useRouter } from 'next/navigation';

import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { getUser } from "@/lib/utils.server";
import { logout } from "@/server/actions";
import { LogoutButton } from "./LogoutButton";

const SocialLink = ({ href, icon: Icon, label }) => (
	<Link href={href} target="_blank" rel="noreferrer">
		<div className={buttonVariants({ size: "icon", variant: "ghost" })}>
			<Icon className="h-5 w-5" />
			<span className="sr-only">{label}</span>
		</div>
	</Link>
);
export async function SiteHeader() {
	const user = await getUser();


	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						{user ? (
							<div>
							<LogoutButton/>
							</div>
						) : (
							<Link href={"/login"}>
								<Button>Login</Button>
							</Link>
						)}
						<SocialLink
							href={siteConfig.links.github}
							icon={Icons.gitHub}
							label="GitHub"
						/>
						<SocialLink
							href={siteConfig.links.twitter}
							icon={Icons.twitter}
							label="Twitter"
						/>
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
