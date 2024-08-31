// FormCv.tsx
import React from "react";
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

interface DataProps {
  fullName: string;
  skills: string;
  registerDate: Date | null;
  avatarUrl: string | null;
  country: string;
}

interface FormCvProps {
  data: DataProps;
  setData: React.Dispatch<React.SetStateAction<DataProps>>;
}

export default function FormCv({ data, setData, dataObj }: FormCvProps) {
  const handleInputChange = (
    field: string,
    value: string | File | null | Date
  ) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      fullName: e.target.value,
    });
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const url = file ? URL.createObjectURL(file) : null;
    setData({
      ...data,
      avatarUrl: url,
    });
  };

  const handleDateChange = (date: Date | undefined) => {
    setData({
      ...data,
      registerDate: date || null,
    });
  };

  return (
    <Card className="w-1/2 max-w-lg dark">
      <CardHeader>
        <CardTitle>CV Image Generation</CardTitle>
        <CardDescription>Export your snap-shots in one click</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={data.fullName}
                onChange={handleNameChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skill">Skills</Label>
              <Input
                id="skill"
                placeholder="Put your skills"
                value={data.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="avatarUrl">Avatar</Label>
              <Input id="avatarUrl" type="file" onChange={handleImg} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="DatePick">Register Date </Label>
              <DatePicker
                id="DatePick"
                value={data.registerDate || undefined}
                onChange={handleDateChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="country">Country</Label>
              <Select
                value={data.country}
                onValueChange={(value) => handleInputChange("country", value)}
              >
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
        <Button variant="outline" onClick={() => setData(dataObj)}>
          Reset
        </Button>
        <Button>Export</Button>
      </CardFooter>
    </Card>
  );
}
