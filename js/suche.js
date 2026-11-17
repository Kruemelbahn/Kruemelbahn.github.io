// S@lz&Pfeffer - Suchmaschine f¸r Anwender mit lokalem Zugriff (S@lz)
// Vorlage zur Erstellung eines Suchindexes
//-----------------------------------------------------------------------------
// Copyright (c) 1997-98 bei Rainer Eschen. Alle Rechte vorbehalten.
//
// Version 1.11 (26.03.1998)
//
// Pfeffer: Konstanten
  var index_max = 63;
  var stand = "15.11.2026, 15:12:03";  // Erzeugt durch S@lz&Pfeffer 1.0
//
// Index-Definition
  var begriff = new Array(index_max);      // Suchbegriffe
  var seite = new Array(index_max);        // anzuzeigende Seite bzw. Textstelle
  var beschreibung = new Array(index_max);  // Beschreibung fuer Link-Anzeige in
                                           // Trefferliste
  var gefunden_beschreibung   = new Array(index_max);
                                          //Grundlage fuer sortierte Ausgabe
  var gefunden_seite          = new Array(index_max);
  var gefunden_prozent        = new Array(index_max);
  var gefunden_begriff_einzel = new Array(index_max);
  var gefunden_i              = new Array(index_max);

function init() {
// Pfeffer: Array
     begriff[ 0] = "Aktivit&auml;ten,Aktuell,Allgemeines,Anlagendigitalisierung," +
                   "Anlagengestaltung,anschlieﬂe,Ansteuerung,Anzeige," +
                   "Arduino,Arduino-Board,Arduino-Plattform,Assembler," +
                   "Atmega328,ATMEL,Aufgaben,Auflistung,Ausgabe,Ausg&auml;ngen," +
                   "autarken,AVR,AVR-Sound,Bahnen,Bahnsinniges,Basis," +
                   "Beg&uuml;nstigt,Belebtes_Haus_mit_TV_Attiny,ben&ouml;tigt," +
                   "Beschreibung,beschrieben,betrieben,Blinken," +
                   "Blinken_5fach,Blitz_Blinker," +
                   "Bremsgenerator/Pendelautomatik,C/C,DCC,Deloof," +
                   "Digitalbetrieb,digitalen,Direkt,DISPA,Eigenst&auml;ndige," +
                   "eingesetzt,Einsatz,Einsatzfahrzeuge,Elektronik," +
                   "eMailAndCloud,eMailAndGithub,entwickelt,Entwicklungen," +
                   "ESP8266,Fahrzeugbau,Fahrzeugen,FRANZ,Hans,Hardware," +
                   "Impressum,Inhalt,Jahresmodell,kleinen,kombinierbar," +
                   "kommen,Konstantstromquelle,Kr&uuml;melbahn,lang," +
                   "LaufLicht_ATiny13,Lernkurve,Lichtcomputer,Lichtleiste," +
                   "Lichtsteuerung,LightControl,Links,Literatur,LocoHDL," +
                   "LocoIO-Editor,LocoIO-Module,LocoNET,LocoNET-Nebenuhr," +
                   "LocoNET-NotAus,LocoNET-Schnittstelle," +
                   "LocoNET-Universal-Platine,L&ouml;sung,Mercedes-Benz," +
                   "Microchip,Mikrocontroller,Mikroprozessoren,Modellbahn," +
                   "Modellbahnanlagen,Modellbahnzeit,Modellfahrzeuge," +
                   "Modulbau,modulen,Navigation,Nebenuhr,Nebenuhren,NotAus," +
                   "Offer,parametrisiert,PIC-Controller,progarmmierbar," +
                   "programmiert,Prozessoren,Schaltung,Schaltungen," +
                   "Seitenanfang,Servoansteuerung,Signal-Z,Software," +
                   "Solingen,Sound,Startseite,suboptimale,Suchen,Trend," +
                   "Uhrenzentrale,umst&auml;ndlich,universelle,unterschiedlich," +
                   "Unterwegs,verbunden,verf&uuml;gbare,verwendet,zahlreiche," +
                   "Zentrale,Zuge,zun&auml;chst";
       seite[ 0] = "arduino.htm";
beschreibung[ 0] = "Kr&uuml;melbahn - Elektronik - Arduino - Allgemeines";
     begriff[ 1] = "Aktivit&auml;ten,Allgemeines,anfordern,Anlagengestaltung," +
                   "Arduino,Arduino-UNO,Arduino-Welt,AVR-Sound,Bahnen," +
                   "Bahnsinniges,Baufortschritte,Ben&ouml;tigt," +
                   "Bremsgenerator/Pendelautomatik,Commercial,DCC," +
                   "Digitalbetrieb,Direkt,DISPA,Elektronik,eMailAndCloud," +
                   "entsprechenden,esp_shield,ESP8266,ESP8266-Shield," +
                   "Fahrzeugbau,FRANZ,gegebener,Impressum,Informationen," +
                   "Inhalt,Jahresmodell,Kr&uuml;melbahn,Lichtsteuerung,Links," +
                   "Literatur,LocoNET-Shield,Mercedes-Benz,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Navigation,Planungs,Platine," +
                   "Seitenanfang,Servoansteuerung,Shield,Signal-Z,Software," +
                   "Solingen,Startseite,Suchen,&Uuml;ber,Verwendung,weiteren," +
                   "WLAN-Moduls,Zeit";
       seite[ 1] = "arduinoesp.htm";
beschreibung[ 1] = "Kr&uuml;melbahn - Elektronik - Arduino - ESP8266";
     begriff[ 2] = "Aktivit&auml;ten,Allgemeines,anfordern,Anlagengestaltung," +
                   "Ansteuerung,Arduino,Arduino-UNO,Arten,AVR-Sound,Bahnen," +
                   "Bahnsinniges,Baufortschritte,Ben&ouml;tigt," +
                   "Bremsgenerator/Pendelautomatik,Commercial,DCC," +
                   "Digitalbetrieb,Direkt,DISPA,Dom,Elektronik," +
                   "eMailAndCloud,entsprechenden,erfolgen,ESP8266," +
                   "Fahrzeugbau,FastClock-Telegrammen,festen,FRANZ,Gahtow," +
                   "gegebener,gesteuert,Grenzen,halten,Hard,Huebsch," +
                   "Impressum,Informationen,Inhalt,Jahresmodell,Kosten," +
                   "Kr&uuml;melbahn,licht_shield,Lichtsteuerung," +
                   "Lichtsteuerung-Shield,Links,Literatur,LocoNET," +
                   "Mercedes-Benz,Miniatur-Wunderland,MoBa,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,m&ouml;gliche,Navigation,Planungs," +
                   "Platine,Raumlichtsteuerung,RGB-LED-Streifen," +
                   "Seitenanfang,Servoansteuerung,Shield,Signal-Z,Software," +
                   "Solingen,Startseite,Suchen,Tag-Nacht-Simulation," +
                   "Verwendung,weiteren,Zeit,Zeitablauf,Zeitraster";
       seite[ 2] = "arduinolc.htm";
beschreibung[ 2] = "Kr&uuml;melbahn - Elektronik - Arduino - Lichtsteuerung";
     begriff[ 3] = "ACS,Aktivit&auml;ten,Allgemeines,anfordern," +
                   "Anlagengestaltung,Arduino,Arduino-LocoNet-Shield," +
                   "Arduino-UNO,AVR-Sound,Bahnen,Bahnsinniges," +
                   "Bauvorschl&auml;ge,Bibliothek,Blockstreckensteuerung," +
                   "Bluetooth-Modul,Bremsgenerator/Pendelautomatik," +
                   "Commercial,DCC,DCC-Interface,Digitalbetrieb,Direkt," +
                   "direkten,DISPA,Elektronik,eMailAndGithub," +
                   "entsprechenden,entwickelt,Entwicklerboard,Entwicklung," +
                   "erg&auml;nzt,ESP8266,Fahrzeugbau,FRANZ,freien,Gahtow,Giling," +
                   "HC-05-6,Heartbeat,IC-Interface,Impressum,Informationen," +
                   "Inhalt,insbesondere,Jahresmodell,Kr&uuml;melbahn,LED," +
                   "letztendlich,Lichtsteuerung,Links,Literatur,LocoNET," +
                   "LocoNET-Basis,LocoNET-Bibliothek,LocoNET-Interface," +
                   "LocoNET-Shield,LocoNET-Shields,L&ouml;tpads,L&ouml;tpunkte," +
                   "Mercedes-Benz,Modellbahn,Modellfahrzeuge,Modulbau," +
                   "MRRWA,Navigation,nehmen,Offer,passend,passende,passt," +
                   "Platine,Plocher,polige,Port,Reihen,Schaltung,SD-Card," +
                   "Seitenanfang,Serial,Servoansteuerung,Signal-Z,Software," +
                   "Softwareentwicklungen,Solingen,Startseite," +
                   "Steckm&ouml;glichkeiten,Stiftleiste,Stromsensor," +
                   "SUB-D9-Buchse,Suchen,Typ,Verwendung,zahlreiche";
       seite[ 3] = "arduinoln.htm";
beschreibung[ 3] = "Kr&uuml;melbahn - Elektronik - Arduino - LocoNet";
     begriff[ 4] = "Akkuschleppfahrzeug,Akkutriebwagen,Aktivit&auml;ten,Aktuell," +
                   "allt&auml;gliche,anbieten,anfordern,angesagt," +
                   "Anlagengestaltung,Anlehnung,Arbeit,ASF,&Auml;tzplatten," +
                   "aufgelistet,ausgenommen,Bahndienstfahrzeuge,Bahnen," +
                   "Bahnsinniges,Basisfahrzeug,Basiswagen,Bauanleitungen," +
                   "Bauarbeiten,Baubeschreibung,Bebra,Bekohlungs,Ben&ouml;tigte," +
                   "besch&auml;ftige,Bi29,Bild,BR38/BR50,Brawa,Bromberg," +
                   "Br&uuml;ckenpr&uuml;fwagen,BTms,Busses,CAD-Programm,Commercial," +
                   "DCC,Decoder-Seite,Dienste,digital,Digitalbetrieb," +
                   "Direkt,diverse,Duomatic,Eichfahrzeug,Eichger&auml;tewagen," +
                   "Eigenkonstruktion,Einbau,Eins&auml;tze,einsetzbar," +
                   "Einzelteile,Eisenbahnen,Eisenbahn-Journal,EL16," +
                   "Elektronik,eMail,entwickelt,Erfahrungsberichte," +
                   "erfordern,erkennbar,erkennen,fahrbare,Fahrzeugbau," +
                   "Fahrzeuge,Fahrzeugselbstbau,F&auml;kalienwagen," +
                   "Fertigmodelle,findet,Fotos/Zeichnungen,FREMO,f&uuml;rs,G10," +
                   "GDS145,ge&auml;tzt,Gebiet,gedacht,gefahren,Geh&auml;use," +
                   "geleistet,Gelenk-O-Busses,geschaffen,gezeichnet,GGths," +
                   "Ghs,github,Gleisstopfmaschine,Gms256,Groﬂen,groﬂes," +
                   "G&uuml;terzugsteuerwagen,gutes,halbe,Hauptsache,Hilfe," +
                   "Hilfsmittel,Hinweis,Hinweise,Hobby,hoffentlich," +
                   "H&ouml;henlehre,Impressum,Informationen,Infos/sachdienliche," +
                   "Inhalt,interessante,interessieren,inzwischen," +
                   "Jahresmodell,Kanal,Kanal&uuml;berf&uuml;hrung,Karlsruhe," +
                   "Kastentender,kaufen,Kesselwagen,Kla01,kleine,Kleinen," +
                   "kleines,Klick,Kran,Kr&uuml;melbahn,Krupp-Ardelt,Kupplungs," +
                   "Kupplungslehre,Kurve,Ladestation,Lenkachse,Links," +
                   "Literatur,Mercedes-Benz,Messingteil,Michelstadt," +
                   "Michelst&auml;dter,Modellbahn,Modellbahnaktivit&auml;ten," +
                   "Modellbahn-Aktivit&auml;ten,Modelle,Modellfahrzeuge," +
                   "modularer,Modulbau,Modulen,Nachbau,Nachfrage," +
                   "Navigation,Norm,&ouml;ffnet,&Ouml;lhilfszug,&Ouml;ltankzug,Oppeln," +
                   "Originalstromabnehmer,PDF-Datei,Pirmasens,Projekte," +
                   "Pufferlehre,Radsatztransportwagen,Res687," +
                   "Rollenpr&uuml;fstand,Rottenkraftwagen-Anh&auml;nger,Sache," +
                   "Saemann-&Auml;tztechnik,sagen,Schneepfl&uuml;ge,Seiten," +
                   "Seitenanfang,Selbstbau,Skizze,Solingen,Spalte," +
                   "Spurlehre,Stadtwerke,Startseite,Stationierungen," +
                   "Strassenbahnzuges,suche,Suchen,Teil,Teile,Thema," +
                   "Um/Nach/Selbstbauten,Umbau,Umbauten,umger&uuml;stet," +
                   "Umriﬂmeﬂwagen,Unbedingt,Unkrautvertilgungszug," +
                   "unsch&auml;tzbare,unschwer,Verbindung,verf&uuml;gbar,versucht," +
                   "Vorbild,vorgestellten,Wannentender,Werkstattwagen," +
                   "Werkzeug,Werkzeuge,Wiking,Zeichnungen,Zimmermann," +
                   "Zusatzkomponenten";
       seite[ 4] = "bahn.htm";
beschreibung[ 4] = "Kr&uuml;melbahn - Modellbahnaktivit&auml;ten";
     begriff[ 5] = "abgegrenzt,ausger&uuml;stet,Auszug,Bahnanlagen,Bahnen," +
                   "Bahnhof,Bahnh&ouml;fe,Bahnhofsk&uuml;rzel,Bahnhofsteile,Bahnnetz," +
                   "Bahnsinniges,Bahn&uuml;berg&auml;nge,beginnen,Bereich,Bhf," +
                   "bplaced,Br&uuml;cke,circle,detailreiche,Dezember,Direkt," +
                   "DS100,Duisburg,d&uuml;rfen,D&uuml;sseldorf,Einschr&auml;nkung," +
                   "Einstiegsseite,enden,erhaltene,Er&ouml;ffnung,ex206e,fahren," +
                   "Fahrzeuge,Februar,ferngesteuert,fill,Foto," +
                   "gegeneinander,Gesamtgewicht,Geschwindigkeit," +
                   "Gleiswechselbetrieb,Gruiten,Hagen,halten,Haltepunkt," +
                   "Haltepunkte,Hauptbahnhof,Hilden,hover,http,Impressum," +
                   "informative,Inhalt,Januar,Juli,KBS450,KBS455,KBS458," +
                   "KBS-Nummer,Klartext,Klicke,km/h,K&ouml;ln,kreuzen," +
                   "Kr&uuml;melbahn,KSG,KSGR,KSM,KSN,KSO,KSS,KSV,KSW," +
                   "Kursbuchstrecke,Lage,Lichtraumprofil,Links,Literatur," +
                   "Lokstation,LZB,Mai,M&auml;rz,maximale,Meterlast,Modellbahn," +
                   "M&uuml;ngstener,Navigation,nein,net,November,NRW," +
                   "nrwbahnarchiv,Oberstromgrenze,Ohligs,Ohligs-Wald," +
                   "Oktober,opacity,Opladen,planm&auml;ﬂig,PZB,Radsatzlast," +
                   "Rangieren,RB47,RB48,RE7,rect,Remscheid,Richtlinie," +
                   "SaddleBrown,Schienennetz-Benutzungsbedingungen," +
                   "Seitenanfang,September,SGL,Signale,SNB,Solingen," +
                   "Solingen-Gr&auml;frath,Solingen-Gr&uuml;newald," +
                   "SolingenHauptbahnhof,Solingen-Hauptbahnhof," +
                   "Solingen-Hbf,Solingen-Landwehr,SolingenMitte," +
                   "Solingen-Mitte,Solingen-Nord,Solingen-Ohligs," +
                   "Solingen-Schaberg,Solingen-Vogelpark,Solingen-Wald," +
                   "Startseite,Stellwerke,Stellwerkszentrale,Stilllegung," +
                   "Strecke,Strecken,Streckeninformationen,Streckenklasse," +
                   "Streckenneigung,Streckennummer,Strecken&uuml;bersicht," +
                   "Suchen,S&uuml;dbahnhof,SWB,t/m,&uuml;berholen,&Uuml;bersetzung," +
                   "Umbenennung,unterteilt,Weiche,Weichen,wenden," +
                   "Weyersberg,Wikipedia,Wirbelstrombremse,Wuppertal," +
                   "WuppertalVohwinkel,Z&uuml;ge,zugelassen,zul,Zwischensignale";
       seite[ 5] = "bahnhof.htm";
beschreibung[ 5] = "Kr&uuml;melbahn - Bahnh&ouml;fe in " +
                   "SolingenStreckenkarte rund um " +
                   "SolingenSolingen-VogelparkSolingen-LandwehrSolingen-SchabergSolingen-OhligsSolingen-WaldSolingen-Gr&auml;frathSolingen-HauptbahnhofSolingen-Gr&uuml;newaldSolingen-NordSolingen-MitteUmgehungsbahnKorkenzieherbahnM&uuml;ngstener " +
                   "Br&uuml;cke";
     begriff[ 6] = "anno,Bahnen,Bahnh&ouml;fe,Bahnsinniges,Bergisch-M&auml;rkische," +
                   "circle,Direkt,Eisenbahngesellschaft,Eisenbahnstrecken," +
                   "entsprechende,erhaltene,Fahrzeuge,fill,herum,hover," +
                   "Impressum,Inhalt,Klick," +
                   "K&ouml;ln-Mindener-Eisenbahngesellschaft,Kr&uuml;melbahn,Links," +
                   "Literatur,Modellbahn,Navigation,&ouml;ffnet,opacity,path," +
                   "rect,SaddleBrown,Seite,Solingen,Startseite,Strecken," +
                   "Streckenkarte,Suchen,Wikipedia";
       seite[ 6] = "bahnwelt.htm";
beschreibung[ 6] = "Kr&uuml;melbahn - Bahnen im WikipediaStreckenkarte im " +
                   "Bergischen " +
                   "LandSolingen-OhligsSolingen-HauptbahnhofAusbesserungswerk " +
                   "OpladenM&uuml;ngstener Br&uuml;ckeBahnstrecke " +
                   "SolingenñRemscheid-WuppertalBahnstrecke " +
                   "SolingenñRemscheid-WuppertalBahnstrecke " +
                   "SolingenñRemscheid-WuppertalWippertal-BahnBalkanexpressWuppertal-BahnBurgholzbahnKorkenzieherbahnBahnstrecke " +
                   "M&uuml;lheim-SpeldorfñTroisdorfSteilrampe " +
                   "Erkrath-HochdahlBahnstrecke " +
                   "D&uuml;sseldorf-DerendorfñDortmund S&uuml;dBahnstrecke " +
                   "D&uuml;sseldorf-DerendorfñDortmund S&uuml;dBahnstrecke " +
                   "D&uuml;sseldorfñElberfeldBahnstrecke " +
                   "Wuppertal-VohwinkelñEssen-&Uuml;berruhrBahnstrecke " +
                   "ElberfeldñDortmundBahnstrecke " +
                   "Haan-GruitenñK&ouml;ln-DeutzBahnstrecke " +
                   "Haan-GruitenñK&ouml;ln-DeutzBahnstrecke " +
                   "Haan-GruitenñK&ouml;ln-DeutzBahnstrecke " +
                   "K&ouml;lnñDuisburgBahnstrecke " +
                   "K&ouml;ln-M&uuml;lheimñLindlarBahnstrecke " +
                   "K&ouml;lnñDuisburgRuhrtalbahnBahnstrecke " +
                   "D&uuml;sseldorfñSolingenAggertal-BahnLinksniederrheinische " +
                   "Strecke";
     begriff[ 7] = "A14,abgebildet,Abgebremst,abgeklebt,abgeschalteter," +
                   "Abschleppwagen,Abschluss,Abtrocknen,Aceton,Achsabstand," +
                   "Achsanordnung,Achsen,Achslagern,Achsstand,AEG," +
                   "Ah-Bleibatterie,ahrzeug,Akkuschleppfahrzeugs," +
                   "Aktivit&auml;ten,Allgemeine,Alternative,Anbauteile,&Auml;nderung," +
                   "&Auml;nderungen,Andreas,Anfahr,anfordern,Anfrage,angebracht," +
                   "angegebenen,angel&ouml;tet,angeordnet,angepasst,Anlage," +
                   "Anlagengestaltung,Anreibebuchstaben,Anschlieﬂend," +
                   "anschlieﬂenden,anstelle,Antrieb,Antwort,Anzahl," +
                   "anzubringen,ASF,ASF109,ASF-Verschiebeger&auml;te,aufgebaut," +
                   "aufgel&ouml;tet,aufgeschraubtem,aufmerksam,ausdauernd," +
                   "Ausdruck,Ausf&uuml;hrung,Ausgabeformat,Ausgabegr&ouml;ﬂe," +
                   "ausgef&uuml;hrt,Auskuppeln,Auﬂenkanten,Bahnanschluss," +
                   "Bahnbetriebswerke,Bahnbetriebswerken,Bahnen," +
                   "Bahnsinniges,Batterien,Batterie-Schleppfahrzeug,Bau," +
                   "Baubeschreibung,Bauelemente,Baugr&ouml;ﬂe,Bausatz," +
                   "Bauteilliste,Bauvorhaben,Bauzeit,Bedarf,bedeuten," +
                   "Bedien,beginnen,beide,beiden,bekannt,Bekohlungs," +
                   "Beleuchung,Bemerkungen,Benennung,ben&ouml;tigte,Berechnung," +
                   "Bereiche,Berichte,Berichten,Beschriftung,Best,besten," +
                   "bet&auml;tigt,betr&auml;gt,Betrieb,Betriebsgeschwindigkeit," +
                   "bewegen,Biegekanten,biegen,bietet,Bildern,Blattfedern," +
                   "blau-weiﬂ,bleiben,blieb,brachte,Breite," +
                   "Br&uuml;ckenpr&uuml;fwagen,Buch,CAD-Programm,Chemnitz,chlepp," +
                   "chromoxidgr&uuml;n,CMT-Info,Dach,Dachhaken,dass,Daten," +
                   "Dauerfahrstufen,DCC,Decal,defektem,Deutschland,dienen," +
                   "Dienstmasse,Digitalbetrieb,Digitale,Direkt,dk4mm," +
                   "Drehschalter,Eichfahrzeuge,Eigenkonstruktion,eignet," +
                   "eingefr&auml;st/ges&auml;gt,eingeklebt,eingel&ouml;tet,eingesetzt," +
                   "einl&ouml;ten,Einsatz,Einsatzm&ouml;glichkeiten,einstellen," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Kurier,EL16," +
                   "Elektronik,Elektropfeil,Elektropfeile,eMail,empfohlen," +
                   "Enden,Endgeschwindigkeit,Energie,entfernen,Entfetten," +
                   "enth&auml;lt,entsprechenden,Entwurf,Epoche,Erfolg,erfolglos," +
                   "erfolgte,erforderlichen,erschienen,ersichtlich," +
                   "erstellt,exakte,existiert,Fahnen,Fahren,Fahrgestell," +
                   "Fahrleitung,Fahrmotoren,Fahrspannung,Fahrt," +
                   "Fahrtrichtung,Fahrwerk,Fahrwerkblock,Fahrwerke," +
                   "Fahrwerkes,Fahrzeug,Fahrzeugbau,Fahrzeuges,Fahrzeugs," +
                   "F&auml;kalienwagen,Farbe,farbig,Faulhaber,Federbronze," +
                   "fehlender,Fenster,Fenstern,Fertigmodell,Film,Folge," +
                   "Folgende,Fotos,Frontseiten,Frontteile,F&uuml;hrerhaus," +
                   "F&uuml;hrerstandsbeleuchtung,Fuﬂhebel,gab,ge&auml;tzt,gebaute," +
                   "gebogen,geforderten,Gegen&uuml;ber,Geh&auml;use," +
                   "Geh&auml;use-&Auml;tzplatte,Geh&auml;usefrontteile,Geh&auml;usekanten," +
                   "Geh&auml;uses,Geh&auml;useseiten,Geh&auml;useseitenteil," +
                   "Geh&auml;usevorbauten,gel&ouml;tet,gemacht,genommen,genutzt," +
                   "geschnitten,Geschwindigkeit,Geschwindigkeiten," +
                   "gestaltete,gesucht,getestet,Getriebeberechnung," +
                   "Getriebeblock,Getriebes,Getriebe&uuml;bersetzung,gew&auml;hlten," +
                   "gewinkelt,GI-Modell,Gleichspannung,Gleisstopfmaschine," +
                   "Grad,grosser,gr&uuml;n,grundiert,Grundierung,gr&uuml;ndlichen," +
                   "G&uuml;terzugsteuerwagen,H0-Modell,Haltegriffe," +
                   "Handspindelbremse,h&auml;ngt,Hausprospekt,hb116,he116,he117," +
                   "Henningsdorf,Henningsdorfer,Hersteller,Herstellers," +
                   "Hilfe,hingegen,hinten,Hinweis,H&ouml;chstgeschwindigkeit," +
                   "H&ouml;he,h&ouml;here,Holzborn,Hupen,ICE-Farben,III,Impressum," +
                   "Industriebetrieben,Industriemodelle/Baus&auml;tze," +
                   "Informationen,Inhalt,Jahresmodell,Kadee,Kastenrahmen," +
                   "Kastentender,kku,Klammern,Klarlack,Klarsichtfolie," +
                   "Kleben,kleineres,km/h,komplett,komplettes,konnte," +
                   "konstruiert,Kontrollger&auml;te,kr&auml;ftig,Kran,Kr&uuml;melbahn," +
                   "kuppeln,Kupplung,Kupplungen,Kuswa,Lackieren,lackiert," +
                   "Lackierung,Ladestation,lang,L&auml;nge,Laserdrucker,leicht," +
                   "liefert,linken,Links,Literatur,Literaturhinweise,l&ouml;sen," +
                   "L&ouml;ten,L&ouml;tfahnen,Markierungsdreiecke,Maﬂangaben,Maﬂe," +
                   "Maﬂermittlung,mattem,medium,Mercedes-Benz,Messingblech," +
                   "Messingdraht,Messingdrehteil,Messinggeh&auml;uses," +
                   "Messingplatte,Messingplatten,Miba,mittig,mittleren," +
                   "Modell,Modellbahn,Modelleisenbahner,Modellfahrzeuge," +
                   "Modulbau,Motor,Motorbuch,Motorlagerung,muss,musste," +
                   "N012G,n&auml;chstes,Navigation,ne116,ne316,Nothaft,nv016," +
                   "Oberseite,offenen,&Ouml;lhilfszug,&Ouml;ltankzug,Opladen,optisch," +
                   "orange,Original,Pack,passen,passend,passt,Probleme," +
                   "Puffer,Puffer&ouml;ffnungen,Pufferteller,Raddurchmesser," +
                   "R&auml;der,Radius,Rads&auml;tze,Radsatztransportwagen," +
                   "Rahmenwange,Rahmenwangen,RAL,Rangierarbeiten," +
                   "Rangierleuchten,Rangiertritte,realisiert,rechten," +
                   "Regenabweiser,Reihenschlussmotoren,Reserveteile,Ritzel," +
                   "Ritzel/Zahnradkombination,Rivarossi,robuste,Roco," +
                   "Rollenkette,rot,Rottenkraftwagen,RP25,Rundung,Saalfeld," +
                   "S-Bahn-Farben,Scheibenwischer,Schienenfahrzeuge," +
                   "Schienentriebfahrzeugen,Schleppfahrzeugs,schlieﬂen," +
                   "Schlitze,schmal,Schnecken,schneiden,Schr&auml;gzahnrad," +
                   "Schr&auml;gzahnr&auml;der,Schreiben,Schriften,Schriftzug,Schutz," +
                   "Schweiﬂkonstruktion,schwierig,Schwungmasse,sehen," +
                   "Seiten,Seitenanfang,Seitenteil,Seitenteiles," +
                   "Sekundenkleber/Stabilit,Selbstbau,selbstt&auml;tig,selten," +
                   "sichtbar,Signalh&ouml;rner,Solingen,Spieth," +
                   "Spitzenmarkierungen,Spurweite,Staatsbahnverschubger&auml;te," +
                   "Stabilit&auml;t,Stahlwelle,Starkstrom-Nockenfahrschalter," +
                   "Startseite,Steuerung,St&uuml;ck,St&uuml;ckzahl,Stundenleistung," +
                   "Stuttgart,st&uuml;tzt,Suchen,symmetrisch,T21,Tag," +
                   "Tatzlagerbauart,te116,te117,Techn,Technische,treiben," +
                   "Treibraddurchmesser,Trittstufen,T&uuml;re,T&uuml;ren,Turmwagen," +
                   "Typskizze,U/min,&uuml;berh&ouml;hte,&uuml;bernimmt,&uuml;berstehenden," +
                   "U-Messingprofil,umgerechnet,Umrissmesswagen,Umsetzen," +
                   "unbedingt,Unkrautvertilgungszug,Unterhalb,Unterlagen," +
                   "Unterseite,U-Profil,veranlasst,Verbeck," +
                   "Verbindungstechnik,verbunden,Verladeskizze,Verlag," +
                   "verlustlose,Verschiebe,Verschiebekupplungen,Versuch," +
                   "verwendet,vielf&auml;ltige,vier,Vorbauten,Vorbaut&uuml;ren," +
                   "Vorbild,Vorbildgeschwindigkeit,vorgenommen,vormontiert," +
                   "vorn,Warnanstrich,Warnanstriche,Warnstreifen,Weinert," +
                   "weiteres,Werkes,Werkstatt,wert,Westen,wiederum," +
                   "Winterdienst,wirkenden,W-Positionsleuchte,z10,z24,z44," +
                   "Z&auml;hne,Zahnrad,Zeitschriften,Zubringerdienst," +
                   "Zugest&auml;ndnis,Zughaken,Zugkraft,Zun&auml;chst,zusammenfallen," +
                   "zusammengel&ouml;tet,Zwischengetriebe";
       seite[ 7] = "bau_asf.htm";
beschreibung[ 7] = "Kr&uuml;melbahn - ASF";
     begriff[ 8] = "abnehmbar,Abst&uuml;tzung,Achsanordnung,Aktivit&auml;ten," +
                   "Allgemeine,alten,Anbau,Andreas,anfordern," +
                   "Anlagengestaltung,Antriebsschrank,anzubringen,ASF," +
                   "Aufbau,aufgeklebt,Aufstiegsstufen,ausgelegt,Auspuff," +
                   "Ausschneiden,Aussenkante,BA724,Bahndienst," +
                   "Bahndienstfahrzeuge,Bahnen,Bahnsinniges,Band," +
                   "Basiswagen,Bauart,Baubericht,Baubeschreibung,Baujahr," +
                   "Bausatz,Bauteilliste,Befestigungstellen,beiden," +
                   "bekannte,Bekohlungs,Bemerkungen,Benennung,ben&ouml;tigt," +
                   "Beschriftung,Beschriftungen,besitzt,Besonderheiten," +
                   "Best,Betrieb,Bezug,bleiben,blutorange,bohren,breiten," +
                   "Bremsschl&auml;uche,Br&uuml;cken,Br&uuml;ckenbauwerk,Br&uuml;ckenbogen," +
                   "Br&uuml;ckenpr&uuml;fungswagen,Br&uuml;ckenpr&uuml;fwagen," +
                   "Brueckenpruefwagen,Conrad,container,Containers," +
                   "Containerseite,Containerskizze,Daten,DCC,dick,dicken," +
                   "Dienstg&uuml;terwagen,Dienstmasse,Digitalbetrieb,Direkt," +
                   "Drehgestellabstand,Eichfahrzeuge,Eigenentwurf," +
                   "eigentlich,eingeklebt,eingesetzt,einzig," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Journal,Elektronik," +
                   "Elze,eMail,entfernen,entfernt,enth&auml;lt,Epoche," +
                   "erforderlichen,erm&ouml;glicht,erschienen,erstellen," +
                   "Fabriknummer,Fahrgestell,Fahrzeug,Fahrzeugbau," +
                   "Fahrzeugkupplung,Fahrzeugnummer,F&auml;kalienwagen,Farbe," +
                   "Federpuffer,Fenster,Fensterrahmen,Fertigmodell," +
                   "Feuerwehrset,Fleischmann,folgende,gebaute,gebogen," +
                   "gebohrt,gefertigt,geklebt,Gel&auml;nder,gelb,gelbe,gel&ouml;tet," +
                   "genug,geschieht,geschnitten,getauscht,glatt," +
                   "Gleisstopfmaschine,goldgelb,Graaff,Grundierung," +
                   "G&uuml;terwagenzur&uuml;stsatz,G&uuml;terzugsteuerwagen,Hakenkupplung," +
                   "herab,Herpa,Hersteller,Hilfseinrichtungen,Hinweis,hohl," +
                   "Hubsteiger,H&uuml;lsen,Impressum,Industriemodelle/Baus&auml;tze," +
                   "Informationen,Inhalt,Jahresmodell,kant,Karlsruhe," +
                   "Kastentender,Klarsichtfolie,kleine,kommt,Kran," +
                   "Kranausleger,Kr&uuml;melbahn,Kunststoff,Kunststoffplatte," +
                   "Kunststoffstreifen,Lackieren,lackiert,Lackierung," +
                   "Ladestation,L&auml;nge,langen,Last,linken,Links,Literatur," +
                   "Literaturhinweis,Literaturhinweise,L&uuml;ftungsfenster," +
                   "Maﬂe,Mercedes-Benz,Messingdraht,Messingprofil,mittig," +
                   "mm-Draht,mm-L&ouml;cher,Modellbahn,Modellbahn-Kurier," +
                   "Modellfahrzeuge,Modulbau,Navigation,Neonleuchte," +
                   "Nothaft,&Ouml;ffnungen,&Ouml;lhilfszug,&Ouml;ltankzug,Pack,Palfinger," +
                   "passenden,Platte,Prinzip,Puffer,Pufferbohle," +
                   "Puffersockelplatten,Radsatztransportwagen,RAL," +
                   "Rechteckpuffer,rechten,Res687,Robel,R&ouml;hre,Rollos," +
                   "Rottenkraftwagen,Rundstab,Rundumleuchte,schwarz,Seite," +
                   "Seiten,Seitenanfang,Seitenw&auml;nde,Seltene,Signalhorn," +
                   "silbernen,Skizze,Solingen,Spezialwagen,Spurweite," +
                   "Startseite,steht,Stirnseite,Streifen,St&uuml;ckzahl,Suchen," +
                   "T21,Techn,Technische,Teileskizze,Teleskoparm,tief," +
                   "Tunnelpr&uuml;fwagen,T&uuml;re,T&uuml;ren,T&uuml;renausschnitte,T&uuml;r&ouml;ffnung," +
                   "T&uuml;rscharniere,T&uuml;rseite,Umrissmesswagen," +
                   "Unkrautvertilgungszug,untergebracht,untersuchen," +
                   "verschlieﬂen,verschlossen,verwendet,Vierkant-Profilen," +
                   "vorhandenen,Wagen,Wagenboden,Wagenseite,Wand,Weinert," +
                   "weiﬂaluminium,wendet,Winterdienst,zerlegt,Zugangst&uuml;re," +
                   "Zusammenbau,Zweck";
       seite[ 8] = "bau_brue.htm";
beschreibung[ 8] = "Kr&uuml;melbahn - Br&uuml;ckenpr&uuml;fwagen";
     begriff[ 9] = "Action,Aktivit&auml;ten,Allgemeine,anfordern,angeboten," +
                   "Anlagengestaltung,Antrieb,Antriebe,ASF,B-16050,Bahnen," +
                   "Bahnsinniges,Bau,Baubeschreibung,Bausatz,Bekohlungs," +
                   "Bemerkungen,Beschreibungen,Beschriftungssatz,Best," +
                   "Betrieb,Br&uuml;ckenpr&uuml;fwagen,Conrad,DCC,Digitalbetrieb," +
                   "Direkt,Duomatic,Eichfahrzeuge,Eisenbahn-Kurier," +
                   "Eisenbahn-Magazin,Elektronik,eMail,Epoche,erschienen," +
                   "Expressgang,Fahrzeugbau,Fahrzeuges,F&auml;kalienwagen," +
                   "Fertigmodell,Firma,Gleis,Gleis-Nivellier-Stopfmaschine," +
                   "Gleisstopfexpress,Gleisstopfmaschine," +
                   "Gleisstopf-Maschine,Gleisstopfmaschinen,Gr&ouml;ditz,groﬂe," +
                   "G&uuml;terzugsteuerwagen,H0-Bausatz,Hersteller," +
                   "Hobby-Eisenbahner,Impressum,Industriemodelle/Baus&auml;tze," +
                   "Informationen,Inhalt,Interest,Jahresmodell,Kap," +
                   "Kastentender,Kibri,Kibris,Kissingen,Klunker,Kossak," +
                   "Kran,Kr&uuml;melbahn,Ladestation,Liliput,Links,Literatur," +
                   "Literaturhinweise,mbs,Mercedes-Benz,Miba,Modell," +
                   "Modellbahn,Modellbahnindustrie,Modelleisenbahner," +
                   "Modellfahrzeuge,Modulbau,motorisiert,Motorisierung," +
                   "Motorisierungsbaus&auml;tze,Navigation,&Ouml;lhilfszug,&Ouml;ltankzug," +
                   "Plasser,Praxis-Handbuch,Radsatztransportwagen," +
                   "Rottenkraftwagen,SB-Modellbau,Seite,Seitenanfang," +
                   "Solingen,Startseite,Stopfexpress,Suchen,T21,Teil,&uuml;bers," +
                   "Umfangreiche,Umrissmesswagen,unbekannt," +
                   "Unkrautvertilgungszug,unmotorisiert,Verlag,Vorbild," +
                   "Willy,Winterdienst";
       seite[ 9] = "bau_duo.htm";
beschreibung[ 9] = "Kr&uuml;melbahn - Plasser Duomatic 07-32";
     begriff[10] = "Abschlieﬂend,achs,Achsanordnung,Aktivit&auml;ten,ALBA," +
                   "Allgemeine,Anbau,anfordern,angebracht," +
                   "Anlagengestaltung,Anleitung,anschlieﬂend,Artikel,ASF," +
                   "&Auml;tzplatte,Aufgaben,ausf&uuml;hrlicher,ausgebildet," +
                   "ausgefahren,BA751,BA752,BA753,BA761,BA762,BA764,Bahn," +
                   "Bahnbetriebswerk,bahneigener,Bahnen,Bahnsinniges," +
                   "Basisfahrzeuge,Baubeschreibung,Bausatz,Bauteilliste," +
                   "Bedarf,Bekohlungs,Bemerkungen,Benennung,ben&ouml;tigt," +
                   "Bericht,Beschreibung,beschrieben,Beschriftung," +
                   "Besonderheiten,Best,besteht,Betrieb,Bremsschl&auml;uche," +
                   "Br&uuml;ckenpr&uuml;fwagen,chromoxidgr&uuml;n,Dampflokzeit,Daten,DCC," +
                   "D-Druck,dienen,Dienstfahrzeuge,Dienstmasse," +
                   "Digitalbetrieb,Direkt,D-Modell,Eich,eichen," +
                   "Eichfahrzeug,Eichfahrzeuge,Eichger&auml;tefahrzeuge," +
                   "Eichger&auml;tewagen,Eichgewicht,Eichgewichte,Eichnormale," +
                   "Eichwagen,Eichzug,Eigenbau,Einsatzgebiet," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Kurier," +
                   "Eisenbahn-Magazin,eisengrau,Elektronik,eMail," +
                   "eMailAndGithub,Entfetten,enth&auml;lt,entsteht,Epoche," +
                   "erfolgen,erfolgt,Erw&auml;hnt,Esn,Fahrgestell,Fahrwerk," +
                   "Fahrwerkbefestigung,Fahrwerkblock,Fahrwerksblock," +
                   "Fahrzeug,Fahrzeugbau,Fahrzeuge,Fahrzeugkupplung," +
                   "Fahrzeugumbau,F&auml;kalienwagen,Farbe,fehlen,Fertigmodell," +
                   "Fichtenberg,finden,Fixierung,F&uuml;llst&uuml;cke,gebaute," +
                   "gedeckter,gedreht,Geh&auml;use,Geh&auml;use-&Auml;tzplatte," +
                   "Ger&auml;tewagen,Geschwindigkeit,Gewicht,Gewichtsrollen," +
                   "gewohnt,glatt,Gleisstopfmaschine,Gleiswaage," +
                   "Gleiswaagen,grau,Griffe,Griffstangen,grundiert," +
                   "Grundierung,gr&uuml;ndlichen,Gs213,G&uuml;terwagen," +
                   "G&uuml;terzugsteuerwagen,H0-Modell,Hakenkupplung,Hersteller," +
                   "Hinweis,hinzuzuf&uuml;gen,Hmb,h&ouml;her,HP1,III,Impressum," +
                   "Industriemodelle/Baus&auml;tze,Informationen,Inhalt," +
                   "Inneneinrichtung,Jahresmodell,Jungs,Kar,Kastentender," +
                   "Klarlack,km/h,Komplett-Beschriftungssatz,kompletter," +
                   "komplettes,Kran,Kranbahn,Krefeld,Kr&uuml;ger-Modellbau," +
                   "Kr&uuml;melbahn,Ksl,lackiert,Lackierung,Ladestation,L&auml;nge," +
                   "Langtr&auml;gerverst&auml;rkung,leeres,leicht,Links,Literatur," +
                   "Literaturhinweise,M&auml;rklin,Maﬂe,massiv,mattem," +
                   "Mercedes-Benz,Messfahrt,Messing,Messingdraht," +
                   "Messingprofil,Miba-Report,mitgef&uuml;hrt,Modell,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Montage,montierten,Mutter," +
                   "Navigation,Nbg,Oberseite,&ouml;ffnenden,Oldtimer-Waage," +
                   "&Ouml;lhilfszug,&Ouml;ltankzug,Pack,Pr&uuml;fwagen,Puffer,Radsatz," +
                   "Radsatztransportwagen,RAG,RAL,Roco,Rottenkraftwagen," +
                   "RP25,R&uuml;ckseite,Rundmaterial,Rundstab,Schraube," +
                   "Schriften,Schutz,schwarz,Schwere,schweren," +
                   "Schwergewichtler,Seite,Seitenanfang,Seitenk&auml;sten," +
                   "Selbstbau,Signalscheibenhalter,Skizze,Solingen," +
                   "Spurweite,Stahlrolle,Startseite,Stelle,Stg," +
                   "stirnseitige,Stirnwand,Stirnw&auml;nden,stl,Streckenklassen," +
                   "St&uuml;ckzahl,Suchen,T21,Techn,Technische,Teil,Teile,T&uuml;ren," +
                   "&Uuml;berpr&uuml;fen,umgekehrt,Umrissmesswagen," +
                   "Unkrautvertilgungszug,Unterseite,uschen,verfahren," +
                   "verf&uuml;gt,Verkehrsgeschichte,vielf&auml;ltige,Vorderseite," +
                   "Waagen,W&auml;geh&auml;uschen,Wagen,Weinert,Winterdienst," +
                   "Wuppertal-Steinbeck,zugelassen,zul,zun&auml;chst," +
                   "Zur&uuml;stteile,Zusatzlast,zus&auml;tzliche";
       seite[10] = "bau_eich.htm";
beschreibung[10] = "Kr&uuml;melbahn - Eichzug";
     begriff[11] = "Abflussrohr,Aktivit&auml;ten,Allgemeine,Anbau,Andreas," +
                   "anfordern,angegossenen,Anlagengestaltung,ASF," +
                   "aufmerksam,Auslassstutzen,BA117,Bahndienst,Bahnen," +
                   "Bahnsinniges,Band,Basiswagen,Baubeschreibung," +
                   "Bauteilliste,Bavaria-Modellbahnen,beiden,bekannt," +
                   "Bekohlungs,Benennung,ben&ouml;tigt,Berichte,Beschriftung," +
                   "Best,Betrieb,Betriebswerk,Bezug,bl&auml;ttern,BR50," +
                   "Bremsschl&auml;uche,brennbare,Br&uuml;ckenpr&uuml;fwagen," +
                   "chromoxidgr&uuml;n,Dach,Daten,DCC,Diener,Dienstfahrzeuge," +
                   "Dienstg&uuml;terwagen,Digitalbetrieb,Direkt,diverse," +
                   "Drehscheibe-Online,D&uuml;nger,Eichfahrzeuge,Eigenentwurf," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Journal," +
                   "Eisenbahn-Magazin,eisengrau,Elektronik,eMail,entfernt," +
                   "enth&auml;lt,Fahrgestell,Fahrzeug,Fahrzeugbau," +
                   "Fahrzeugkupplung,Fahrzeugs,F&auml;kalienwagen,Farbe," +
                   "Fl&uuml;ssigkeiten,Folgende,G10,Geh&auml;use,gekr&ouml;pft,glatt," +
                   "Gleisstopfmaschine,Gold,Grundierung,G&uuml;terwagen," +
                   "G&uuml;terwagenw&auml;nde,G&uuml;terwagenzur&uuml;stsatz," +
                   "G&uuml;terzugsteuerwagen,Hakenkupplung,Hinweis,Impressum," +
                   "Industriemodelle/Baus&auml;tze,Informationen,Inhalt," +
                   "Jahresmodell,Jauche,Joswood,Kastentender,Kesselwagen," +
                   "Kran,Kr&uuml;melbahn,Kunststoffplatte,Kunststoffprofil," +
                   "Lackierung,Ladestation,L&auml;nderbahnen,Langlebige," +
                   "Latrinenwagen,Links,Literatur,Literaturhinweise," +
                   "Mercedes-Benz,Messingprofil,Miba-Report,Modellbahn," +
                   "Modelleisenbahner,Modellfahrzeuge,Modulbau,Moe24001," +
                   "Navigation,Nothaft,Notwendigkeit,&Ouml;lhilfszug,&Ouml;ltankzug," +
                   "Pack,Profile,Profilsatz,Puffer,Pufferbohlen," +
                   "Puffersockelplatten,Radsatztransportwagen,Rahmen,RAL," +
                   "Rangiertritte,Recherchen,Rechteck-Profil,Rheinbr&uuml;ck," +
                   "Roco,Rohr,Rottenkraftwagen,Rund,schwarz,Seite,Seiten," +
                   "Seitenanfang,Selbstbau,selten,Signalscheibenhalter," +
                   "Solingen,Spezialwagen,Spritzenkan&uuml;le,Startseite," +
                   "Stinkendes,Stinker,St&uuml;ckzahl,Suche,Suchen,T21,Tank," +
                   "Tankende,Techn,Teile,Tiefere,Umrissmesswagen," +
                   "Umstellhebel,Universal,Unkrautvertilgungszug,unteren," +
                   "Verfeinerungswunsch,verwendet,vorhalten," +
                   "Vorsatzschneepflug,Wagen,Wagenboden,Weinert," +
                   "weiﬂaluminium,Winterdienst,Wuppertal,W&uuml;rttembergische," +
                   "x30,zeigten,Zeitschriften,Zettelk&auml;sten,Zweck";
       seite[11] = "bau_jauch.htm";
beschreibung[11] = "Kr&uuml;melbahn - F&auml;kalienwagen";
     begriff[12] = "#501,Achsen,&auml;hnliche,Aktivit&auml;ten,Allgemeinen,alten," +
                   "Alternativ,Anbau,anfordern,Anlagengestaltung,Artikelnr," +
                   "ASF,aufgef&uuml;hrt,Ausf&uuml;hrungen,Bahnen,Bahnsinniges,Basis," +
                   "Basisfahrzeuge,Bekohlungs,bekommen,Benennung,ben&ouml;tigt," +
                   "besseren,Best,betr&auml;gt,Bochum-Dahlhausen,B&ouml;rsen,BR38," +
                   "Bremsschl&auml;uche,Br&uuml;ckenpr&uuml;fwagen,Dampflokomotiven,Daten," +
                   "DB-Einheitslaternen,DCC,Detaillierung,Dienstfahrzeuge," +
                   "dient,Digitalbetrieb,Direkt,Drehgestell," +
                   "Drehgestellblende,Eichfahrzeuge,eigentlich," +
                   "Einzeldarstellungen,Eisenbahnmuseum,Elektronik,eMail," +
                   "enthaltenen,entsprechenden,erg&auml;nzen,Ersatzteile," +
                   "Fahrzeugbau,Fahrzeugkupplung,F&auml;kalienwagen,fallen," +
                   "falsch,falschen,Firma,Franckh,gekr&ouml;pft,Gerard,glatt," +
                   "Gleisstopfmaschine,Griffstangen,Griffstangenhalter," +
                   "G&uuml;terwagenzur&uuml;stsatz,G&uuml;terzugsteuerwagen,Hakenkupplung," +
                   "hinten,Hinweis,Hinweise,Impressum,Informationen,Inhalt," +
                   "ISBN,Jahresmodell,Kadee-Drehgestell,Kastentender,kommt," +
                   "komplett,kompletten,Kran,Kr&uuml;melbahn,Ladestation," +
                   "Liliput,Links,Liste,Literatur,Literaturhinweise," +
                   "Lok3098,Lok43216,Lokunbekannt,M&auml;rklin,Mercedes-Benz," +
                   "Messerschmidt,Messingdraht,Mitte,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Navigation,&Ouml;lhilfszug," +
                   "&Ouml;ltankzug,Original,Originaldurchmesser,Pack,Puffer," +
                   "Pufferbohle,Puffersockelplatten,Rad,R&auml;der,Radsatz," +
                   "rads&auml;tze,Radsatztransportwagen,Roco,Rottenkraftwagen," +
                   "R&uuml;ckwand,sche,Schneepflug,Seite,Seitenanfang," +
                   "Signalscheibenhalter,Solingen,Speichen,Startseite," +
                   "St&uuml;ckzahl,Stuttgart,Suchen,T21,Techn,Tender," +
                   "Tenderr&uuml;ckansicht,Tenderr&uuml;ckwand,Tenders,&Uuml;bersicht," +
                   "Umbau,Umbauarbeiten,Umbaubeschreibung,Umbauseiten," +
                   "Umrissmesswagen,Unkrautsprengwagen," +
                   "Unkrautvertilgungszug,Verlagshandlung,verwendet," +
                   "Weinert,Winterdienst,Wolfgang,Zur&uuml;stteile,Zur&uuml;stteilen," +
                   "Zusammenstellung";
       seite[12] = "bau_kate.htm";
beschreibung[12] = "Kr&uuml;melbahn - Kastentender 2'2'T21.5";
     begriff[13] = "abnehmbaren,Achsanordnung,Achsstand,Aktivit&auml;ten," +
                   "Allgemeine,alte,anfordern,angebracht,angehangen," +
                   "Anh&auml;nger,Anlagengestaltung,Anmerkung,ASF,Atlaskran," +
                   "aufgebaut,aufzuwerten,ausgetauscht,Bahnen,Bahnsinniges," +
                   "Baubeschreibung,Baumaterial,Bausatz,Bauteilliste," +
                   "Bekohlungs,Bemerkungen,Benennung,Beschreibung,Betrieb," +
                   "Bleiblock,Bochum-Dahlhausen,Bordw&auml;nde,Brawa," +
                   "Br&uuml;ckenpr&uuml;fwagen,Daten,DCC,Detailzeichnung,Deutschen," +
                   "dient,Digitalbetrieb,Direkt,Draisinen," +
                   "Draisinenfahrzeugen,Eichfahrzeuge," +
                   "eisenbahndienstfahrzeuge,Eisenbahnfreunde," +
                   "Eisenbahnmuseum,Elektronik,eMail,Ende,entfernen," +
                   "entfernt,entschloss,Epoche,erhalten,Erweiterung," +
                   "Fahrzeugbau,Fahrzeuges,Fahrzeugseiten,F&auml;kalienwagen," +
                   "Fenster&ouml;ffnungen,Fertigmodell,finden,Frontscheibe," +
                   "gel&ouml;tet,Gleisanlagen,Gleisstopfmaschine," +
                   "G&uuml;terzugsteuerwagen,halbiertem,Halterungen,Hersteller," +
                   "I-Form,III,Impressum,Industriemodelle/Baus&auml;tze," +
                   "Informationen,Inhalt,interessante,Jahresmodell,John," +
                   "Kastentender,Kla,Kla01,Klv51,komplett,Kran,Kr&uuml;melbahn," +
                   "Kupplung,Kupplungsdeichsel,lackiert,Lackierung," +
                   "Ladefl&auml;che,Ladekran,Ladestation,L&auml;nge,L&auml;ngsseiten," +
                   "Leergewicht,leicht,Links,Literatur,Literaturhinweise," +
                   "Maﬂe,Mercedes-Benz,Messingblech,Messingplatte," +
                   "Messingprofil,Messingteilen,Milchglashaube,Modell," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,montiert,m&uuml;hsam," +
                   "Museumsbahnen,Nachbau,Navigation,&Ouml;lhilfszug,&Ouml;ltankzug," +
                   "Pack,Plexiglasscheiben,Puffer,Querseite,Querseiten," +
                   "Raddurchmesser,Radsatztransportwagen,Rahmen,Rechteck," +
                   "Rechteck-Messingprofil,Rockingerkupplung," +
                   "Rockinger-LKW-Kupplung,Rottenkraftwagen,Rundmessing," +
                   "Rundstab,Sammlung,Scheibenwischer,Schienenfahrrad," +
                   "schwere,Seitenanfang,Solingen,Spurweite,Startseite," +
                   "Stefan,Steinbockkran,Suchen,T21,Techn,Technische," +
                   "Transport,Transportkapazit&auml;ten,Trittstufe,Trittstufen," +
                   "Turmtriebwagen,Typ,U-Form,Umrissmesswagen," +
                   "Unkrautvertilgungszug,Unterhaltung,U-Profil," +
                   "verschlossen,Weinert,Wetterau,Winterdienst";
       seite[13] = "bau_kla.htm";
beschreibung[13] = "Kr&uuml;melbahn - Kla01";
     begriff[14] = "achsiger,Aktivit&auml;ten,ALBA,Allgemeine,Allround-Talent," +
                   "Andreas,anfordern,Anlagengestaltung,Anleitungen,Ardelt," +
                   "ASF,Aufbau,Auslegerst&uuml;tzw,B-16000,B-16010,B-19600," +
                   "Bahnbetriebswerke,Bahnen,Bahnsinniges,Bau," +
                   "Baubeschreibung,Bausatz,beiden,Bekohlungs,Bemerkungen," +
                   "Berichte,Beschreibung,Beschreibungen,Beschriftung," +
                   "Beschriftungssatz,Betrieb,Bildung,Blechausleger," +
                   "Brocken,Br&uuml;ckenpr&uuml;fwagen,Br&uuml;der,Dampfkran,DCC," +
                   "Digitalbetrieb,Direkt,DRG,ehemaliger,Eichfahrzeuge," +
                   "eigentlichen,eignen,eisenbahndienstfahrzeuge," +
                   "Eisenbahnkran,Eisenbahn-Kurier,Eisenbahn-Magazin," +
                   "Elektronik,eMail,Epoche,erschienen,Fahrzeugbau," +
                   "Fahrzeuge,F&auml;kalienwagen,Fertigmodell,Fleischmann,Fulda," +
                   "G07,Gassner,Gegengewicht,Gegengewichtewagen," +
                   "Gegengewichtswagen,geh&ouml;ren,gemeinsamen,Gep&auml;ckwagen," +
                   "Ger&auml;tewagen,Gleisbauschienenkran,Gleisstopfmaschine," +
                   "Goliath,Gottwald,Gottwald-Kran,Gottwald-Teleskopkran," +
                   "GS100,G&uuml;terzugsteuerwagen,G&uuml;tzold,H&auml;ngt,Hannover," +
                   "Hersteller,Hilfswagenset,Hilfszug,Hochausleger,h&ouml;her," +
                   "III,Impressum,Industriemodelle/Baus&auml;tze,Informationen," +
                   "Inhalt,Jahresmodell,Kastentender,Kibri,Kohle," +
                   "Kohle/Wasser,Kohlen,Kohlenkran,Kohlenversorgung," +
                   "Komplettbeschriftung,Komplettes,Komplettset,Kraftpaket," +
                   "Kraftprotz,Kran,Kran100,Kran57,Kran75," +
                   "Kranausleger-St&uuml;tzwagen,Kranbegleitwagen," +
                   "Kranbelastungswagen,KranGS100,Kranschutzw," +
                   "Kranschutzwagen,Kranwagen,Kranwagenzug,Kranzug," +
                   "Kranzug-Beiwagen,Kranzuges,Kr&uuml;ger-Modellbau,Kr&uuml;melbahn," +
                   "Krupp-Ardelt,L383811,Ladestation,Liliput,Links," +
                   "Literatur,Literaturhinweise,Mannschaftswagen,M&auml;rklin," +
                   "M&auml;rklins,Maﬂstab,Mercedes-Benz,MIBA,Miniaturbahnen," +
                   "Modell,Modellbahn,Modellbahnpraxis,Modellfahrzeuge," +
                   "Modulbau,Navigation,NEM-R&auml;der,Nothaft,&Ouml;lhilfszug," +
                   "&Ouml;ltankzug,Personen,Personenwagen,R10," +
                   "Radsatztransportwagen,Regelspurkr&auml;ne,Roco,Rolle," +
                   "Rottenkraftwagen,RP25-R&auml;der,Schutzwagen,Schwerer,Seite," +
                   "Seiten,Seitenanfang,Solingen,Solingen-Hauptbahnhof," +
                   "solo,Spezial,Startseite,Stuttgart,St&uuml;tzwagen,Suchen," +
                   "T21,Tender,t-Kran,t-Krans,t-Kranwagen,Tonnen," +
                   "Tonnen-Dampfkran,Tragende,Trix,umfangreiche,umgebauter," +
                   "Umrissmesswagen,Unkrautvertilgungszug,unmotorisiert," +
                   "verpflichtet,Vorbild,Vorratstender,Wagen,Wannen,Wasser," +
                   "Wasserwagen,Wasserwagens,Weinert,Weinerts," +
                   "Werkstattwagen,West,Winterdienst,Wohnwagen,W&uuml;rzburg," +
                   "X05,zugeteilt";
       seite[14] = "bau_kran.htm";
beschreibung[14] = "Kr&uuml;melbahn - (Bekohlungs-)Kran";
     begriff[15] = "abgeschnitten,abgesichert,abgestellt,achsig,achsigem," +
                   "A-Gleichrichter,Akkublitz,Akku-Diener,Akku-Ladestation," +
                   "Akkutriebwagen,Akkutriebwagenbetriebes,Aktivit&auml;ten," +
                   "Allgemeine,alten,Andeutung,Andreas,anfordern," +
                   "angebracht,angeschlossen,Anlagengestaltung," +
                   "anschlieﬂend,Arbeitslampen,ASF,auff&auml;lligsten,aufgebaut," +
                   "aufgeklebt,aufgestellt,Auﬂenbeleuchtung,Auﬂentreppe," +
                   "Bahndienst,Bahnen,Bahnsinniges,Band,Batterie," +
                   "Batteriekapazit&auml;t,Baubeschreibung,Bausatz,Bauteilliste," +
                   "befestigt,beiden,Bekohlungs,Bemerkungen,Benennung," +
                   "Bericht,Beschriftung,Beschriftungen,besitzt,Best," +
                   "bestehen,bestehend,besten,Betrieb,beweglich,Bild," +
                   "Bleche,bleiben,Bohrungen,Bremsschl&auml;uche," +
                   "Br&uuml;ckenpr&uuml;fwagen,chromoxidgr&uuml;n,Conrad,Dachaufbauten," +
                   "Daches,Daten,DB-Lampen,DB-Zeichen,DCC,Dienstg&uuml;terwagen," +
                   "Digitalbetrieb,Direkt,Drehscheibe,d&uuml;nne,Eichfahrzeuge," +
                   "Eigenbau,eingeklebt,eingesetzt,Einsatz,Einzelteile," +
                   "Eisenbahn-Journal,Eisenbahn-Kurier,Eisenbahn-Magazin," +
                   "Elektronik,Elektropfeil,Elektropfeile,eMail,entfernt," +
                   "Entfetten,entspricht,Epoche,erreicht,ersetzt,ETA," +
                   "ETA-Endstationen,ETA-Ladeanlagen,ETA-Ladestation," +
                   "Fahrgestell,Fahrzeug,Fahrzeugbau,Fahrzeugkupplung," +
                   "F&auml;kalienwagen,Farbe,farblich,Federpuffer,Fenster," +
                   "Fenster&ouml;ffnungen,Fertigmodell,Fleischmann,Foto,Fotos," +
                   "Furnierholz,Furnierholzbrettchen,G05,G10,gebohrt," +
                   "Geh&auml;use,geklebt,glatt,gleiches,Gleichrichterwagens," +
                   "Gleisfeldbeleuchtung,Gleisfeldleuchte," +
                   "Gleisstopfmaschine,grundiert,Grundierung,gr&uuml;ndlichen," +
                   "G&uuml;terwagenzur&uuml;stteile,G&uuml;terzugsteuerwagen," +
                   "Hakenkupplung,Haube,Hauben,Hemmschuhen,Hersteller," +
                   "heruntergekommen,Herzst&uuml;ck,Heulboje," +
                   "Hochspannungsisolatoren,I/92,III,Impressum," +
                   "Industriemodelle/Baus&auml;tze,Informationen,Inhalt," +
                   "I-Profil,Jahren,Jahresmodell,jahrzehntelang," +
                   "Kastentender,Klarlack,Klarsichtfolie,kleine," +
                   "Komplettbeschriftung,komplettes,Kran,Kr&uuml;melbahn," +
                   "Kunststoffplatte,Kunststoffplatten,Kupplungen," +
                   "kV-Einspeisung,Lack,Lackieren,lackiert,Lackierung," +
                   "Ladeanlagen,Lades&auml;ulen,Ladestation,Ladestationen," +
                   "L&auml;nderbahng&uuml;terwagen,LC99150,Lemke,letzten,Links," +
                   "Literatur,Literaturhinweise,L&ouml;cher,L&uuml;ftungsgitter," +
                   "Magazin,markanten,Mast,mattem,meisten,Mercedes-Benz," +
                   "Messingdraht,Messinggestell,Miba,Microlampen,Mitte," +
                   "mittels,Modell,Modellbahn,Modellfahrzeuge,Modulbau," +
                   "montiert,nachgebildet,Nachtstunden,Navigation,N-Bahn," +
                   "Nothaft,Oberhausen,&Ouml;lhilfszug,&Ouml;ltankzug,&Ouml;sen,Pack," +
                   "passend,Puffer,Pufferbohlen,Pufferplatten,Rads&auml;tze," +
                   "Radsatztransportwagen,RAL,Rangiertritte," +
                   "Reichsbahng&uuml;terwagen,Roco,Rottenkraftwagen,RP25," +
                   "Schaltbild,Schiebet&uuml;ren,schneiden,Schriften,Schriftzug," +
                   "Schutz,schwarz,Schwellenkreuz,Seite,Seiten," +
                   "Seitenanfang,Sh2-Signalen,Signalh&ouml;rner," +
                   "Signalscheibenhalter,Sinne,Solingen,Sommerfeldt," +
                   "Sonderheft,Spezial,Spezialwagen,Spieth,Spur,stand," +
                   "Startseite,Stecker,Stelle,Stellen,Stirnseiten," +
                   "Stirnt&uuml;ren,Streben,streifen,Strom,Stromtankstellen," +
                   "Stromversorgung,St&uuml;ckzahl,Suchen,T21,Techn,Technische," +
                   "Teile,Triebwagen,Trittbretter,Trix,T&uuml;ren,&Uuml;ber," +
                   "&Uuml;bergangsbleche,Umfeldgestaltung,Umformwagen,umgebaute," +
                   "Umrissmesswagen,Unkrautvertilgungszug,Unterbringung," +
                   "unterhalb,V/15mA,verleiteten,verschlossen,volle," +
                   "Vorbild,vorhandene,Wagen,Wagenkasten,Wagenkastenende," +
                   "Wagenkastens,Wagenl&auml;ngsseite,Wagen&uuml;bergangsbleche," +
                   "wahrsten,Weinert,weiteren,weitestgehend,Winterdienst," +
                   "Worms,Wortes,zerlegt,Zettelk&auml;sten,Zigarre,Zugangst&uuml;re," +
                   "Zugangst&uuml;ren,Zugbildungen,zun&auml;chst,zusammengebaut," +
                   "Zweck";
       seite[15] = "bau_lad.htm";
beschreibung[15] = "Kr&uuml;melbahn - Akku-Ladestation";
     begriff[16] = "abgel&ouml;sten,Adapter,Aktivit&auml;ten,Allgemeine,alte,alten," +
                   "anfordern,angef&uuml;gt,Anlagengestaltung,Anl&auml;sslich,Anm," +
                   "ASF,Axel,Baden,Badischen,Bahnen,Bahnfeuerwehren," +
                   "Bahnhofswagen,Bahnsinniges,Band,basierend,Bauart," +
                   "Baubeschreibung,Bausatz,Bdwg64674,behielt,beiden," +
                   "Bekohlungs,Bemerkungen,Benennung,Beschreibung," +
                   "Beschreibungen,Beschriftungssatz,Best,bestand,besteht," +
                   "Betrieb,Bfwg64052,Bfwg64053,Bfwg64054,Bfwg64674," +
                   "Bildunterschrift,blieb,BR52,Br&uuml;ckenpr&uuml;fwagen," +
                   "B&uuml;hnenende,Bunker&ouml;l,Bz6a,Dach,DCC,DGEG,Dienste," +
                   "Dienstfahrzeuge,Digitalbetrieb,Direkt,D-Modell," +
                   "ehemaliger,Eichfahrzeuge,eignet," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Magazin,Elektronik," +
                   "eMail,eMailAndGithub,Entfernung,entworfen,Epoche," +
                   "erfolgte,erfuhr,Erg&auml;nzung,erhalten,erhielten,Ersatz," +
                   "erschienen,erw&auml;hnt,Fahrzeugbau,Fahrzeuge,F&auml;kalienwagen," +
                   "fand,Federpuffer,Fertigmodell,Feuerwehr,fr&uuml;heren,gab," +
                   "gedeckter,gelbem,Ger&auml;tewagen,Gleisstopfmaschine,Gls," +
                   "Gls205,Gms256,Gms54,goldgelbe,goldgelben," +
                   "Griffstangenhalter,Groﬂherzoglichen,gr&uuml;nen,G&uuml;terwagen," +
                   "G&uuml;terzugsteuerwagen,handelt,Heiz&ouml;l,Helfen,herangezogen," +
                   "Hersteller,Hilfsger&auml;tewagen,Hilfskesselwagen,Hilfszug," +
                   "Hilfsz&uuml;ge,hinterstellte,III,Impressum," +
                   "Industriemodelle/Baus&auml;tze,Informationen,Inhalt,ISBN," +
                   "Jahresmodell,kam,Karlsruhe,Kastentender,Kesselwagen," +
                   "Kleid,Kohelkasten,Kohlekastens,Kombination,konnte,Kran," +
                   "Kr&uuml;melbahn,Kupplungsadapter,L240131,Lackierung," +
                   "Ladestation,lhilfszug-Tenderkupplung,Liliput,Links," +
                   "Literatur,Magazin,Mannheim,M&auml;rklin,Mercedes-Benz," +
                   "Miba-Report,Modell,Modellbahn,Modellfahrzeuge," +
                   "Modernisierung,Modulbau,Navigation,NEM,NEM-Schacht," +
                   "Neustadt,Nummer,Oelhilfszug,&Ouml;l-Alarm,&Ouml;lhilfszug," +
                   "&Ouml;ltankzug,&Ouml;lunf&auml;lle,&Ouml;lwehrtender,Oppeln,passenden," +
                   "Podszun,Polnik,Rads&auml;tze,Radsatztransportwagen,RAL,Rbf," +
                   "Retten,Roco,Rottenkraftwagen,Schiene,Seite," +
                   "Seitenanfang,Solingen,Spieth,Staatseisenbahn," +
                   "Startseite,stl,St&uuml;ckliste,Suchen,T21,Tankger&auml;tewagen," +
                   "Tender,Transport,Transportwagen,Umbau,Umbauanleitung," +
                   "Umbaus,Umbausatz,umfangreiche,Umrissmesswagen,Umwelt," +
                   "Unkrautvertilgungszug,verbirgt,Verlag,verschrottet," +
                   "Verwendung,vierachsige,Vorbild,vorgefunden,vormals," +
                   "Wagen,Wannentender,Wannentendern,Weinert,Weinstraﬂe," +
                   "wiederum,Winterdienst,zugeordnet,zuletzt," +
                   "zur&uuml;ckgegriffen,zusammen";
       seite[16] = "bau_oelh.htm";
beschreibung[16] = "Kr&uuml;melbahn - &Ouml;lhilfszug";
     begriff[17] = "achsige,Aktivit&auml;ten,Allgemeine,anfordern,angef&uuml;gt," +
                   "angewiesen,Anlagengestaltung,Artikelnummer,ASF," +
                   "Aufgetankt,Bahn,Bahnbetriebswerke,Bahndienstwagen," +
                   "Bahnen,Bahnsinniges,Bau,Bauanleitungen,Bauart," +
                   "bauart-&auml;hnlicher,Baubeschreibung,Bausatz,Bauzeit,Bebra," +
                   "Bebraner,Bekohlungs,bekommen,ben&ouml;tigte,Beschreibung," +
                   "Beschreibungen,Betankungsrohr,Betrieb,Betriebsnummer," +
                   "bietet,Boxenstopp,Br&uuml;ckenpr&uuml;fwagen,damaligen," +
                   "Dampflokomotve,Darmstadt-Kranichstein,DCC,Deutz," +
                   "Dienstfahrzeuge,Digitalbetrieb,Direkt,durchgehenden," +
                   "Eichfahrzeuge,eigentlich,Eilige,Einsatz,einsetzen," +
                   "Eisenbahn-Kurier,Elektronik,eMail,enth&auml;lt,entspricht," +
                   "erh&auml;ltlich,erh&auml;ltliche,erschienen,Erw&auml;hnt,Fahrzeugbau," +
                   "F&auml;kalienwagen,Feuerwehr,Firma,fungierte,G02,G10," +
                   "Gebrauchtwarenh&auml;ndler,Gleisstopfmaschine,G&uuml;terwagen," +
                   "G&uuml;terzugsteuerwagen,Hannover,Heiz&ouml;lwagen,Impressum," +
                   "Informationen,Inhalt,Jahresmodell,Kastentender,Kessel," +
                   "Kesselwagen,Kran,Kr&uuml;melbahn,Ladestation,L&auml;ngstr&auml;ger," +
                   "Laternen,Laufsteg,Leichtbaudrehgestellkesselwagen," +
                   "Leiter,Liliput,Links,Literatur,ltankzug,lung,Mai," +
                   "M&auml;rklin,Mercedes-Benz,Miba-Report,Miba-Spezial,mobile," +
                   "Modell,Modellbahn,Modelleisenbahner,Modellfahrzeuge," +
                   "Modulbau,Museum,Navigation,Nummer,Oeltankzug,offenen," +
                   "&ouml;ffnenden,&Ouml;lhilfszug,&Ouml;lkran,&Ouml;ltankzug,&Ouml;lung,&Ouml;lwagen," +
                   "Original,passt,Programm,Pumpenwagen," +
                   "Radsatztransportwagen,Rottenkraftwagen,schwenkbaren," +
                   "Seite,Seitenanfang,selbsttragender,Solingen,Spezial," +
                   "Startseite,Stelle,Suchen,T21,Tankstelle,Tankzug," +
                   "Tankzugwagens,T&uuml;ren,Umbau,umfangreiche,Umlackierung," +
                   "Umrissmesswagen,Unkrautvertilgungszug,verschwiegen," +
                   "verwendet,Vorbild,Wagen,Weinert,Winterdienst,Zuglok," +
                   "Zur&uuml;stsatz";
       seite[17] = "bau_oelt.htm";
beschreibung[17] = "Kr&uuml;melbahn - &Ouml;ltankzug";
     begriff[18] = "abdrehen,abgefahren,Abhilfe,Abstand,Achse,Achsen," +
                   "Achslager,Achsstummeln,Aktivit&auml;ten,ALBA,Allgemeine," +
                   "alte,alten,Alterung,Anbau,Andreas,anfordern," +
                   "angegossenen,angeordnet,Anlagengestaltung,Anordnung," +
                   "Anschriften,anzuordnen,ASF,&Auml;tzplatte,&Auml;tzteile," +
                   "aufbohren,Auﬂenkante,B104,BA192,Bahnbetriebswerke," +
                   "Bahndienst,Bahnen,Bahnsinniges,BahnSinn-Shop,Band," +
                   "Basis,Basiswagen,Baubeschreibung,bauen,Bausatz," +
                   "Bauteile,Bauteilliste,befestigt,Befestigung,beiden," +
                   "beinhaltet,Bekohlungs,beladen,Beladung,belegt," +
                   "Bemerkungen,Benennung,ben&ouml;tigt,ber&uuml;cksichtigt,beruht," +
                   "beschreibt,Beschriftung,Beschriftungen,besitzen,Best," +
                   "Besten,betr&auml;gt,Betrieb,Bohrer,Bremserb&uuml;hne," +
                   "Bremsschl&auml;uche,Bremsumstellhebel,Br&uuml;ckenpr&uuml;fwagen," +
                   "BTms33,BTms55,Busch,Dampflokachse,Dampflokachsen," +
                   "Darmstadt-Kranichstein,Daten,DCC,dezente," +
                   "Dienstfahrzeuge,Dienstg&uuml;terwagen,Digitalbetrieb,Direkt," +
                   "Drehgestellen,drei,Eichfahrzeuge,eigentlich," +
                   "einbaufertig,eingeschraubt,eisenbahndienstfahrzeuge," +
                   "Eisenbahn-Magazin,Elektronik,eMail,entfernen,entfernt," +
                   "enthalten,Epoche,erg&auml;nzt,erh&auml;ltlich,ersetzen,Erw&auml;hnt," +
                   "existiert,Fahrgestell,Fahrwerken,Fahrzeugbau," +
                   "Fahrzeugen,Fahrzeugkupplung,F&auml;kalienwagen,falsch,Farbe," +
                   "Fehl,fehlen,feine,Fertigmodell,Fixierte,Fleischmann," +
                   "Freien,gebogen,gefertigt,gegen&uuml;ber,geschw&auml;rzt,Gestells," +
                   "Gewicht,gl&auml;nzenden,glatt,Gleisstopfmaschine,groﬂen," +
                   "gr&uuml;n,Grundierung,G&uuml;terwagenzur&uuml;stsatz," +
                   "G&uuml;terwagenzur&uuml;stsatzes,G&uuml;terzugsteuerwagen," +
                   "Hakenkupplung,Hersteller,herum,hingewiesen,Hinweis," +
                   "Hinweise,Holzkl&ouml;tzchen,H-Profil,H-Profile,III," +
                   "Impressum,Industriemodelle/Baus&auml;tze,Informationen," +
                   "Inhalt,inzwischen,Jahresmodell,Kabelisolierung," +
                   "Kastentender,kegelf&ouml;rmigen,kleinen,Kleingedrucktes," +
                   "Kleinlok,kommt,komplett,Kran,Kr&uuml;ger-Modellbau," +
                   "Kr&uuml;melbahn,Kupferlackdraht,L221511,Lackierung," +
                   "Ladef&auml;higkeit,Ladegestell,Ladegut,Ladestation,Ladung," +
                   "lang,L&auml;nge,Lastgrenze,Lauffl&auml;chen,Liliput,Links," +
                   "Literatur,Literaturhinweise,L-Profil,L&uuml;P,markiert," +
                   "Maﬂangaben,maximal,Mercedes-Benz,Messingdrehteil," +
                   "Messingprofil,Miba-Report,miteinander,Mittelplatte," +
                   "Mittenabstand,Modell,Modellbahn,Modellbahnbeispiel," +
                   "Modellbahnpraxis,Modellfahrzeuge,Modulbau," +
                   "Montageskizze,Museum,nachgereicht,Navigation,Nieten," +
                   "normalen,Nothaft,Nummer,&Ouml;lhilfszug,&Ouml;ltankzug,original," +
                   "Originalkupplungen,Pack,Platte,Platz,poliertem,Profils," +
                   "Puffer,Pufferbohlen,Pufferplatten,Puffersockelplatten," +
                   "Querschienen,Rad,R&auml;der,Radlager,Radsatz,Rads&auml;tze," +
                   "Radsatzgestell,Radsatzgestells,Radsatztr&auml;ger," +
                   "Radsatztransportwagen,Radsatzwagen,Rahmen,RAL," +
                   "Rangieren,Rangiertritte,Reisen,richtig,R&ouml;hrchen,Rost," +
                   "rostfarbene,rot,Rottenkraftwagen,Ruhende,Rungenwagen," +
                   "Schaken,Schienen,Schienenprofil,Schraubgewinde," +
                   "Schutzh&uuml;llen,schwarz,Seite,Seitenanfang,Seitenplatten," +
                   "Selbstbau,setzt,Sicherung,sieht,sinnigerweise,Solingen," +
                   "Sonstige,sparsam,Spezial,Spezialwagen,Spieth," +
                   "Spieth-Bausatz,Spitzenlager,springen,Spurkr&auml;nze," +
                   "Spurkr&auml;nzen,Stahl,Stange,Startseite,Stelle,St&ouml;rend," +
                   "St&uuml;ckzahl,Suchen,T21,Techn,Teile,Teilen,Tillig," +
                   "T-Profil,Transport,Transportaufgaben,Transportgestell," +
                   "transportiert,Transportpalette,&uuml;berh&ouml;hten,Umbau," +
                   "umfassend,Umrissmesswagen,Umstellhebel," +
                   "Unkrautvertilgungszug,unlackiert,unterschiedl," +
                   "unterschiedlichen,U-Profil,U-Profile,verbunden," +
                   "Verfeinerungswunsch,verladen,Verladung,verwendet," +
                   "Verwendung,vielf&auml;ltigen,vier,Vorbild,vorliegt,Wagen," +
                   "wegrollen,Weinert,Wem,werkseigenen,wiegt,Winterdienst," +
                   "wirken,Zeichnungen,Zettelkasten,Zettelk&auml;sten," +
                   "zusammengel&ouml;tet,Zusatz,zus&auml;tzliche,Zweck," +
                   "zylinderf&ouml;rmige";
       seite[18] = "bau_rad.htm";
beschreibung[18] = "Kr&uuml;melbahn - Radsatztransportwagen";
     begriff[19] = "abgekickte,abgeschabten,Abschlieﬂend,Abst&uuml;tzung,achs," +
                   "achsigen,akribisch,Aktionsk&uuml;nstler,Aktivit&auml;ten,aktuell," +
                   "Allgemeine,Altenbeken,Anbau,anbieten,Andreas,anfordern," +
                   "angebracht,angepasst,Anlagengestaltung,anschlieﬂend," +
                   "Anspruch,anstelle,&Auml;quivalente,arbeiten,ASF,&Auml;tzplatten," +
                   "aufgebracht,aufgel&ouml;tet,aufl&ouml;ten,Aufstellung,ausbleiben," +
                   "ausgeschnitten,Autor,B101,B101-A,B101-B,B102,B103,B127," +
                   "B128,B201,B201-A,B202,BA834,BA844,BA845,Bahnalltag," +
                   "Bahnen,Bahnsinniges,Basierend,Basisfahrzeug," +
                   "Basistender,Basiswagen,Bau,Bauart,Baubeschreibung," +
                   "Bausatz,Bayern,beiden,Beispiel,Bekohlungs,Bemerkungen," +
                   "Benennung,ben&ouml;tigt,Berger,Berlin,beruht,beschr&auml;nkt," +
                   "beschreibt,Beschreibungen,beschrieben,Beschriftung," +
                   "Beschriftungen,Beschriftungsatz,Beschriftungssatz," +
                   "Beschriftungsvorschalg,Beschriftungsvorschlag," +
                   "besonderer,besorgt,Best,besteht,Bestellnummer,besten," +
                   "Besuch,Betrieb,Bezeichnung,Bezug,Bhf,Biegen," +
                   "Bildersuche,Bimmelbahnen,BLS,Bochum-Dahlhausen,Boden," +
                   "Bodengruppe,Bodens,BR41,Bremen,Bremsschl&auml;uche,Brett," +
                   "Brilon-Wald,Br&uuml;ckenpr&uuml;fwagen,Bz5,Celophanfolie," +
                   "chromoxidgr&uuml;n,Conrad,Dach,Dampflokmuseum,Dampfpfeife," +
                   "Dampfschneeschleuder,Daten,DB-Einheitslaternen,DCC," +
                   "Deutschen,Deutsches,DGEG,Dienstfahrzeuge," +
                   "Digitalbetrieb,Direkt,diverse,DK-Model," +
                   "Drehgestellbefestigungen,Drehscheibe-Online,drei," +
                   "Dreiecken,d&uuml;nnem,d&uuml;rftig,E36-Fahrwerk,ebenso,Ecke," +
                   "Eichfahrzeuge,Eigenentwurf,eigentliche,einfacher," +
                   "eingebaut,eingeklebt,eingesetzt,Einsatz,Einzelteile," +
                   "Eisenbahnausbesserungswerk,Eisenbahnbildarchiv," +
                   "eisenbahndienstfahrzeuge,Eisenbahnfreunde," +
                   "Eisenbahn-Kurier,Eisenbahn-Magazin,Eisenbahnmuseum," +
                   "Eisenbahnverein,Elektronik,eMail,empfiehlt,endg&uuml;ltig," +
                   "entfernt,Entfetten,entstand,entsteht,Epoche,erfolgt," +
                   "Erg&auml;nzungen,erh&auml;lt,Erhaltene,erhaltenen,erh&auml;ltlich," +
                   "erhebt,erkennt,erleiden,Ersatzteile,erschienen," +
                   "ersetzen,ersetzt,erw&auml;hnt,Erweiterung,ETB,Exemplare," +
                   "Explosionszeichnungen,Fabriknummer,Fahrgestell," +
                   "Fahrgestelle,Fahrzeug,Fahrzeugbau,Fahrzeuge," +
                   "Fahrzeug-Geschichte,Fahrzeugkupplung,Fahrzeugnummer," +
                   "Fahrzeugtyp,F&auml;kalienwagen,Farbe,Farbschicht," +
                   "Federpuffer,fehlt,Fenster,Fensterausschnitt," +
                   "Fertigmodell,findet,Firma,fixiert,Fixierung," +
                   "Fleischmann,Form,Forum,Foto,Fotos,Fragen,F&uuml;hrerhaus," +
                   "G10,gab,gebogen,gebracht,gefr&auml;st,Geh&auml;use,gehts," +
                   "gekr&ouml;pft,gelb,genauer,genauso,geschweiﬂt,gestossen," +
                   "GI-Modell,Glasscheibenersatz,glatt,Gleisstopfmaschine," +
                   "Griffstangen,Griffstangenhalter,gr&uuml;n,grundiert," +
                   "Grundierung,Grundk&ouml;rpers,gr&uuml;ndlichen,G&uuml;nther," +
                   "G&uuml;terwagenzur&uuml;stsatz,G&uuml;terzugsteuerwagen,H0e,Hagen," +
                   "Hakenkupplung,Halterung,handeln,Hannover,hb179," +
                   "Heilbronn,Heimat-Bw,Henschel,Herrn,Hersteller," +
                   "Hersteller/Lieferant,Hilfe,hilft,hinten,Hinweis," +
                   "Historischen,Homepage,hv179,III,Impressum," +
                   "Industriemodelle/Baus&auml;tze,Informationen,Inhalt,inneren," +
                   "insgesamt,interessiert,Internet,Internetquellen," +
                   "I-Profil,ISBN,Jahresmodell,J&uuml;nkerath,Kar,Kassel," +
                   "Kastentender,Kastentenders,Klappen,Klarlack,Klarsicht," +
                   "Klarsichtfolie,Klima,Klimaschneepflug," +
                   "Klima-Schneepflug,Kohlenattrappe,Kohlenkasten,kommen," +
                   "komplett,Komplettbeschriftung,komplettes,K&ouml;nigsberg," +
                   "Korrekturen,Kran,Kr&uuml;ger-Modellbau,Kr&uuml;melbahn," +
                   "Kunststoffplatte,Kunsttstoffprofilen," +
                   "Kupplungsschacht-Klappe,Kurzkupplungskulissen,Kuswa," +
                   "Lackieren,lackiert,Lackierung,Ladestation,Lampen," +
                   "Lauterbach,lebende,Lekt&uuml;re,liegen,Liliput,Links," +
                   "Literatur,Literaturhinweise,Lokomotive,los,L&ouml;tdraht," +
                   "L&ouml;tflamme,Lothar,L&ouml;tkolben,m13B,Magdeburg,Mai,M&auml;rklin," +
                   "mattem,Meiningen,meistens,Mercedes-Benz,Messingbausatz," +
                   "Messingblech,Messingdraht,Messingprofile," +
                   "Messingprofilen,Messingtritte,Miba,Miba-Report,Mitte," +
                   "mm-Rundstab,Modellbahn,Modellfahrzeuge,Modulbau," +
                   "Montage,M&uuml;nchen,Museen,Museum,Muttern,Nachbau," +
                   "Navigation,NEM-Rads&auml;tze,Neubau-Schneepflug," +
                   "Neuenmarkt-Wirsberg,Neustadt,Nieten,Nothaft,Nummer," +
                   "Nummern,nv079,nv179,nv379,&Ouml;BB,Offenburg,&Ouml;lhilfszug," +
                   "&Ouml;ltankzug,Original,&Ouml;sterreich,P8-Kastentender,Pack," +
                   "Passauer,passend,paste,PDF-Datei,Pflug,Pfl&uuml;ge," +
                   "Pflugschar,Pflugscharen,Piko,Plexiglasplatte,Profile," +
                   "Prora,Puffer,Pufferbohle,Puffersockelplatten,Rads&auml;tze," +
                   "Radsatztransportwagen,Radschuhe,Rahden,RAILHOO,RAL," +
                   "Rangiergriffe,Rangiertritte,RAW,Rbd,reichen," +
                   "Reihenfolge,Reitz-Modellbau,Resinkleinteile,Riga,Roco," +
                   "rot,rotbraun,Rottenkraftwagen,RP25-Rads&auml;tze,R&uuml;cken," +
                   "R&uuml;ckstellung,R&uuml;ckwand,R&uuml;gen,S110f,S139,S16,S18,S28,S39," +
                   "S48,S50,S70,S96,Saalfeld,Sachsen,s&auml;chsische," +
                   "Schaufelrad,Schaufelradkasten,Scheibenwischer," +
                   "Schicksal,Schiebebildersatz,Schienen,Schleudergang," +
                   "Schleudern,Schluﬂ,Schmalspurbahnen,Schnee,Schneepflug," +
                   "Schneepfl&uuml;ge,Schneepfluges,Schneepflugliste," +
                   "Schneer&auml;um-Einsatz,Schneer&auml;umfahrzeuge,Schneeschleuder," +
                   "Schneeschleuder-Geh&auml;use,Schneeschleuder-Tender," +
                   "schneiden,Schrauben,Schriften,Schutz,schwarz," +
                   "Schwenkw&auml;nde,sehen,Seiten,Seitenanfang,Seitenfl&uuml;gel," +
                   "Seitenwand,Selbstbau,senkrechten,sichern,Signalkasten," +
                   "Signalscheibenhalter,Solingen,Sondereins&auml;tze," +
                   "Sonnenblende,Spanten,spartanischer,Speichenr&auml;der," +
                   "Spieth,Spieth-Bausatz,Spieth-Baus&auml;tze,Spitzensignal," +
                   "SPM,Spur,SSH,Startseite,Staﬂfurt,Staﬂfurter," +
                   "stationiert,Statisten,stellenweise,Stirnwand,Strolche," +
                   "St&uuml;ckzahl,Stuttgart,Suchen,T16,T20,T21,T26,T31,tb179," +
                   "tb197,tb198,Techn,Technikmuseum,Teil,Teile,Tender," +
                   "Tender-Basis,Tenderboden,Tendergeh&auml;use,Tenderr&uuml;ckwand," +
                   "Terroristen,TEV,Text,Th&uuml;ringer,Titisee," +
                   "Transpress-Verlag,Trix,trug,T&uuml;r,&Uuml;berblick,&Uuml;bersicht," +
                   "Ulm,Umbau,Umbauanleitung,Umfangreiche,Umrissmesswagen," +
                   "unbekannt,Unkrautvertilgungszug,verbessern,Verbleib," +
                   "verschrottet,verweist,verwendet,Vollst&auml;ndigkeit," +
                   "vorgegebene,vorhandene,vormals,vormontiert,vorne," +
                   "Vorschlag,Vorsicht,vorteilhaft,Wannentender," +
                   "Wasserkasten,Weg,weggeschabt,Weinert,weiﬂaluminium," +
                   "weiterer,Wen,wichtig,willkommen,Winkelprofile,Winter," +
                   "Winterdienst,wirft,Wolkenstein,Wpt,Wuppertal,Xrot," +
                   "Xrotm,zahlreiche,zerlegt,zierliche,Zittau,Zug," +
                   "zugefeilt,zugeh&ouml;rige,Zugfedern,Zukauf,zun&auml;chst," +
                   "Zur&uuml;stteile,zusammen,Zusammenbau,Zusammenfassung," +
                   "zusammengebaut";
       seite[19] = "bau_sch.htm";
beschreibung[19] = "Kr&uuml;melbahn - Schneepflug & Schneeschleuder";
     begriff[20] = "abgegeben,Aktivit&auml;ten,Allgemeine,Andreas,anfordern," +
                   "Anlagengestaltung,Anm,anzunehmen,April,ASF," +
                   "aufgenommene,Aufnahme,Auftakt,Ausbesserungswerk," +
                   "ausgemustert,ausr&uuml;sten,BA634,Bad,Bahnen,Bahnhof," +
                   "Bahnsinniges,Bamberg,Bauart,Baubeschreibung,BDWg," +
                   "beiden,bekannt,Bekohlungs,belegt,Bemerkungen," +
                   "ben&ouml;tigten,Beschreibung,beschriebenen,Beschriftung," +
                   "Betrieb,Betriebsnummer,Bilddokument,bleiben,Bremen," +
                   "Bromberg,Br&uuml;ckenpr&uuml;fwagen,Bundesbahndirektion,com," +
                   "cults3d,Daten,DCC,D-Druck,D-Drucker,deutschen," +
                   "Diesellokomotiven,Dieselloks,Digitalbetrieb,Direkt," +
                   "Drehbank,Drehgestell,Drehzapfen-Abstand,drei,drucken," +
                   "d&uuml;rfte,d&uuml;rften,Eichfahrzeuge,Eigengewicht,Einbaus," +
                   "eingebaut,eingef&uuml;gt,eingenummert,eingesetzt,einm&auml;nnig," +
                   "Einsatz,Eins&auml;tze,einzige,eisenbahndienstfahrzeuge," +
                   "Eisenbahn-Journal,Eisenbahn-Kurier,Eisenbahn-Magazin," +
                   "Eisenbahnstiftung,Elektronik,eMail,Ende,endete,endeten," +
                   "Epoche,erfolgte,erschienen,Erw&auml;hnt,erworben," +
                   "Expressgut-Kurswagen,Fahrzeug,Fahrzeugbau," +
                   "Fahrzeug-Geschichte,F&auml;kalienwagen,Fenster," +
                   "Fensterrahmen,Fenstersatz,Foto,Gattung,Gattungsbezirk," +
                   "GDB,GDS,GDS145,gebaut,gedeckte,gefahren,gefr&auml;st," +
                   "gemacht,Ger&auml;tewagen,gestrichenen,GGhs,GGths," +
                   "Gihms-Wagen,Gleisstopfmaschine,gr&uuml;n," +
                   "Gueterzugsteuerwagen,G&uuml;ter-Steuerwagen,G&uuml;terverkehr," +
                   "G&uuml;terwagen,G&uuml;terwagen-Komplettbeschriftung,G&uuml;terzug," +
                   "G&uuml;terz&uuml;gen,G&uuml;terzugsteuerwagen,G&uuml;terzug-Steuerwagen," +
                   "G&uuml;terzug-Wendezugsteuerwagens,GVS,H0-Umbau,Hann," +
                   "Hannover,Hbf,Herbst,hergerichtet,Hersteller,Hgbf," +
                   "hinterlegte,hinzugef&uuml;gt,III,illustriert,Impressum," +
                   "Individualisieren,Informationen,Inhalt,inzwischen," +
                   "Jahres,Jahresmodell,Kassel,Kastentender,Klarsichtfolie," +
                   "kompletten,Kran,Kreuztisch,Kr&uuml;melbahn,kurzgekuppelten," +
                   "Ladefl&auml;che,Ladegewicht,Ladel&auml;nge,Ladestation,Leig," +
                   "Leig-Verkehr,Leig-Wendez&uuml;ge,letzte,liefen,Linden," +
                   "Lindner,Links,Literatur,lokbespannten,Loks,L&uuml;p,Mann," +
                   "Mercedes-Benz,Meter-Wagen,mitfahren,mitlief,Mitte," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,M&ouml;glichkeiten," +
                   "Monatsleistung,Motorlokbetrieb,M&uuml;nchen,M&uuml;nster-Lager," +
                   "nahm,Navigation,Nenndorf,Nothaft,N&uuml;rnberg,n&uuml;tzlich," +
                   "offenbar,Offiziell,&Ouml;lhilfszug,&Ouml;ltankzug,Papier," +
                   "Planm&auml;ﬂig,plastischer,Plexiglasplatte,pr&uuml;fte," +
                   "Radsatztransportwagen,Radstand,Rangierdienst," +
                   "r&auml;tselhaft,Regensburg,Reichsbahn,Reichsbahn-Zentralamt," +
                   "Reservelok,richtig,Roco-Bromberg,Rottenkraftwagen,RZA," +
                   "Seite,Seitenanfang,Sicherheitsfahrschaltung," +
                   "Sichtungsbild,Sifa,Solingen,Soltau,sp&auml;teres,Startseite," +
                   "Station,Stationierungen,Stelle,Steuerabteilen," +
                   "Steuerwagen,STL-Datei,Strecken,St&uuml;ck," +
                   "St&uuml;ckgutschnellverkehr,Suchen,T21,tauchten,Teile," +
                   "Triebwagen,&uuml;bernommen,Umbau,Umbauanleitung," +
                   "Umbauarbeiten,umbenannt,Umfangreiche,umgebaut," +
                   "umgebauten,Umrissmesswagen,Umzeichnung," +
                   "Unkrautvertilgungszug,V36,vermutlich,Versuch," +
                   "versuchsweise,Vierachser-G&uuml;terwagen,vorgahalten," +
                   "vorhanden,vorn,Wagen,Wehrmacht,weiteres," +
                   "weiterverwendet,Wendez&uuml;ge,Wendezug-F&uuml;hrerst&auml;nde," +
                   "wenigstens,Winterdienst,wirkt,zeigt,Zeitpunkt," +
                   "Zugewiesen,Zusammenlauf,Zweck,Zweiachser-P&auml;rchen," +
                   "zweite,zweiter";
       seite[20] = "bau_stwg.htm";
beschreibung[20] = "Kr&uuml;melbahn - G&uuml;terzugsteuerwagen";
     begriff[21] = "Abbildung,abgehoben,abgesenkt,Achsanordnung,Achse," +
                   "Achsstand,&auml;hnliche,&auml;hnliches,Aktivit&auml;ten,Allgemeine," +
                   "&Auml;nderungen,andeuten,anfordern,Angaben," +
                   "Anlagengestaltung,Anordnung,Anschlieﬂend,Arbeitsb&uuml;hne," +
                   "Art,ASF,Aufgaben,aufmerksam,Aufnahmen,ausfahrbare," +
                   "Ausgehend,ausklapp,aussehen,BA746,Bahnen,Bahnsinniges," +
                   "Batteriekastens,Bauart,Baubeschreibung,Baureihe," +
                   "Bauteilliste,befestigt,Befestigungsnasen,begegnete," +
                   "beiden,Bekohlungs,Benennung,ben&ouml;tigt,benutzt,bequem," +
                   "Beschriftung,besitzt,Best,besteht,Betrieb,bezogen,Bi29," +
                   "bietet,Bild,bleiben,bleibt,Bochum-Dahlhausen,braunen," +
                   "Bremsgest&auml;nge,Bremsschl&auml;uche,Bremsventil," +
                   "Br&uuml;ckenpr&uuml;fwagen,Dach,Dachl&uuml;fter,dahinter,Daten,DCC," +
                   "Dienstfahrzeuge,Dienstmasse,Digitalbetrieb,Direkt," +
                   "Drehpunkt,Drehscheibe-Online,drei,Drittel,ebenso," +
                   "Eichfahrzeuge,eingebracht,einhalten,Einschnitte," +
                   "Einstiegst&uuml;re,Einzelteile,eisenbahndienstfahrzeuge," +
                   "Eisenbahn-Kurier,Eisenbahnmuseum,Elektronik,eMail,Ende," +
                   "entfernt,erf&auml;hrt,erhalten,erPack,Erw&auml;hnt,Fahrgestell," +
                   "Fahrwerk,Fahrzeug,Fahrzeugbau,Fahrzeuges,F&auml;kalienwagen," +
                   "Farbe,Federpuffer,Fenster,Fenster&ouml;ffnung,Fensters," +
                   "fertig,Foto,Fotografien,Funktionsweise,ge&auml;ndert," +
                   "gebogen,gedreht,gefertigt,Geh&auml;use,Geh&auml;useumbau,geklebt," +
                   "Ger&uuml;st,geschnitten,glatt,Gleisstopfmaschine," +
                   "Griffstangen,groﬂe,guten,G&uuml;terwagenzur&uuml;stteile," +
                   "G&uuml;terzugsteuerwagen,Hakenkupplung,halber,Handbremse," +
                   "h&auml;ngt,hinteren,hinterlegt,H&ouml;he,imitiert,Impressum," +
                   "Informationen,Inhalt,Jahresmodell,Kastentender," +
                   "Kenntnis,komplett,komplette,korrigiert,Kran," +
                   "Krepppapier,Kr&uuml;melbahn,Kunststoff,Kunststoffplatte," +
                   "Lademaﬂ,Ladestation,Lampen,Lampensatz,L&auml;nge,langen," +
                   "Lehren,leicht,Leiter,L-Form,Lichtraumprofil,Links," +
                   "Literatur,Literaturhinweise,L&ouml;cher,L&ouml;sezug," +
                   "L&uuml;ftergitter,L&uuml;fterl&ouml;cher,L&uuml;ftern,Luftsauger," +
                   "L&uuml;ftungsgitter,L&uuml;ftungsschlitze,markiert,Maﬂe," +
                   "mechanische,Mercedes-Benz,Messachse,Messer," +
                   "Messger&uuml;stes,Messgestell,Messingdraht,Messingprofil," +
                   "Messwagen,Miba-Report,Mitte,mittlere,mittleren,Modell," +
                   "Modellbahn,Modellbahnmagazinen,Modelleisenbahner," +
                   "Modellfahrzeuge,Modulbau,montiert,muss,nachzubauen," +
                   "nachzuempfinden,N&auml;he,Navigation,Nietenreihen,N-Radsatz," +
                   "offenen,&Ouml;lhilfszug,&Ouml;ltankzug,Pl&auml;ttchen,Preiser,pr&uuml;ft," +
                   "Pr&uuml;fwagen,Puffer,Pufferbohle,Pufferplatten," +
                   "Raddurchmesser,Radsatz,Rads&auml;tze,Radsatztransportwagen," +
                   "rechten,Resultat,richtig,Roco,Rottenkraftwagen,RP25," +
                   "Rundstab,scharfen,schmalen,Schnitte,Schnittstellen," +
                   "sehen,Seite,Seitenanfang,senkrechte,sinngem&auml;ﬂ,Solingen," +
                   "Spieth,Spur,Spurweite,Startseite,Steckdose,Steckdosen," +
                   "Stirnseite,St&uuml;ck,St&uuml;ckzahl,Suchen,T21,Technische," +
                   "Teilen,Toilettenfenster,Trennstelle,Trennw&auml;nde," +
                   "Triebwagen,Trittgestell,Trittgestellen,Trittgitter," +
                   "Tunneligel,Tunnels,T&uuml;ren,T&uuml;r&ouml;ffnung,&Uuml;berblick," +
                   "&uuml;berfl&uuml;ssigen,U-Form,umgebauter,Umrissmesswagen," +
                   "Umrisswagen,Unkrautvertilgungszug,vergr&ouml;ﬂert," +
                   "verl&auml;ngert,verschlossen,versucht,versuchte,vielf&auml;ltige," +
                   "vorgegebene,vorgestellte,Vorh&auml;nge,VT137,Wagen," +
                   "Wagenboden,Wagenkasten,Wagenkastenende," +
                   "Wagenkastenenden,Wagenkastens,Weinert,Weise,weiﬂer," +
                   "Wendler,wesentlichen,Winterdienst,Zeitschriften," +
                   "zerlegt,Zettelkasten,Zettelk&auml;sten,Zun&auml;chst,Zylinder";
       seite[21] = "bau_um.htm";
beschreibung[21] = "Kr&uuml;melbahn - Umrissmesswagen";
     begriff[22] = "Abbildung,abgedreht,abgeleitet,abgeschnittenen," +
                   "abgestellt,Abschlieﬂend,Abschluﬂ,absolvieren," +
                   "Abstandshaltern,abst&uuml;tzen,abweichen,Achsen,achsigen," +
                   "achsiger,Acht,Adapter,Aktivit&auml;ten,Allgemeine,alte," +
                   "Alterung,Anbau,Andreas,anfordern,angebracht," +
                   "angebrachten,angegebene,angeklebt,angel&ouml;tet,angesagt," +
                   "Anlagengestaltung,Anl&ouml;ten,Anordnung,anschlieﬂend,ASF," +
                   "&Auml;tzblech,&Auml;tzbleches,&Auml;tzplatte,&Auml;tzteil,Aufbau," +
                   "Aufbringen,Aufenthaltskabine,Aufenthaltswagen," +
                   "aufgef&uuml;llt,aufgel&ouml;tet,aufgesetzt,Aufnahme,aufnimmt," +
                   "Aufstieg,Aufstiegsleiter,Aufstiegsleitern,aufzul&ouml;ten," +
                   "auseinandergenommen,Ausfahrt,Ausmusterung," +
                   "Ausnahmef&auml;llen,aussen,Aussenrahmen,Aussparung,B3yg," +
                   "BA124,BA234,BA884,BA924,Bahndienst,Bahnen,Bahnhof," +
                   "Bahnhofs,Bahnk&ouml;rper,Bahnsinniges,Band,Basis," +
                   "Basisfahrzeug,Basisfahrzeuge,Bauanleitung," +
                   "Baubeschreibung,Bausatz,Bauteilliste,Bauzugwagen," +
                   "Bdwg884,Bedarf,Bedienmannschaft,Bedienungskabine," +
                   "Bedingt,Befesitung,befestigen,befestigt,Befestigung," +
                   "Begleitpersonal,Beh&auml;lter,beide,beiden,beidseitigen," +
                   "beiliegt,beispielsweise,Bek&auml;mpfung,bek&auml;mpfungs-Wagen," +
                   "Bekohlungs,Bemerkungen,bemessen,Benennung,ben&ouml;tigt," +
                   "beruht,beschaffte,beschreibt,beschrieben,Beschriftung," +
                   "Beschriftungen,Beschriftungssatz,Beseitigung," +
                   "besonderer,besprengen,Best,bestand,bestehenden,besten," +
                   "Betrieb,betriebsgef&auml;hrdenden,Betriebsstoffwagen,Biegen," +
                   "Bild,Bilder,Biologischen,Blechplatte,Boden,Bodenplatte," +
                   "Bodenventile,Braunschweig,Bremsschl&auml;uche,bringen," +
                   "Br&uuml;ckenpr&uuml;fwagen,B&uuml;hnenende,B&uuml;hnengitter,Bundesanstalt," +
                   "Bundesbahn,Bz12,Chemikalenvorratswagen,Chemikalien," +
                   "Dach,Dachl&uuml;fter,Dampflokomotiven,dass,Daten," +
                   "DB-Einheitslaternen,DCC,Detailierungswunsch,Deutschen," +
                   "Deutz,Dienstfahrzeuge,Dienstg&uuml;terwagen," +
                   "Dienstsonderz&uuml;ge,dient,dienten,Digitalbetrieb,Direkt," +
                   "diverse,D-Modell,Doppelpack,Drehgestellabstand," +
                   "Drehgestellblenden,Drehgestelle,Drehgestelles," +
                   "Drehgestellzapfens,drei,dreiachsige,dreiachsigen," +
                   "Dreilichtspitzensignal,DRG,Druck,Dsts,d&uuml;nne,d&uuml;nnen," +
                   "durchgehende,Durchmessers,D&uuml;sen,ehemaligen," +
                   "Eichfahrzeuge,Eigengewicht,einfachem,eingeklebt," +
                   "eingesetzt,eingestellt,Einlauf&ouml;ffnungen,Einsatz," +
                   "Eins&auml;tzen,Einsatzzweck,einseitig,Einzelteile," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Magazin,Elektronik," +
                   "eMail,eMailAndGithub,Empfangsgeb&auml;udes,Ende,entfernt," +
                   "Entfernung,enth&auml;lt,enthalten,entsprechen,entstand," +
                   "entworfen,Epoche,erfolgt,erfolgte,erh&auml;lt,erkennen," +
                   "erlaubt,erlaubten,Ersatz,erstmals,etwa,exakt,existiert," +
                   "Fabrikhalle,fahren,Fahrgeschwindigkeit,Fahrgestell," +
                   "Fahrtrichtung,Fahrwerksbereich,Fahrzeug,Fahrzeugbau," +
                   "Fahrzeuge,Fahrzeugkupplung,Fahrzeugseiten," +
                   "F&auml;kalienwagen,Fall,fanden,Farbe,Farben,F&auml;ssern,fasste," +
                   "Federblechstreifen,Federpuffer,fehlt,feilen,Feldzug," +
                   "Fenster,Fensterrahmen,fertige,Fertigmodell,fertigte," +
                   "Feuerwehrset,fixiert,Fixierung,Flansch,Flanschen," +
                   "flexiblen,Fl&uuml;ssigkeit,Fortsetzung,Fotos,Franckh,Frisch," +
                   "f&uuml;hren,f&uuml;hrt,f&uuml;hrten,gab,garantiert,gebogen,gebogene," +
                   "gebracht,gedeckten,gedeckter,gefahrlosem,gefertigt," +
                   "geformt,gefr&auml;st,gef&uuml;hrt,Gegen&uuml;berstellung," +
                   "Geh&auml;use-&Auml;tzplatte,Geh&auml;useboden,gekuppelten,gek&uuml;rzt," +
                   "Gel&auml;nder,gel&ouml;tet,Gesamterscheinungsbildes,geschehen," +
                   "geschieht,geschlossene,gezielt,gezogen,glatt," +
                   "Gleichstrom/DCC-System,Gleis,Gleisbettung,Gleise," +
                   "Gleispflege,Gleisstopfmaschine,Goldgelb,griffe," +
                   "grundiert,Grundierung,G&uuml;terwagen," +
                   "G&uuml;terwagenfahrgestelle,G&uuml;terzugsteuerwagen,H0e," +
                   "Hakenkupplung,halbiert,Haltebleche,Halterung," +
                   "Handgriffe,Handgriffen,Handl&auml;ufe,Handrad,hatten,h&auml;ufig," +
                   "Hauptgleis,Heizleitung,Heizung,hellgraue,Herbizide," +
                   "Herbiziden,Herpa,Hersteller,Hilfreich,hinein,hinten," +
                   "hinteren,hinweg,Hinweis,h&ouml;chsten,H&ouml;chstgeschwindigkeit," +
                   "H&ouml;he,h&ouml;rt,Humusbildung,ige,III,Impressum," +
                   "Industriemodelle/Baus&auml;tze,Informationen,Inhalt,innere," +
                   "interessante,Internet,Inzwischen,I-Profil,ISBN," +
                   "isoliert,Jahre,Jahresmodell,Kabine,Kabinenboden," +
                   "Kabinent&uuml;ren,kamen,k&auml;men,Kasten,Kastentender," +
                   "Kastentenderkabine,Kastentenders,Keramikperle," +
                   "Kesselecke,Kesselecken,Kesselr&uuml;ckwand,Kesselseite," +
                   "Kesselwagen,Kesselwagens,Kesselwagentypen,kg/cm," +
                   "Klarlack,Klarsichtfolie,kleiner,km/h,Kohlenaufsatz," +
                   "Kohlenkasten,kommt,komplett,komplette,Kran,Kr&uuml;melbahn," +
                   "Kunststoffblock,Kunststoffplatte,Kunststoffplatten," +
                   "Kupplung,Kupplungsadapter,k&uuml;rzester,L236000,L236490," +
                   "Lackieren,lackiert,Lackierung,Ladestation,lag,l&auml;ngere," +
                   "l&auml;ngs,L&auml;ngsleitung,L&auml;ngsrichtung,Laufsteges,Leerfahrt," +
                   "Leitern,liefen,lieﬂen,Liliput,Links,Linkseiten," +
                   "Literatur,Literaturhinweise,Loch,L&ouml;sung,L-Profil," +
                   "L-Profilen,Luken,M2-Schraube,M2-Schrauben,M&auml;rklin,Maﬂe," +
                   "materials,maximal,Mercedes-Benz,Messerschmidt," +
                   "Messingdraht,Messingprofil,Messingprofilen,Messingrohr," +
                   "Messingstreifen,Miba,Miba-Report,Mineral&ouml;l,Mischwagen," +
                   "Mischwagens,mitgef&uuml;hrt,Modell,Modellbahn," +
                   "Modellfahrzeuge,moderne,modernen,Modulbau,m&ouml;glichst," +
                   "Montage,montiert,m-Typ,muss,Mutter,Nachbildung," +
                   "nachgebildet,nachgelesen,Nachmessen,nachts,N&auml;he,nahezu," +
                   "Natriumchlorat,Navigation,NEM,Nenninhalt," +
                   "Nietenstreifen,normalspurigen,Nothaft,Nutzvolumen," +
                   "oberen,oberhalb,Oberseite,offen,&Ouml;ffnung,&Ouml;lhilfszug," +
                   "&Ouml;ltankzug,Oppeln,Originalen,orts&uuml;blichen," +
                   "P8-Kastentender,Pack,passend,passenden,passt," +
                   "Pendelwagen,Piko,Pr&auml;paratewagen,Profile,Puffer," +
                   "Pufferbohlen,Pufferplatten,quer,Querblech,Querrichtung," +
                   "Radsatztransportwagen,Rahmen,RAL,Rangiertritte," +
                   "realistischen,Rechteck-Profil,rechten,Regel," +
                   "Rekonstruktion,Reserve,Richtlinien,Richtungen," +
                   "Riffelblech,Roco,Rohr,Rohrende,Rohres,Rohrleitung," +
                   "Rohrleitungen,Rohrletungen,Rotbraun,Rottenkraftwagen," +
                   "r&uuml;ckseitige,rudiment&auml;re,Rund,Rundholz,Rundstab,Rundung," +
                   "S74,S76,sche,Scheibenwischer,Schienenoberkante," +
                   "Schl&auml;uchen,schleifen,Schleifz&uuml;ge,Schlitz,schneiden," +
                   "Schraube,sehen,Seite,Seitenanfang,seitlich,seitlichen," +
                   "Selbstbau,Selbstbaudrehgestell,setzte,Signalhorn," +
                   "signalm&auml;ﬂig,Signalscheibenhalter,Solingen,sorgt," +
                   "Spezialwagen,Spieth,Spieth-Beschriftungssatz," +
                   "Spieth-Beschriftungssatzes,Sprengwagen,Sprengz&uuml;ge," +
                   "Sprengz&uuml;gen,Sprengzugwagen,Spritzbalken,Spritzbr&uuml;he," +
                   "Spritziger,Spritzmittel,Spritzug,Spritzwagen,Spritzzug," +
                   "Spr&uuml;hwagen,Spurkr&auml;nze,starke,st&auml;rker,Startseite," +
                   "stehend,Steifrahmenfahrwerk,Steigrohr,Steuerung," +
                   "Stichwort,Stirnseiten,stl,Streckenspritzung," +
                   "Streubreiteneinstellung,St&uuml;ckzahl,Stumpfgleis," +
                   "Stuttgart,Suche,Suchen,T21,Techn,Technik,Technische," +
                   "Teile,Tender,Tenderabdeckung,Tenderabdenkung," +
                   "Tenderaufbauten,Tenderb&uuml;hne,Tenderdach,Tenderdeckel," +
                   "Tenderende,Tenderfahrgestelle,Tendergeh&auml;use," +
                   "Tenderkabine,Tenderkasten,Tenderkastens,Tendern," +
                   "Tenders,Tenderwanne,tiefen,Tiefschwarz,Tragf&auml;higkeit," +
                   "tr&auml;gt,Treibstoffwagen,Trittbrett,T&uuml;ren,Typ,&Uuml;bergang," +
                   "&Uuml;bergangsblech,&Uuml;bergangsbleche,&Uuml;bergangst&uuml;ren," +
                   "&Uuml;bergansgt&uuml;re,&uuml;brigens,Uerdingen,Umbau,Umbauwagens," +
                   "umgebaut,Umrissmesswagen,Unkrautbek&auml;mpfung," +
                   "Unkrautbek&auml;mpfungszug,Unkrautbek&auml;mpfungsz&uuml;ge," +
                   "Unkrautbeseitigung,Unkrautes,unkrautfrei,Unkrautspreng," +
                   "Unkrautsprengzug,Unkrautsprengz&uuml;ge,Unkrautspritzzug," +
                   "Unkrautvertilgung,Unkrautvertilgungs," +
                   "Unkrautvertilgungszug,Unkrautvertilgungszuges," +
                   "unterblieb,untereinander,unterhalb,Unterseite," +
                   "unverzichtbar,U-Profil,U-Profile," +
                   "Vegetationskontrollzug,Ventil,Verband,Verbindung," +
                   "vergessen,vergr&ouml;ﬂert,verkrautetes,Verlagshandlung," +
                   "verl&auml;ngert,Verl&auml;ngerung,verlegte,verringert," +
                   "verschlossen,Verschmutzung,versehen,verspr&uuml;hen," +
                   "verst&auml;rkt,verwendbar,verwendet,Verwendete,Verwendung," +
                   "vierachsige,vollgetankte,vorbereitet,Vorbild," +
                   "vorbildgerechter,vordere,vorderen,vorhanden,vorhandene," +
                   "Vorr&auml;ten,Vorratswagen,vorzusehen,Wagen,Wagenkasten," +
                   "Wagens,Wagenseite,Wannen,Wannentender,Wannentenders," +
                   "W&auml;rmeschutz,W&auml;rmeschutzmantel,Wartungsb&uuml;hne,Wasser," +
                   "Wasserkessel,Wasserkr&auml;nen,Wasserwagen,Weinert," +
                   "Weiﬂaluminium,weisse,weiteren,Werkzeugkasten," +
                   "Werkzeugkastens,Wert,Westwaggon,Wider,Wildwuchs," +
                   "Wildwuchses,Winkelprofil,Winterdienst,Wohnwagen," +
                   "Wolfgang,Zapfen,zeigen,Zeit,Zeiten,zerlegt,Zug,Zugang," +
                   "zugelassenen,Zugfahrzeug,Zugleiter,Zugnummer,zul&auml;ssig," +
                   "zun&auml;chst,zusammengebaut,zusammengel&ouml;tet,Zweck," +
                   "zweiachsige,zw&ouml;lf";
       seite[22] = "bau_unkr.htm";
beschreibung[22] = "Kr&uuml;melbahn - Unkrautvertilgungszug";
     begriff[23] = "Abschnitt,Anspruch,aufgebaut,aufgenommen,Ausbruchdes," +
                   "Ausgangspunkts,Bahn,Bahnen,Bahnlinie,Bahnsinniges," +
                   "Bef&ouml;rderung,benutzte,Berlin,Besetzung,besiegelt,Boxtel," +
                   "Boxteler,Brennpunkt,Buch,Clemens,Dampfer,dankbar," +
                   "deutsche,Deutschlands,DGEG-Medien,Dienstvorschriften," +
                   "Direkt,Duitse,ebenso,eingestellt,Eisenbahn,eMail," +
                   "England,erhebt,Erweiterung,existierende," +
                   "Fernreiseverkehr,Fernverbindung,fertiggestellte," +
                   "festmachten,Freriks,ge&auml;nderte,gebraucht,Gegen&uuml;ber," +
                   "genannt,genauer,Gerard,Gesch&auml;ft,Gleispl&auml;ne,Groﬂeltern," +
                   "G&uuml;terzugfahrpl&auml;ne,Haan,Haltern,Hamburg,Hans,Hassum,Het," +
                   "Hinweise,Impressum,Inhalt,internationalen,ISBN,Jos,kam," +
                   "Kriegsende,Kr&uuml;melbahn,Lijntje,Linkliste,Links,Liste," +
                   "Literatur,London,lukratives,Mandos,Mittelpunkt," +
                   "Modellbahn,M&uuml;nster,musste,Nachschublinie,Navigation," +
                   "NBDS,Niederlande,niederl&auml;ndische,Niederl&auml;ndischen," +
                   "Nord-Brabant-Deutsche,Norden,Norderney,Osnabr&uuml;ck," +
                   "Petersburg,Post,Privatbahn,Reichsbahn,Rheinbr&uuml;cke," +
                   "Rogmann,r&uuml;ckte,Salching,Sascha,schicken,Schicksal," +
                   "Schlieper,schloss,Seehafen,sogenannte,Solingen," +
                   "StaatsbahnenUnterschlupf,stand,Startseite,Strecke," +
                   "Suchen,Teil,Thema,Truppen,Uedemerbruch,Venloer," +
                   "Verbindungsbahn,Vincent,Vlissingen,Vollst&auml;ndigkeit," +
                   "von/nach,Weltkrieg,Weltkriegs,Wesel,Weseler,westlichen," +
                   "Wikipedia,wohnten,Zentrum,zerst&ouml;rt,Zweiten";
       seite[23] = "boxtel.htm";
beschreibung[23] = "Kr&uuml;melbahn - Het Duitse Lijntje";
     begriff[24] = "Anzahl,Augsburg,Bahnanlagen,Bahnen,Bahnh&ouml;fe," +
                   "Bahnsinniges,Bauausf&uuml;hrung,Bauherr,Baukosten," +
                   "Bogenschluss,Bogenweite,Br&uuml;cke,Br&uuml;ckenbau,Deutschlands," +
                   "Direkt,Eisenbahn,Eisenbahnbr&uuml;cke,Eisenbahndirection," +
                   "Elberfeld,erhaltene,Er&ouml;ffnung,Fahrzeuge," +
                   "Farbfl&auml;che/Farbgewicht,feste,Firma,Friedrich,gebaut," +
                   "gehen,Gesamth&ouml;he,Gewicht,Gustavsburg,hieﬂ,h&ouml;chste," +
                   "H&ouml;chstgeschwindigkeit,H&ouml;he,Impressum,Inhalt," +
                   "interessante,Jahre,Jahren,Kaiser-Wilhelm-Br&uuml;cke,km/h," +
                   "K&ouml;nigliche,Kr&uuml;melbahn,L&auml;nge,Leopold,Links,Literatur," +
                   "Lokstation,Mark,Maschinenfabrik,Michael,Modellbahn," +
                   "M&uuml;ngstener,Navigation,Nieten,Normalnull,N&uuml;rnberg," +
                   "Planungen,Preuﬂen,Prinz,Remscheid,Seitenanfang," +
                   "Solingen,Solingen-M&uuml;ngsten,Solingen-Ohligs," +
                   "Sonderpostwertzeichen,Spatenstich,St&auml;dte,Startseite," +
                   "Stellwerke,Strecken,Suchen,Tal,tiefe,&Uuml;berquerung," +
                   "Verbindung,verhinderte,Werk,Wikipedia,Wupper," +
                   "Zimmermann,zun&auml;chst,zur&uuml;ck,zweigleisige";
       seite[24] = "bruecke.htm";
beschreibung[24] = "Kr&uuml;melbahn - M&uuml;ngstener Br&uuml;cke";
     begriff[25] = "abgekoppelt,abgerissen,abwickelten,Anfang,angebaut," +
                   "angegliedert,angrenzenden,Anh&auml;nger,Anlagen,Anlegen," +
                   "aufgel&ouml;st,Aufl&ouml;sung,ausgebaut,Auﬂenstelle,Bahnanlagen," +
                   "Bahnbetriebswerke,Bahnen,Bahnhof,Bahnh&ouml;fe,Bahnhofs," +
                   "Bahnmeisterei,Bahnsinniges,Bauarbeiten,Baureihe," +
                   "befanden,bef&ouml;rdert,Beginn,beheimatet,beheimatete," +
                   "beheimateten,Beheimatung,Bemerkungen,besaﬂ,Bestehens," +
                   "betreuen,Betriebswerkst&auml;tte,bleiben,blieben," +
                   "blob/main/Solingen/Kr&uuml;melbahn,bot,Br&uuml;cke,Dienststelle," +
                   "diente,Direkt,drauﬂen,Drehscheibe,D&uuml;sseldorf," +
                   "Einheitslok,Elberfeld,Ende,endet,Erg&auml;nzen,erhalten," +
                   "erhaltene,erkennen,erlebte,Er&ouml;ffnung,ersetzt," +
                   "fabrikneuen,Fahrt,Fahrzeuge,G10,gestellt,githubinfo," +
                   "Gleise,Gr&auml;frath,gr&ouml;ﬂeren,hatten,Haupteinsatzgebiet," +
                   "haupts&auml;chlich,Herbst,heruntergestuft,Hilden,H&ouml;hepunkt," +
                   "Impressum,Info,Inhalt,Insgesamt,Instandhaltung,Jahre," +
                   "Jahren,Juli,kam,KED,Kla,kleine,Klv,Kohle,Kohlenb&uuml;hne," +
                   "Kr&uuml;melbahn,lang,Lennep,Links,Literatur,Lokbahnhof," +
                   "Lokomotiven,Lokomotivnummer,Lokschuppen,Lokschuppens," +
                   "Lokstation,Mai,Maschinenamtes,maximal,m-Drehscheibe," +
                   "Mitarbeiter,Modellbahn,moderne,M&uuml;ngstener,muss," +
                   "Navigation,offiziell,Ohligs,OhligsWald,Oktober,Opladen," +
                   "pdf,Platz,realisiert,reinen,Remise,Remscheid,renoviert," +
                   "Reparaturaufgaben,Richtung,Rottenkraftwagen,R&uuml;ckwand," +
                   "schaffen,Schlackengruben,Schuppen,Schuppengleis,sechs," +
                   "Seitenanfang,September,Signale,Solingen," +
                   "Solingen-Ohligs,st&auml;ndige,Startseite,stationiert," +
                   "stationierte,stationierten,Stationsschlosserei," +
                   "Stellwerke,Strecken,Suchen,T11,T12,T16,Tenderlok-Bw," +
                   "Tenderlokomotiven,Typ,&uuml;berfl&uuml;ssige,&Uuml;bersicht,umbenannt," +
                   "Verbleib,Verkehr,verwaltungstechnisch,Vohwinkel," +
                   "Wagen-Ausbesserungswerkstatt,Wagenremise,Wald," +
                   "Wasserturm,Wasservorr&auml;te,Weichen,Wenden,Werkstatt," +
                   "wesentlich,Wikipedia,zehn";
       seite[25] = "bwohligs.htm";
beschreibung[25] = "Kr&uuml;melbahn - Bw Solingen-Ohligs";
     begriff[26] = "Ausfahrt,Bahnanlagen,Bahnbetriebswerke,Bahnen,Bahnhof," +
                   "Bahnh&ouml;fe,Bahnsinniges,Bau,besaﬂ,Betriebsvorr&auml;te," +
                   "blob/main/Solingen/Kr&uuml;melbahn,Br&uuml;cke,Direkt,drehen," +
                   "Einfachheit,Elberfeld,erg&auml;nzen,erhaltene,Er&ouml;ffnung," +
                   "Fahrzeuge,fiel,Fundamentarbeiten,geplanter,geschaffen," +
                   "gestrichen,githubinfo,Gleisanlagen,Impressum,Info," +
                   "Inhalt,KED,Kohlebansen,Kohleladeb&uuml;hne,Korkenzieherbahn," +
                   "Kr&uuml;melbahn,liegen,Links,Literatur,Lokbehandlung," +
                   "Lokbehandlungsanlage,Lokomotiven,Lokschuppen," +
                   "Lokstation,m-Drehscheibe,Modellbahn,M&ouml;glichkeit," +
                   "M&uuml;ngstener,Navigation,Ohligs,Opfer,pdf,Richtung," +
                   "Rotstift,Seitenanfang,September,Solingen," +
                   "Solingen/Hauptbahnhof,Solingen-Ohligs,Startseite," +
                   "Stellwerke,Strecken,Suchen,S&uuml;dbahnhof,S&uuml;dbahnhofes," +
                   "umfangreicher,verdeutlichen,Wasserturm,Weyersberg," +
                   "Weyersberger,Wikipedia,Zweigbahn";
       seite[26] = "bwsoling.htm";
beschreibung[26] = "Kr&uuml;melbahn - Lokstation Solingen";
     begriff[27] = "A/S,Adressierung,Advance,Aktivit&auml;ten,AMW,and,Angaben," +
                   "Anlagengestaltung,Appel,Aristo-Crafts,Arnold,Ataras," +
                   "Atlas,A-Train,AuroTrains,Bachmann,Bahnen,Bahnsinniges," +
                   "bestem,Brawa,Brelec,B&uuml;ro,CML,Coast,Command,Computer," +
                   "Con-com,Control,Controls,Corp,Corporation,CV8,CVP," +
                   "Datentechnik,DCC,Decodereinbauten,Decoders,Design,dez," +
                   "Dialysis,Dietz,Digital,Digitalbetrieb,Digitrax," +
                   "Digsight,Direkt,Do-lt-Yourself,Domain,Dynatrol,ECCO," +
                   "Effects,Electric,Electronic,Electronics,Electronik," +
                   "Elektronik,Elproma,eMail,Engineering,Erg&auml;nzung," +
                   "Erg&auml;nzungen/Korrekturen,Ernst,Fahrzeugbau,Fleischmann," +
                   "for,formerly,France,Gebr,Gew&auml;hr,GITmbH,GmbH,Group,Haas," +
                   "Haber,Heljan,Helper,Hersteller,Herstellercode,hex,HKE," +
                   "hler,Impressum,Inc,Industries,Ing,Inhalt,Intelligent," +
                   "Jahresmodell,JMRI,Junction,KAM,K&ouml;nig,Kreischer," +
                   "Kr&uuml;melbahn,Kuehn,Lehmann,Lenz,LGB,Limited,Links," +
                   "Literatur,LLC,Ltd,Massoth,MBTronik,Mercedes-Benz," +
                   "Mistral,MoBaTron,Model,Modellbahn,Modellbahntechnik," +
                   "Modelleisenbahn,Modellfahrzeuge,Modellspielwaren," +
                   "Models,Modulbau,MTH,Nagasue,Navigation,NCE,NMRA,North," +
                   "Nummer,Office,Patentwerk,Paul,PIKO,PiN,Poland," +
                   "Practices,Praecipuus,Products,ProfiLok,PSI,Public,QSI," +
                   "Quelle,Railroad,Railshops,Railway,Ramfixx,RealRail," +
                   "Recommended,Rectifier,Regal,Reserved,Rivarossi,Rock," +
                   "Roco,RP-9,Seite,Seitenanfang,Service,Solingen," +
                   "Solutions,Soundtraxx,Spielwaren,Startseite,Suchen," +
                   "System,Systems,T4T,Team,Technologies,Technology," +
                   "Tentative,Throttle-Up,Train,Trains,Trix,Ulm,Umelec," +
                   "Viessmann,Wangrow,Way,Wissen,Zimo,ZTC";
       seite[27] = "cv8.htm";
beschreibung[27] = "Kr&uuml;melbahn - Herstellercode in CV8";
     begriff[28] = "#18,Adresse,Adressierung,Adressl&auml;nge,Aktivit&auml;ten," +
                   "Analogbetrieb,Anlagengestaltung,Bahnen,Bahnsinniges," +
                   "Bitberechnung,CV8,DCC,Decoder,Decodereinbauten,Digital," +
                   "Digitalbetrieb,Direkt,Elektronik,Fahrstufen," +
                   "Fahrtrichtung,Fahrzeugbau,Geschw,Herstellercode," +
                   "Impressum,Inhalt,Jahresmodell,Kr&uuml;melbahn,lang,Links," +
                   "Literatur,Mercedes-Benz,Modellbahn,Modellfahrzeuge," +
                   "Modulbau,Navigation,nein,RailCOM,Solingen,Startseite," +
                   "Suchen,Tabelle,umkehren,verwendet";
       seite[28] = "cvadr.htm";
beschreibung[28] = "Kr&uuml;melbahn - Adressen in CV 1 / 17,18";
     begriff[29] = "#1020,#112803,#1302,#155001,#17,#177,#18,#208113L," +
                   "#2148,#2227,#30110,#30701,#30801,#322501,#40000,#40154," +
                   "#40300,#4165,#4264S,#4265S,#43216,#43244,#43306,#43522," +
                   "#43620,#43644,#45242,#45243,#45244,#45248,#456,#460," +
                   "#4613,#4822,#5/6325,#520,#600,#6104,#63010,#63030," +
                   "#63040,#64404,#64434,AB4yg,Abgasstutzen,abgel&ouml;tet," +
                   "abgel&ouml;tet/entfernt,abgenommen,abgeschnitten,Abgestellt," +
                   "Abhilfe,abkleben,Abmessungen,Abstand,abzudrehen," +
                   "abzuziehen,achs,Achsen,achsige,achsigen,achsiger," +
                   "Achslagern,achten,Achtung,Adapterschale,Adresse," +
                   "Adressierung,&auml;hnliches,Akkumulator-Triebwagen," +
                   "Akkutriebwagen,Aktivieren,aktiviert,Aktivit&auml;ten," +
                   "Aktuell,aktuelle,Albert,allgemeine,alte,&auml;ltere,&auml;lteren," +
                   "Alternativ/zus&auml;tzlich,altroten,Analogbetrieb," +
                   "Analogbetriebes,analoge,analogen,Anbau,and,Andreas," +
                   "andreas-nothaft,Anfahren,anfuhren,Angabe,Angaben," +
                   "angebenen,angebracht,angel&ouml;tet,angepasst,Angeregt," +
                   "angeschlossen,angesenkt,angesteuert,Anlage," +
                   "Anlagengestaltung,anlehnen,Anleitung,anl&ouml;ten,Anmerkung," +
                   "Anode,Anpassungen,Ansatz,anschlieﬂend,Anschluﬂ," +
                   "Anschluﬂdr&auml;hte,Anschl&uuml;sse,Anschl&uuml;ssen,Anschluﬂkabel," +
                   "anstelle,Ansteuerung,Antrieb,Anzahl,anzeigen," +
                   "anzubringen,anzul&ouml;tende,anzunehmen,anzupassen," +
                   "anzuschlieﬂen,Arbeitsleuchte,Arbeitstier,Arno,Art," +
                   "Artikel,ASF,Asmus,A-Teil,Athearn,Attrappe,ATW,Aufbau," +
                   "Aufgabe,aufgebohrt,aufgefeilt,aufgem&ouml;belt,aufgerieben," +
                   "aufgespielt,Aufnahme,Aufstiegsleiter,auftreten," +
                   "aufzutrennen,Ausfr&auml;sung,ausf&uuml;hrliche,Ausf&uuml;hrung," +
                   "Ausgang,ausgebaut,ausgebauten,ausgelesen,ausgel&ouml;tet," +
                   "ausger&uuml;stet,ausgetauscht,Ausland,ausl&ouml;ten,aussehen," +
                   "aussen,Aussenseite,Aussichtstriebwagen,Aussparung," +
                   "Aussparungen,Auswahlkriterien,auszufr&auml;sen,auszul&ouml;ten," +
                   "auszuprobieren,auszutauschen,Auwahl,AUX1,AUX2,B4yg,Bad," +
                   "Bahn,Bahnen,Bahnsinniges,BahnWahn,Bakelit," +
                   "Balastgewicht,Balastgewichten,Ballastgewicht,Band," +
                   "Basic,Basisiwiderstand,Batteriewanne,Bauarten,Bauch," +
                   "Bauform,Baugr&ouml;ﬂe,Baujahr,Baureihe,Baureihen,Bausatz," +
                   "Bautiefe,BC337,BDnf,beantwortet,bearbeitet," +
                   "Bedienungsanleitung,beeintr&auml;chtigen,beengten,befeilen," +
                   "befeilt,befestigt,Befestigungsschrauben,befindet," +
                   "behoben,beide,beiden,beidseitige,beigelegte," +
                   "beiliegenden,beispielsweise,bekommt,belastbar,belasten," +
                   "belastet,beleuchtet,Beleuchtung,Beleuchtungseffekten," +
                   "ben&ouml;tigt,ben&ouml;tigten,benutzerdefinierbaren," +
                   "benutzerdefinierte,bequem,Bereich,Bericht,berichtet," +
                   "ber&uuml;hren,ber&uuml;hrt,beschafft,beschreibt,Beschreibung," +
                   "beschrieben,beschriebenen,Beseitigung,besitzt,Best," +
                   "bestehenden,Bestellnummer,bestem,betagtes," +
                   "Betriebsanleitung,beugt,bevorzugt,bew&auml;hrten," +
                   "bezeichnete,BFD-01,bietet,Bild,Bildern,Bit,Bit4,Bits," +
                   "blaue,blauen,blaues,Bleche,bleibt,Blindstecker," +
                   "Blindsteckers,Bnrzb,Bocholter,Boden,bohren,Bohrer," +
                   "Bohrung,Booster/Versorgungsabschnitte,BPw4yg,BR38,BR41," +
                   "BR50,brachte,braucht,braun,braunem,Brawa,Brawa-K&ouml;f," +
                   "Brawas,Brekina,Brekina-Platine,Bretschneider,brock," +
                   "Bronzeblech,Bronzestreifen,Br&uuml;ckensteckers,br&uuml;niert," +
                   "B-Teil,B&uuml;hne,B&uuml;hnenreif,Bundesbahn,Bus,bw-rheinbrueck," +
                   "Carl,Christopher,cloud,Code83-Profile,connector,Conrad," +
                   "CV29,CV8,CV-Configuration,CV-Einstellungen,CVs,Dach," +
                   "Dachaufstieg,Dampftriebwagen,DasFahrzeug,dass," +
                   "Dauerstrom,DB29-3,DB-Baureihe,DB-Baureihen,Dber,DCC," +
                   "DCC-CV,DCC-Decoder,DCC-Decodereinbauten,dcc-mueller," +
                   "DCC-M&uuml;ller,DCC-Tempo-Tuning,DDS," +
                   "de/t128163f5-Digitalisieren-von-Brawa-VB," +
                   "de/t134502f2-Fragen-zu-Brawa,Deaktivieren,Deckelplatte," +
                   "Decoder,Decoderanleitung,Decoderanschlussdraht," +
                   "Decoderauswahl,Decoderbeschreibung,Decodereinbau," +
                   "Decodereinbauten,Decodergr&ouml;ﬂe,Decoderkabel,Decodern," +
                   "Decoders,Decoderschaden,Deichsel,dein,Dekoder," +
                   "Dekoderdr&auml;hte,Dekoderherstellers,Deodereinbau,derer," +
                   "Dessel,Detailbeschreibungen,Deutsche," +
                   "deutsche-kleinloks,Deutschen,deutscher,DH500Ca," +
                   "dhuenntalbahn,dienen,Dienstfahrzeuge,Dienstreise," +
                   "Diesellokomotiven,Diesel-P&auml;rchen,Digital," +
                   "Digitalbetrieb,Digitale,digitalisieren,digitalisiert," +
                   "digitalisierten,Digitalspannung,Digitalsystem," +
                   "Digitalumbauten,Dioden,Direkt,direkten,Doppellok," +
                   "doppelseitigen,Draht,Drahtbr&uuml;cke,Drahtdurchf&uuml;hrung," +
                   "Dr&auml;hte,Dr&auml;hten,Drahtverbindungen,Draisinen,Drehachse," +
                   "Drehbewegung,drehen,Drehgestell,Drehgestellblenden," +
                   "Drehgestelle,Drehgestellen,Drehgestellkontakten," +
                   "Drehpunkt,Drehscheibe-Online,Drehscheibe-Verlag,drei," +
                   "Dr&uuml;cken,dr&uuml;ckt,Dummy,dunkelgrau,dunkler,d&uuml;nnen,d&uuml;nner," +
                   "DUO-LED,DUO-LEDs,Durchblick,Durchf&uuml;hrung,Durchmesser," +
                   "DW8,E67B,E6SG,e94114,Ebel,ebenso,effektive,Egbert," +
                   "eigenes,eigentlich,eigentlichen,eigenwillig,Einbau," +
                   "Einbauanleitungen,Einbauaufwand,Einbaubeschreibung," +
                   "einbauen,Einbaum&ouml;glichkeiten,Einbauplatz," +
                   "Einbausituation,einfache,Einfachheit,eingebaut," +
                   "eingebaute,eingebautem,eingebauten,eingebracht," +
                   "eingef&uuml;hrt,eingeklebt,eingel&ouml;tet,eingeschaltet," +
                   "eingesetzt,eingesetzte,eingesteckt,Eingriffe,Einsatz," +
                   "Einsatzfahrzeuge,Einsatzgeschichte,Einsetzen," +
                   "einstellen,Einstellung,Einteilen,einwandfreise,einzig," +
                   "Eisenbahn,Eisenbahn-Journal,Eisenbahn-Kurier," +
                   "Eisenbahnmagazin,Eisenbahn-Magazin,EL103SURD/S53," +
                   "elastischen,Elektrik,elektrisch,Elektronik," +
                   "Elektronikversender,empfehlen,empfiehlt,Ende,entfallen," +
                   "entfallenen,entfernen,entfernt,Entkuppeln,entkuppelt," +
                   "Entkupplungsb&uuml;gel,entscheidend,entschlossen," +
                   "entsprechend,entsprechende,entsprechenden,entspricht," +
                   "Entst&ouml;relemente,entwickelt,Erfahrungen,erfasst," +
                   "erfolgen,erfolgt,erfolgte,erforderlich,ergeben,erh&auml;lt," +
                   "erhalten,erh&auml;ltlich,er-Jahren,erkennen,Erleuchtung," +
                   "erlischt,ermittelte,erneuern,erreicht,Ersatz," +
                   "Ersatzmotor,Ersatzteilnummer,erschienen,ersetzen," +
                   "ersetzt,erw&auml;hnte,erweitert,erworben,erworbener," +
                   "erzeugte,ESA,ESU,ESU-Soundprojekt,ETA,ETA-Herbst," +
                   "ETA-Unterhaltung,etwa,eventuelle,Extra,fahren," +
                   "Fahrg&auml;ste,Fahrgestell,Fahrgestelles," +
                   "Fahrleitungsmeistereien,Fahrregler,Fahrspannung," +
                   "Fahrspannungsversorgungsdr&auml;hten,Fahrtlichtung," +
                   "Fahrtrichtung,fahrtrichtungsunabh&auml;ngig,Fahrzeug," +
                   "Fahrzeugbau,Fahrzeugbeleuchtung,Fahrzeuge,Fahrzeuges," +
                   "Fahrzeuginnenbeleuchtung,Fahrzeugplatine,Fahrzeugs," +
                   "Fahrzeugseite,Falle,F&auml;llen,farbigen,farblich,Fazit," +
                   "FD-R,Federbronze,Federdraht,Federkontakte,Fehler,fehlt," +
                   "fehlten,feilen,Fenster,Fenstereinsatz,Fenstereins&auml;tze," +
                   "Fensterrahmen,festgeschraubt,Feuerb&uuml;chse,finde,finden," +
                   "findet,fingen,Firma,fixiert,flach,Flachbandkabel," +
                   "Fleischmann,Fliegende,Fliegenden,folgende,folgt,Fotos," +
                   "Frage,Franz,Fr&auml;sarbeiten,fr&auml;sen,FRED,freiem,freien," +
                   "Fremo,Friedenseins&auml;tzen,Front,Frontglas,F&uuml;hrerstand," +
                   "F&uuml;hrerstands,F&uuml;hrerstandsbeleuchtung," +
                   "F&uuml;hrerstandsbeleuchtungen,F&uuml;hrerstandspult,f&uuml;hrt,F&uuml;nf," +
                   "f&uuml;nften,f&uuml;nfter,Funkenst&ouml;relemente,Funkentst&ouml;relemente," +
                   "Funktionen,Funktionsausgang,Funktionsausg&auml;nge," +
                   "Funktionsdekoder,Funktionstaste,Funktionstasten,G12," +
                   "gab,ge&auml;ndert,Ge&auml;nderte,gebohrt,gebraucht,gedreht," +
                   "geeignet,gef&auml;cherten,Gefahr,gef&auml;llt,gefielen,gef&uuml;hrt," +
                   "gefunden,Gegengewicht,Gegensatz,geg&ouml;nnt,gehalten," +
                   "Geh&auml;use,Geh&auml;uses,geh&ouml;rte,gekauft,geklebt,gek&uuml;rzt," +
                   "gelangen,gelb,gelbe,gelben,gelbes,gelegt,geliefert," +
                   "gel&ouml;tet,gemacht,gemeinsame,gemeinsamer,gemessene," +
                   "geneigt,Generationswechsel,genug,gen&uuml;ge,gen&uuml;gend," +
                   "genutzt,gepaart,Gep&auml;ckkasten,ger&auml;t,gering,geringes," +
                   "gesamten,geschafft,geschah,geschaltet,Geschichte," +
                   "geschnittenes,geschoben,Geschwindigkeit," +
                   "Geschwindigkeiten,Geschwindigkeitsparameter," +
                   "Geschwindigkeitstabele,Geschwindigkeitstabelle,gesetzt," +
                   "gestalten,gestossen,gestutzt,gesucht,getauscht,geteilt," +
                   "getrennt,Getriebeblock,Gew&auml;hr,Gew&auml;hrleistung,Gewicht," +
                   "Gewissen,gew&uuml;nschte,gezeigt,gezeigte,gezogen,Gieseler," +
                   "ging,githubinfo,Gl&auml;serne,Gleichstrombetrieb,Gleisen," +
                   "Gl&uuml;hl&auml;mpchen,Gl&uuml;hlampe,Gl&uuml;hlampen,Gold,GP38-2,grau," +
                   "grauen,graues,Griffstangen,Groﬂdiesellokomotive," +
                   "Groﬂdiesellokomotiven,Groﬂe,Gr&ouml;ﬂe,groﬂen,gr&uuml;n,Grund," +
                   "grundlegende,gr&uuml;nen,guter,G&uuml;terzuggigant," +
                   "h0-modellbahnforum,Haan,Haftreifen,Haftreifenwechsel," +
                   "Haken,h&auml;lt,Halteloch,Halterung,Hamburger,handelt," +
                   "Handregler,h&auml;ngt,Hansj&uuml;rgen,Hans-Peter,hartn&auml;ckig," +
                   "hauchd&uuml;nne,haus,Heck,Heft,Heinz,heiﬂ,heiﬂer,Heitmann," +
                   "helfen,hellbraun,heller,herausnehmbaren,hergestellt," +
                   "Hersteller,Herstellercode,Herstellers,Herstellerseite," +
                   "hinf&auml;llig,hinten,Hinterachse,hintere,Hinweis,Hinweise," +
                   "Hobbytrade,hochfrequenten,H&ouml;gemann,H&ouml;he,hohen,h&ouml;her," +
                   "h&ouml;here,Homepage,Horst,Hp1,HT75332,html,http,https," +
                   "Hubbel,Huebsch,I/1989,I/2006,Idee,Ideen,identische," +
                   "I-II-II-V60,Impressum,Indes,Info,Infoletter," +
                   "Informationen,Inhalt,inklusive,Innenbeleuchtung," +
                   "Innenebleuchtung,Innenmaﬂ,Innenraum," +
                   "Innenraumbeleuchtung,Innenraumnachbildung,Innenseite," +
                   "Innovation,insbesondere,Insbesonders,insgesamt," +
                   "Inspiriert,integriert,integriertem,integrierter," +
                   "Internet,Inzwischen,Isolierband,isoliert,isolierte," +
                   "Isolierung,IV/1995,Jahre,Jahren,Jahresmodell,jegliche," +
                   "John,Josef,Jungbrunnen,J&uuml;rgen,Justage,Kab,Kabel," +
                   "Kabeldurchf&uuml;hrung,Kabelschacht,Kabinenbeleuchtung," +
                   "Kabinentenderbeleuchtung,Kadee,Kadee-Kupplung," +
                   "Kadee-Kupplungskopf,Kadee-System,kam,kamen,Kato," +
                   "Kehrschleifenmodul,Kenning,kennt,Kennung," +
                   "Kesselballastgewicht,Kfz-Flachsteckerh&uuml;lse,Kittel," +
                   "Kittel-Dampftriebwagen,KK-K&ouml;pfe,Klapptreppe,Klasse," +
                   "Klaue,Klebeband,Klebepad,kleine,kleinen,kleinere," +
                   "kleineren,kleines,Kleinlokomotiven,Klv,Klv20,Klv51," +
                   "Klv60,K&ouml;f,kOhm,kOhm-Vorwiderstand,Kollektoren,K&ouml;lner," +
                   "kommen,kommt,Kompakte,komplett,Konfigurieren,konnte," +
                   "Konrad,Konstantstrom,Kontakt,Kontakte,Kontaktprobleme," +
                   "Kontaktstreifen,Kopf,K&ouml;pfen,Koschinski,Krepppapier," +
                   "Kr&uuml;ger-Modellbau,Kr&uuml;melbahn,Kuehn,Kugelfr&auml;ser," +
                   "Kunststoffeins&auml;tze,Kunststoffplatte,Kunststoffstreifen," +
                   "Kupferlackdraht,Kupferlaschen,Kuppellinse,Kuppeln," +
                   "Kuppelns/Entkuppelns,Kupplung,Kupplungsadapter," +
                   "Kupplungsadapters,Kupplungshaken,Kupplungskopf," +
                   "Kupplungsm&ouml;glichkeit,k&uuml;rzen,Kuswa,lackieren,Ladefl&auml;che," +
                   "laden,lagen,lagern,lagert,L&auml;mpchen,Lampe," +
                   "Lampenhalterung,Lampr,Land,L&auml;nderbahnlackierung,L&auml;nge," +
                   "langen,langer,l&auml;ngliche,Lasche,Lastregelung,laterne," +
                   "Laternen,Lauscher,lautet,Lautsprecher,LCW,LD-G-7," +
                   "LD-G-8,LE0511D,LE1014E,LE1035A,LE1835,LE1835A,Leben," +
                   "LED,LED-Bauformen,ledernen,LED-Lichtleiste," +
                   "LED-Lichtleisten,LEDs,Leichtleiste,Leistungsgruppen," +
                   "Leiter,Leiterbahnen,Leiterplatten,Lenz,Lenz-Decoder," +
                   "lesen,letzte,leuchten,leuchtet,leuchtete,Leuchtmittel," +
                   "LH10,Licht,Lichtaustritts&ouml;ffnungen,lichtdicht," +
                   "Lichtleiste,Lichtleiter,Lichtleiterf&uuml;hrung," +
                   "Lichtleiterl&uuml;cke,Lichtsteuerung,Lichtwechsel,liefert," +
                   "Lieferung,liegen,liegend,liegenden,Liliput,Lima,Link," +
                   "linke,linken,Links,Linse,Literatur,Loch,L&ouml;cher," +
                   "Logikausgang,Logikausg&auml;nge,Lok,Lokbahnhof,Lokdecodern," +
                   "Lokodex,Lokomotive,Lokomotiven,Lokomotivtender," +
                   "Lokr&auml;der,Lokrundschau,Loks,Lokteil,L&ouml;sung," +
                   "L&ouml;tanschl&uuml;sse,L&ouml;ttgers,L&uuml;fterhaube,m&auml;glich,magnetisch," +
                   "Maier,Maintenance,Malutronik,manche,Manfred," +
                   "Markierungen,Marslight,Masse,massefrei,Massepotential," +
                   "massgeblich,Matthias,maximale,maximalen,maximaler," +
                   "Mehrfachstecker,meisten,Melcher,Mercedes-Benz," +
                   "Messingblech,Messingbleche,Messingblechzapfen," +
                   "Messingglanz,Messingpl&auml;ttchen,Messverfahren,Metall," +
                   "Metall-Kupplung,Miba,Miba-Spezial,Microlampe," +
                   "Microlampen,Microsteckern,mini,minimal,Mitleidenschaft," +
                   "Mittelpunkt,mittig,mittleren,Modell,Modellbahn," +
                   "Modellbauh&uuml;tte,Modellfahrzeuge,Modellumschau,modernen," +
                   "Modulbau,Modulgruppe,m&ouml;glicher,m&ouml;glicherweise,Montage," +
                   "Montageskizze,montiert,Moosgummi,Motor,Motoranschluss," +
                   "Motordauerstrom,Motoren,Motorersatz,Motorger&auml;usche," +
                   "Motorkontakte,Motorplatine,Motorschild,Motorstrom," +
                   "Motorwagen,Motorwelle,MTC,MTC-Schnittstelle,M&uuml;ller," +
                   "musste,MX617,N025,N045,N045-P8,Nachfrage,nachmessen," +
                   "Nachteil,N&auml;gel,Nahverkehrs,Nahverkehrssteuerwagen," +
                   "nat&uuml;rlich,Navigation,Nebengleis,nehmen,NEM,NEM-Schacht," +
                   "net/index,Newsletter,niedriger,nimmt,nirgendwo,Nothaft," +
                   "Null,Nummer,Nummern,Nummernschildbeleuchtung,n-Wagen," +
                   "obere,oberen,Oberfl&auml;che,Oberleitungsinstandhaltung," +
                   "Obermayer,&Ouml;ffnen,Ohm,optimal,Optimierung,orange," +
                   "oranges,originale,originalen,Papierstreifen,Pappe," +
                   "passen,Passend,passende,passt,pdf,Peter,Pfeiffer,Piko," +
                   "Pilot,Pionier,PI-Regler,plan,planer,Platine," +
                   "Platinenbohrung,Platinenl&ouml;chern,Platz,Platzieren," +
                   "platziert,PLCC-4-Geh&auml;use,Plexiglasscheibchen,Polarit&auml;t," +
                   "polige,Position,preisg&uuml;nstig,Prellbock,preuﬂische," +
                   "Preuﬂisch-Hessischen,Prinzip,Privatbahnen,Probleme," +
                   "Programmieren,Programmierung,Projekte,Pufferbohle," +
                   "Punkte,PVC-Platte,R&auml;der,Rads&auml;tze,Radschleifer," +
                   "Radschleiferblech,Rai-Mo,RAL1011,RAL3009,RAL6003," +
                   "RAL7024,ralf-bueker,Rand,Rangierdiesel,Rangieren," +
                   "Rastnasen,Rauchsatz,Rauchzeichen,Rauten,Rautenhaus," +
                   "reagieren,rechte,rechten,Regel,Regelturmtriebwagen," +
                   "Reichelt,Reichsbahn,Reichsbahngesellschaft,Reihe," +
                   "Reinhard,Reisenden,remotorisiert,Remotorisierung," +
                   "Renoviert,Rest,Restaurierung,Restst&uuml;ck,Revitalisiert," +
                   "Rheinland,richtiges,Richtung,Richtwert,Risiko,Rittig," +
                   "Rivarossi,Roco,Roco-Kupplungsadapter,R&ouml;der,Rolle," +
                   "Rollendes,rollf&auml;higen,rot,rot/weiﬂ,rotbraun,rote,rotem," +
                   "roten,roter,rotes,R&uuml;cken,Rudolf,Ruhrpott,S26,S32,S36," +
                   "S38,S42,S44,S46,S50,S52,S54,S55,S56,S70,Sackgasse," +
                   "Sammlung,Sch&auml;den,schaffen,schafft,schaltbar,Schaltbild," +
                   "schaltet,Scherer,Schiene,Schienenfahrrad," +
                   "Schienenomnibusse,Schiene-Straﬂe-Bus,Schildersatz," +
                   "schlecht,Schleif,Schleppschalter,Schlusslicht,schmalen," +
                   "schmaler,Schneepflugs,Schneer&auml;um-Einsatz,Schneer&auml;umer," +
                   "Schneer&auml;umers,schnelle,Schnittstelle," +
                   "Schnittstellenbuchse,Schnittstellenstecker,Sch&ouml;ne," +
                   "schr&auml;g,Schrauben,schreibt,Schrottfahrzeug," +
                   "schwalbenschwanzf&ouml;rmigen,Schwalbenschwanzf&uuml;hrung," +
                   "schwarz,schwarzen,schwarzer,schwarzes,Schwenkb&uuml;hne," +
                   "schwer,Schwierigkeiten,schwierigste,sechs,Seite,Seiten," +
                   "Seitenanfang,seitlich,seitlichen,Sekundenkleber," +
                   "Selbstbau,selbstgedrehte,selbstgefr&auml;ste,separate," +
                   "setzen,sieben,sieht,Signalbilder,Signale," +
                   "Silikonschlauch,Sitzbank,Sitzb&auml;nke,Sitzbankeinsatz," +
                   "Sitze,sitzen,Sitzgruppe,slip,SLX871,SMD-Bauweise," +
                   "SMD-LED,SMD-LEDs,SMD-Widerst&auml;nden,soeben,sofern," +
                   "sogleich,Solingen,Sonder,Sonderausgabe,Sonderheft," +
                   "Sound,Spannung,Spannungsbegrenzung,Spannungsregler," +
                   "Spezial,spielt,Spitzenicht,Spitzenlicht,Spitzenlichts," +
                   "Spitzensignal,Spitzenstrom,sporadisch,Spurkr&auml;nze," +
                   "Spurkranzh&ouml;he,Staatsbahnen," +
                   "Staatsbahn-Rangierlokomotiven,Staatseisenbahnen," +
                   "stahlbahn,Stand,starre,Startseite,Steckerwahl,steckt," +
                   "Steckverbinder,Stefan,stehen,steht,Stelle,stellen," +
                   "Steuber,Steuerwagen,Steuerwagens,stillgelegt," +
                   "Stirn/Schluﬂbeleuchtung,Stirnbeleuchtung,Stirnlampen," +
                   "st&ouml;rende,Straﬂe,Straﬂe-Bus,Streifen,Strom,Stromabnahme," +
                   "Stromabnehmer,Stromaufnahme,St&uuml;ck,St&uuml;ckchen," +
                   "Stummiforum,Stummi-Forum,St&uuml;tzkondenstor,Suchen," +
                   "SUSI-Schnittstelle,SVT877,SVT877a,T125,T65,tab,Tams," +
                   "Tauschplatine,Technik,Technische,Teil,Tender," +
                   "Tendergewicht,Tenderkupplung,Testgleis,Tests,Text,The," +
                   "Thema,Thomas,Thyssen,tief,Tower-LEDs,Transistor," +
                   "Transistoren,Transistorschaltung,Traube,Trennsteg," +
                   "Trennung,Triebfahrzeuge,Triebwagen,Triebwagen-Beiwagen," +
                   "Triebwagengeh&auml;use,Triebwagen-Steuerwagen,Triebwerks," +
                   "Triebwerksbeleuchtung,Triebzuges,Trix,Troche,Tropfen," +
                   "Tun,Tunneluntersuchungen,T&uuml;re,T&uuml;ren,Turmtriebwagen," +
                   "Turmwagen,T&uuml;rvorhang,&Uuml;bersicht,&uuml;bliche,&Uuml;brigens," +
                   "Uerdingen,Uhlen,Uhlenbrock,Ulf,Umbau,Umbauanleitung," +
                   "Umbauanleitungen,Umbaubeschreibung,Umbaubeschreibungen," +
                   "umbauen,Umbau-Klassiker,Umbaum&ouml;glichkeiten," +
                   "Umbaum&ouml;glichkieten,Umbausatz,Umbauten,Umbauvorschlag," +
                   "Umbauwagen,umgeben,Umverdrahtungen,umzubauen,unbedingt," +
                   "Unikat,unkontrolliert,Unm&ouml;glichkeiten,unmotiviert," +
                   "unsaubere,unterblieben,unterbrechen,Unterbrechung," +
                   "Unterbrechungen,Unterbringung,untergebracht,unterhalb," +
                   "unterst&uuml;tzen,Upgrade,V/15mA,V/20mA,V100,V15,V188,V200," +
                   "V23,V300,V36,V60,Variable,VB140,VB147,verabschiedete," +
                   "verantwortlich,verbauen,Verbeck,Verbesserung,verbinden," +
                   "Verbindung,Verbindungen,Verbleib,verbleibenden," +
                   "verbunden,verdrahten,verdrahtet,verdrahtung," +
                   "vereinfachte,verf&uuml;gbare,verf&uuml;gbaren,Verf&uuml;gung," +
                   "vergessen,Verhalten,Verkabelung,verkorkste,Verlag," +
                   "verl&auml;uft,verlegen,verlegt,verl&ouml;tet,vermeiden," +
                   "Vermutlich,vern&uuml;nfigen,Verpackung,verschmort,versehen," +
                   "versenkt,versetzen,Version,Versuch,verwendbare," +
                   "verwenden,verwendet,verwendete,verwendeten,Verwendung," +
                   "verzichte,Video,vier,Vierachser,violette,violetten," +
                   "voller,Volt,Vorbau,vorbildgerecht,Vorbildgerechte," +
                   "vorbildgerechten,Vorbildinformationen,vordere,vorderen," +
                   "Vorg&auml;nger,vorgenommen,vorgesehen,vorgesehene," +
                   "vorgesehenen,vorhanden,vorhandenen,Vorkriegswagen,vorn," +
                   "vorne,Vorsatzschneepflugs,Vorsicht,vorsichtig," +
                   "vorsichtiges,Vorteil,Vorwiderstand,VS145,VT137,VT70," +
                   "VT95,waagerecht,waagerechte,Wagen,Wagenbeleuchtung," +
                   "Wagenenden,Wagenkastens,w&auml;hlen,W&auml;nde,Wandung,warmweiﬂ," +
                   "warm-weisse,wartungsfreie,wechselnde,Weg,Wehrmacht," +
                   "wehrt,Weinert,Weisbrod,weiss/rot,weisse,weiﬂem,weissen," +
                   "weiteren,Wenzel,werksseitig,Werner,Wichtig,wichtige," +
                   "Wichtigste,wichtigsten,Widerstand,Widerst&auml;nde,Willhaus," +
                   "Wissen,WN2,Worms,Wormser,W&uuml;rttembergerin," +
                   "w&uuml;rttembergische,W&uuml;rttembergs,www,z&auml;hle,zahlreiche," +
                   "z&auml;hlt,Zapfen,zeigt,Zeit,Zeitschrift,Zentrale," +
                   "Zentrierhilfe,zerlegen,Zg1,Zg2,Zg4,Zimo,ZIMO-Decoder," +
                   "Z&uuml;ge,zugeh&ouml;rigen,zugelassen,zugeschnitten,Zugf&uuml;hrers," +
                   "zugleich,Zugschlussbeleuchtung,Zugschlussignal," +
                   "Zugschlussignale,Zugschlusslicht,Zugschlussscheiben," +
                   "Zugschluﬂsignal,Zugspitzenbeleuchtung,zumal,zumindest," +
                   "zun&auml;chst,zurechtgeschnitten,Zur&uuml;st,Zur&uuml;stbeutel," +
                   "Zur&uuml;stteile,Zusammen,Zusammenbau,zusammengeklebt," +
                   "zusammengeschaltet,Zusammenspiel,zusammenzubauen," +
                   "zus&auml;tzlich,zus&auml;tzliche,zus&auml;tzlichen,zus&auml;tzlicher," +
                   "Zusatzplatine,Zuweisen,zweimal,zweite,zweiten,zweiter," +
                   "zwischenzeitlich";
       seite[29] = "decoder.htm";
beschreibung[29] = "Kr&uuml;melbahn - DCC-Decodereinbauten";
     begriff[30] = "aktualisieren,aktuell,&auml;ndert,anstelle,Bahn,Bahnen," +
                   "Bahnsinniges,Beschreibung,Betriebsordnung,Dateien," +
                   "Deutschen,Dienstvorschrift,Dienstvorschriften,Direkt," +
                   "Dokument,Duitse,eifrige,Eisenbahn-Bau," +
                   "Eisenbahn-Verkehrsordnung,Eisenbahnwesen,erreichen," +
                   "findet,Fotografieren,Fotografiererlaubnis," +
                   "funktionieren,Gesetz,Gesetze,gestellt,Gleispl&auml;ne," +
                   "G&uuml;terzugfahrpl&auml;ne,halten,helfen,Het,Impressum,Inhalt," +
                   "interessanten,Internet,Kr&uuml;melbahn,Lijntje,Link,Links," +
                   "Literatur,Mitteilung,Modellbahn,Nachricht,Navigation," +
                   "Norderney,Offizielle,rechtens,Regelwerk,Seite," +
                   "Serverstrukturen,signalbuch,snb,Solingen,Startseite," +
                   "stellt,Suchen,verbieten,Verbot,verfasst,Verf&uuml;gung," +
                   "versuche,Verweise,vorhanden,wissen,Wortlaut,Zeit";
       seite[30] = "dienst_db.htm";
beschreibung[30] = "Kr&uuml;melbahn - Dienstvorschriften der DB";
     begriff[31] = "Aktivit&auml;ten,anfordern,Anlage,Anlagenausgestaltungen," +
                   "Anlagengestaltung,Anlagenplatte,Anschlieﬂend," +
                   "aufgebohrt,aufstellen,Ausgestaltung,Bahnen," +
                   "Bahnsinniges,befestigen,befestigt,Ben&ouml;tigt,Ber&uuml;hrung," +
                   "beschrieben,Bev&ouml;lkerung,Bild," +
                   "blob/main/Modellbahn/Kr&uuml;melbahn,bohren,Bohrer,DCC," +
                   "Digitalbetrieb,Direkt,Einbau,eingesetzt,einsetzen," +
                   "Elektronik,eMail,Fahrzeugbau,fertig,Figur,Figuren," +
                   "gefragt,gemacht,githubinfo,Hand,heftigere," +
                   "Hektometertafeln,Impressum,Info,Informationen,Inhalt," +
                   "Jahresmodell,Klarsichtpl&auml;ttchen,kleben,kleines," +
                   "Kl&ouml;bchen,kommt,Kr&uuml;melbahn,Landschaft,Leben," +
                   "Leuchtstoffr&ouml;hren,Links,Literatur,Loch,L&ouml;sung,ltige," +
                   "Mercedes-Benz,Merscheider,Messingdraht,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Navigation,Nebenbahnsignale," +
                   "pdf,Preiser,provisorisch,Randerscheinungen,reiﬂt," +
                   "Schacht,Schotter,Seitenanfang,Sieht,Signalen,Sitzbank," +
                   "Solingen,Stabilit&auml;t,Standbein,standsicher,Startseite," +
                   "Straﬂenpfosten,St&uuml;ckchen,Suchen,Teil,umkippen," +
                   "Unsichtbarkeit,vorprogrammiert,vorsichtig";
       seite[31] = "figuren.htm";
beschreibung[31] = "Kr&uuml;melbahn - Anlagengestaltung - Figuren befestigen";
     begriff[32] = "Abelitz,abgeschaltet,Ansicht,ausgew&auml;hlter,Bahn,Bahnen," +
                   "bahnhof,Bahnh&ouml;fen,Bahnhofsk&uuml;rzel,Bahnsinniges,ben&ouml;tigt," +
                   "Betriebsstelle,Betriebsstellen,Betriebstellenk&uuml;rzel," +
                   "Button,de/apn,de/apn/KSO,Deutsche,Dienstvorschriften," +
                   "Direkt,direkte,DS100,Duitse,Emden,entsprechende," +
                   "function,funktionieren,Gleispl&auml;ne,Gleisplanes,Goch," +
                   "G&uuml;terzugfahrpl&auml;ne,HABZ,Haltepunkten,Hbf,Het,HMAR,HND," +
                   "HNN,https,Impressum,Inhalt,Internet,KGO,KLA,Klartext," +
                   "KLEL,KOPL,Kr&uuml;melbahn,KSGR,KSM,KSO,KSS,KSV,K&uuml;rzel," +
                   "Langenfeld,Leichlingen,length,Lijntje,Link,Links,Liste," +
                   "Literatur,Marienhafe,Modellbahn,Navigation,Norddeich," +
                   "Norden,Norderney,Opladen,PDF-Format,plan,Seiten," +
                   "Solingen,Solingen-Gr&uuml;newald,Solingen-Mitte," +
                   "Solingen-Schaberg,Solingen-Vogelpark,Startseite,steht," +
                   "stellt,Suchen,trassenfinder,&Uuml;bersetzung,usepdf," +
                   "Verf&uuml;gung,Zeichenfolge";
       seite[32] = "gleisplan.htm";
beschreibung[32] = "Kr&uuml;melbahn - Gleispl&auml;ne";
     begriff[33] = "Abfahrtspl&auml;ne,Aktuell,altbew&auml;rtes,Ankunfts,Aufstellung," +
                   "Bahn,Bahnen,bahnhof,Bahnhofs,Bahnsinniges,baut,braucht," +
                   "com,dbcargo,de/bin/db/stboard,Dienstvorschriften," +
                   "Direkt,Duitse,entdecken,erfolgreich,erhielt," +
                   "exe/dninput,function,gab,Gleispl&auml;ne,gueterfahrplan," +
                   "G&uuml;terz&uuml;ge,G&uuml;terzugfahrpl&auml;ne,hacon,Het,href,https," +
                   "Impressum,Inhalt,Internet,Kr&uuml;melbahn,K&uuml;rzel,Lijntje," +
                   "Links,Literatur,location,Modellbahn,Navigation," +
                   "Norderney,planner,Seitenanfang,Solingen,standard," +
                   "Startseite,Suchen,target,var,verkehrenden,verschwindet," +
                   "Webseiten,zug,Zugnummernsuche";
       seite[33] = "gueterzug.htm";
beschreibung[33] = "Kr&uuml;melbahn - G&uuml;terzugfahrpl&auml;ne";
     begriff[34] = "Abstand,Aktivit&auml;ten,Anbieter,anfordern,angebracht," +
                   "Anlagenausgestaltungen,Anlagenbild,Anlagengestaltung," +
                   "Ansatz,Anspruch,Antworten,Art,Artikel,Auflistung," +
                   "aufsteigender,Ausgangspunkt,ausgef&uuml;hrt,Bahnen,Bahnhof," +
                   "Bahnsinniges,bearbeitet,befestigen,Befinden,befindet," +
                   "beiden,beleben,benannt,Beschreibung,beschrieben,Best," +
                   "betr&auml;gt,blob/main/Modellbahn/Kr&uuml;melbahn,Bohrung,Brawa," +
                   "br&uuml;nieren,br&uuml;niert,Busch,DCC,Detail,dienen," +
                   "Digitalbetrieb,Direkt,dreieckige,Einbau,Einsatz," +
                   "Elektronik,eMail,entfernt,Entfernungen,entsprechend," +
                   "erhebt,erlaubt,erstellt,Fahrzeugbau,Figuren,flexibel," +
                   "Fohrmann,Folge,Fragen,Fremo,Fremo-Artikel,geklebt," +
                   "gemacht,gestaltet,gesteckt,gestossen,githubinfo,Gleis," +
                   "Gleises,Gleismitte,gr&ouml;ﬂeren,halber,Heft," +
                   "Hektometersteine,Hektometertafel,Hektometertafeln," +
                   "Hersteller,Hp1,H&uuml;lse,Impressum,Info,Informationen," +
                   "Inhalt,insbesondere,Jahresmodell,Kastens," +
                   "Kilometerbereich,Kilometerstein,Kilometertafel," +
                   "Kilometrierung,kl&auml;ren,kleine,Kleinigkeiten,kommen," +
                   "kommt,Kr&uuml;melbahn,Kunststoffstreifen,L&auml;nge," +
                   "Leuchtstoffr&ouml;hren,liefert,Links,Literatur,Loch,L&ouml;sung," +
                   "maﬂgeblich,MBZ,Mercedes-Benz,Merscheider,Messingbraun," +
                   "Messingdraht,Messingr&ouml;hrchen,Mitte,Modellbahn," +
                   "Modellfahrzeuge,Modul,Modulbau,Moduleinsatz,Modulen," +
                   "Montagelehre,Nachbarmodulen,Navigation," +
                   "Nebenbahnsignale,nette,optischer,Orientierung," +
                   "passenden,pdf,platziert,problemlose,Punkten," +
                   "Randerscheinungen,Richtung,RST-Modellbau,Schacht," +
                   "Schotter,Seiten,Seitenanfang,sieht,Signalen,Sitzbank," +
                   "Solingen,standsicher,Startseite,steckbar,steckbare," +
                   "Steckm&ouml;glichkeit,Steckm&ouml;glichkeiten,stehen," +
                   "Straﬂenpfosten,Strecke,Streckenentfernung," +
                   "Streckengleises,Streckenzeichen,St&uuml;ck,Suchen,Tafeln," +
                   "unabh&auml;ngig,untere,Unterseite,Vollst&auml;ndigkeit," +
                   "Weiterf&uuml;hrung,Zeitschrift";
       seite[34] = "hekto.htm";
beschreibung[34] = "Kr&uuml;melbahn - Anlagengestaltung - Hektometertafeln";
     begriff[35] = "anfordern,Angabe,auftreten,ausschlieﬂlich,Bahnen," +
                   "Bahnsinniges,ben&ouml;tigt,bestehende,Betreiber,Buchenstr," +
                   "cloud_2,Commercial,Cookies,D-42699," +
                   "Darstellungsprobleme,Daten,DCC-/LocoNET,Deeplinks," +
                   "dient,Direkt,eMail,eMail-Message,erwarten,existieren," +
                   "existierende,externe,Firmennamen,Format,ge&auml;nderte," +
                   "genannt,Ger&auml;t,Ger&auml;ten,Ger&auml;tes,geschieht,gew&uuml;nschten," +
                   "github,Haftung,Hinweise,Hobbies,Homepage,Homepages," +
                   "Impressum,Info,Inhalt,inhaltlicher,interessante," +
                   "Interessen,keinerlei,kommerziellen,Kontakte,Kontrolle," +
                   "Kr&uuml;melbahn,Links,Literatur,Marken,Meinung,Michael," +
                   "Modellbahn,nachbauen,Navigation,nichtgewerblicher," +
                   "Nutzer,Nutzung,Offer,personenbezogenen,Pflege," +
                   "Platinenlayouts,private,privater,Projekte,rein," +
                   "R&uuml;cksicht,Schaltplanzeichnungen,Schutzrechte,Seiten," +
                   "Solingen,sorgf&auml;ltiger,Startseite,Suchen,Suppe,Target," +
                   "&uuml;bernehme,Unterlagen,Verantwortlich,verf&uuml;gbar," +
                   "verlinkten,verweise,verwendet,wider,willkommen,WWW," +
                   "Zimmermann,zugeh&ouml;rigen";
       seite[35] = "impressum.htm";
beschreibung[35] = "Kr&uuml;melbahn - Impressum";
     begriff[36] = "Anf&auml;nger,Ausstellungstermine,Bahn,Bahnen,Bahnsinniges," +
                   "blob/main/Allgemein/Kr&uuml;melbahn,Brosch&uuml;ren,cher,cloud," +
                   "DCC,digital,Direkt,Fahrzeugselbstbau,github,githubinfo," +
                   "groﬂe,Guten,Impressum,Info,Informationen,Inhalt," +
                   "Interessante,kleine,Kr&uuml;melbahn,Kurzanleitung,Links," +
                   "Literatur,main_public,Michael,Michelstadt,Modell," +
                   "Modellbahn,Modellbahnelektronik,Modulbau,Navigation," +
                   "new,pdf,Projekte,Reihe,rund,Solingen,Suchen,Themen," +
                   "&Uuml;bersicht,Umgang,verf&uuml;gbar,Vergangenheit," +
                   "ver&ouml;ffentlicht,Videos,wichtige,Zimmermann";
       seite[36] = "index.htm";
beschreibung[36] = "Kr&uuml;melbahn";
     begriff[37] = "Abeler,achs,achs/2achs,achs/3achs,achs/4achs,achsig," +
                   "Actros,Actros18,Aktivit&auml;ten,Angaben,Anlagengestaltung," +
                   "Anlass,Anspruch,AROCS,Aufdruck,aufgelistet,Auflieger," +
                   "Autodesign,Autotransporter-H&auml;ngerzug,Bahnen," +
                   "Bahnsinniges,Balkhauser,Basismodelle,begr&uuml;ﬂen," +
                   "Bergische,Bergischen,beziehen,Bigspace,Br&uuml;cke,Burg," +
                   "cool,dankbar,DCC,Deutsches,Digitalbetrieb,Direkt," +
                   "Duoplex,Elektronik,eMail,Engels,Erg&auml;nzungen,erh&auml;ltlich," +
                   "erhebt,Erweiterung,Eurokoffer-Sattelzugauflieger," +
                   "Fahrzeug,Fahrzeugbau,Fahrzeuge,Fall,Faszination,Fauna," +
                   "Friedrich,Galileum,Gesenkschmiede,Gigaspace," +
                   "Glastransporter-Sattelzug,Gl&uuml;der,Hendrichs,Herpa," +
                   "Hersteller,Holzkiste,Impressum,Industriemuseum,Inhalt," +
                   "Innovation,irgendwie,Jahr,Jahre,Jahresmodell," +
                   "Johannisberg,Jumbogardinenplanen-Sattelzugauflieger," +
                   "Junior,Katalognummer,Katalognummern," +
                   "Kempfkipper-Sattelzug,Klammern,Klingenmuseum," +
                   "Kofferauflieger,Koffersattelzug,Korrekturhinweise," +
                   "Kotten,Krone,Kr&uuml;melbahn,Land,Liner,Links,Liste," +
                   "Literatur,Mercedes-Benz,Mercedes-Benz-Niederlassung," +
                   "Meusberger,Meuseburgerauflieger,Mobilit&auml;t,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,MP2,MP3,MP4,MP5,M&uuml;ngstener," +
                   "Museumsbahnen,Navigation,neuer,Niederlassung," +
                   "Nordbahntrasse,Plagiarius,Remscheid,Rheinisches,Ring," +
                   "Ronsdorfer,R&ouml;ntgenmuseum,Sammlerobjekte,Sammlung," +
                   "Sattelzug,Sattelzugmaschine,schicken,Schloﬂ," +
                   "Schwebebahn,schwer,Seitenanfang,SEL,SLT,Solingen," +
                   "Solingen-Remscheid-Wuppertal,Solinger,Stadthalle," +
                   "Stadtwappen,Startseite,Suchen,Tafel,Talsperre,Taxi," +
                   "Tiefbettauflieger,Tierheim,Uhrenmuseum,Uni," +
                   "Vollst&auml;ndigkeit,W198,Werkzeugmuseum,W&uuml;lfrath,Wupper," +
                   "Wuppertal,Wuppertal/Solingen/Remscheid," +
                   "Wuppertalbewegung,Wuppertaler,Wuppertruck,Zeittunnel," +
                   "Zoo,Zugmaschine";
       seite[37] = "jahreswg.htm";
beschreibung[37] = "Kr&uuml;melbahn - Mercedes-Benz Jahresmodell";
     begriff[38] = "A46,alte,anschlieﬂend,Bahnanlagen,Bahnd&auml;mme,Bahnen," +
                   "Bahnhof,Bahnh&ouml;fe,Bahnsinniges,Bau,befahren,beliebter," +
                   "blob/main/Solingen/Kr&uuml;melbahn,Br&uuml;cken,demontiert," +
                   "Dezember,Direkt,ebenso,eingestellt,endet,endg&uuml;ltig," +
                   "erhaltene,er&ouml;ffnet,Fahrzeuge,Februar,genannt," +
                   "geographisch,githubinfo,Gr&auml;frath,G&uuml;terverkehr,G&uuml;terzug," +
                   "Haltepunkt,Hauptbahnhof,heutigen,Impressum,Info,Inhalt," +
                   "insgesamt,interessanteste,Juni,Korkenzieherbahn," +
                   "Kr&uuml;melbahn,lang,letzte,Linienverlauf,Links,Literatur," +
                   "M&auml;rz,Modellbahn,Navigation,November,offiziell,pdf," +
                   "Personenverkehr,Reste,restliche,Seitenanfang,Skizze," +
                   "Solingen,Solingen-Gr&auml;frath,Solingen-Mitte," +
                   "Solingen-Nord,Solingen-Wald,Solinger,Stadtgebiet," +
                   "Stadtteil,Startseite,Strecke,Strecken,Streckenverlauf," +
                   "Suchen,S&uuml;dbahnhof,Teilstrecke,umgehend,Umgehungsbahn," +
                   "urspr&uuml;nglichen,verbindet,Verkehr,verkehrte,verlagert," +
                   "verl&auml;ngerte,Vohwinkel,Wald,Wanderweg,Wikipedia," +
                   "Wuppertal-Vohwinkel,zeigt,Zeit,Zug";
       seite[38] = "korkbahn.htm";
beschreibung[38] = "Kr&uuml;melbahn - Korkenzieherbahn";
     begriff[39] = "Abdeckung,abschneiden,Aktivit&auml;ten,aneinander,anfordern," +
                   "angelehnt,Anlagenausgestaltungen,Anlagengestaltung," +
                   "Anschluss,Anschlussdraht,Ansteuerelektronik,ansteuern," +
                   "axialem,Bahnen,Bahnsinniges,Bahnsteigleuchte,Bedarf," +
                   "befestigen,beschrieben,Betankungsanlage,Birnchen," +
                   "blob/main/Modellbahn/Kr&uuml;melbahn,dauerhaftere,DCC,dient," +
                   "Dieseltankstelle,Digitalbetrieb,Direkt,Drahtanschluss," +
                   "drei,durchgebrannt,Durchmesser,Einbau,Elektronik,eMail," +
                   "Ersatz,erwischt,Fahrzeugbau,Fertig,Figuren,gefallen," +
                   "gel&ouml;tet,gemacht,gew&uuml;nschter,githubinfo,Glaskuppel," +
                   "halbieren,halbiert,Halbschalen,Hektometertafeln," +
                   "hergestellt,Idee,Impressum,Info,Informationen,Inhalt," +
                   "Jahresmodell,kaltweiﬂ,Kenner,kOhm,Kr&uuml;melbahn," +
                   "Kunststoffr&ouml;hrchen,Kupferlackdraht,Kupferlackdr&auml;hte," +
                   "L&auml;nge,langes,LC10-Leuchtstoffr&ouml;hren-Simulator,LEDs," +
                   "letzten,Leuchtdioden,leuchteten,Leuchtstofflampe," +
                   "Leuchtstofflampen-Simulator,Leuchtstoffr&ouml;hre," +
                   "Leuchtstoffr&ouml;hren,Leuchtstoffr&ouml;hrenimitation,Links," +
                   "Literatur,Literaturhinweise,L&ouml;sung,Mercedes-Benz," +
                   "Merscheider,Miba,Michelstadt,Mikrobirnchen,milchig," +
                   "milchige,Mitte,Modell,Modellbahn,Modellfahrzeuge," +
                   "Modulbau,Moduleinsatz,m&ouml;glichst,musste,nachbilden," +
                   "nat&uuml;rlich,Navigation,Nebenbahnsignale,Neonr&ouml;hren,passt," +
                   "pdf,Randerscheinungen,Reihe,R&ouml;hrchen,Schacht,Schotter," +
                   "Schritte,Schritten,Seite,Seitenanfang,Signalen," +
                   "Sitzbank,SMD-Leds,Solingen,standsicher,Startseite," +
                   "Straﬂenpfosten,St&uuml;ck,Suchen,Tams,vergessen,verwendeten," +
                   "Viessmann,Vordach,vorhanden,Vorwiderstand,warmweiﬂ," +
                   "Wattest&auml;bchen,weiﬂem,wissen,zusammengel&ouml;tet";
       seite[39] = "leuchtr.htm";
beschreibung[39] = "Kr&uuml;melbahn - Anlagengestaltung - " +
                   "Leuchtstoffr&ouml;hren";
     begriff[40] = "American,amerikanische,Andreas,Anita,Anspruch,Arnold," +
                   "Artitec,Artmaster,ASOA,Association,&Auml;tzschilder," +
                   "&Auml;tztechnik,aufgenommen,Auhagen,Ausbesserungswerk,Autos," +
                   "Bahn,Bahnen,Bahnen/Clubs/Museen,Bahnen/F&ouml;rderverein," +
                   "Bahnsinniges,B&auml;ume,Baus&auml;tze,Bayrisches,BDEF," +
                   "Beckert-Modellbau,Bergische,Berlin,Beschriftungen," +
                   "Blumert,Bochum-Dahlhausen,Brawa,Brekina,Brohl," +
                   "Bruchhausen-Vilsen,Bundesverband,Burscheid,Busch," +
                   "Carsten,Cochemer,Cronenberger,Dampflokmuseum,dankbar," +
                   "Darmstadt-Kranichstein,DB-AG,DCC,Decor,Deutscher," +
                   "Deutsches,Deutschland,Dienstfahrzeuge,Dieringhausen," +
                   "Digital,Digitaler,Direkt,DREHSCHEIBE,Ebenso,Eisenbahn," +
                   "Eisenbahnfreunde,Eisenbahn-Freunde,Eisenbahn-Journal," +
                   "Eisenbahn-Kurier,Eisenbahnlinks,Eisenbahn-Magazin," +
                   "Eisenbahnmuseum,Eisenbahn-News,Eisenbahnromantik," +
                   "Elektronik,eMail,Engeln,erheben,Erkrath-Hochdahl," +
                   "Erweiterung,Europ&auml;ischer,Europas,existierende," +
                   "Fahrzeuge,Faller,Figuren,Firmen,Fleischmann,Fohrmann," +
                   "F&ouml;rderverein,FREMO,Freunde,Freundeskreis," +
                   "F&uuml;hrerstandsimulation,Gahler,Gassner,ge&auml;nderte,Geb&auml;ude," +
                   "Gipsbauformen,G&uuml;nther,Haan,Heico,Heki,Heris,Herpa," +
                   "Hersteller,Hinweise,historische,Historischer," +
                   "Hobby-Ecke,H&ouml;lscher,IGM,IIm,Impressum,IMT-Frowein," +
                   "Inhalt,Interessengemeinschaft,Japan,Joswood,Kaarst," +
                   "Kadee,Kantoor,Kato,Kibri,Kleinbahn-Museum," +
                   "Kleinserien-Fahrzeuge,Koblenz,Kr&uuml;melbahn,Kupplungen," +
                   "Kuswa,Lahnstein-Koblenz,L&auml;nderbahnforum," +
                   "Landschaftsgestaltung,LaserCut-Modelle,Lauer,Lemke," +
                   "Lenz,Leuchten,LGB,Liliput,Lima,Linkliste,Links,Liste," +
                   "Listen,Literatur,Lok-Magazin,Lok-Report,Lokschuppen," +
                   "Magazin,M&auml;rklin,Mber,MBZ,MEC,Meiningen,Menden," +
                   "Messingbaus&auml;tze,Messing-Pr&auml;zisionsmodelle,MIBA," +
                   "Micro-Metakit,Milit&auml;r,MKB-Modelle,MK-Schilderversand," +
                   "MOBA,Modell,Modellbahn,Modellbahnen,Modellbahner," +
                   "Modellbahnprodukte,Modellbahnverband,Modellbau-Joachim," +
                   "Modellbauzubeh&ouml;r,Modelleisenbahnclub,Modelleisenbahner," +
                   "Model-Loco,Modulbau,MoeBo,MOROP,Motorisierungen," +
                   "Museumsbahnen,Navigation,N-Bahn,NEM," +
                   "Neuenmarkt-Wirsberg,Neustadt/Weinstraﬂe," +
                   "Nieders&auml;chsisches,NMRA,N&ouml;rdlingen,Normen,North,Nothaft," +
                   "N&uuml;rnberg,Oberleitungen,Organisationen,Ostmodell,Peco," +
                   "Peddinghaus-Decals,Petau,Peter,Piko,Pola,Preiser," +
                   "RailCommunity,Railroad,RCN,Regional,Rheinland,Rietze," +
                   "Rivarossi,Roco,Saemann,Samba,SB-Modellbau,schicken," +
                   "Schienen,Schienenbus,Schienenverkehr,Schiffe,Schotter," +
                   "Schuhmacher,Schwarzwaldbahn,Seilzugkan&auml;le,Seitenanfang," +
                   "Selfkantbahn,Signale,Signaltechnik,Solingen," +
                   "Sommerfeldt,Sonstiges,Sp&ouml;rle,Startseite,Stellwerke," +
                   "Stellwerkssimulation,Suchen,SWR,Technikmuseum," +
                   "TE-Miniatur-Shop,Themen,Tillig,TL-Decals,Trix," +
                   "&Uuml;berregional,&Uuml;bersicht,Umbauten,USA,Verband," +
                   "Verkehrsmuseum,Vertrieb,Viessmann,Vohwinkel,Vollmer," +
                   "Vollst&auml;ndigkeit,Vorbild,Vulkan-Express,Weinert," +
                   "Werkstatt,Werkzeug,Wiking,WinRail,Wipperf&uuml;rth," +
                   "Wupperschiene,Wuppertal,W&uuml;rttemberg,W&uuml;rttembergische," +
                   "Zeitschriften,Zubeh&ouml;r,ZuSi";
       seite[40] = "link_bn.htm";
beschreibung[40] = "Kr&uuml;melbahn - Eisenbahnlinks";
     begriff[41] = "amerikanische,Anspruch,ATMEL,aufgenommen,Bahnen," +
                   "Bahnsinniges,ben&ouml;tigt,Bormann,Brenner8,dankbar,DCC," +
                   "DCC-Voltmeter,Deloof,DIAMEX,Digital,DigiTrax,Direkt," +
                   "Downloads,Ebenso,Eisenbahn,eMail,eMailAndGithub," +
                   "erheben,Erweiterung,ESU,existierende,finden,Fragen," +
                   "Frankenzentrale,Franken-Zentrale,Franz,FRED,FREDI," +
                   "Fremo,ge&auml;nderte,genannten,Grundlagen,Handregler,Hans," +
                   "Hardware,Hersteller,Hilfsmittel,Hinweise,Impressum," +
                   "Informationen,Inhalt,JMRI,Kr&uuml;melbahn,Lenz,Linkliste," +
                   "Links,Liste,Listen,Literatur,LocoBuffer," +
                   "LocoIO/blob/main/Documentation/LocoIO," +
                   "LocoIO-Zusammenfassung,LocoNET,LocoNET-Kabeltester," +
                   "LocoNET-Monitor,LocoNET-PC-Interface," +
                   "LocoNET-Pegeltester,LocoNet-Pullup," +
                   "LocoNET-Spezifikation,LocoNET-Uhr,LocoNET-Verst&auml;rker," +
                   "MicroChip,Microcontroller,Modellbahn,MS-SH,M&uuml;ller," +
                   "Navigation,Nebenuhr,Nebenuhr-Statusanzeige,offizielle," +
                   "OpenDCC,over,pdf,PIC-Programmierger&auml;t,PICs,PolEi," +
                   "Polungspr&uuml;fer,Processoren,Programmierger&auml;te,PROG-S2E," +
                   "Reinhard,RocRail,RSCLD,schicken,Seiten,Seitenanfang," +
                   "sicherlich,Software,Solingen,Spaxbooster,Spax-Booster," +
                   "Startseite,Stefan,Suchen,Tams,TCP,Thema,Themen,Treiber," +
                   "Uhlenbrock,Uhrendecoder-Franz,Uhrenzentrale," +
                   "USB-AVR-PROG,USBurn,Vollst&auml;ndigkeit,wiFred,WinAVR,WLAN," +
                   "WWW,Zimo,Zusammenfassung";
       seite[41] = "link_dcc.htm";
beschreibung[41] = "Kr&uuml;melbahn - Digitallinks";
     begriff[42] = "Abracadata,Accurail,american,amerikanische,Association," +
                   "Athearn,Atlas,Bachmann,Bahnen,Bahnsinniges,Casting," +
                   "change,club,Clubs,complete,DCC,Digital,Direkt,Dorado," +
                   "Eisenbahn,eMail,engineer,feel,for,free,happy,have," +
                   "Hersteller,Impressum,Inc,Inhalt,Kadee,Kato,Kr&uuml;melbahn," +
                   "Life-Like,linklist,Links,Lionel,list,lists,Literatur," +
                   "Magazines,Manufacturer,manufacturers,may,mistake,Model," +
                   "Modellbahn,Modelrailroader,MRR,Navigation,NMRA,North," +
                   "not,notification,Others,page,PlanIt,Products,Railroad," +
                   "receive,remarks,retailer,Roundhouse,RR-Track,same," +
                   "Scenics,send,Software,Solingen,Startseite,Suchen,taken," +
                   "the,there,This,Top,Train,Trains,usa,Walthers,want,way," +
                   "Woodland,you";
       seite[42] = "link_usa.htm";
beschreibung[42] = "Kr&uuml;melbahn - Links to american manufacturers";
     begriff[43] = "Adolf,alte,Anspruch,Anton,Arbeit,Arbeitsheft," +
                   "Arbeitskreis,Artikel,Auflage,Aufnahme,Aufstellung," +
                   "auﬂergew&ouml;hnliche,Autorenteam,Bahnbetriebswerk," +
                   "Bahnbetriebswerke,Bahndienstfahrzeuge,Bahnen," +
                   "Bahngeschehen,Bahnhofswandel,Bahnlinie,Bahnsinniges," +
                   "Balkanexpress,Band,bbecke,Beitr&auml;ge,Belz,bem&uuml;hen,Bendig," +
                   "Benrath,Berg,Bergische,Bergischen,Bergisches," +
                   "Bergisch-M&auml;rkische,Bergisch-M&auml;rkischen,Berichte,Beruf," +
                   "Betriebsmaschienendienst,bietet,Bildern," +
                   "Bochum-Dahlhausen,Boll,Bonn,Born-Verlag,Brinker,Br&uuml;cke," +
                   "Br&uuml;ckenfest,Br&uuml;ckenschlag,Br&uuml;gge,B&uuml;chern,Buchhandlung," +
                   "Bundesbahn,Christian,Dampf,Dampfeisenbahn,dankbar," +
                   "Denkm&auml;ler,Deutsche,Deutschland,Deutschlands," +
                   "Dieringhausen,Dieter,Direkt,Dirk,Dirlam,DVD," +
                   "Eckehard/Reimann,Eidam,eingestellt,Eisenbahn," +
                   "Eisenbahn-Ausbesserungswerk,Eisenbahnbr&uuml;cke," +
                   "Eisenbahnchronik,Eisenbahnen,Eisenbahnfilme," +
                   "Eisenbahnfotograf,Eisenbahnfreunde,Eisenbahngeschichte," +
                   "Eisenbahn-Journal,Eisenbahn-Kurier,Eisenbahnliteratur," +
                   "Eisenbahnverbindung,Elektrischen,eMail,Entlang,Erfurt," +
                   "Erg&auml;nzungen,erhebt,Ernst,Erscheinen,Erweiterung,Fall," +
                   "Faszination,FILM,Filme,finden,folgenden," +
                   "Fotodokumentation,Frank,Freiburg,Frenz,fr&uuml;hes,Galunder," +
                   "gebaut,GeraMond,Geschichte,gesperrt,Groﬂe,G&uuml;terz&uuml;ge," +
                   "Harald,Hauptsache,Hbf,Heft,Hehl,Heimatkunde,Helmut," +
                   "Henning,Heﬂler,Heuschele,Hinweise,HISTORIC,Historie," +
                   "historische,h&ouml;chste,Hoffnungstr&auml;ger,H&ouml;ltge," +
                   "Horst/Reimann,Hundertj&auml;hrig,Impressum,industriellen," +
                   "Inhalt,Inkeller,ISBN,Jahre,jung,J&uuml;rgen,J&uuml;rgen/Reimann," +
                   "Kaiﬂ,Kampen,Karl-Wilhelm,Kenning,Kierdorf,Klassiker," +
                   "Klee,Kohl,K&ouml;ln,Korkenzieherbahn,Korkenziehertrasse," +
                   "Korrekturhinweise,Kr&uuml;melbahn,K&uuml;nftig,Kurt," +
                   "Kurt/Zimmermann,Land,Landeskonservator,Lebenslauf," +
                   "Lehmann,Leichlingen,Links,Liste,Literatur," +
                   "Literaturliste,Lok-Report,Mackensen,Magazin,Manfred," +
                   "Mark,Markus,Martina,Menninghaus/Krause/van,Michael," +
                   "mittleren,Modellbahn,Monika,M&uuml;ngsten,M&uuml;ngstener," +
                   "M&uuml;nster,Museumsbahnen,Nahverkehrsliteratur,Navigation," +
                   "N-Bahn,Nebenbahn,Nebenbahngleisen,Nordbahn,Nordhorn," +
                   "N&uuml;mbrecht,Oberbergischen,Obus,O-Bus,Ohligs," +
                   "Ohligs-Lennep,Opladen,Orchester,Periodika,Pillmann," +
                   "Projekt,Prominente,Publikationen,Radevormwald,Ralf," +
                   "Raum,regionale,Reimann,Reisef&uuml;hrer,Remscheid," +
                   "Remscheid-Lennep,Revolution,rga-Buchverlag," +
                   "Rheinbahn-Triebwagenserie,Rheinisch-Bergische," +
                   "Rheinland,Rieppel,R&uuml;ckblende,R&uuml;ckblicke,Rudolf,Ruhrtal," +
                   "Sammlung,Sanierungsfall,S&auml;uberlich,Schandfleck," +
                   "Schatten,schicken,Schienen,Schmorleiz/Tappert," +
                   "Schriften,Schwindlefreie,Seitenanfang,Siegerland," +
                   "Soechting,Solingen,Solingen-Ohligs,Solingen-Vohwinkel," +
                   "Solinger,Stadt,Stadtbahnen,St&auml;dtedreieck,St&auml;dten," +
                   "Stadtgebiet,Startseite,Straﬂen,Straﬂenbahn," +
                   "Straﬂenbahnen,Straﬂenbahn-Zeitreise,Strecke,Strecken," +
                   "Suchen,Sutton,Sutton-Verlag,Symphonie,Tageblatt," +
                   "Talbr&uuml;cke,Talquerung,Technik,Technische,Teiltraum," +
                   "Thalbr&uuml;cke,Thema,Themen,Tram-Revue,&uuml;berarbeitete," +
                   "&Uuml;berregionale,Uhle,unterwegs,VDI-Verlag,Verbindung," +
                   "Verkehrsknoten,Verk&uuml;mmerns,Verlag,VHS-Video,Vogelsang," +
                   "Vohwinkel,Volbild,Vollst&auml;ndigkeit,Walther,Weihrauch," +
                   "Werner,Westf,Wolfgang,Wupper,Wuppergrund,Wuppertal," +
                   "Wuppertalbahn,Wupper-Talbahn,Wuppertaler,Wuppertals," +
                   "Wuppertal-Steinbeck,zahlreichen,Zeitschriften,Zeno," +
                   "Zwischenhalt";
       seite[43] = "literat.htm";
beschreibung[43] = "Kr&uuml;melbahn - Solingen-Literatur";
     begriff[44] = "Anspruch,Arend,Aufgaben,Axel,Bad,Bahndienst," +
                   "Bahndienstfahrzeuge,Bahndienst-G&uuml;terwagen," +
                   "Bahndienst-Triebfahrzeuge,Bahndienstwagen,Bahnen," +
                   "Bahnfeuerwehren,Bahnpostwagen,Bahnsinniges,Band,Bauen," +
                   "Baureihen,Best,Betrieb,Bilder,Boldt,Bothe,Carstens," +
                   "Culemeyer-Fahrzeuge,dankbar,Deppmeyer,Deutsche," +
                   "Deutschen,deutscher,Dienstfahrzeuge,Dienstg&uuml;terwagen," +
                   "Dietrich,Direkt,Draisinen-Katalog,Driesch,Eigenverlag," +
                   "eisenbahndienstfahrzeuge,Eisenbahnen,Eisenbahnfreunde," +
                   "Eisenbahngeschichte,Eisenbahn-Kurier,eMail,Erg&auml;nzungen," +
                   "erhebt,Erweiterung,Estler,Fall,Feuerwehr," +
                   "Generationswechsel,Gleisbau,Gleisbaufahrzeuge,Goliath," +
                   "G&uuml;lzow,G&uuml;terwagenbauart,Heft,Henn,Herkules,Hilfsz&uuml;ge," +
                   "Impressum,Infrastruktur,Inhalt,ISBN,John,Kandler," +
                   "Kirsch,Kleine,Klv01,Klv98,kommen,Korrekturhinweise," +
                   "Kr&uuml;melbahn,Links,Liste,Literatur,Literaturliste," +
                   "Lokrundschau,Lok-Versuchsamt,Meﬂwagen,Miba,Modell," +
                   "Modellbahn,Modellbahn-Kurier,Motorbuch-Verlag,Nauheim," +
                   "Navigation,Nebenfahrzeuge,Peter,Plasser,Podszun-Verlag," +
                   "Polnik,Publikationen,Regel,Reichsbahn,Report," +
                   "Rettungsz&uuml;ge,Rheinisch-Bergische,Sammlung,schfahrzeuge," +
                   "schicken,Schiene,Schienenfahrrad,Schnellumbauzug," +
                   "Schwerlasteinsatz,Seite,Solingen,Sonderlinge," +
                   "Spezialwagen,Spitzhacke,Startseite,Stefan,Stepputats," +
                   "Straﬂenroller,Suchen,Technik,Thomas,Turmtriebwagen," +
                   "Typenkompass,Typenkunde,&Uuml;bersicht,Udo,Verlag," +
                   "Versorgung,Vollst&auml;ndigkeit,Wagenpark,Wagner,Wetterau," +
                   "Wohnenk,Wolfgang,Zugmaschinen,Zweck,Zwischenhalt";
       seite[44] = "literatd.htm";
beschreibung[44] = "Kr&uuml;melbahn - Literatur Bahndienstfahrzeuge";
     begriff[45] = "aktualisierte,Armin,Auflage,Bahnbetriebswerk," +
                   "Bahndienstfahrzeuge,Bahnen,Bahnlinie,Bahnsinniges," +
                   "Balkanexpress,Br&uuml;ckenschlag,Br&uuml;gge,Cronenberg,Direkt," +
                   "Eisenbahnen,Eisenbahngeschichte,Eisenbahnlinie," +
                   "Eisenbahnverbindung,Elberfeld,erweitere,Filiale,Hasten," +
                   "Hbf,Heft,Impressum,Inhalt,Inkeller,ISBN,Kaiﬂ," +
                   "Korkenzieherbahn,Kr&uuml;melbahn,Kurt,Kurt/Kugel," +
                   "Kurt/Peplies,Kurt/Zimmermann,Leichlingen,Lennep,Links," +
                   "Literatur,Michael,Modellbahn,M&uuml;ngsten,Navigation," +
                   "Nebenbahn,Nebenbahngleisen,Neuauflage,Oberbergische," +
                   "Opladen,Pillmann,Publikationen,Radevormwald,Remscheid," +
                   "Remscheid-Lennep,Rheinisch-Bergische,Rudolf,Samba," +
                   "Seitenanfang,Solingen,Startseite,Stichbahn,Suchen," +
                   "Thomas/Peplies,&uuml;berarbeitete,Verlag,Vohwinkel,Westf," +
                   "Wuppertal,Wuppertalbahn,Zeno/Sch&uuml;rings,Zwischenhalt";
       seite[45] = "literatr.htm";
beschreibung[45] = "Kr&uuml;melbahn - Rheinisch-Bergische " +
                   "Eisenbahngeschichte";
     begriff[46] = "Bahnbetriebswerk,Bahndienstfahrzeuge,Bahnen,Bahnhof," +
                   "Bahnsinniges,Birgit,Blumenberg,B&ouml;rdedorf,Direkt," +
                   "Eisenbahn,Eisenbahnen,Eisenbahngeschichte," +
                   "Fuﬂg&auml;ngerbr&uuml;cke,Geschichte,Impressum,Inhalt,Inkeller," +
                   "ISBN,Kaiﬂ,Kleinbahn,Kr&uuml;melbahn,Kurt,Kurt/Becker," +
                   "Leichlingen,Links,Literatur,L&uuml;tzenkirchen,Modellbahn," +
                   "Navigation,Ohligs,Opladen,Publikationen," +
                   "Rheinisch-Bergische,Rudolf,Solingen,Startseite,Suchen," +
                   "Verlag,Wandel,Weg,Werk,Zeit,Zwischenhalt";
       seite[46] = "literatz.htm";
beschreibung[46] = "Kr&uuml;melbahn - Zwischenhalt";
     begriff[47] = "Abbildung,Abteiweg,achs,Actros,Aktien-Brauerei," +
                   "Aktivit&auml;ten,Albedo,Alt,Angaben,Anlagengestaltung," +
                   "Anmerkungen,Anspruch,Aufderh&ouml;he,Aufdruck," +
                   "Aufdruck/Anlass,aufgelistet,Aufkleber,Automodelle,AWM," +
                   "Bahnen,Bahnhof,Bahnsinniges,Balkhauser,Basis4473," +
                   "Basis4481,Basismodelle,Baugr&ouml;ﬂe,Baugr&ouml;ﬂen,Baumschule," +
                   "Baustoffe,Bauverein,Beckes,Beckmann,Benz,Bergisch," +
                   "Bergischen,Berufsfeuerwehr,Besitz,beziehen,Bier," +
                   "Bierlastwagen,Bigspace,blau,braun,Brawa,Brekina,Br&uuml;cke," +
                   "Burg,Burger,Bus,Busch,Busdepot,Bus-Nr,Citaro,C-Klasse," +
                   "Com,Crossley,Dampflastwagen,dankbar,DCC,Decals,Design," +
                   "Design-RTW,Deutsches,Digitalbetrieb,Diller,Direkt,DLA," +
                   "DLK,Drehleiter,dreiteilig,Dreizackwerk," +
                   "Einsatzfahrzeuge,Eisenbahn,Eisenbahnwagen,elasto," +
                   "Elektronik,eMail,Emil,Erg&auml;nzungen,erh&auml;ltlich,erhebt," +
                   "erkennbar,Erweiterung,Fahrzeug,Fahrzeugbau,Fahrzeuge," +
                   "Fall,Faller,Fauna,Feinkostfabrik,Feuerwehr," +
                   "Feuerwehrfahrzeugen,FJ/2104,Fleischmann,Foden,Ford," +
                   "form,Fortwo,FuRW,G10,Galileum,ge&auml;nderte,gelb," +
                   "Gesenkschmiede,Gigaspace,Gittern,Glasdach,Glr22,Gl&uuml;der," +
                   "GMC,Gms30,Golf,Gr20,Gr&auml;frath,Grafweg," +
                   "Graf-Wilhelm-Platz,Groﬂw&auml;scherei,gr&uuml;n,gr&uuml;nem,GT-HD," +
                   "H0-N-Z,Haan-SG,Hahn,H&auml;ngerzug,Hanns,Haribo," +
                   "Hauptbahnhof,Heinen,Henckels,Hendrichs,Henschel,Herpa," +
                   "Hersteller,Hess,Hillers,historische,Holden,Ichqrs," +
                   "Ichqrs377,III,Impressum,Industriemuseum,Informationen," +
                   "Inhalt,Item,IVECO,Jahr,Jahre,Jahresmodell,Kaffee," +
                   "Kasten,Katalognr,Katalognummern,KatS,KdoW,Keull," +
                   "Klammern,Klingen,Klingenmuseum,Klinikum,Kmmgks58," +
                   "Knirps,Koffersattelzug,Kohlsberg,Koll,Kombi," +
                   "Kommandowagen,Korrekturhinweise,Kotten," +
                   "Krankentransport,Kreuz,Kronprinz-R&auml;der,Kr&uuml;melbahn," +
                   "Krups,KTW,KTW4,Kuga,L1500S,L408G,L4500,Lamellendach," +
                   "Land,LF20/10,LF20/16,LF25,LF8,Links,Liste,Literatur," +
                   "L&ouml;hmers,Luchtenberg,M32L-AS,Mack,made,Magirus,Malteser," +
                   "Malz,Mangenberg,M&auml;rklin,Matchbox,MEC-Wuppertal,Meisen," +
                   "meisten,Mendoza,Mercedes,Mercedes-Benz,Merscheid," +
                   "Meuseburgerauflieger,Minichamps,Minitrix,Mittelt&uuml;ren," +
                   "M&ouml;bel,M&ouml;belhaus,mobil,Modellbahn,Modellbau,Modelle," +
                   "Modellfahrzeuge,Modellfahrzeugliste,Modulbau,moosgr&uuml;n," +
                   "Morris,MP5,M&uuml;ngstener,Museumswagen,muss,Mykonos,N-3," +
                   "Navigation,NEF,neutral,Niederlassung,Notfallseelsorge," +
                   "O302-11,O305,O405,O405N,O530,OBI,Obus,O-Bus," +
                   "O-Bus-Anh&auml;nger,Obusmodelle,Obus-Museum,Ohligs,Ohligser," +
                   "Oldtimerfreunde,Orion,Ortsbezug,Panel,patiniert," +
                   "PCX871073,Pfefferminz,PHZ,Pils,Plagiarius,Preiser," +
                   "Pritsche,Pritschenwagen,Qualit&auml;t,Quality,RAL,Reifen," +
                   "Rheinisches,Rietze,Rlmms,Rmmso,Roco,Roskopf,Rotes,Rstn," +
                   "RTW,Rundhauber,S328DT,Samba,Sammlerobjekte,Sammlung," +
                   "Sattelzug,Scania,scharf,schicken,Schlingmann,Schloﬂ," +
                   "Schloﬂ-Burg,Schmidt,Schnug,Schokolade,Schuco,schwer," +
                   "Seilbahn,Seitenanfang,Set,Setra-Bus,SG-2030,SG-2032," +
                   "SG-2068,SG-2074,SG-2075,SG-2121,SG-2306,SG-2311," +
                   "SG-2328,SG-2330,SG-2345,SG-2391,SG-267,SG-283,SG-SG," +
                   "SG-SW,Sharan,Siepmann,Siku,SL172,Smart,Solingen," +
                   "Solinger,Spar,Spedition,Sprinter,SSk07,Stadtsparkasse," +
                   "Stadtwappen,Stadtwerke,Startseite,Streifen,Suchen," +
                   "SwissTrolley3,Sword,SWS,Tageblatt,Taverne," +
                   "Termingerecht,TGM,Tierheim,Tierpark,Tk01,TLF,TLF16," +
                   "Transit,Transporter,TroLf,U5023,&Uuml;HIIIs,Uhs,Van,Variant," +
                   "Veltins,Verkehrsaufsicht,Vito,VK-Modelle,Volksbank," +
                   "Volkswagen,Vollst&auml;ndigkeit,VW-Kasten,Wagen,Walbusch," +
                   "Wald,WDV,weiﬂ/rot,Weltruf,Werbedruck,Werbung," +
                   "Wiedenhoff,Wiegand,WIETMARSCHER,Wiking,Wilkinson," +
                   "Wilkinson/Grell,Wilkinson-Quattro,WP100,WP101,Wupper," +
                   "Wuppertal-Solingen-Remscheid,W&uuml;sthof,W&uuml;sthoff-Dreizack," +
                   "W-Vohwinkel,YEX-04,YFE05-SA,YHN01/SC,YSG-01,YSG-02," +
                   "YSG-03,YSG-04,YSG-05,Zwilling";
       seite[47] = "modelle.htm";
beschreibung[47] = "Kr&uuml;melbahn - Eisenbahn- und Modellfahrzeuge aus " +
                   "Solingen";
     begriff[48] = "Ablage,Ablagen,Abmessung,abzweigender,Akkutriebwagen," +
                   "Aktivit&auml;ten,aktuelle,anfordern,angeschlossene," +
                   "angrenzende,Anlagengestaltung,Anlehnung,Attraktiver," +
                   "August,Ausbau,Ausflugspunkt,Auﬂen,B02,B96," +
                   "Bahnbetriebswerk,Bahndamms,Bahnen,bahnhof," +
                   "Bahnhofsdatenblatt,Bahnsinniges,Batterien,baue," +
                   "Baus&auml;tze,Begrasungsger&auml;t,beherrschen,ben&ouml;tigte,Bereich," +
                   "Betrieb,Betriebes,bew&auml;hrt,bietet,Bild,Bogen,Brosch," +
                   "chronologisch,cloud,cmt,Cronenberger,Dampflokomotiven," +
                   "DCC,Details,Diesellokomotiven,Dieselzugf&ouml;rderung," +
                   "Digitalbetrieb,Dioramen,Direkt,Download,DRK-Wersten," +
                   "ebenso,Eigeninitiative,eigentlich,Eisenbahntage," +
                   "elektrischen,Elektronik,eMail,eMailAndCloud," +
                   "entsprechende,Entwicklung,Epoche,erforderlich," +
                   "Erkrath-Hochdahl,erleichtert,erstellen,existieren," +
                   "Fahrzeug,Fahrzeugbau,Fahrzeuge,Fahrzeugkarte," +
                   "Fahrzeugpark,Fahrzeugparkes,FdE-Burscheid,Februar," +
                   "fiktives,Frachtauftr&auml;ge,Frage,Fred,fred_ablage," +
                   "FRED-Karten,Fremo-Kopf,FREMO-Norm,f&uuml;llen,gehalten," +
                   "geignet,genauer,gestaltet,gew&uuml;nscht,Gipsabdr&uuml;cken," +
                   "githubinfo,gleichg&uuml;ltig,G&uuml;terumschlag,H0-Bergprofil," +
                   "H0-Europa,Haan,Haaner-Sommer,Hafen,handelt,Handregler," +
                   "Harald,Hauptbl&uuml;tezeit,Heft,helfen,Herstellung,Hinweis," +
                   "III,Impressum,Info,Informationen,Infos,Inhalt," +
                   "Internationale,inzwischen,irgendwann,ISBN,Jahren," +
                   "Jahresmodell,Juli,Juni,Kanal,Kanal&uuml;berquerung,Karten," +
                   "Kern,Kirchengemeinde,Klein-Bahnbetriebswerk,kleine," +
                   "kleinster,komplett,Kopfprofil,Krieg,Kr&uuml;melbahn," +
                   "Kurvenmodul,Lahnstein,Landschaftsgestaltung,Langerfeld," +
                   "lege,Leichlinger,leicht,Leverkusen,linke,Links," +
                   "Literatur,Lok,Lokschuppen,Mai,M&auml;rz,MEC,Mercedes-Benz," +
                   "Miba,Michelstadt,Michelst&auml;dter,mitbringt,miteinander," +
                   "Modellbahn,Modellbahnausstellung,Modellbahnpraxis," +
                   "Modellbahntage,Modelleisenbahntage,Modellfahrzeuge," +
                   "modernen,Modul,modul_daten,Modulbau,Moduldatenbl&auml;tter," +
                   "Module,Modulen,Modulenden,Modulseiten,Modultreffen," +
                   "Modul&uuml;bersicht,muss,N/S-Wender,Nachdenken,Navigation," +
                   "Nebenbahnstrecke,November,offenen,Oktober,passt,pdf," +
                   "Profil,Radius,rechte,repr&auml;sentieren,restaurierte," +
                   "R&ouml;merturm,S/N-Wender,Segmente,sehen,Seitenanfang," +
                   "Sensenhammer,September,sieht,Signal,Signale," +
                   "Signalisierung,Signalkunde,Signalmodul,Signalwerkstadt," +
                   "Silikonformen,Skizze,Solingen,Spezial,Sp&ouml;rle," +
                   "Startseite,stattfand,Steht,stellen,stellt,Steuerung," +
                   "Strecke,Streckenmodul,Stuhl,Suchen,Tag,Tanks," +
                   "technischen,Tisch,Traktionswechsel,Trassenbrett," +
                   "Triebfahrzeuge,tun,T&uuml;r,typisches,umgestellt," +
                   "Veranstaltungen,verbindet,Verf&uuml;gung,verschiedenen," +
                   "Wagen,Wagenkarten,Weichen,weiteren,Werkstatt," +
                   "Wiederaufbau,Wuppertal-Cronenberg,zugeordnet,zuordnen," +
                   "zus&auml;tzlich,zust&auml;ndig";
       seite[48] = "modulbau.htm";
beschreibung[48] = "Kr&uuml;melbahn - Modulbau";
     begriff[49] = "abgeschaltet,Ablage,abrupt,Abschnitt,Abst&auml;nden," +
                   "Abweichnung,Adresse,Adressierung,Aktivit&auml;ten,aktuell," +
                   "aktuelle,aktuellen,alt,alter,Analog,analogen,analoger," +
                   "&Auml;nderungen,anfordern,Anforderungen,Angabe,angebunden," +
                   "angelehnt,angeschlossen,angeschlossenen,angesteuert," +
                   "anhalten,Anlage,Anlagenbetreiber,Anlagengestaltung," +
                   "Anleitungen,anrollende,Anschluﬂkabel,anstelle," +
                   "Ansteuerung,Antworten,Anzeige,arbeiten,arbeitende," +
                   "arbeitet,Arduino-Plattform,Arrangements,Artikel,Aufbau," +
                   "Aufgaben,aufgef&uuml;hrt,aufw&auml;ndig,Ausstellungen,Auswahl," +
                   "auszuf&uuml;hren,Bahnen,Bahnhof,Bahnhofsfahrordnung," +
                   "Bahnhofsfahrordung,Bahnsinniges,Bau,Bauvorschlag," +
                   "Beachten,bearbeiten,bedienende,Bedienhandlung," +
                   "Bedienungsanleitung,bedingt,befindet,befindliche," +
                   "bekannten,bekomme,bekommen,belastet,Beleuchtung," +
                   "ben&ouml;tige,ben&ouml;tigen,ben&ouml;tigt,ben&ouml;tigten/verwendeten," +
                   "Beschreibung,beschrieben,bestanden,besteht,Betrieb," +
                   "Betriebssystem,bew&auml;hrt,Bew&auml;hrungsprobe,Bild,bilden," +
                   "bleibt,Blocksteuerung,Booster,bot,brems_gen," +
                   "Bremsgenerator,Bremsgenerator/Pendelautomatik," +
                   "Bremsgeneratoren,Bremsgenerators,Bremsweg,bringen," +
                   "bringt,Broadcast-Meldung,cloud,Commercial,CV8," +
                   "CV-Einstellungen,darin,dass,Datenbank,Datensignalen," +
                   "DCC,DCC-/LocoNET,DCCblau,DCC-Decoder," +
                   "DCC-Decodereinbauten,DCC-Gleissignal,DCC-Signal," +
                   "DCC-Signales,DCC-System,DCC-Voltmeter,DCC-Zentrale," +
                   "Decodereinbauten,Decodern,DecoderPro,defekt,Deloof," +
                   "Details,dient,Digital,Digitalbetrieb,digitaler," +
                   "Digitalsignal,Digitalsysteme,Digitrax,Digitrax-Format," +
                   "Dingen,Direkt,direkten,DISPA,Dokument,Drei,drucken," +
                   "e7_de,e7_en,ehmliche,eigenes,eigentlich,eigentlichen," +
                   "einfachem,eingesetzt,eingespeist,Einsatz,Einstellung," +
                   "einwandfrei,einzig,Eisenbahn-Magazin,Elektronik,eMail," +
                   "eMailAndCloud,eMailAndGithub,emos,enthaltenen," +
                   "entsprechenden,entwickelt,Erfahrungen,erforderlich," +
                   "Erinnerung,Ersatz,erschien,ersetzt,erstellt," +
                   "Erweiterungen,existieren,F12,F13,F16,F&auml;higkeit,fahre," +
                   "Fahren,Fahrplan,Fahrplandatei,Fahrpl&auml;ne,Fahrstrom," +
                   "Fahrzeug,Fahrzeugbau,Fahrzeuge,Fahrzeuges," +
                   "Fahrzeuginformationen,Fall,FastClock,FastClock-Decoder," +
                   "Fehler,festgelegt,festzulegen,fill,finden,Firma,fka," +
                   "Format,Fpl2Bfo,FPLEdit,FPL-Format,Fragen," +
                   "Frankenzentrale,Franz,FRED,FREDI,FREDI-Diagnose,FREDIs," +
                   "freie,Fremo,FREMO-Bauvorschlag,FREMO-Regeln," +
                   "FREMO-Telefon,Funktionen,funktionieren,gab,gebaut," +
                   "Gedanken,geeignet,gehalten,gemacht,gen&uuml;gend,Ger&auml;t," +
                   "Ger&auml;te,Ger&auml;ten,Ger&auml;tes,geschaltet," +
                   "Geschwindigkeitsgeber,gesendet,get&auml;tigt,getrennt," +
                   "gew&uuml;nscht,gew&uuml;nschten,githubinfo,Gleis,Gleisanlagen," +
                   "groﬂen,gr&ouml;ﬂeren,Grundlagen,Grundversorgung,Halten," +
                   "Handregler,Hans,Hardware,Hardwarebasis," +
                   "Hardwareschnittstelle,Hersteller,Herstellercode," +
                   "hilfreich,hinein,h&ouml;her,hover,Hp0,Hub,Huber,identisch," +
                   "Implementierungen,Impressum,Inbetriebnahme,infacher," +
                   "Info,Informationen,Inhalt,inklusive,Inkremental," +
                   "Inkrementalgeber,insgesamt,Interessante,Interessenten," +
                   "interessiert,investieren,Inzwischen,Jahresmodell,JMRI," +
                   "Kabeltester,Kabelverbindungen,kam,Kehrschleifenmodul," +
                   "klare,kleine,kleinen,kleines,klicken,kommen," +
                   "kommerzielle,kommt,Kompakteinheit,Komponenten," +
                   "Konfiguration,Kontakt,konvertieren,Kr&uuml;melbahn,Lage," +
                   "l&auml;ngste,Laptop,Laptops,laufen,Leitungen,Lenz,Lesen," +
                   "letztlich,Leuchten,liefert,Links,Literatur,LK100," +
                   "ln_hub,ln_test,LocoBuffer,LocoIO," +
                   "LocoIO/blob/main/Documentation/LocoIO," +
                   "LocoIO-Beschreibung,LocoIO-Module,LocoIO-Platinen," +
                   "LocoIO-Zusammenfassung,LocoNET,LocoNET-HubSupply," +
                   "LocoNET-Nebenuhr,LocoNET-Nebenuhr-Statusanzeige," +
                   "LocoNet-Pegeltester,LocoNet-Pullup,LocoNET-Tester,Lok," +
                   "Lokadresse,Lokmaus,L&ouml;sung,L&ouml;sungen,Manuel,meines," +
                   "Mercedes-Benz,mittels,Modellbahn,Modellbahnzeit," +
                   "Modellfahrzeuge,modifiziertes,Modulaufbau,Modulbau," +
                   "Modulen,M&ouml;glichkeit,Monitor,Nachbau,nachbauen," +
                   "nachempfunden,nachfolgenden,nachlesen,Nachr&uuml;stung," +
                   "Navigation,Nebenuhr,Nebenuhren,Nebenuhr-Statusanzeige," +
                   "nkremental,normalen,Null,Offer,OLED,opacity," +
                   "OPC_IMM_PACKET,OPC_LOCO_F912,OPC_UHLI_FUN,OpenDCC," +
                   "OpenDCC-Zentrale,OpenDCC-Zusammenbau," +
                   "Open-Source-Komponente,over,parallele,paralleler," +
                   "passende,passt,pdf,Pegeltester,pendel,Pendelautomatik," +
                   "PiLocoBuffer,Platinenlayouts,PolEi,polig,Polungspr&uuml;fer," +
                   "Potentiometer,praktikable,Prinzip,Problem," +
                   "Problemstellung,Programm,QR-Code,QR-Code-Leser," +
                   "RaspBerry,reagiert,realisiert,rect,redesignten,Regel," +
                   "regelm&auml;ﬂigen,rehregler,Reichelt,Reparatur,richtet,RJ12," +
                   "Roco,Roco-Format,Roco-Lokmaus2,Roco-System,RocRail,rot," +
                   "RS232-Schnittstelle,RS232-USB-Wandler,RSCLD," +
                   "SaddleBrown,Saft,Schaltplanzeichnungen,scheitert," +
                   "Schienen,schnellere,Schnittstelle,Schreiben,schwach," +
                   "schwieriger,Seite,Seitenanfang,selbst&auml;ndig," +
                   "selbstverst&auml;ndlich,sende,serielle,serieller,Servos," +
                   "Shift-Taste,sieht,Signal,Signalabschnitt,Signale," +
                   "Signalen,simpel,Skizze,Software,Software-Version," +
                   "Solingen,Spannungs,Spaxbooster,spezielle,speziellen," +
                   "spezieller,Spezifikation,Startseite,Steckverbinder," +
                   "stehen,stellen,Stellvorg&auml;nge,Steuern,Steuerung," +
                   "Steuerungsprogramm,Steuerungssoftware,Strommessger&auml;t," +
                   "Suche,Suchen,SWD-FREDI,System,Tabelle,Taktgeber,Tams," +
                   "Target,TCP,Telefonanlage,Telegrammen,Testen,Testger&auml;te," +
                   "teuer,Thema,Throttle,Trennung,Triebfahrzeug," +
                   "Triebfahrzeuge,&uuml;berall,&uuml;berfl&uuml;ssig,&uuml;bernommen," +
                   "&Uuml;bersicht,&uuml;bertragen,Uhlenbrock,Uhr,Uhrendecoder," +
                   "Uhrenzentrale,Umbauanleitung,Umstellung,umzubauen," +
                   "unbedingt,unbekannt,unendlich,uninteressant," +
                   "universellen,Unterlagen,unterschiedliche,unterst&uuml;tzt," +
                   "uordnungsbox,uralt,USB,USB-Isolator,USB-Leitung," +
                   "Variante,Verbesserung,Verbindung,Verdrahtung,verf&uuml;gbar," +
                   "Verf&uuml;gung,Vergangenheit,verschiedenen,Version," +
                   "Versionen,Verst&auml;rker,Verteilerboxen,Verwaltung," +
                   "verwende,verwenden,verwendet,verwendete,verwendeten," +
                   "vier,volle,Vorgehensweise,vorhanden,Vorraussetzung," +
                   "Vorsicht,Wege,Weicheneinbau,Weiten,weiterentwickelt," +
                   "weiteres,weiterf&uuml;hrende,weitl&auml;ufige,wiFRED,wiFREDs," +
                   "windows-basierten,wiThrottle-Server,WSK,WWW,x6-6," +
                   "XPressNet-Protokoll,zahlreiche,zeigenden,zeigt,Zeit," +
                   "Zenrale,Zentrale,Zentralen-Konzept,Zubeh&ouml;r,zuf&auml;hrt,Zug," +
                   "Zugegeben,zugeh&ouml;rigen,zugewiesen,Zugf&uuml;hrer,Zugriff," +
                   "Zukunft,zukunftsf&auml;hig,Zuordnung,zusammen,Zusammenbau," +
                   "Zusammenfassung,zusammengefasst,zust&auml;ndig,Zuweisung," +
                   "zuzuweisen,zweiten,zwingend";
       seite[49] = "modulbau-digital.htm";
beschreibung[49] = "Kr&uuml;melbahn - " +
                   "Modulbau-DigitalVerdrahtungs&uuml;bersichtZentraleLaptop " +
                   "/ PCLocoNETDCCDecodereinbautenFred / Fredi / " +
                   "wiFredDispa (fka Franz)Uhrenzentrale und " +
                   "NebenuhrBoosterBremsgeneratorLocoIO";
     begriff[50] = "abgestellt,Aufenthaltsr&auml;ume,aufgestellt,Aufstellung," +
                   "August,Auslieferung,Bahnen,Bahnfahrzeuge," +
                   "Bahnfahrzeugen,Bahnhof,Bahnh&ouml;fe,Bahnsinniges,Bau," +
                   "Bauart,Baujahr,B-dm,begonnen,benachbarten,Bn2t," +
                   "Breitspurg&uuml;terwagen,Breslau,britischen,Buckau,Bygkr," +
                   "Corps,Cyklop,dienen,diente,dienten,Direkt,ehemalige," +
                   "eingestellt,Engelsberger,erhalten,erhaltene,erhaltenen," +
                   "Eugen,Fabrik-Nummer,Fahrgestell,Fahrzeuge,Fahrzeugen," +
                   "Fahrzeugnummer,Fahrzeugnummern,Firma,Fuhr,Gbs,gebaut," +
                   "gebauten,gedeckte,Gel&auml;nde,Geschichte,Gesenkschmiede," +
                   "gespielt,Getr&auml;nkehandler,Gewicht,GmbH,Gr&auml;frath," +
                   "Grevenbroich,G&uuml;terwagen,Hannover,Hattingen,Hebeb&uuml;hnen," +
                   "Hersteller,Hof,Hywema,Impressum,Inhalt,insgesamt," +
                   "inzwischen,jahrzehntelang,Jung-Jungenthal,kamen," +
                   "Kirchen/Sieg,Kletterlok,Korkenziehertrasse,Kronprinz," +
                   "Kr&uuml;melbahn,Krupp,Lager,Lazarettzugwagen,Leistung," +
                   "Lieferung,Linke-Hoffmann-Busch,Links,Literatur," +
                   "Lokgattung,Lokomotiv-Farbrik,L&uuml;p,Mannesmann,Marine," +
                   "Maschinen,Maschinenfabrik,Maschinentechnik,Modellbahn," +
                   "M&ouml;nchengladbach-Rheindahlen,nahezu,Navigation,nebem," +
                   "&ouml;ffentlich,Ort,ortsans&auml;ssigen,Rabbasol-Chemie," +
                   "Raddurchmesser,Radstand,Railway,RCT,Recycling," +
                   "Renovierung,Reuschling,Rheinarmee,Richtung,R&ouml;hrenwerke," +
                   "Royal,russischer,Scalabrin,Schmalzgrube,Schutzgittern," +
                   "Seitenanfang,September,Sicherheitsgr&uuml;nden," +
                   "Signalmeisterei,Solingen,Solingen-Nord,Solingen-Wald," +
                   "Solinger,sp&auml;tere,Spielplatz,Squadron,Stadtgebiet," +
                   "Stadtteil-Cafe,Startseite,stehen,steht,Strecken,Suchen," +
                   "Transport,Treffpunkt,Typ,umgezogen,unbekannt," +
                   "unfallfrei,Verbleib,verschiedensten,verschrotten," +
                   "verschrottet,verunstaltet,VN234,vorhanden,Vorortbahn," +
                   "Wagen,Werbelokomotive,Werftbahn,Westf&auml;lische,Wikipedia," +
                   "Wilhelmshaven,WLH,Wohnwerkstattwagen," +
                   "Wohn-Werkstattwagen,Wolf,zug&auml;nglichen,zuletzt,Zwecken";
       seite[50] = "museal.htm";
beschreibung[50] = "Kr&uuml;melbahn - erhaltene Fahrzeuge";
     begriff[51] = "Abbildung,Abstand,Aderendh&uuml;lse,Aktivit&auml;ten,akustisch," +
                   "Alternative,anfordern,Ankleben,Anlagengestaltung," +
                   "Anlagenspannung,anschlieﬂend,Anschluss,Ansicht," +
                   "Anspruch,anstelle,Antrieb,Arbeit,Artikel,Auflistung," +
                   "Aufstellen,Aufstellort,Auftrag,aufweicht,ausgedruckt," +
                   "ausger&uuml;stete,ausprobieren,ausschlieﬂlich," +
                   "Auﬂendurchmesser,auszur&uuml;sten,Bahnen,Bahnhof," +
                   "Bahnsinniges,Batterie,Baugr&ouml;ﬂe,Baum,befestigen,beiden," +
                   "Ben&ouml;tigt,ben&ouml;tigte,ben&ouml;tigten,berechnet,beschrieben," +
                   "besten,Betriebsspannung,Betriebsstelle,bietet,Bild," +
                   "Bildbearbeitungsprogramm," +
                   "blob/main/Modellbahn/Kr&uuml;melbahn,Bodenplatte,BRD," +
                   "br&uuml;nierten,B&uuml;4,Conrad,dass,DCC,definiert,Dicke," +
                   "Digitalbetrieb,Direkt,Draht,Dr&auml;hte,Dr&auml;hten,d&uuml;nner," +
                   "echtes,Einbau,einfacher,Einfahrt,Einfahrtsignal," +
                   "eingefeilt,Eisenbahn-Magazin,Elektronik,eMail," +
                   "eMailAndCloud,Ende,entfernt,entsprechend,Entwicklung," +
                   "Erfahrungen,erfolgen,erfolgreich,erfolgt,erh&auml;lt," +
                   "erhalten,erh&auml;ltlich,erhebt,erh&ouml;hter,erkennen,Ersatz," +
                   "erschienen,fahren,Fahrzeugbau,Farbdrucker,Farbe," +
                   "Feierabendbastelei,fertigt,Figuren,finden,floodland," +
                   "folgt,Geb&auml;ude,gedruckt,geeignet,gef&auml;delt,gef&auml;delten," +
                   "gef&uuml;hrt,gegeben,geklebt,gek&uuml;rzt,gek&uuml;rzte,gel&ouml;tet," +
                   "gemacht,geschehen,geschieht,gesteuert,gestreiftem," +
                   "gewerbliche,gezeichnet,Github,githubinfo," +
                   "githubRepository,Gleis,Gleismitte,Gl&uuml;hlampe,Gl&uuml;hlampen," +
                   "Gl&uuml;hlampenl&auml;nge,gr&ouml;ﬂere,halten,Hauch,Hektometertafeln," +
                   "herzustellen,hrender,htm,https,Impressum,Info," +
                   "info_opschriften_borden_1,Informationen,Inhalt," +
                   "interessanter,Jahresmodell,Karton,Kartonpappe,Kartons," +
                   "Kennlicht,Kennzeichnung,Klebt,kleine,Klick," +
                   "klitzekleinen,Konsequenz,Kostenfaktor,Kr&uuml;melbahn," +
                   "kurzes,lackiert,Lampe,lang,L&auml;nge,langes,leicht,letzte," +
                   "letzten,Leuchtstoffr&ouml;hren,Leuchttest," +
                   "Lichtsignalisierung,Lichtzeichen,Link,Links,Literatur," +
                   "LM317,Logische,Lokf&uuml;hrer,Lokomotive,L&uuml;sterklemme,Maﬂe," +
                   "Mast,Mastschild,Mercedes-Benz,Merscheider,Messing," +
                   "Messingdraht,Messingrohr,Miba,Mikrogl&uuml;hlampe," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,Module,Modulen," +
                   "Modulplatte,montiert,muss,nachger&uuml;stet,n&auml;chstes," +
                   "n&auml;chsth&ouml;herer,Navigation,Ne1,Nebenbahn,Nebenbahnen," +
                   "Nebenbahnsignal,Nebenbahnsignale,Nebenbahnsignalen," +
                   "Nebenbahnsignaltafeln,nl/aim,Normwert,Nothaft,nutzbar," +
                   "Nutzung,oberen,&Ouml;ffnung,Ohm,Paketen,passen,passend,PDF," +
                   "PDF-Format,Pfahl,Pfeiftafel,Pfosten,Pinsel,polige," +
                   "Preiser,preisg&uuml;nstige,Privatgebrauch,Problem,Punkt,RAL," +
                   "Rand,Randerscheinungen,Regel,richtige,Rubrik,Schacht," +
                   "Schaltungen,Schilder,Schotter,schr&auml;g,schreibt," +
                   "Schutzrohr,schwarz,schwarzem,sehen,Seite,Seitenanfang," +
                   "Sekundenkleber,Selbstbau,Signal,signalbuch,Signale," +
                   "Signalen,Signalling,Signaltafeln,Signalwerkstatt," +
                   "Sitzbank,Solingen,Sortiment,Spannungsbegrenzung," +
                   "Spurweiten,Stahlstifte,standsicher,St&auml;rke,Startseite," +
                   "stehenden,steht,Stelle,stellen,stellte,Straﬂenpfosten," +
                   "Straﬂenschilder,Streckenbereich,Suche,Suchen,Teil," +
                   "teuer,Tipps,Trapeztafel,Trocknen,Tropfen,typische,&Uuml;ber," +
                   "untere,untersagt,V/15mA,verf&uuml;gbar,vergessen," +
                   "Verkleinern/Vergr&ouml;ﬂern,verlassen,verlaufendem,verl&ouml;tet," +
                   "versehen,Vollst&auml;ndigkeit,vordere,vorne,Vorsicht," +
                   "Vorwiderstand,Wagenwerk,Wechsel,Weinert,weiﬂe,Weiterer," +
                   "www,Zahnstocher,Zeichnung,Zeit,zementgrau,Zp11,Zug," +
                   "Z&uuml;ge,zugeordneten,Zun&auml;chst,zutraut,zweimal," +
                   "Zwischenzeit";
       seite[51] = "ne1.htm";
beschreibung[51] = "Kr&uuml;melbahn - Anlagengestaltung - Nebenbahnsignale";
     begriff[52] = "Anspruch,aufgenommen,Bahnen,Bahnsinniges,beschaulichen," +
                   "Bestehens,dankbar,Dienstvorschriften,diente,Direkt," +
                   "Duitse,Ebenso,ehemaligen,eigentlich,Eisenbahn,eMail," +
                   "erhebt,Erweiterung,existierende,gab,ge&auml;nderte,gefahren," +
                   "gefunden,Geschichtliche,glauben,Gleis," +
                   "Gleismannsbahnhof,Gleispl&auml;ne,Gotha,G&uuml;terzugfahrpl&auml;ne," +
                   "Het,Hinweise,Impressum,Inhalt,Inselbahn,Insel-Bahn," +
                   "Juister,Kr&uuml;melbahn,Lijntje,Linkliste,Links,Liste," +
                   "Literatur,Marinebahn,Milit&auml;rbahn,milit&auml;rischen," +
                   "Modellbahn,Navigation,Norderney,Norderneyer," +
                   "Nordseeinsel,Portrait,Rastatt,schicken,Seite,Solingen," +
                   "Startseite,Suchen,Thema,Triebwagen,&Uuml;berblicke," +
                   "Verwendung,Vollst&auml;ndigkeit,Wikipedia,Yachthafen,Zeit," +
                   "Zwecken";
       seite[52] = "norderney.htm";
beschreibung[52] = "Kr&uuml;melbahn - Norderney";
     begriff[53] = "abgeschnittene,abschneiden,Acrylfarbe,Aktivit&auml;ten," +
                   "anbringen,anfasen,anfordern,Anlagenausgestaltungen," +
                   "Anlagengestaltung,anschlieﬂend,Anspruch,Art,Auflistung," +
                   "Aufmerksamkeit,Bahnen,Bahnsinniges,befestigen," +
                   "beschrieben,Betrachters," +
                   "blob/main/Modellbahn/Kr&uuml;melbahn,Boden,DCC," +
                   "Digitalbetrieb,Direkt,Dremel,e2322,Einbau,eingesetzt," +
                   "Elektronik,eMail,Ende,entfernt,erhebt,erwecken," +
                   "Fahrbahnrandes,Fahrzeugbau,Farbe,f&auml;rben,fertig,Figuren," +
                   "f&uuml;nf,gemacht,githubinfo,Gleisisolierung,Grenzzeichen," +
                   "Hektometertafeln,hergestellt,hergestellte,Herstellung," +
                   "hervor,Herzst&uuml;ckbereich,Impressum,individuell,Info," +
                   "Informationen,Inhalt,Isolierzeichen,Jahresmodell," +
                   "kaufen,Kennzeichnung,Kr&uuml;melbahn,Kuswa,Lehre,Leit," +
                   "Leuchtstoffr&ouml;hren,Links,Literatur,Markierung," +
                   "Mercedes-Benz,Merscheider,Messer,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Nat&uuml;rlich,Navigation," +
                   "Nebenbahnsignale,nehme,obere,oberen,pdf,Pfosten," +
                   "Planschleifen,Positionierung,Preiser,preisg&uuml;nstiger," +
                   "Proxxon,Ra12,Ra13,Randerscheinungen,Ring,Schacht," +
                   "scharfen,schauen,Schleifscheibe,Schotter,Schritte," +
                   "Schritten,schwarzer,sehen,Seitenanfang,Selbstbau," +
                   "Signalen,Sitzbank,SMF-Modelle,Solingen,Spitze," +
                   "standsicher,Startseite,Straﬂen,Straﬂenpfosten," +
                   "Straﬂenrand,Suchen,Vollst&auml;ndigkeit,Weichenbereich," +
                   "Weichengrenzzeichen,Weinert,Weise,weiﬂen,Zahnstocher," +
                   "Zahnstochers,zutraut";
       seite[53] = "pfosten.htm";
beschreibung[53] = "Kr&uuml;melbahn - Anlagengestaltung - " +
                   "Stra&szlig;enpfosten";
     begriff[54] = "Aktivit&auml;ten,anfordern,Anlage,Anlagengestaltung,Antrieb," +
                   "Austausch,Bahnen,Bahnsinniges,befestigen," +
                   "betriebssicher,blob/main/Modellbahn/Kr&uuml;melbahn,DCC," +
                   "Digitalbetrieb,digitalen,Direkt,Einbau,einfache," +
                   "einfacher,Einheit,Elektronik,eMail,erweitertes," +
                   "Fahrzeugbau,Fehlerfall,Figuren,gemacht,gestoﬂen," +
                   "githubinfo,handelt,Hektometertafeln,Impressum,Info," +
                   "Informationen,Inhalt,Jahresmodell,kleinen,Kr&uuml;melbahn," +
                   "Leuchtstoffr&ouml;hren,Links,Literatur,mechanische," +
                   "Mercedes-Benz,Merscheider,Modellbahn,Modellfahrzeuge," +
                   "Modulbau,Module,Modulen,Montage,montiert,Navigation," +
                   "Nebenbahnsignale,pdf,Prinzip,Schacht,schlieﬂlich," +
                   "Schnick-Schnack,Schotter,Seitenanfang,Servoansteuerung," +
                   "Signal,Signale,Signalen,Signals,Sitzbank,Solingen," +
                   "standsicher,Startseite,stellbar,Straﬂenpfosten,Suche," +
                   "Suchen,Tisch,versenkt,verwende,Vorteil,Wattenscheider";
       seite[54] = "schacht.htm";
beschreibung[54] = "Kr&uuml;melbahn - Anlagengestaltung - Merscheider " +
                   "Schacht";
     begriff[55] = "abgewaschen,achten,Aktivit&auml;ten,alte,Alternativmaterial," +
                   "anfordern,angestellt,Anlagenausgestaltungen," +
                   "Anlagengestaltung,anschlieﬂend,Antrocknen,Aufbringen," +
                   "auftupfen,Aufwand,aussp&uuml;len,Bahnen,Bahnsinniges,Basalt," +
                   "Basaltschotter,Basaltsteinchen,Baumarkt,Bedarf," +
                   "befestigen,befeuchten,befeuchtet,Befeuchtung,ben&ouml;tigt," +
                   "beschrieben,Bild,blob/main/Modellbahn/Kr&uuml;melbahn," +
                   "Borstenpinsel,Brauch,brechen,dass,DCC,dient," +
                   "Digitalbetrieb,Direkt,direkte,D&ouml;schen,dunkelt,eigenem," +
                   "EILE,Einbau,einfallende,Einkehrsand,Einschottern," +
                   "einzig,Elektronik,eMail,engen,entfernen,Entfernung," +
                   "enth&auml;lt,enthaltenen,entspanntem,Entspannung,Ergebnis," +
                   "erledigt,Fahrzeugbau,Fahrzeuge,fallen,Farbe,farbliche," +
                   "Figuren,Film,Finger,Flasche,freibleiben,Fugen,f&uuml;hren," +
                   "gebliebenen,gemacht,gemahlen,geschottert,gesiebt," +
                   "gestossen,getrocknet,Gewinnung,gewonnene,githubinfo," +
                   "gleichm&auml;ﬂig,Gleis,Gleisbett,Gleise,Gleisen," +
                   "grau/schwarz,Grenzen,gr&ouml;ﬂere,groﬂz&uuml;gig,gr&uuml;ndlich,guter," +
                   "halten,handels&uuml;blichen,Hauptsache,Hektometertafeln," +
                   "Herzst&uuml;cke,hierauf,Hilfe,Hinweis,humpeln,Impressum," +
                   "Info,Informationen,Inhalt,insbesondere,interessant," +
                   "Jahresmodell,JASS,kg-Sack,Kleben,Kleber,Klebers," +
                   "Kleineisen,kleinen,kleiner,klumpt,K&ouml;rnung,Kosten," +
                   "Kostenfaktor,kostet,Kraterbildung,kriecht,Kr&uuml;melbahn," +
                   "Lage,langen,Leuchtstoffr&ouml;hren,Licht,Links,Literatur," +
                   "L&ouml;ffel,Material,Materialbedarf,Mercedes-Benz," +
                   "Merscheider,Metall,Meter,Methode,Minuten,mischen," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,Mundwasser," +
                   "Nachbehandlung,nachbessern,nat&uuml;rlich,Navigation,Nebel," +
                   "Nebenbahnsignale,Netz,niederregnet,Nullanteile,Odol," +
                   "&ouml;rtlichen,pdf,Pipette,Ponal,Radlenker," +
                   "Randerscheinungen,Reiniger,richtet,Schacht,schlieﬂe," +
                   "Schotter,Schotterbett,Schotterkleber,Schotterm&uuml;hle," +
                   "Schottern,Schotters,Schottersteine,Schwellen,schw&ouml;rt," +
                   "sehen,Seitenanfang,Sieb,Signalen,Sitzbank,sofern," +
                   "Solingen,sonderlich,Spurweiten,Stand,standsicher," +
                   "Startseite,Staub,Staubpartikel,Steine,Straﬂenpfosten," +
                   "Strecken,Stunde,Stunden,Suche,Suchen,Teil,Teile,Teilen," +
                   "teuren,Tipp,Tipps,Tricks,trocknen,Tropfen,&Uuml;ber," +
                   "&uuml;bersch&uuml;ssigen,&Uuml;brigens,umr&uuml;hren,ungeschickt,ver&auml;ndern," +
                   "verd&uuml;nnen,Vergn&uuml;gen,Verh&auml;ltnis,Verkleben,verklebt," +
                   "verl&auml;uft,Verteilen,verteilt,verwendet,Verwendung," +
                   "vorhanden,Wahre,waschen,Wasser,Wassers," +
                   "Wasserzerst&auml;uber,Wattest&auml;bchen,Weichenbereich,WEILE," +
                   "Weiﬂleim,Werkzeugliste,wiegt,Zeit,Zerst&auml;ubers,zugeben," +
                   "zun&auml;chst,Zungen,zusammen";
       seite[55] = "schottern.htm";
beschreibung[55] = "Kr&uuml;melbahn - Anlagengestaltung - Schottern";
     begriff[56] = "Aktivit&auml;ten,alternative,anfordern,angesteuert," +
                   "Anlagengestaltung,Ansteuerung,Antriebstechnik,Arduino," +
                   "Artikelreihe,AVR-Sound,Bahnen,Bahnsinniges,bekommen," +
                   "ben&ouml;tigen,ben&ouml;tigt,Bereich," +
                   "Bremsgenerator/Pendelautomatik,Commercial,Controller," +
                   "DCC,Digitalbetrieb,digitalen,Digitalsysteme,Direkt," +
                   "DISPA,Drehen,Einfach-Ansteuerung,einsetzen,Elektronik," +
                   "Elektronikteile,eMailAndGithub,Endlage," +
                   "Endlagenansteuerung,Endlagenanzeige," +
                   "Endlageneinstellung,erreicht,Fahrzeugbau," +
                   "Faller-CarSystem,FRANZ,f&uuml;gt,g&auml;ngigen,ge&auml;nderter,gebaut," +
                   "gefragt,Hard,harmonisch,herberts-n-projekt," +
                   "Herzst&uuml;ckpolarisierung,https,Ideen,Impressum," +
                   "Impulsansteuerung,Informationen,Inhalt,Jahresmodell," +
                   "Kosten,Kr&uuml;melbahn,l&auml;sst,LED,Links,Literatur," +
                   "Mercedes-Benz,Miba,Mitgedreht,Modellbahn," +
                   "modellbahn-dortmund,Modellfahrzeuge,Modul,Modulbau," +
                   "Move,nachzulesen,Navigation,Offer,Paket,PIC,Preise," +
                   "R&uuml;ckmeldeausgang,R&uuml;ckmeldung,schaltet,Schaltungen," +
                   "Schnick-Schnack,Schrankenantrieb,Seite,Seitenanfang," +
                   "Selbstbau,Servo,Servo2,Servoansteuerung," +
                   "Servobefestigungen,Servos,Servostellung,sicherlich," +
                   "Signalantrieb,Signal-Z,Software,Solingen,Stand," +
                   "Startseite,Suchen,Taster,Teil,teuer,Thema,Torantrieb," +
                   "Trimmer,unabh&auml;ngig,Variante,vereinfacht,Verwendung," +
                   "vielf&auml;ltig,voneinander,Weiche,Weichen," +
                   "Weichenansteuerung,Weichenantrieb,Weichenlaternen," +
                   "Weiten,weiteren,WWW,zusammen,zweifach," +
                   "Zweifach-Ansteuerung,Zweifach-Servoansteuerung";
       seite[56] = "servo.htm";
beschreibung[56] = "Kr&uuml;melbahn - Elektronik - Servoansteuerung";
     begriff[57] = "Aktivit&auml;ten,anfordern,angeschlossen,Anlagengestaltung," +
                   "Anlass,anstelle,Ansteuerung,Arduino,aufgebaut," +
                   "AVR-Sound,Bahnen,Bahnsinniges,Beeinflussung,billiger," +
                   "bistabile,Blockfunktionalit&auml;t," +
                   "Bremsgenerator/Pendelautomatik,Commercial,DCC," +
                   "Digitalbetrieb,Direkt,DISPA,Ebenso,einfacher," +
                   "Elektronik,Elektronikentwicklung,eMailAndGithub," +
                   "erfolgen,erfordert,erscheinen,Fahrspannung,Fahrzeugbau," +
                   "FRANZ,gehen,Geld,gespeichert,Gleiskontakt," +
                   "Halteabschnitt,Hauptsignal,Herausgekommen,Hersteller," +
                   "Herstellers,Hp0,Hp00,Hp1,Hp2,Impressum,Informationen," +
                   "Inhalt,insbesondere,Jahresmodell,kleine,Kosten," +
                   "Kostenersparnis,Kr&uuml;melbahn,Lichthauptsignals," +
                   "Lichtsignalen,Links,Literatur,Mercedes-Benz," +
                   "Merscheider,Modellbahn,Modellfahrzeuge,Modulbau,muss," +
                   "namhafter,nat&uuml;rlich,Navigation,Offer,original," +
                   "Originalkomponenten,passend,PIC,Platine,Preise,Relais," +
                   "Schacht,Schlappe,sch&ouml;n,Seitenanfang,Servoansteuerung," +
                   "Sh1,Signal,Signalansteuerung,Signalbilder,Signals," +
                   "Signalschirm,Signal-Z,Solingen,Stand,Startseite," +
                   "Stellen,Stellpulten,stolze,Suchen,Tastenansteuerung," +
                   "Tastendruck,Umschaltsperre,verhindern,verlangt," +
                   "vorhanden,Vorsignal,zugeh&ouml;rige,zur&uuml;ckgestellt";
       seite[57] = "signalz.htm";
beschreibung[57] = "Kr&uuml;melbahn - Elektronik - Signal-Z";
     begriff[58] = "Achse,Aktivit&auml;ten,alt,alten,&auml;lter,Alterungsmethode," +
                   "anfordern,Anlagenausgestaltungen,Anlagengestaltung," +
                   "ausruhen,aussieht,Bahnen,Bahnsinniges,befestigen," +
                   "beschrieben,besseren,blob/Modellbahn/mainKr&uuml;melbahn," +
                   "Dampfbahn,DCC,dienen,Digitalbetrieb,Direkt,Einbau," +
                   "Eisenbahn-Tour,Elektronik,eMail,Enden,Fahrzeugbau," +
                   "fertig,Figuren,Fr&auml;nkische,Furnierholzstreifen,gebadet," +
                   "gefunden,geklebt,gemacht,Geschmack,githubinfo," +
                   "Hauptsache,Hektometertafeln,Impressum,Info," +
                   "Informationen,Inhalt,Jahresmodell,Juli,Kr&uuml;melbahn," +
                   "lasiert,ler,Leuchtstoffr&ouml;hren,Links,Literatur," +
                   "Mercedes-Benz,Merscheider,Messingbraun,Mittagspause," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,m&ouml;glichst,muss," +
                   "Navigation,Nebenbahnsignale,nehme,Optik,passend,pdf," +
                   "R&auml;der,Radsatz,Randerscheinungen,rostig,RP25," +
                   "R&uuml;ckenlehne,Schacht,Schotter,Schweiz,Seitenanfang," +
                   "Selbstbau,sieht,Signalen,Sitz,Sitzbank,Solingen," +
                   "Spitzen,standsicher,Startseite,Straﬂenpfosten,Suchen," +
                   "tausche,zurechtgeschnittene,zylindrischem";
       seite[58] = "sitzbank.htm";
beschreibung[58] = "Kr&uuml;melbahn - Anlagengestaltung - Sitzbank";
     begriff[59] = "abzuspielen,Aktivit&auml;ten,anfordern,Anforderungen," +
                   "Anlagengestaltung,ansteuerbar,ansteuert,Anwendung," +
                   "Arduino,ATMEGA,ATMEL,AVR-Sound,AVR-Sound-FRED,Bahnen," +
                   "Bahnsinniges,Basis,blieb," +
                   "Bremsgenerator/Pendelautomatik,Commercial,DCC,DFPlayer," +
                   "Digitalbetrieb,Direkt,DISPA,Elektronik,eMailAndGithub," +
                   "entsprechendes,Entwicklungsumgebung,erweiterungsf&auml;hig," +
                   "Fahrzeugbau,Feuerwehr,FRANZ,FRED-Geh&auml;use,Ger&auml;te," +
                   "gespeichert,Ideen,Impressum,Informationen,Inhalt," +
                   "integrierten,Jahresmodell,Kanalbr&uuml;cke,kommerzielle," +
                   "kommt,kosteng&uuml;nstig,Kr&uuml;melbahn,ladbar,Links,LiPo-Akku," +
                   "Literatur,LocoNET,Mercedes-Benz,Micro-SD-Karte,Mini," +
                   "Modellbahn,Modellbahnanlage,Modellfahrzeuge,Modul," +
                   "Modulbau,MP3,MP3-Sounds,Navigation,Offer,passend," +
                   "Platine,Player,Seitenanfang,Selbstbau,Servoansteuerung," +
                   "Signal-Z,SMD,Solingen,Sound-FRED,Sound-Modul,Sounds," +
                   "Startseite,Stellwerk,Suchen,teuer,umgesetzt,UNO," +
                   "USB-Micro-Stecker,verschiedene,Version,Versuch," +
                   "verwendbar,verwendet,vier";
       seite[59] = "sound.htm";
beschreibung[59] = "Kr&uuml;melbahn - Elektronik - AVR-Sound";
     begriff[60] = "abgerissen,Ablaufberg,Abl&ouml;sung,Abriss,Abzw,Abzweig," +
                   "alten,anschlieﬂenden,aufgestellt,August,Ausfahrt," +
                   "ausger&uuml;stet,ausschlieﬂlich,auﬂer,Auﬂerdienststellung," +
                   "Bahnanlagen,Bahnen,Bahnh&ouml;fe,Bahnsinniges,Bahnsteig," +
                   "Bahnsteig&uuml;berdachung,Bahn&uuml;berg&auml;nge,Batterie,Bauart," +
                   "Baujahr,Baukosten,bedient,Bedienung,ben&ouml;tigte,Berliner," +
                   "beschrankten,Betriebs&uuml;bernahme,Betriebszentrale," +
                   "blob/main/Solingen/Kr&uuml;melbahn,Blockverdichtung,Br&uuml;cke," +
                   "Daten,Dienst,diente,Dieselaggregat,Direkt,Duisburg," +
                   "ehemaligen,eigenes,Einrichtungen,Empfangsgeb&auml;ude," +
                   "erfolgte,erhaltene,ert&uuml;chtigt,ESTW-UZ,etwa,Euro," +
                   "Fahrstrom,Fahrzeuge,Fallerslebenweg,Februar,Feldern," +
                   "ferngesteuerte,Fernsteuerung,Firma,gebaut,gegen&uuml;ber," +
                   "Gesamtfl&auml;che,githubinfo,Gleis,Gleisdreieck,Gleise," +
                   "Gleisl&auml;nge,Gleissperren,Gleiswechselbetrieb,Gr&auml;frath," +
                   "Gruiten,Haan,Haltepunkt,Hauptbahnhof,Hauptsignale,Hbf," +
                   "Hilden,Impressum,Inbetriebnahme,Indusi,Info,Inhalt," +
                   "insgesamt,Januar,K&ouml;ln,K&ouml;ln-M&uuml;lheim,Korkenzieherbahn," +
                   "Kr&uuml;melbahn,L84,Leichlingen,Leitungsgruppen,Links," +
                   "Literatur,lokalen,Lokstation,Lorenz,l&ouml;st,Magnete,Mill," +
                   "Millionen,Modellbahn,M&uuml;ngstener,Navigation,Nordbahnhof," +
                   "Notbedienplatz,Notbetrieb,Ohl,Opladen,pdf,Radaranlagen," +
                   "Rangierbetriebes,Rangierbewegungen,Rangierstraﬂen," +
                   "Remscheid,Richtung,Schnittert,Seitenanfang,September," +
                   "Siemens,Signale,Signalsteuerkabel,Sno,Sof,Solingen," +
                   "Solingen/Fahrdienstleiter,Solingen-Gr&auml;frath," +
                   "Solingen-Hauptbahnhof,Solingen-Mitte,Solingen-Nord," +
                   "Solingen-Ohligs,Solingen-Ohligs/Fahrdienstleiter," +
                   "Solingen-Vogelpark,Solingen-Wald,Solingen-West,Som,Son," +
                   "sonstige,Sot,SpDrL30,Sperrsignale," +
                   "Spurplandrucktastenstellwerk,stand,Startseite,steht," +
                   "Stellbereich,Stelle,Stelltisch,Stellwerk,Stellwerke," +
                   "Steuerung,Straﬂe,Strecke,Strecken," +
                   "Stromversorgungskabel,Suchen,technisch,Technische," +
                   "&Uuml;berwachung,verlegte,Vorsignale,W&auml;rterstellwerk,Weg," +
                   "Weichen,werkt&auml;glich,Wikipedia,Wilzhaus,Wilzhauser," +
                   "Wuppertal,x80cm,zahlreiche,Zugfahrten,Zughilfsstraﬂen," +
                   "Zugstraﬂen,zur&uuml;ckgebaut";
       seite[60] = "stellwrk.htm";
beschreibung[60] = "Kr&uuml;melbahn - Stellwerke";
     begriff[61] = "Bahnen,Bahnsinniges,ber&uuml;cksichtigen,Bet&auml;tigen,Direkt," +
                   "Eingabetaste,Gross-/Kleinschreibung,Homepage,Impressum," +
                   "Inhalt,Kr&uuml;melbahn,Links,Literatur,Modellbahn," +
                   "Navigation,Solingen,startet,Startseite,Suchbegriff," +
                   "Suche,suchen,Wortanf&auml;nge";
       seite[61] = "suchen.htm";
beschreibung[61] = "Kr&uuml;melbahn - Suchen";
     begriff[62] = "abgerissen,Abschnitten,Abzweig,August,Bahnanlagen," +
                   "Bahnen,Bahnlinie,Bahnsinniges,Bahnstrecke,Bau,ben&ouml;tigt," +
                   "ben&ouml;tigten,benutzen,benutzt,bestehende,bewilligt," +
                   "blob/main/Solingen/Kr&uuml;melbahn,Br&uuml;cke,Br&uuml;cken," +
                   "Br&uuml;ckenreste,Busch,Bussche-Kessel-Weg,demontiert," +
                   "Direkt,Dortmund,Eisenbahner-Kleingartensiedlung," +
                   "Eisenbahnverwaltung,entlang,erahnen,erfolgte,erhaltene," +
                   "Fahrzeuge,Flakgesch&uuml;tzen,geblieben,gehenst,Gelder," +
                   "githubinfo,Gleise,Hackhauser,heutigen,H&ouml;he,Impressum," +
                   "Info,Inhalt,Jahr,K&ouml;ln,Korkenzieherbahn,Kr&uuml;melbahn," +
                   "kuriose,Links,Literatur,Modellbahn,M&uuml;hlenstraﬂe," +
                   "m&uuml;ndete,Navigation,Ohligs,pdf,Pl&auml;ne,planm&auml;ﬂige," +
                   "Projektierung,renoviert,riesige,Scharrenbergerdamm," +
                   "Schnellverbindung,Schwelm,Seitenanfang,Solingen," +
                   "Startseite,Strecke,Strecken,Streckenabschnitte,Suchen," +
                   "tauchen,umfassend,Umgehungsbahn,unterquerte,verkehrten," +
                   "Verl&auml;ngerung,Verlauf,verschrottet,Viadukt," +
                   "Viehbachtalstraﬂe,Weiche,weitest,Weltkrieg," +
                   "Wiefeldickerstraﬂe,Wikipedia,Witten,wollte,zerst&ouml;rt," +
                   "Zeugenaussagen,Z&uuml;ge,zweiten";
       seite[62] = "umgehung.htm";
beschreibung[62] = "Kr&uuml;melbahn - Umgehungsbahn";
     begriff[63] = "anfordern,Auflage,Bahndienstfahrzeuge,Bahnen,Bahnhofs," +
                   "Bahnsinniges,Becher,Buchver&ouml;ffentlichung,Direkt," +
                   "Dokumentationen,Eisenbahnen,Eisenbahngeschichte,eMail," +
                   "erbeten,Format,gab,Heft,Impressum,Info,Informationen," +
                   "Inhalt,ISBN,Jahre,Kaiﬂ,Korkenzieherbahn,Kr&uuml;melbahn," +
                   "Kurt/Zimmermann,Leichlingen,Links,Literatur,Michael," +
                   "Modellbahn,Motiv,Navigation,Nebenbahngleisen,Passend," +
                   "passenden,Publikationen,Rheinisch-Bergische,Seiten," +
                   "Seitenanfang,Solingen,Startseite,Suchen,sw/Farbe," +
                   "Verlag,Vohwinkel,Wald,Zwischenhalt";
       seite[63] = "video.htm";
beschreibung[63] = "Kr&uuml;melbahn - eigene Publikationen";
}

