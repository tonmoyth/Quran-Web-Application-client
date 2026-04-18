import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      <header className="mb-12 text-center md:text-left space-y-4">
        <Skeleton className="h-12 w-64 md:w-80" />
        <Skeleton className="h-6 w-full max-w-2xl" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4 rounded-xl border border-border p-6 h-48">
            <div className="flex justify-between items-start w-full">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-24" />
            </div>
            
            <div className="flex flex-col space-y-2 mt-auto mb-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-40" />
            </div>
            
            <Skeleton className="h-4 w-48 mt-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
