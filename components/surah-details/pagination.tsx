import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Pagination as PaginationData } from "@/types/surah";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  pagination: PaginationData;
  surahId: string;
  searchQuery?: string;
}

export function DetailsPagination({ pagination, surahId, searchQuery }: PaginationProps) {
  const { page, hasNext, hasPrev, totalPages } = pagination;
  
  const getHref = (newPage: number) => {
    const params = new URLSearchParams();
    params.set("page", newPage.toString());
    if (searchQuery) {
      params.set("q", searchQuery);
    }
    return `/surahs/${surahId}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-4 py-8 border-t border-border/50 max-w-4xl mx-auto w-full mt-8">
      {hasPrev ? (
        <Link 
          href={getHref(page - 1)} 
          scroll={true}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans hover:bg-secondary/10")}
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
      
      <span className="text-sm font-medium text-muted-foreground px-4 py-2 bg-secondary/5 rounded-md border border-border/50">
        Page {page} of {totalPages}
      </span>
      
      {hasNext ? (
        <Link 
          href={getHref(page + 1)} 
          scroll={true}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans hover:bg-secondary/10")}
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
