"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import TopdiscoverSection from "./TopdiscoverSection";
import Backgroundsection from "./Backgroundsection";
import Timesection from "./Timesection";
import Highlight from "./Highlight";
import Allevents from "./Allevents";
import { Contract } from "starknet";
import { attensysEventAbi } from "@/deployments/abi";
import { attensysEventAddress } from "@/deployments/contracts";
import { provider } from "@/constants";
import { decimalToHexAddress } from "@/utils/formatAddress";
import { useEvents } from "@/hooks/useEvents";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export interface EventData {
  event_name: string;
  event_organizer: any;
  registered_attendants: string;
  signature_count: number;
  time: {
    end_time: bigint;
    start_time: bigint;
    registeration_open: boolean;
  };
}
const DiscoverLanding = () => {
  const { events, getEvents, loading } = useEvents();

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-event-gradient flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <LoadingSpinner size="lg" colorVariant="primary" />
          <p className="text-white text-lg">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-event-gradient">
      <TopdiscoverSection />
      <Backgroundsection />
      <Timesection />
      <Highlight />
      <Allevents events={events} />
    </div>
  );
};

export default DiscoverLanding;
