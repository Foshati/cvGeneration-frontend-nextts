import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImgAvatar } from "./imgAvatar";
import { Badge } from "./ui/badge";
import { differenceInDays } from "date-fns";
import { forwardRef } from "react";

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

const DisplayCv = forwardRef<HTMLDivElement, DisplayCvProps>(function DisplayCv(
  { data, setData },
  ref
) {
  const getDaysAgo = () => {
    if (!data.registerDate) return "Today";
    const daysPassed = differenceInDays(new Date(), data.registerDate);
    return daysPassed === 0 ? "Today" : `${daysPassed} days ago`;
  };

  return (
    <Card ref={ref} className="w-3/4 max-w-xl dark p-4 flex flex-col">
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
      <CardFooter className="mt-auto flex justify-end"></CardFooter>
    </Card>
  );
});

export default DisplayCv;
