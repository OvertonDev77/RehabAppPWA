import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { X, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdmissionsPopupCardProps {
  onClose: () => void;
}

export default function AdmissionsPopupCard({
  onClose,
}: AdmissionsPopupCardProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Card className="shadow-2xl border-0 rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full bg-pink-100 p-2">
              <HeartHandshake
                className="h-7 w-7 text-pink-600"
                aria-hidden="true"
              />
            </span>
            <CardTitle className="text-lg font-bold text-pink-700">
              We&apos;re Here to Help
            </CardTitle>
          </div>
          <button
            aria-label="Close"
            className="ml-auto text-muted-foreground hover:text-destructive"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-base text-gray-700">
              <span className="font-semibold text-pink-700">
                You are not alone.
              </span>{" "}
              Our caring admissions team is ready to support you or your loved
              one on the journey to recovery. Every story matters, and every
              step forward is important.
            </p>
            <p className="text-sm text-muted-foreground">
              Click below to begin the admissions process, or close this message
              if you&apos;re not ready yet. We&apos;re here whenever you need
              us.
            </p>
            <Button
              className="w-full mt-2 bg-pink-600 hover:bg-pink-700 text-white text-base font-semibold py-2 rounded-lg shadow"
              onClick={onClose}
              aria-label="Begin Admissions"
            >
              Begin Admissions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
