"use client"
import React from "react"
import Coursedropdown from "@/components/courses/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom } from "@/state/connectedWalletStarknetkitNext"
import ExplorePage from "@/components/explorer/ExplorePage"

const Index = () => {
  const [status] = useAtom(coursestatusAtom)

  return (
    <div>
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
      <Coursedropdown />

      <div className="bg-[#F5F7FA]">
        <ExplorePage />
      </div>
    </div>
  )
}

export default Index
