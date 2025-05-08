"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { GAEvents } from "@/app/analytics/events";
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const MacAppDownloadButton = ({
  downloadLink,
  className,
  size,
  eventCategory,
  eventLabel,
}: {
  downloadLink: string;
  eventCategory: GAEvents["event_category"];
  eventLabel: GAEvents["event_label"];
  className?: string;
  size?: "lg" | "sm";
}) => {
  const handleClick = () => {
    // GA4 にカスタムイベントを送信
    window.gtag("event", "button_click", {
      event_category: eventCategory,
      event_label: eventLabel,
    });
    // 実際のボタンの処理（例: ページ遷移など）
    window.location.href = downloadLink;
  };
  return (
    <Button size={size} className={className} onClick={handleClick}>
      <Download className="h-4 w-4" />
      macOS版ダウンロード
    </Button>
  );
};

export default MacAppDownloadButton;
