import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>Sobre mim</title>
      <body>{children}</body>
    </html>
  );
}