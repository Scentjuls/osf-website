import React from "react";

import { speakers, patterns } from "../components/cloudImages";

function Speaker() {
  return (
    <section
      id="speakers"
      className="bg-dark-blue-primary md:flex-row px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-8 pb-10 sm:pb-6 md:pt-12 md:pb-12 lg:pt-24 xl:pb-24 2xl:pt-48 2xl:pb-48"
    >
      <div className="absolute left-0 fixed">
        <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="An Africa Pattern Design" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 md:mb-12 w-full md:w-1/2 text-white">
          <h1 className="text-5xl font-bold font-ubuntu">Meet our Speakers</h1>
        </div>
        <div className="w-full hidden md:block md:w-1/2 mt-6 text-white">
          <img src={patterns.speakers} alt="" className="w-auto" />
        </div>
      </div>

      <div className="cursor-pointer flex flex-wrap text-white">
        {[
          {
            name: "Amanda Casari",
            title: "Engineering Manager | Google",
            image: speakers.amanda,
            bio: `Amanda Casari is an engineering manager on the Google Open Source team, where she is leading research and engineering to better understand open source systems.  She has worked in a breadth of cross-functional roles and engineering disciplines for the last 18 years, including developer relations, data science, complexity science, and robotics.  She creates projects and programs to make the data world more responsible and approachable, recently co-authoring the O'Reilly book, Feature Engineering for Machine Learning Principles and Techniques for Data Scientists.
            Amanda is endlessly fascinated by the difference between the systems we aim to create and the ones that emerge.`,
            sched: "#"
          },
          {
            name: "Stephen Walli",
            title: "Principal Program Manager | Microsoft",
            image: speakers.stephen,
            bio: `Stephen is a principal program manager in the Azure Office of the CTO at Microsoft. Prior to that, he has been a distinguished technologist (HPE), technical executive, a founder, a consultant, a writer, a systems developer, a software construction geek, and a standards diplomat.
            He loves to build teams and products that make customers ecstatic. He has worked in the IT industry since 1980 as both customer and vendor, working with open source for almost 30 years.`,
            sched: "#"
          },
          {
            name: "Eriol Fox",
            title: "Design Lead | Ushahidi",
            image: speakers.eriol,
            sched: "#"
          },
          {
            name: "Aniedi Udo-Obong",
            title: "Developer Relations, Sub-Saharan Africa | Google",
            image: speakers.aniedi,
            sched: "#"
          },
          {
            name: "Prosper Otemuyiwa",
            title: "Co-founder | Eden & forloop Africa",
            image: speakers.prosper,
            sched: "#"
          },
          {
            name: "Marlene Mhangami",
            title: "Director | PSF & Co-founder | ZimboPy",
            image: speakers.marlene,
            sched: "#"
          }
        ].map(speaker => (
          <a href={speakers.sched} key={speaker.name} className="relative w-full h-full md:w-1/4 max-w-sm rounded my-2 px-2 md:my-8">
            <figure className="w-full">
              <img className="w-auto mx-auto" src={speaker.image} alt={`An amazing photograph of ${speaker.name}`} />
              <div className="z-0 -mt-20 pt-4 px-2 w-auto h-20 bg-dark-blue-500 opacity-75 text-center text-white">
                <h3 className="font-bold text-base">{speaker.name}</h3>
                <p className="text-sm md:text-xs">{speaker.title}</p>
              </div>
            </figure>
          </a>
        ))}
      </div>

      <div className="mx-auto mt-8 mb-24 absolute right-0 md:mr-40">
        <a href="/" className="px-6 py-3 border-2 border-white text-white rounded-lg text-center uppercase">
          See all Speakers
        </a>
      </div>
    </section>
  );
}

export default Speaker;
