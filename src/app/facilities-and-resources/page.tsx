"use client";
import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";
import SectionDivider from "@/components/SectionDivider";
import { alumniSans, geo } from "@/fonts";
import Carousel from "@/components/Carousel";
import styles from "./styles.module.css";
import Link from "@/components/Link";
import Section from "@/components/Section";
import { getFacilities } from "@/lib/facilities";

const Page = () => {
  const [facilities, setFacilities] = useState<string[]>([])

  useEffect(() => {
    const loadData = async () => {
      const data = await getFacilities();
      setFacilities(data);
    }

    void loadData();
  }, []);

  const resources = useMemo(() => [
    { icon: "FacilitiesPage/server.png", text: "9 High Performing Servers" },
    { icon: "FacilitiesPage/cctv.png", text: "24 hrs CCTV Monitoring" },
    { icon: "FacilitiesPage/monitor.png", text: "75 Terminal Systems" },
    { icon: "FacilitiesPage/computer.png", text: "2 Work Station with GPU" },
    { icon: "FacilitiesPage/networking.png", text: "7 Advanced Networking Equipments" },
    { icon: "FacilitiesPage/wifi.png", text: "Wi-Fi Facility" },
  ], []);

  const csedServers = useMemo(() => [
    { name: "Dept. Of CSE", link: "https://minerva.nitc.ac.in" },
    { name: "CSED People", link: "https://people.cse.nitc.ac.in/" },
    { name: "CSE Eduserver", link: "https://eduserver.cse.nitc.ac.in/" },
    { name: "CSEA", link: "https://assoc.cse.nitc.ac.in" },
    { name: "Secure Computing Lab", link: "http://scl.cse.nitc.ac.in/" },
    { name: "CSEA WiKi", link: "https://assoc.cse.nitc.ac.in/wiki/" },
  ], []);

  return (
    <Container>
      <Section className="flex flex-col justify-center min-h-screen items-center lg:items-start h-full mb-16 pt-20 lg:pt-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col w-full lg:w-7/12">
            <h1 className={`${alumniSans.className} text-8xl font-bold`}>
              Facilities
            </h1>
            <span
              className="text-white font-normal text-xl mt-10 mx-auto"
            >
              The lab has high-performance computers with LAN and internet
              facility through wired connectivity. It also provides WiFi, Audio
              Visual Projection Systems and printers. Moreover, it is equipped
              with 9 servers with advanced configurations for central data
              storage, website hosting, DHCP service, conduction of exams, LDAP
              service.
            </span>

            <div className="pt-16 hidden aspect-video lg:block w-[665px] max-w-[90%]">
              <Carousel
                images={facilities}
                controls
                autoPlay
              />
            </div>
          </div>

          <div className="w-full lg:w-5/12 h-inherit flex justify-center lg:justify-end">
            <div className="border-[1px] border-white p-8 w-full lg:w-fit h-full">
              <h2
                className={`${alumniSans.className} text-neonGreen font-bold text-5xl`}
                style={{
                  textShadow: `
                  0px 0px 20px var(--neon-green),
                  0px 0px 20px var(--neon-green),
                  0px 0px 20px var(--neon-green),
                  0px 0px 0px var(--neon-green)
                `,
                }}


              >
                Resources
              </h2>
              <ul className="text-white mt-8 space-y-6">
                {
                  resources.map(({ icon, text }, index) => (
                    <li className="gap-4 flex" key={index}>
                      <span className="h-[32px] w-[32px]">
                        <img src={icon} alt={`icon-${icon}`} />
                      </span>
                      <span
                        className="text-xl flex justify-center items-center"
                      >
                        {text}
                      </span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-24 2xl:py-48 h-full flex items-center justify-center" borderTop>
        <div className="flex flex-col flex-wrap gap-[11px] lg:grid grid-cols-12 grid-rows-12 py-16 2xl:px-16">
          <div className="order-2 w-full h-auto border border-white p-3.5 col-start-1 col-span-3 row-start-1 row-span-7 lg:order-1 flex flex-col gap-2.5">
            <h2 className={`${alumniSans.className} font-bold bg-transparent text-4xl text-darkBlue ${styles.boxshadow}`}>
              01
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              Athena Data Server
            </h3>
            <p>
              Athena is an internal data server for students who are doing their
              BTech in Computer Science and Engineering at the National
              Institute of Technology, Calicut. All the students have an account
              in Athena DataServer from their second year onwards. All users are
              assigned a fixed amount of disk quota. The users can also host
              their personal website.
            </p>
            {/* <div className="py-[14px]">
              <Link
                href="https://athena.nitc.ac.in/how-to-athena/"
                label="How to use Athena"
              />
            </div> */}
          </div>
          <div className="order-3 w-full h-full border border-white p-3.5 col-start-4 col-span-5 row-start-1 row-span-7 border border-dashed border-white flex flex-col gap-2.5">
            <h2 className={`${alumniSans.className} font-bold text-4xl text-darkBlue ${styles.boxshadow}`}>
              02
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              CSED Web Server
            </h3>
            <p>
              CSED Web Server is official website hosting server of department.
            </p>
            <div className="py-3.5 flex flex-col gap-1">
              {
                csedServers.map(({ name, link }, index) => (
                  <span key={index} className="">
                    <Link href={link} label={name} openInNewTab />
                  </span>
                ))
              }
            </div>
          </div>
          <div className="w-full h-full order-1 col-start-9 col-span-4 row-start-1 row-span-7 lg:border border-white lg:order-3 relative flex items-center lg:justify-center">
            <div className="select-none hidden lg:block absolute top-0 right-0">
              <img src="/FacilitiesPage/tab.svg" alt="tab" />
            </div>
            <div className="flex justify-start lg:justify-center mt-0 mb-[20px] lg:items-center lg:p-3.5">
              <h2 className={`${alumniSans.className} font-bold text-7xl`}>
                Servers
              </h2>
            </div>
          </div>
          <div className="order-4 w-full h-auto border border-white p-3.5 lg:col-span-4 row-start-8 row-span-5  lg:border-dashed flex flex-col gap-2.5">
            <h2 className={`${alumniSans.className} font-bold text-4xl text-darkBlue ${styles.boxshadow}`}>
              03
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              Ithus Authentication Server
            </h3>
            <p>
              Itus is an authentication server for systems in SSL. Each BTech
              student of department has a username and password with which they
              can login to the system. Itus uses LDAP for authentication.
            </p>
          </div>
          <div className="order-5 w-full h-auto border border-white p-3.5 lg:col-span-4 row-start-8 row-span-5  border-dashed lg:border-solid flex flex-col gap-2.5">
            <h2 className={`${alumniSans.className} font-bold text-4xl text-darkBlue ${styles.boxshadow}`}>
              04
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              Media Server
            </h3>
            <p>
              Media Server is a warehouse of open source operating systems and
              open courses from many prominent institutions of world.
            </p>
            <div className="py-[20px] mt-[14px]">
              <Link href="http://192.168.40.130/" label="Media Server" />
            </div>
          </div>
          <div className="order-6 w-full h-auto border border-white p-3.5 lg:col-span-4 row-start-8 row-span-5   lg:border-dashed  flex flex-col gap-2.5">
            <h2 className={`${alumniSans.className} font-bold text-4xl text-darkBlue ${styles.boxshadow}`}>
              05
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              Mirror Server
            </h3>
            <p>
              Mirror Server is the Ubuntu Mirror available internal to the
              institution. It contains the up to date repository of supported
              LTS version and recent short support versions
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-24 2xl:py-48 h-full flex flex-col" borderTop>
        <h2 className={`${alumniSans.className} font-bold text-5xl lg:text-7xl`}> Terminal Systems </h2>
        <img
          src="/FacilitiesPage/facilities.svg"
          alt="Technical Specifications"
          className="py-16 px-0 lg:p-16"
        />
        <span className={`${geo.className} font-medium text-2xl text-center text-darkBlue`} style={{
          filter: 'drop-shadow(0 0 10px var(--dark-blue)) drop-shadow(0 0 20px var(--dark-blue))',
        }}>
          TECHNICAL SPECIFICATIONS
        </span>
      </Section>
    </Container>
  );
};

export default Page;

