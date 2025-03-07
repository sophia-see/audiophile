"use client"

import NumberPicker from "@/components/NumberPicker";
import { RadioGroup, RadioItem } from "@/components/Radio";
import React from "react";

export default function Home() {
  const [selected, setSelected] = React.useState("option1");
  const [value, setValue] = React.useState(1);

  return (
    <div className="p-6">
      <NumberPicker value={value} setValue={setValue}/>
    </div>
  );
}
