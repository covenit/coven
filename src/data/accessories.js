// src/data/accessories.js

import ADCTH405 from "../assets/accessories/ADCTH405.png";
import ABVAP06 from "../assets/accessories/ABVAP06.png";
import CAPPA610 from "../assets/accessories/CAPPA610.png";
import CDOCC004 from "../assets/accessories/CDOCC004.png";
import NS061723C from "../assets/accessories/NS061723C.png";
import MD05014C from "../assets/accessories/MD05014C.png";
import SUPSC06 from "../assets/accessories/SUPSC06.png";
import SUPMD05 from "../assets/accessories/SUPMD05.png";
import LAV0506EG from "../assets/accessories/LAV0506EG.png";
import C0V00013 from "../assets/accessories/C0V00013.png";
import ASU00006 from "../assets/accessories/ASU00006.png";
import AGR00012 from "../assets/accessories/AGR00012.png";
import AGR4604P from "../assets/accessories/AGR4604P.png";
import AGRMXD23 from "../assets/accessories/AGRMXD23.png";
import ABR02511 from "../assets/accessories/ABR02511.png";
import AGR0RI11 from "../assets/accessories/AGR0RI11.png";
import ABIG2011 from "../assets/accessories/ABIG2011.png";
import ABIF2011 from "../assets/accessories/ABIF2011.png";
import ABIV1120 from "../assets/accessories/ABIV1120.png";
import AGRPOL11 from "../assets/accessories/AGRPOL11.png";
import AGRILL11 from "../assets/accessories/AGRILL11.png";
import ABN03046 from "../assets/accessories/ABN03046.png";
import ATFP4060 from "../assets/accessories/ATFP4060.png";
import ATF04060 from "../assets/accessories/ATF04060.png";
import ABNA0346 from "../assets/accessories/ABNA0346.png";
import DETLAVUSL from "../assets/accessories/DETLAVUSL.png";

