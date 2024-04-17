import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { isAccessTokenExpired } from "./tokens";
import { useRouter } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isUserLoggedIn(){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  isAccessTokenExpired() && router.push("/sign-in");
}