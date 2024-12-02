import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>Vitor Vale - Dev Web</title>
      <body>{children}</body>
    </html>
  );
}