function sort(gefunden) {
  var i = 2;
  var ende = 1;
  while ((ende != 0) && (i <= gefunden)) {
    ende = 0;
    for (var j = gefunden; j > 0;j--) {
      if (gefunden_prozent[j - 1] > gefunden_prozent[j]) {
        var t_beschreibung   = gefunden_beschreibung[j];
        var t_seite          = gefunden_seite[j];
        var t_prozent        = gefunden_prozent[j];
        var t_begriff_einzel = gefunden_begriff_einzel[j];
        var t_i              = gefunden_i[j];
        gefunden_beschreibung[j]   = gefunden_beschreibung[j - 1];
        gefunden_seite[j]          = gefunden_seite[j - 1];
        gefunden_prozent[j]        = gefunden_prozent[j - 1];
        gefunden_begriff_einzel[j] = gefunden_begriff_einzel[j - 1];
        gefunden_i[j]              = gefunden_i[j - 1];
        gefunden_beschreibung[j - 1]   = t_beschreibung;
        gefunden_seite[j - 1]          = t_seite;
        gefunden_prozent[j - 1]        = t_prozent;
        gefunden_begriff_einzel[j - 1] = t_begriff_einzel;
        gefunden_i[j - 1]              = t_i;
        ende = 1;
      }
    }
    i++;
  }
}

