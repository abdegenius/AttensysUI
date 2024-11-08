"use client"
import React from "react"
import Coursedropdown from "@/components/courses/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom } from "@/state/connectedWalletStarknetkitNext"
import CourseForm from "@/components/courses/course-form/CourseForm"
import CourseForm2 from "@/components/courses/course-form/CourseForm2"
import CourseForm3 from "@/components/courses/course-form/CourseForm3"

import { usePathname } from "next/navigation"

const CreateACourse = () => {
  const [status] = useAtom(coursestatusAtom)
  const path = usePathname()

  return (
    <div className=" ">
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
      <Coursedropdown />

      <div className="min-w-full w-[100%] min-h-full bg-[#F5FAF7]">
        {path === "/Course/create-a-course" && <CourseForm2 />}
      </div>
    </div>
  )
}

export default CreateACourse
