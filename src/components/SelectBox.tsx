import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBox() {
  return (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Post Options" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="now">Share Now</SelectItem>
        <SelectItem value="next">Share Next</SelectItem>
        <SelectItem value="schedule">Schedule Post</SelectItem>
      </SelectContent>
    </Select>
  );
}
