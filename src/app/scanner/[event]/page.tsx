"use client";

import QrScannerComponent from "@/components/eventdetails/QRScanner";
import { useParams } from "next/navigation";

const ScannerPage = () => {
  const params = useParams();
  const eventId = params.eventId as string;
  return <QrScannerComponent eventId={eventId} />;
};

export default ScannerPage;
