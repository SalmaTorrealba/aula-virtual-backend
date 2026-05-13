"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useUserStore } from "@/store/useUserStore";

export default function SessionLoader({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user.email ?? null, session.user.role ?? null);
    }
  }, [session, setUser]);

  return <>{children}</>;
}
