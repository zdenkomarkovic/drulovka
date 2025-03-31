import { Uslugedata, uslugeData } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Usluge = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 mx-auto py-8 md:py-16 space-y-4 md:space-y-10">
        <h2 className="text-3xl md:text-5xl text-center text-primary">
          Naše Usluge
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="md:text-3xl">
              {" "}
              Iznajmljivanje Pokretnih Skela
            </CardTitle>
          </CardHeader>
          <CardContent className="md:text-2xl">
            <div className="space-y-2 md:space-y-0 md:flex justify-between gap-10 items-center">
              <div>
                <p>
                  Naša glavna delatnost je izdavanje pokretnih skela za
                  različite vrste građevinskih i industrijskih radova.{" "}
                </p>
                <ul>
                  <li>Nudimo skele:</li>
                  <li> - 3 do 9.5m gazece povrsine</li>
                  <li> - 3 do 6m visine</li>
                  <li> - 4 do 8.5m visine</li>
                </ul>
              </div>
              <Image
                src={"/skele2.jpg"}
                width={500}
                height={500}
                alt="usluge"
                className="rounded-lg md:w-1/4 object-cover h-[300px]"
              />
            </div>
            <div className="w-1/4 bg-muted-foreground py-[0.5px] mx-auto"></div>
            <CardTitle className="py-6 md:text-3xl">
              Montaža i Demontaža Skela
            </CardTitle>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-2 md:gap-10 items-center">
              <Image
                src={"/skele4.jpg"}
                width={500}
                height={500}
                alt="usluge"
                className="rounded-lg object-cover md:w-1/4 h-[300px]"
              />
              <div>
                <p>
                  Kao deo naše usluge, nudimo i kompletnu montažu i demontažu
                  skela. Naši obučeni radnici osiguravaju da se skele postave na
                  siguran način, u skladu sa važećim propisima i standardima.
                </p>
                <ul>
                  <li>Pružamo:</li>
                  <li> - Brzu i sigurnu montažu</li>
                  <li> - Prilagođavanje skela specifičnim zahtevima terena</li>
                  <li> - Redovne inspekcije i održavanje skela</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={"/usluge"} className="ml-auto pr-10 text-xl">
              Saznaj vise...
            </Link>
          </CardFooter>
        </Card>
        <div className="grid md:grid-cols-4 gap-4">
          {uslugeData.map((data, i) => {
            return <CardUsluge key={i} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Usluge;

const CardUsluge = ({ data }: { data: Uslugedata }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data.text}</p>
      </CardContent>
      <CardFooter className="relative">
        <Image
          src={data.image}
          width={500}
          height={500}
          alt="usluge"
          className="rounded-lg object-cover h-[300px]"
        />
        <Link
          href={"/usluge"}
          className="absolute right-10 bottom-10 text-white text-xl font-bold"
        >
          Saznaj vise...
        </Link>
      </CardFooter>
    </Card>
  );
};
