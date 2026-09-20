import { FamilyProvider } from "@/lib/store";
import { AppShell } from "@/components/AppShell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <FamilyProvider>
      <AppShell>{children}</AppShell>
    </FamilyProvider>
  );
}
