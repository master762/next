import React from "react";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import Support from "@/components/Support";
import Questions from "@/components/Questions";
export default function SupportPage() {
  return (
    <>
      <TheHeader showTextContent={false} showBgImage={false} />
      <Support />
      <Questions />
      <TheFooter />
    </>
  );
}
