"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h2 className="font-heading text-3xl font-bold text-destructive">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground max-w-md">
        We encountered an issue attempting to load the Surahs. 
        Please try again later.
      </p>
      <Button 
        onClick={() => reset()} 
        variant="default"
        className="mt-8 font-sans"
      >
        Try again
      </Button>
    </div>
  );
}
