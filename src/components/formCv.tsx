"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "./datePicker";

export default function FormCv() {
  return (
    <Card className="w-[500px] dark">
      <CardHeader>
        <CardTitle>cv Image Generation</CardTitle>
        <CardDescription>Export your snap-shots in one click</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skill">Skills</Label>
              <Input id="skill" placeholder="Put your skills" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="picture">Avatar</Label>
              <Input id="picture" type="file" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="DatePick">Register Date </Label>
              <DatePicker id="DatePick" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                  <SelectItem value="brazil">Brazil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button>Export</Button>
      </CardFooter>
    </Card>
  );
}
