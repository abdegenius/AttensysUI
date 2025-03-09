import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { pinata } from "../../../utils/config";
import { FormatDateFromUnix } from "@/utils/formatAddress";

const Highlightcard = (props: any) => {
  const [logoImagesource, setLogoImage] = useState<string | StaticImport>("");
  const [isLoading, setIsLoading] = useState(true);
  const [eventName, setEventName] = useState("");

  const obtainCIDdata = async (CID: string) => {
    try {
      //@ts-ignore
      const data = await pinata.gateways.get(CID);
      console.log("fetched CID event", data);
      //@ts-ignore
      const logoData: GetCIDResponse = await pinata.gateways.get(
        //@ts-ignore
        data?.data?.eventDesign,
      );
      const objectURL = URL.createObjectURL(logoData.data as Blob);
      setLogoImage(objectURL);
      //@ts-ignore
      setEventName(data?.data?.name);
    } catch (error) {
      console.error("Error fetching IPFS content:", error);
      throw error;
    }
  };
  // console.log('checking props', props.uri_data)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await obtainCIDdata(props.uri_data);
      } catch (error) {
        console.error("Error loading bootcamp data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [props.uri_data]);

  if (isLoading) {
    return (
      <div className="relative rounded-2xl mx-auto overflow-hidden flex items-center justify-center min-h-[300px] bg-white">
        <LoadingSpinner size="md" colorVariant="primary" />
      </div>
    );
  }
  return (
    <div
      onClick={props.onClick}
      className="cursor-pointer relative h-[380px] w-[75%] mx-auto sm:mx-0 my-12 sm:my-0 sm:w-[278px] rounded-2xl "
    >
      <Image
        src={logoImagesource}
        alt="eventimage"
        className="h-full w-full object-cover rounded-2xl"
        layout="fill"
      />
      <div className="absolute bottom-6 z-20 w-full text-center bg-[#1A1A1A99] py-3">
        <h1 className="text-[#FFFFFF] text-[13px] font-normal leading-[21px]">
          HIGHLIGHTED EVENT
        </h1>
        <h1 className="text-[#FFFFFF] text-[24px] font-bold leading-[39px]">
          {eventName}
        </h1>
        <h1 className="text-[#FFFFFF] text-[14px] font-semibold leading-[23px]">
          {FormatDateFromUnix(props.time.start_time ?? 0n).date ??
            "unavailable"}{" "}
          (
          {FormatDateFromUnix(props?.time.start_time ?? 0n).time ??
            "unavailable"}
          )
        </h1>
      </div>
    </div>
  );
};

export default Highlightcard;
