import Providers from "./providers/theme-provider";

export default function BraynLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}