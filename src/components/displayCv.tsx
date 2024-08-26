import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";




import { ImgAvatar } from "./imgAvatar";
import { Badge } from "./ui/badge";

export default function DisplayCv() {
  return (
    <Card className="w-3/4 max-w-xl dark">
      <CardHeader>
        <CardTitle className="text-center p-2 bg-stone-900 rounded-lg lg:text-xl ">
          foshati
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center gap-4">
        <ImgAvatar />
        <div>
          <CardTitle>name foshati</CardTitle>
          <CardDescription className="mt-1">
            Deploy your new project in one-click.
          </CardDescription>

          <p className="text-slate-400 text-sm">usa</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="secondary">css</Badge>
            <Badge variant="secondary">html</Badge>
            <Badge variant="secondary">js</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
