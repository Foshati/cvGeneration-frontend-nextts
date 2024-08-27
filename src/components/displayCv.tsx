import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DataProps {
  fullName: string;
  skills: string;
  registerDate: number | null;
  avatarUrl: string | null;
  fileName: string;
  country: string;
}

interface DisplayCvProps {
  data: DataProps;
  setData: any;
}

import { ImgAvatar } from "./imgAvatar";
import { Badge } from "./ui/badge";

export default function DisplayCv({ data, setData }: DisplayCvProps) {
  const handleInputChange = (feild, value) => {
    setData((prevData) => ({ ...prevData, [feild]: value }));
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
          <CardDescription className="mt-1">
            {!data.registerDate ? "Today" : ` ${data.registerDate}`}
          </CardDescription>

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
