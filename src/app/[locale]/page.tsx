import Image from "next/image";
import { redirect } from "next/navigation";
import { useLocale } from "next-intl";

export default function Home() {
  //Getting the locale in use, either "en" or "fr"
  const locale = useLocale();

  redirect(`/${locale}/home`);
}
