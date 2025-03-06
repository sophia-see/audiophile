"use client"

import { RadioGroup, RadioItem } from "@/components/Radio";
import React from "react";

export default function Home() {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Select an Option:</h2>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioItem value="option1">Cash</RadioItem>
        <RadioItem value="option2">e-money</RadioItem>
        <RadioItem value="option3">Option 3</RadioItem>
      </RadioGroup>
      <p className="mt-4">Selected: {selected}</p>
    </div>
  );
}
