import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Pagination as PaginationData } from "@/types/surah";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  pagination: PaginationData;
}

export function Pagination({ pagination }: PaginationProps) {
  const { page, hasNext, hasPrev, totalPages } = pagination;

  return (
    <div className="flex items-center justify-center space-x-4 py-8">
      {hasPrev ? (
        <Link 
          href={`/surahs?page=${page - 1}`} 
          scroll={true}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans")}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Link>
      ) : (
        <span className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans opacity-50 pointer-events-none")}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </span>
      )}
      
      <span className="text-sm font-medium text-muted-foreground">
        Page {page} of {totalPages}
      </span>
      
      {hasNext ? (
        <Link 
          href={`/surahs?page=${page + 1}`} 
          scroll={true}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans")}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Link>
      ) : (
        <span className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans opacity-50 pointer-events-none")}>
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </span>
      )}
    </div>
  );
}
