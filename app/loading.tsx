export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-lg px-4">
        <div className="h-8 bg-surface rounded w-1/2 mx-auto"></div>
        <div className="space-y-3">
          <div className="h-32 bg-surface rounded-lg"></div>
          <div className="h-20 bg-surface rounded-lg"></div>
          <div className="h-20 bg-surface rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
