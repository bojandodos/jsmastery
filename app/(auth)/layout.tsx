import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className="flex min-h-screen items-center justify-center px-4 py-10">
        <section className="light-border background-light800 shadow-light100 w-full max-w-[600px] rounded-[10px] border px-4 py-10 shadow-md sm:px-8">
            <div className="flex items-center justify-between gap-2">
                <div className="space-y-2.5">
                    <h1 className="h2-bold text-dark100">Join DewFlow</h1>
                    <p className="paragraph-regular text-dark500">To get your questions answered</p>
                </div>
                 <Image src="/crome-logo.svg" alt="Logo" width={50} height={50} />
            </div>
             {children}
            <SocialAuthForm/>
        </section>
    </main>;
}
