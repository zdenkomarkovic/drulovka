import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { GiMountainClimbing } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Usluge",
    link: "/usluge",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GiMountainClimbing,
    title: "Dugogodišnje Iskustvo",
    text: "Već dugi niz godina smo prepoznati kao firma koja stoji iza kvaliteta svojih usluga",
  },
  {
    id: 2,
    icon: VscTools,
    title: "Visok Kvalitet Opreme",
    text: "Naše skele su proverene i ispunjavaju sve sigurnosne standarde",
  },
  {
    id: 3,
    icon: FaShippingFast,
    title: "Brza Isporuka i Fleksibilnost",
    text: "Prilagođavamo se vašim rokovima i potrebama.",
  },
  {
    id: 4,
    icon: TbPigMoney,
    title: "Konkurentne Cene",
    text: "Nudimo pristupačne cene uz mogućnost dugoročnog najma.",
  },
  {
    id: 5,
    icon: LiaPeopleCarrySolid,
    title: "Stručni Tim",
    text: "Naši radnici su obučeni za sigurno postavljanje i održavanje skela.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Elektroinstalacije",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Elektro ormani",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};

export interface Uslugedata {
  title: string;
  text: string;
  image: string;
  title2: string;
  text2: string;
  text3: string;
}

export const uslugeData: Uslugedata[] = [
  {
    title: "Visinsko Pranje Staklenih Površina",
    text: "Održavanje staklenih fasada i prozora na visokim objektima zahteva posebnu opremu i stručnost. Naš tim koristi profesionalne tehnike i sredstva za čišćenje kako bi vaši objekti uvek izgledali besprekorno.",
    image: "/visinsko pranje.webp",
    title2: "Profesionalno čišćenje staklenih površina na visini",
    text2:
      "Održavanje staklenih fasada i prozora na visokim objektima ključno je za estetski izgled, dugovečnost materijala i sigurnost korisnika objekta. Profesionalno čišćenje staklenih površina na visini zahteva specijalizovanu opremu, stručno osoblje i primenu bezbednosnih standarda kako bi se obezbedila maksimalna efikasnost i sigurnost.",
    text3:
      "Redovno čišćenje uklanja nečistoće, prašinu, tragove kiše i druge zagađivače koji mogu narušiti prozirnost i izgled staklenih površina. Korišćenjem adekvatnih tehnika i ekološki prihvatljivih sredstava, postiže se dugotrajan efekat čistoće bez oštećenja materijala. Bez obzira na složenost pristupa, naši stručnjaci osiguravaju precizno i temeljno čišćenje, prilagođeno specifičnostima svakog objekta.",
  },
  {
    title: "Mašinsko Čišćenje Velikih Površina",
    text: "Nudimo profesionalno čišćenje hala, skladišta, trgovačkih centara i drugih velikih prostora. Koristimo najsavremenije mašine za dubinsko čišćenje koje efikasno uklanjaju prašinu, masnoće i druge nečistoće.",
    image: "/masinsko ciscenje.webp",
    title2: "Efikasno mašinsko čišćenje velikih površina",
    text2:
      "Mašinsko čišćenje velikih površina omogućava brzo, temeljno i efikasno uklanjanje prljavštine, prašine i tvrdokornih mrlja iz skladišta, hala, industrijskih pogona i drugih velikih prostora. Ovaj proces ne samo da poboljšava higijenske uslove, već i produžava vek trajanja podnih obloga i doprinosi sigurnijem radnom okruženju.",
    text3:
      "Naša usluga obuhvata korišćenje visokokvalitetnih mašina i profesionalnih sredstava za čišćenje, prilagođenih različitim vrstama podloga. Iskusni tim procenjuje specifične potrebe vašeg prostora i prilagođava pristup kako bi čišćenje bilo maksimalno efikasno, uz minimalan prekid vaših poslovnih aktivnosti.",
  },
  {
    title: "Električne i Vodovodne Instalacije",
    text: "Naš tim iskusnih električara i vodoinstalatera nudi kompletne usluge instalacije i održavanja električnih i vodovodnih sistema, kako za poslovne, tako i za stambene objekte.",
    image: "/instalacije.webp",
    title2:
      "Profesionalna izrada i održavanje električnih i vodovodnih instalacija",
    text2:
      "Bezbedne i pouzdane električne i vodovodne instalacije ključne su za funkcionalnost svakog doma, poslovnog prostora ili industrijskog objekta. Naš tim stručnjaka pruža sveobuhvatne usluge, od projektovanja i instalacije do redovnog održavanja i popravki, kako biste imali siguran i efikasan sistem.",
    text3:
      "Koristimo savremene materijale i tehnike rada, pridržavajući se svih propisa i standarda. Bilo da je reč o novogradnji, renoviranju ili hitnim intervencijama, prilagođavamo rešenja vašim specifičnim potrebama, osiguravajući dugotrajnost i optimalnu funkcionalnost vaših instalacija.",
  },
  {
    title: "Košenje Zelenih Površina",
    text: "Održavanje travnatih površina i dvorišta je važno za estetiku i funkcionalnost prostora. Naša usluga obuhvata redovno košenje, uklanjanje korova i održavanje zelenih površina.",
    image: "/kosenje trave.webp",
    title2: "Profesionalno održavanje zelenih površina",
    text2:
      "Redovno košenje zelenih površina ključno je za očuvanje urednog i zdravog izgleda dvorišta, parkova i drugih zelenih površina. Pravilna nega doprinosi ravnomernom rastu trave, sprečava širenje korova i poboljšava estetski dojam okoline.",
    text3:
      "Naša usluga obuhvata stručne timove sa iskustvom u održavanju zelenih površina, koji koriste savremenu mehanizaciju za precizno i efikasno košenje. Bilo da se radi o privatnim dvorištima, poslovnim prostorima ili javnim parkovima, prilagođavamo tehniku rada specifičnim potrebama terena kako bismo postigli optimalne rezultate.",
  },
];