export const accessories = [
  {
    id: 1,
    name: "ADDOLCITORE MANUALE",
    text: "Sistema manuale per trattare l’acqua, riducendo calcare e impurità. Garantisce prestazioni ottimali e maggiore durata agli apparecchi.",
    code: "ADCTH405",
    serie: "Steady Cook & Master Delight",
    category: ["Tutti", "Tecnico"],
    image: ADCTH405
  },
  {
    id: 2,
    name: "ABBATTITORE DI VAPORE",
    text:"Dispositivo professionale per ridurre rapidamente la temperatura di cibi cotti, preservandone freschezza, sapore e consistenza. Efficiente e sicuro.",
    code: "ABVAP06 - ABVAP10-20",
    serie: "Series 6, 10, 20",
    category: ["Tutti", "Tecnico"],
    image: ABVAP06
  },
  {
    id: 3,
    name: "CAPPA",
    text:"Cappa aspirante professionale per rimuovere fumi, vapori e odori in cucina, garantendo un ambiente pulito e sicuro. Facile da installare e mantenere.",
    code: "CAPPA610",
    serie: "Only Series 6 - 10 E",
    category: ["Steady Cook", "Tecnico"],
    image: CAPPA610
  },
  {
    id: 4,
    name: "DOCCIA LAVAGGIO",
    text:"Doccia professionale per il lavaggio intenso di teglie e accessori, rimuove rapidamente sporco e residui. Facile da usare e resistente.",
    code: "CDOCC004",
    serie: "Steady Cook & Master Delight",
    category: ["Tutti", "Tecnico"],
    image: CDOCC004
  },
  {
    id: 5,
    name: "PORTA CONTRARIA",
    text:"Porta reversibile per forno, progettata per aprirsi in entrambe le direzioni e adattarsi a qualsiasi spazio di lavoro. Robusta e sicura.",
    code: "NS061723C - NS01021C - CL20022C",
    serie: "Series 6, 10, 20",
    category: ["Steady Cook", "Tecnico"],
    image: NS061723C
  },
  {
    id: 6,
    name: "PORTA CONTRARIA",
    text:"Porta reversibile per forno, progettata per aprirsi in entrambe le direzioni e adattarsi a qualsiasi spazio di lavoro. Robusta e sicura.",
    code: "MD05014C - MD08022C - MC12022C",
    serie: "Series 5, 8, 10",
    category: ["Master Delight", "Tecnico"],
    image:  MD05014C
  },
  {
    id: 7,
    name: "SUPPORTO INOX SMONTABILE",
    text:"Supporto in acciaio inox resistente e modulare, facile da montare e smontare. Perfetto per organizzare al meglio teglie e bacinelle nel forno.",
    code: "SUPSC06 - SUPSC10 - SUPSC20",
    serie: "Series 6, 10, 20",
    category: ["Steady Cook", "Tecnico"],
    image: SUPSC06
  },
  {
    id: 8,
    name: "SUPPORTO INOX SMONTABILE",
    text:"Supporto in acciaio inox resistente e modulare, facile da montare e smontare. Perfetto per organizzare al meglio teglie e bacinelle nel forno.",
    code: "SUPMD05 - SUPMD08 - SUPMD10",
    serie: "Series 5, 8, 10",
    category: ["Master Delight", "Tecnico"],
    image: SUPMD05
  },
  {
    id: 9,
    name: "LAVAGGIO",
    text:"Sistema professionale per la pulizia completa del forno, rimuovendo residui e grassi in modo rapido ed efficace. Mantiene il forno sempre igienico e pronto all’uso.",
    code: "LAV0506EG - LAV0810EG - LAV20EG - LAV2140E",
    serie: "Series 6, 10, 20, 21, 40",
    category: ["Steady Cook", "Tecnico"],
    image: LAV0506EG
  },
  {
    id: 91,
    name: "LAVAGGIO",
    text: "Sistema professionale per la pulizia completa del forno, rimuovendo residui e grassi in modo rapido ed efficace. Mantiene il forno sempre igienico e pronto all’uso.",
    code: "LAV0506EG - LAV0810EG",
    serie: "SERIES 5, 8, 10",
    category: ["Steady Cook", "Tecnico"],
    image: LAV0506EG
  },
  {
    id: 10,
    name: "SONDA AL CUORE",
    text: "Sonda professionale per misurare la temperatura interna di carne e altri alimenti, garantendo cotture precise e sicure. Facile da usare e affidabile.",
    code: "C0V00013",
    serie: "Series 6, 10, 20, 21, 40",
    category: ["Steady Cook", "Tecnico"],
    image: C0V00013
  },
  {
    id: 10,
    name: "SONDA AL CUORE",
    text: "Sonda professionale per misurare la temperatura interna di carne e altri alimenti, garantendo cotture precise e sicure. Facile da usare e affidabile.",
    code: "C0V00013",
    serie: "Series 6, 10, 20, 21, 40",
    category: ["Steady Cook", "Tecnico"],
    image: C0V00013
  },
  {
    id: 11,
    name: "FILTRO GRASSI",
    text: "Filtro progettato per trattenere grassi e residui durante la cottura, mantenendo il forno pulito e le preparazioni più sane. Facile da rimuovere e pulire.",
    code: "ASU00006 - ASU00010 - ASU00020",
    serie: "Series 6, 10, 20",
    category: ["Steady Cook", "Tecnico"],
    image: ASU00006
  },
  {
    id: 12,
    name: "GRIGLIA CROMATA",
    text:"Griglia con finitura cromata, ideale per cotture uniformi e dorature perfette su carne, pesce e verdure. Resistente e facile da pulire.",
    code: "AGR00012 - AGR00023 - AGR00011 - AGR00021",
    serie: "GN 1/2, GN 2/3, GN 1/1, GN 2/1",
    category: ["Steady Cook", "Multigrill"],
    image: AGR00012
  },
  {
    id: 13,
    name: "GRIGLIA CROMATA",
    text:"Griglia con finitura cromata, ideale per cotture uniformi e dorature perfette su carne, pesce e verdure. Resistente e facile da pulire.",
    code: "AGR4604P",
    serie: "40X60 cm",
    category: ["Master Delight", "Multigrill"],
    image: AGR4604P
  },
  {
    id: 14,
    name: "GRIGLIA INOX",
    text: "Griglia in acciaio inox resistente, perfetta per cuocere carne, pesce e verdure in modo uniforme. Facile da pulire e duratura.",
    code: "AGRMXD23 - AGRIX011 - AGRIX021",
    serie: "GN 2/3, GN 1/1, GN 2/1",
    category: ["Steady Cook", "Multigrill"],
    image: AGRMXD23
  },
  {
    id: 15,
    name: "BACINELLE RETE",
    text: "Bacinelle con struttura a rete, ideali per cuocere o raffreddare alimenti permettendo la circolazione dell’aria. Resistenti e facili da pulire.",
    code: "ABR02511",
    serie: "GN 1/1",
    category: ["Steady Cook", "Multigrill"],
    image: ABR02511
  },
  {
    id: 16,
    name: "TEGLIA ALLUMINIO",
    text:"Teglia leggera in alluminio, perfetta per una cottura uniforme di dolci e preparazioni salate. Pratica e facile da pulire.",
    code: "AGR0RI11",
    serie: "GN 1/1",
    category: ["Steady Cook", "Multigrill"],
    image: AGR0RI11
  },
  {
    id: 17,
    name: "BACINELLE INOX",
    text:"Bacinelle in acciaio inox resistenti e versatili, ideali per conservare, mescolare o cuocere ingredienti. Facili da pulire e durature.",
    code: "ABIG2011- ABI04011 - ABI06511- ABI02021 - ABIO4021 - ABIO6521",
    serie: "GN 1/1 H 20 mm, GN 1/1 H 40 mm, GN 1/1 H 65 mm, GN 2/1 H 20 mm, GN 2/1 H 40 mm, GN 2/1 H 65 mm",
    category: ["Steady Cook", "Multigrill"],
    image: ABIG2011
  },
  {
    id: 18,
    name: "BACINELLE INOX FORATE",
    text: "Bacinelle in acciaio inox con fori, perfette per cotture al vapore o per drenare liquidi. Resistenti e facili da pulire.",
    code: "ABIF2011 - ABIF4011 - ABIF6511 - ABIF2021 - ABIF4021 - ABIF6521",
    serie: "GN 1/1 H20 mm, GN 1/1 H40 mm, GN 1/1 H65 mm, GN 2/1 H20 mm, GN 2/1 H40 mm, GN 2/1 H65 mm",
    category: ["Steady Cook", "Multigrill"],
    image: ABIF2011
  },
  {
    id: 19,
    name: "BACINELLE ANTIADERENTI",
    text: "Bacinelle resistenti con rivestimento antiaderente, ideali per preparazioni alimentari senza attaccarsi. Facili da pulire e riutilizzabili.",
    code: "ABIV1120 - ABIV1140",
    serie: "GN 1/1 H 20 mm, GN 1/1 H 40 mm",
    category: ["Steady Cook", "Multigrill"],
    image: ABIV1120
  },
  {
    id: 20,
    name: "GRIGLIA PER POLLI",
    text: "Griglia pensata per cuocere polli e carni intere in modo uniforme, garantendo doratura perfetta e cottura succosa. Facile da usare e pulire.",
    code: "AGRPOL11",
    serie: "GN 1/1",
    category: ["Steady Cook", "Multigrill"],
    image: AGRPOL11
  },
  {
    id: 21,
    name: "GRIGLIA GRILL",
    text: "Griglia professionale ideale per ottenere cotture perfette e marcature uniformi su carne, pesce e verdure. Resistente e facile da pulire.",
    code: "AGRILL11",
    serie: "GN 1/1",
    category: ["Steady Cook", "Multigrill"],
    image: AGRILL11
  },
  {
    id: 22,
    name: "TEGLIE PIANE",
    text: "Teglie lisce e resistenti, ideali per cuocere dolci, torte e preparazioni salate in modo uniforme. Facili da pulire e durature.",
    code: "ABN03046",
    serie: "40X60 cm",
    category: ["Master Delight", "Multigrill"],
    image: ABN03046
  },
  {
    id: 23,
    name: "TEGLIA FORATA (SILICONATA)",
    text: "Teglia con rivestimento siliconato e superficie forata che garantisce una cottura uniforme e croccante. Perfetta per pane, pizze e prodotti da forno.",
    code: "ATFP4060",
    serie: "40X60 cm",
    category: ["Master Delight", "Multigrill"],
    image: ATFP4060
  },
  {
    id: 24,
    name: "TEGLIA BAGUETTES SILICONATA",
    text: "Teglia professionale con rivestimento siliconato, ideale per una cottura uniforme e dorata delle baguette. Resistente e facile da pulire.",
    code: "ATF04060",
    serie: "40X60 cm",
    category: ["Master Delight", "Multigrill"],
    image: ATF04060
  },
  {
    id: 25,
    name: "TEGLIA ANTIADERENTE",
    text: "Teglia resistente e facile da pulire, con rivestimento antiaderente per una cottura uniforme senza che gli alimenti si attacchino. Ideale per ogni tipo di preparazione.",
    code: "ABNA0346",
    serie: "40X60 cm",
    category: ["Master Delight", "Multigrill"],
    image: ABNA0346
  },
  {
    id: 26,
    name: "DETERGENTE LAVAGGIO COVEN (TANICA 6 KG)",
    text: "Detergente specifico per forni professionali, efficace contro grassi e residui ostinati. Formato tanica da 6 kg per un uso pratico e duraturo.",
    code: "DETLAVUSL",
    serie: "All Visual and Touch Models",
    category: ["Tutti", "Multigrill"],
    image: DETLAVUSL
  }
];
