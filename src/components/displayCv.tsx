// DisplayCv.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImgAvatar } from "./imgAvatar";
import { Badge } from "./ui/badge";
import { differenceInDays } from "date-fns";

interface DataProps {
  fullName: string;
  skills: string;
  registerDate: Date | null;
  avatarUrl: string | null;
  fileName: string;
  country: string;
}

interface DisplayCvProps {
  data: DataProps;
  setData: React.Dispatch<React.SetStateAction<DataProps>>;
}

export default function DisplayCv({ data, setData }: DisplayCvProps) {
  const getDaysAgo = () => {
    if (!data.registerDate) return "Today";
    const daysPassed = differenceInDays(new Date(), data.registerDate);
    return daysPassed === 0 ? "Today" : `${daysPassed} days ago`;
  };

  return (
    <Card className="w-3/4 max-w-xl dark">
      <CardHeader>
        <CardTitle className="text-center p-2 bg-stone-900 rounded-lg lg:text-xl ">
          {data.fileName}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center gap-4">
        <ImgAvatar avatarUrl={data.avatarUrl} fullName={data.fullName} />
        <div>
          <CardTitle>{data.fullName}</CardTitle>
          <CardDescription className="mt-1">{getDaysAgo()}</CardDescription>
          <p className="text-slate-400 text-sm">{data.country}</p>
          <div className="flex gap-2 mt-3">
            {data.skills.split(" ").map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