function kopf(eingabe, optionstext) {
  document.write(
'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
'<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">' +
'<head>' +
'<title>Kr&uuml;melbahn - Suchergebnis</title>' +
'<meta http-equiv="cache-control" content="no-cache">' +
'<script language="JavaScript" src="js/main.js" type="text/javascript"></script>' +
'<link href="css/layout_shiny_buttons.css" rel="stylesheet" type="text/css"/>' +
'<!--[if lte IE 7]>' +
'<link href="css/patches/patch_shiny_buttons.css" rel="stylesheet" type="text/css" />' +
'<![endif]-->' +
'</head>' +
'<body>' +
'<div id="page_margins">' +
  '<div id="page">' +
    '<div id="header">' +
      '<div id="topnav">' +
        '<a class="skip" href="#navigation" title="skip link">Direkt zur Navigation</a><span class="hideme">.</span>' +
        '<a class="skip" href="#content" title="skip link">Direkt zum Inhalt</a><span class="hideme">.</span>' +
        '<span><a href="index.htm">Startseite</a> | <a href="impressum.htm">Impressum</a></span>' +
      '</div>' +
      '<h1><img alt="Frontansicht einer Dampflok" src="images/dlok.gif"/> Kr&uuml;melbahn</h1>' +
    '</div>' +
    '<div id="nav"> <a id="navigation" name="navigation"></a>' +
      '<div id="nav_main">' +
        '<ul>' +
          '<li><a href="bahnhof.htm">Bahnen in Solingen</a></li>' +
          '<li><a href="gueterzug.htm">Bahnsinniges</a></li>' +
          '<li><a href="bahn.htm">Modellbahn</a></li>' +
          '<li><a href="literat.htm">Literatur</a></li>' +
          '<li><a href="link_bn.htm">Links</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
    '<div id="main">' +
      '<div id="col1">' +
        '<div id="col1_content" class="clearfix">' +
          '<a id="content" name="content"></a>' +
          '<h2>Suchergebnis</h2><br/>' +
          'f&uuml;r die Suche nach <b><span style="background-color:#4D87C7; color:#ffff00; padding: 0.5em;">' + eingabe + '</span></b>&nbsp;' + optionstext + '<br/><hr/>' +
          '<table border="1">' +
            '<tbody>' +
              '<coldefs><coldef><coldef><coldef><coldef></coldefs>' +
              '<rows>' +
                '<tr><td colstart="1"></td>' +
                    '<td colstart="2" bgcolor="#A0A0A0"><font color="#FFFFFF">Trefferquote</font></td>' +
                    '<td colstart="3" bgcolor="#A0A0A0"><font color="#FFFFFF">Suchbegriff</font></td>' +
                    '<td colstart="4" bgcolor="#A0A0A0"><font color="#FFFFFF">Beschreibung</font></td></tr>');
}

