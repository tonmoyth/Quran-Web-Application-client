"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  // Debounce the search
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
      
      if (query) {
        currentParams.set("q", query);
        currentParams.set("page", "1"); // Reset to page 1 on new search
      } else {
        currentParams.delete("q");
      }
      
      const search = currentParams.toString();
      const queryStr = search ? `?${search}` : "";
      
      router.push(`${pathname}${queryStr}`, { scroll: false });
    }, 500);

    return () => clearTimeout(timer);
  }, [query, pathname, router, searchParams]);

  return (
    <div className="relative w-full max-w-md mx-auto my-8">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by translation text..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 h-12 rounded-full border-border bg-background/50 focus-visible:ring-primary shadow-sm"
        />
      </div>
    </div>
  );
}
