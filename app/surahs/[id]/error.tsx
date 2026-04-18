"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center max-w-md">
      <div className="w-16 h-16 bg-destructive/10 text-destructive flex items-center justify-center rounded-full mb-6">
        <AlertCircle className="w-8 h-8" />
      </div>
      
      <h2 className="text-2xl font-bold font-heading mb-3">
        Failed to load Surah
      </h2>
      
      <p className="text-muted-foreground mb-8 text-sm">
        {error.message || "We encountered an unexpected error while loading the data. Please try again later."}
      </p>
      
      <div className="flex gap-4">
        <Button onClick={reset} variant="default" className="w-32 rounded-full">
          Try again
        </Button>
        <Link href="/">
          <Button variant="outline" className="w-32 rounded-full border-border/80 text-muted-foreground hover:text-foreground">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