function zeile(gefunden,prozent,begriff_tmp,seite,ausgabe,beschreibung) {
  if (seite == "") { // nichts gefunden
    document.write('<tr><td colstart="1" bgcolor=#"A0A0A0"><font color="#FFFFFF">' +
        gefunden + '.</font></td>' +
        '<td colstart="2" style="text-align:center">' + prozent + '%</td>' +
        '<td colstart="3">' + begriff_tmp +
        '</td>' +
        '<td colstart="4">' + beschreibung + '</td></tr>');
  }
  else {
    if (ausgabe == false) {
      document.write('<tr><td colstart="1" bgcolor="#A0A0A0"><font color="#FFFFFF">' +
          gefunden + '.</font></td>' +
          '<td colstart="2" style="vertical-align:top; text-align:center;">' + prozent + '%</td>' +
          '<td colstart="3" style="vertical-align:top"><a href="' + seite + '">' + begriff_tmp +
          '</a></td>' +
          '<td colstart="4" style="vertical-align:top">' + beschreibung + '</td></tr>');
      }
    else {
      document.write('<tr><td colstart="1" bgcolor="#A0A0A0"><font color="#FFFFFF">' +
          gefunden + '.</font></td>' +
          '<td colstart="2" style="vertical-align:top; text-align:center;">' + prozent + '%</td>' +
          '<td colstart="3" style="vertical-align:top"><a href="' + seite + '" target="_parent">' + begriff_tmp +
          '</a></td>' +
          '<td colstart="4" style="vertical-align:top">' + beschreibung + '</td></tr>');
    }
  }
}

