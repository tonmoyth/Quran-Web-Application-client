import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl animate-in fade-in duration-500">
      <div className="flex flex-col items-center justify-center space-y-4 mb-16">
        <Skeleton className="h-16 w-64 rounded-xl" />
        <Skeleton className="h-8 w-48 rounded-md" />
        <Skeleton className="h-4 w-72 rounded-sm" />
        <div className="flex space-x-2 pt-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </div>
      
      <div className="max-w-md mx-auto mb-10">
        <Skeleton className="h-12 w-full rounded-full" />
      </div>

      <div className="space-y-8 max-w-4xl mx-auto w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border p-6 md:p-8 space-y-6">
            <div className="flex justify-between items-start">
              <Skeleton className="h-10 w-10 rounded-full shrink-0" />
              <div className="flex-grow flex justify-end">
                <Skeleton className="h-12 w-3/4 rounded-md" />
              </div>
            </div>
            <Skeleton className="h-16 w-full rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
