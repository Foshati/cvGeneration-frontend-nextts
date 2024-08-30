import React, { useState, useEffect } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  id: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

export function DatePicker({ id, value, onChange }: DatePickerProps) {
  const [date, setDate] = useState<Date | null>(value);
  const [daysPassed, setDaysPassed] = useState<number | null>(null);

  useEffect(() => {
    if (date) {
      const today = new Date();
      const diff = differenceInDays(today, date);
      setDaysPassed(diff);
    } else {
      setDaysPassed(null);
    }
  }, [date]);

  useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
    onChange(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            <>
              {format(date, "PPP")}
              {daysPassed !== null && (
                <span className="ml-2 text-sm text-muted-foreground">
                  ({daysPassed} days passed)
                </span>
              )}
            </>
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