function suchen(eingabe, wortanfaenge, grossklein) {
  var gefunden = 0; // Eintraege in Trefferliste vorhanden oder nicht
  var trefferliste = 0; //window.document.abfrage.trefferliste.checked;
                                                             // true== alle zeigen
  var ohneFrame    = 0; //window.document.abfrage.ohneFrame.checked;
                                          // true== Sucheingabe nicht mehr anzeigen

  if (eingabe.indexOf(",") > -1) {            // falsche Eingabe
    alert("Komma darf in der Eingabe nicht verwendet werden.");
    return;
  }
  if (eingabe == "") {                        // falsche Eingabe
    alert("Ich brauche zuerst einen Suchbegriff.");
    return;
  }
  // Auswertung und Anzeige
  if (trefferliste != true) {                // Bildschirm loeschen
    document.open("text/html");
  };
  var optionstext = "";
  if ((wortanfaenge == true) && (grossklein == true)) {
    optionstext = "(nur Wortanf&auml;nge, Gross-/Kleinschreibung)";
  }
  else {
    if (grossklein == true) {
      optionstext = "(Gross-/Kleinschreibung)";
    }
    else {
      if (wortanfaenge == true) {
        optionstext = "(nur Wortanf&auml;nge)";
      }
    }
  }
  kopf(eingabe, optionstext);
  if (grossklein != true) {
    eingabe = eingabe.toUpperCase();
  }
  for (var i = 0 ; i <= index_max ; i++) {
    begriff_tmp = new String(begriff[i]);
    if (grossklein != true) {
      var begriff_tmp2 = begriff_tmp.toUpperCase();
    }
    else {
      begriff_tmp2 = begriff_tmp;
    }
    var begriff_einzel = begriff_tmp;
    var pos = begriff_tmp2.indexOf(eingabe);
    if (pos > -1) {
      var komma_vor = begriff_tmp.lastIndexOf(",",pos);
      var komma_nach = begriff_tmp.indexOf(",",pos);
      if (pos == 0) {
        if (komma_nach > -1) {
          if (komma_vor > -1) {  //dies,frage,jenes
            begriff_einzel = begriff_tmp.substring(komma_vor + 1, komma_nach);
          }
          else { // frage,jenes
            begriff_einzel = begriff_tmp.substring(0,komma_nach);
          }
        }
        else { // dies,frage
          if (komma_vor > -1) {
            begriff_einzel = begriff_tmp.substring(komma_vor + 1,begriff_tmp.length);
          }
        }
      }
      else { // pos > 0
        if (komma_nach > -1) {
          if (komma_vor > -1) { // dies,autofrage,jenes
            begriff_einzel = begriff_tmp.substring(komma_vor + 1,komma_nach);
          }
          else { // autofrage,jenes
            begriff_einzel = begriff_tmp.substring(0,komma_nach);
          }
        }
        else {
          if (komma_vor > -1) { // dies,autofrage
            begriff_einzel = begriff_tmp.substring(komma_vor + 1,begriff_tmp.length);
          }
        }
      }
      var prozent = 100;
      if (begriff_einzel.length - eingabe.length > 0) {
        prozent = Math.round((eingabe.length / begriff_einzel.length) * 100);
      }
      if (grossklein != true) {
        begriff_tmp2 = begriff_einzel.toUpperCase();
      }
      else {
        begriff_tmp2 = begriff_einzel;
      }
      var pos_einzel = begriff_tmp2.indexOf(eingabe);
      if (pos_einzel == 0) {
        if (begriff_einzel.length == eingabe.length) {
          begriff_einzel = '<b>' + begriff_einzel + '</b>';
        }
        else {
          begriff_einzel = '<b>' + begriff_einzel.substring(0,pos_einzel +
                           eingabe.length) +
                           '</b>' + begriff_einzel.substring(pos_einzel +
                           eingabe.length,
                           begriff_einzel.length);
        }
      }
      else {
        if ((pos_einzel + eingabe.length) == begriff_einzel.length) {
          begriff_einzel = begriff_einzel.substring(0,pos_einzel) + '<b>' +
                           begriff_einzel.substring(pos_einzel,
                           begriff_einzel.length) + '</b>';
        }
        else {
          begriff_einzel = begriff_einzel.substring(0,pos_einzel) + '<b>' +
                           begriff_einzel.substring(pos_einzel,pos_einzel +
                           eingabe.length) +
                           '</b>' + begriff_einzel.substring(pos_einzel +
                           eingabe.length,
                           begriff_einzel.length);
        }
      }
      if(wortanfaenge == true) {
        if ((komma_vor == (pos - 1)) || (pos == 0)) {
          gefunden++;
          gefunden_beschreibung[gefunden]   = beschreibung[i];
          gefunden_seite[gefunden]          = seite[i];
          gefunden_prozent[gefunden]        = prozent;
          gefunden_begriff_einzel[gefunden] = begriff_einzel;
          gefunden_i[gefunden]              = i;
        }
      }
      else {
        gefunden++;
          gefunden_beschreibung[gefunden]   = beschreibung[i];
          gefunden_seite[gefunden]          = seite[i];
          gefunden_prozent[gefunden]        = prozent;
          gefunden_begriff_einzel[gefunden] = begriff_einzel;
          gefunden_i[gefunden]              = i;
      }
    }; // elseif
  }; // for
  if (gefunden == 0) {
    zeile("",0,"---","",false,"Keine passenden Eintr&auml;ge gefunden.");
  }
  else {
    sort(gefunden);
    for (var i = gefunden;i > 0;i--) {
      zeile(i,gefunden_prozent[i],gefunden_begriff_einzel[i],gefunden_seite[i],
            ohneFrame,gefunden_beschreibung[i]);
    }
  }
  var today = new Date();
  document.write(
   '</rows></tbody></table><p><b>Indexstand vom ' + stand + '</b>.</p>' +
      '</div>' +
      '</div>' +
      '<div id="col3">' +
        '<div id="col3_content" class="clearfix">' +
        '</div>' +
        '<div id="ie_clearing">&nbsp;</div>' +
      '</div>' +
    '</div>' +
    '<div id="printnav"><img alt="Seitenende" src="images/zg2.gif"/></div>' +
    '<div id="footer">' +
     '<img alt="Seitenende" src="images/zg2.gif"/> &copy; 1997-' + today.getFullYear() + ' by Michael Zimmermann<br/>' +
     'Layout based on <a href="http://www.yaml.de/" target="_blank">YAML</a>, powered by <a href="https://www.phase5.info/" target="_blank">Phase 5</a>, created with <a href="http://researchsuite.com/de" target="_blank">OASE</a>' +
    '</div>' +
  '</div>' +
'</div>' +
'</body>' +
'</html>'
);
  if (trefferliste != true) {                // Ausgabe schliessen, verhindert
   document.close();      // wandernden Balken bei Einzelausgabe
  }
}
