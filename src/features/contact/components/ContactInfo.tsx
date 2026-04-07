import { Mail, MapPin } from "lucide-react";
import { BodyText } from "@/features/shared/components/Typography";

export default function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
      <div className="flex items-center gap-3 text-muted-foreground">
        <Mail className="w-5 h-5 text-primary" />
        <BodyText className="!text-base md:!text-lg lg:!text-lg">
          tinumathai94@gmail.com
        </BodyText>
      </div>

      <div className="flex items-center gap-3 text-muted-foreground">
        <MapPin className="w-5 h-5 text-primary" />
        <BodyText className="!text-base md:!text-lg lg:!text-lg">
          Ontario, Canada
        </BodyText>
      </div>
    </div>
  );
}
