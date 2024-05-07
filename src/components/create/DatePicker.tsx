import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format, parseISO } from "date-fns"; // Import parseISO function for parsing ISO date strings
import { DateRange, SelectRangeEventHandler } from "react-day-picker";

import { cn } from "@/lib/utils/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  startDate: string; // Accept startDate in "year-month-day" format
  endDate: string; // Accept endDate in "year-month-day" format
  setStartDate: (date: string) => void; // Update setStartDate to return a string
  setEndDate: (date: string) => void; // Update setEndDate to return a string
  className?: string;
}

export function DatePicker({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  className,
}: DatePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: parseISO(startDate) || "", // Parse startDate to Date object or provide an empty string as default
    to: parseISO(endDate) || "", // Parse endDate to Date object or provide an empty string as default
  });

  const handleDateSelect: SelectRangeEventHandler = (selectedDate) => {
    if (selectedDate) {
      const { from, to } = selectedDate;
      setDate(selectedDate);
      // Format selected dates to "year-month-day" format before setting them
      setStartDate(format(from || "", "yyyy-MM-dd")); // Provide an empty string as default if from is undefined
      setEndDate(format(to || "", "yyyy-MM-dd")); // Provide an empty string as default if to is undefined
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, yyyy")} -{" "}
                  {format(date.to, "LLL dd, yyyy")}
                </>
              ) : (
                format(date.from, "LLL dd, yyyy")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
