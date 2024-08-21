import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "fr",
  localePrefix,
  locales,
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
