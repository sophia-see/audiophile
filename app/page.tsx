"use client"

import TextField from "@/components/TextField";

export default function Home() {
  return (
    <div className="p-10 flex gap-10">
      <TextField
        label="Name"
        placeholder="Insert your name"
        error={"Wrong format"}
      />
    </div>
  );
}
