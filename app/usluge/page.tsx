import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Uslugedata, uslugeData } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <div className="container px-2 md:px-10 mx-auto py-24 space-y-4 md:space-y-8">
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
          <CardContent className="md:text-lg">
            <div className="md:flex justify-between gap-10 items-center space-y-2 md:space-y-0">
              <div className="md:space-y-4">
                <p className="first-letter:pl-6">
                  Nudimo širok asortiman pokretnih skela prilagođenih različitim
                  potrebama. Na raspolaganju su vam modeli sa sledećim
                  dimenzijama:
                </p>
                <ul>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Visina gazišta skela:
                    </span>{" "}
                    od 3 do 6 m i od 4 do 8.5 m
                  </li>
                </ul>

                <p className="first-letter:pl-6">
                  Naše skele su konstruisane tako da obezbede maksimalnu
                  stabilnost i sigurnost, a njihov modularni dizajn omogućava
                  lako prilagođavanje različitim vrstama radova.
                </p>
              </div>
              <Image
                src={"/skele.jpg"}
                width={400}
                height={400}
                alt="usluge"
                className="rounded-lg h-[300px] object-cover"
              />
            </div>
            <div className="w-1/2 md:w-1/4 bg-muted-foreground py-[0.5px] mx-auto"></div>
            <CardTitle className="py-6 md:text-3xl">
              Gde Se Naše Skele Mogu Koristiti?
            </CardTitle>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-2 md:gap-10 items-center">
              <Image
                src={"/skele2.jpg"}
                width={400}
                height={400}
                alt="usluge"
                className="rounded-lg h-[300px] object-cover"
              />
              <div className="space-y-2 md:space-y-6">
                <p className="first-letter:pl-6">
                  Naše skele su pogodne za širok spektar građevinskih i
                  industrijskih aktivnosti, uključujući:
                </p>
                <ul>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Radove na fasadama
                    </span>{" "}
                    - Farbanje, gletovanje, sanacija fasada i postavljanje
                    termoizolacije.
                  </li>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Industrijske objekte
                    </span>{" "}
                    - Održavanje proizvodnih hala, postrojenja i skladišta.
                  </li>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Unutrašnje radove
                    </span>{" "}
                    - Postavljanje rasvete, elektroinstalacija, gipsanih radova
                    i plafona.
                  </li>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Specijalizovane projekte
                    </span>{" "}
                    - Restauracija kulturnih spomenika, održavanje javnih
                    objekata i infrastrukture.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 bg-muted-foreground py-[0.5px] mx-auto"></div>
            <CardTitle className="py-6 md:text-3xl">
              Prednosti Naših Skela
            </CardTitle>
            <div className="space-y-2 md:flex justify-between gap-10 items-center">
              <div>
                <ul>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Visoka stabilnost
                    </span>{" "}
                    - Robusna konstrukcija omogućava bezbedan rad na visini.
                  </li>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Fleksibilnost i modularnost
                    </span>{" "}
                    - Prilagodljive različitim vrstama radova i terenima.
                  </li>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Jednostavna montaža i demontaža
                    </span>{" "}
                    - Brzo postavljanje i uklanjanje skela.
                  </li>
                  <li className="">
                    {" "}
                    - <span className="font-bold text-primary">
                      Mobilnost
                    </span>{" "}
                    - Pokretne skele omogućavaju lako pomeranje na gradilištu.
                  </li>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Pogodnost za dugoročne i kratkoročne projekte
                    </span>{" "}
                    - Mogućnost iznajmljivanja na period koji vama odgovara.
                  </li>
                </ul>
              </div>
              <Image
                src={"/skele3.jpg"}
                width={400}
                height={400}
                alt="usluge"
                className="rounded-lg h-[300px] object-cover"
              />
            </div>
            <div className="w-1/2 md:w-1/4 bg-muted-foreground py-[0.5px] mx-auto"></div>
            <CardTitle className="py-6 md:text-3xl">
              Montaža i Demontaža Skela
            </CardTitle>
            <div className=" flex flex-col-reverse md:flex-row justify-between gap-2 md:gap-10 items-center">
              <Image
                src={"/skele4.jpg"}
                width={400}
                height={400}
                alt="usluge"
                className="rounded-lg h-[300px] object-cover"
              />
              <div className="space-y-2 md:space-y-6">
                <p className="first-letter:pl-6">
                  Pored iznajmljivanja skela, pružamo i usluge profesionalne
                  montaže i demontaže. Naš tim stručnjaka osigurava da su skele
                  pravilno postavljene, u skladu sa svim sigurnosnim propisima.
                  Obezbeđujemo:
                </p>
                <ul>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Brzu i sigurnu instalaciju skela na lokaciji
                    </span>
                  </li>
                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Podešavanje skela prema specifičnim uslovima gradilišta
                    </span>{" "}
                  </li>

                  <li className="">
                    {" "}
                    -{" "}
                    <span className="font-bold text-primary">
                      Redovne kontrole i održavanje skela za maksimalnu
                      sigurnost
                    </span>{" "}
                  </li>
                </ul>
                <p className="first-letter:pl-6">
                  Bilo da vam je potreban kratkoročni najam za brze projekte ili
                  dugoročna rešenja za kontinuirane radove, Drulovka Niš je vaš
                  pouzdan partner.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 md:space-y-8">
          {uslugeData.map((data, i) => {
            return <CardUsluge key={i} data={data} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;

const CardUsluge = ({ data, i }: { data: Uslugedata; i: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="md:text-3xl">{data.title2}</CardTitle>
      </CardHeader>
      <CardContent
        className={`md:text-lg md:flex space-y-2 md:space-y-0 justify-between gap-10 items-center ${
          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="space-y-2 md:space-y-4">
          <p className="first-letter:pl-6">{data.text2}</p>
          <p className="first-letter:pl-6">{data.text3}</p>
        </div>
        <Image
          src={data.image}
          width={400}
          height={400}
          alt="usluge"
          className="rounded-lg rounded-lg h-[300px] object-cover"
        />
      </CardContent>
    </Card>
  );
};
