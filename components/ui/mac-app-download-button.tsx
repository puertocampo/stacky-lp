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
  gtmLabel,
}: {
  downloadLink: string;
  className?: string;
  size?: "lg" | "sm";
  gtmLabel?: string; // ボタンの設置箇所を識別するためのラベル
}) => {
  const handleClick = () => {
    // 実際のボタンの処理（例: ページ遷移など）
    window.location.href = downloadLink;
  };
  return (
    <Button
      size={size}
      className={`${className} app-download`}
      onClick={handleClick}
      data-gtm-event="app-download"
      data-gtm-label={gtmLabel}
    >
      <Download className="h-4 w-4" />
      macOS版ダウンロード
    </Button>
  );
};

export default MacAppDownloadButton;
