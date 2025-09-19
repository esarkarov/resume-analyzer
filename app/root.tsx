import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "react-router";

import type { ReactNode } from "react";
import type { Route } from "./+types/root";
import "./app.css";
import ErrorDisplay from "./components/ErrorDisplay";
import { GOOGLE_FONTS_CONFIG } from "./constants/fonts";
import { usePuterInitialization } from "./hooks/usePuterInitialization";
import { getErrorInfo } from "./utils";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: GOOGLE_FONTS_CONFIG.preconnect },
  {
    rel: "preconnect",
    href: GOOGLE_FONTS_CONFIG.preconnectGstatic,
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: GOOGLE_FONTS_CONFIG.stylesheet,
  },
];

export function Layout({ children }: { children: ReactNode }) {
  usePuterInitialization();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <script src="https://js.puter.com/v2/"></script>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const errorInfo = getErrorInfo(error);

  return <ErrorDisplay {...errorInfo} />;
}
