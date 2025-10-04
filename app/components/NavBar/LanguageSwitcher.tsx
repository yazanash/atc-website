"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchTo = currentLocale === "ar" ? "en" : "ar";

  const handleSwitch = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${switchTo}`);
    router.push(newPath);
  };

  return (
    <button onClick={handleSwitch} className="px-4 py-2 bg-gray-200 rounded">
      {switchTo === "ar" ? "العربية" : "English"}
    </button>
  );
}
