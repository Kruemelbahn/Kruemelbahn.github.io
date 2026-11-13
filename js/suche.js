// S@lz&Pfeffer - Suchmaschine für Anwender mit lokalem Zugriff (S@lz)
// Vorlage zur Erstellung eines Suchindexes
//-----------------------------------------------------------------------------
// Copyright (c) 1997-98 bei Rainer Eschen. Alle Rechte vorbehalten.
//
// Version 1.11 (26.03.1998)
//
// Pfeffer: Konstanten
  var index_max = 63;
  var stand = "22.09.2024, 12:14:46";  // Erzeugt durch S@lz&Pfeffer 1.0
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
     begriff[ 0] = "Aktivitäten,Aktuell,Allgemeines,Anlagendigitalisierung," +
                   "Anlagengestaltung,anschließe,Ansteuerung,Anzeige," +
                   "Arduino,Arduino-Board,Arduino-Plattform,Assembler," +
                   "Atmega328,ATMEL,Aufgaben,Auflistung,Ausgabe,Ausgängen," +
                   "autarken,AVR,AVR-Sound,Bahnen,Bahnsinniges,Basis," +
                   "Begünstigt,belebtes,benötigt,Beschreibung,beschrieben," +
                   "betrieben,Bremsgenerator/Pendelautomatik,C/C,DCC," +
                   "Deloof,Digitalbetrieb,digitalen,Direkt,DISPA," +
                   "Eigenständige,eingesetzt,Einsatz,Einsatzfahrzeuge," +
                   "Elektronik,eMailAndCloud,eMailAndGithub,entwickelt," +
                   "Entwicklungen,ESP8266,Fahrzeugbau,Fahrzeugen,FRANZ," +
                   "Hans,Hardware,Haus,Impressum,Inhalt,Jahresmodell," +
                   "kleinen,kombinierbar,kommen,Konstantstromquelle," +
                   "Krümelbahn,lang,Lernkurve,Lichtcomputer,Lichtleiste," +
                   "Lichtsteuerung,Links,Literatur,LocoHDL,LocoIO-Editor," +
                   "LocoIO-Module,LocoNET,LocoNET-Nebenuhr,LocoNET-NotAus," +
                   "LocoNET-Schnittstelle,LocoNET-Universal-Platine,Lösung," +
                   "Mercedes-Benz,Microchip,Mikrocontroller," +
                   "Mikroprozessoren,Modellbahn,Modellbahnanlagen," +
                   "Modellbahnzeit,Modellfahrzeuge,Modulbau,modulen," +
                   "Navigation,Nebenuhr,Nebenuhren,NotAus,Offer," +
                   "parametrisiert,PIC-Controller,progarmmierbar," +
                   "programmiert,Prozessoren,Schaltung,Schaltungen," +
                   "Seitenanfang,Servoansteuerung,Signal-Z,Software," +
                   "Solingen,Sound,Startseite,suboptimale,Suchen,Trend," +
                   "Uhrenzentrale,umständlich,universelle,unterschiedlich," +
                   "Unterwegs,verbunden,verfügbare,verwendet,zahlreiche," +
                   "Zentrale,Zuge,zunächst";
       seite[ 0] = "arduino.htm";
beschreibung[ 0] = "Kr&uuml;melbahn - Elektronik - Arduino - Allgemeines";
     begriff[ 1] = "Aktivitäten,Allgemeines,anfordern,Anlagengestaltung," +
                   "Arduino,Arduino-UNO,Arduino-Welt,AVR-Sound,Bahnen," +
                   "Bahnsinniges,Baufortschritte,Benötigt," +
                   "Bremsgenerator/Pendelautomatik,Commercial,DCC," +
                   "Digitalbetrieb,Direkt,DISPA,Elektronik,eMailAndCloud," +
                   "entsprechenden,esp_shield,ESP8266,ESP8266-Shield," +
                   "Fahrzeugbau,FRANZ,gegebener,Impressum,Informationen," +
                   "Inhalt,Jahresmodell,Krümelbahn,Lichtsteuerung,Links," +
                   "Literatur,LocoNET-Shield,Mercedes-Benz,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Navigation,Planungs,Platine," +
                   "Seitenanfang,Servoansteuerung,Shield,Signal-Z,Software," +
                   "Solingen,Startseite,Suchen,Über,Verwendung,weiteren," +
                   "WLAN-Moduls,Zeit";
       seite[ 1] = "arduinoesp.htm";
beschreibung[ 1] = "Kr&uuml;melbahn - Elektronik - Arduino - ESP8266";
     begriff[ 2] = "Aktivitäten,Allgemeines,anfordern,Anlagengestaltung," +
                   "Ansteuerung,Arduino,Arduino-UNO,Arten,AVR-Sound,Bahnen," +
                   "Bahnsinniges,Baufortschritte,Benötigt," +
                   "Bremsgenerator/Pendelautomatik,Commercial,DCC," +
                   "Digitalbetrieb,Direkt,DISPA,Dom,Elektronik," +
                   "eMailAndCloud,entsprechenden,erfolgen,ESP8266," +
                   "Fahrzeugbau,FastClock-Telegrammen,festen,FRANZ,Gahtow," +
                   "gegebener,gesteuert,Grenzen,halten,Hard,Huebsch," +
                   "Impressum,Informationen,Inhalt,Jahresmodell,Kosten," +
                   "Krümelbahn,licht_shield,Lichtsteuerung," +
                   "Lichtsteuerung-Shield,Links,Literatur,LocoNET," +
                   "Mercedes-Benz,Miniatur-Wunderland,MoBa,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,mögliche,Navigation,Planungs," +
                   "Platine,Raumlichtsteuerung,RGB-LED-Streifen," +
                   "Seitenanfang,Servoansteuerung,Shield,Signal-Z,Software," +
                   "Solingen,Startseite,Suchen,Tag-Nacht-Simulation," +
                   "Verwendung,weiteren,Zeit,Zeitablauf,Zeitraster";
       seite[ 2] = "arduinolc.htm";
beschreibung[ 2] = "Kr&uuml;melbahn - Elektronik - Arduino - Lichtsteuerung";
     begriff[ 3] = "ACS,Aktivitäten,Allgemeines,anfordern," +
                   "Anlagengestaltung,Arduino,Arduino-LocoNet-Shield," +
                   "Arduino-UNO,AVR-Sound,Bahnen,Bahnsinniges," +
                   "Bauvorschläge,Bibliothek,Blockstreckensteuerung," +
                   "Bluetooth-Modul,Bremsgenerator/Pendelautomatik," +
                   "Commercial,DCC,DCC-Interface,Digitalbetrieb,Direkt," +
                   "direkten,DISPA,Elektronik,eMailAndGithub," +
                   "entsprechenden,entwickelt,Entwicklerboard,Entwicklung," +
                   "ergänzt,ESP8266,Fahrzeugbau,FRANZ,freien,Gahtow,Giling," +
                   "HC-05-6,Heartbeat,IC-Interface,Impressum,Informationen," +
                   "Inhalt,insbesondere,Jahresmodell,Krümelbahn,LED," +
                   "letztendlich,Lichtsteuerung,Links,Literatur,LocoNET," +
                   "LocoNET-Basis,LocoNET-Bibliothek,LocoNET-Interface," +
                   "LocoNET-Shield,LocoNET-Shields,Lötpads,Lötpunkte," +
                   "Mercedes-Benz,Modellbahn,Modellfahrzeuge,Modulbau," +
                   "MRRWA,Navigation,nehmen,Offer,passend,passende,passt," +
                   "Platine,Plocher,polige,Port,Reihen,Schaltung,SD-Card," +
                   "Seitenanfang,Serial,Servoansteuerung,Signal-Z,Software," +
                   "Softwareentwicklungen,Solingen,Startseite," +
                   "Steckmöglichkeiten,Stiftleiste,Stromsensor," +
                   "SUB-D9-Buchse,Suchen,Typ,Verwendung,zahlreiche";
       seite[ 3] = "arduinoln.htm";
beschreibung[ 3] = "Kr&uuml;melbahn - Elektronik - Arduino - LocoNet";
     begriff[ 4] = "Akkuschleppfahrzeug,Akkutriebwagen,Aktivitäten,Aktuell," +
                   "alltägliche,anbieten,anfordern,angesagt," +
                   "Anlagengestaltung,Anlehnung,Arbeit,ASF,Ätzplatten," +
                   "aufgelistet,ausgenommen,Bahndienstfahrzeuge,Bahnen," +
                   "Bahnsinniges,Basisfahrzeug,Basiswagen,Bauanleitungen," +
                   "Bauarbeiten,Baubeschreibung,Bebra,Bekohlungs,Benötigte," +
                   "beschäftige,Bi29,Bild,BR38/BR50,Brawa,Bromberg," +
                   "Brückenprüfwagen,BTms,Busses,CAD-Programm,Commercial," +
                   "DCC,Decoder-Seite,Dienste,digital,Digitalbetrieb," +
                   "Direkt,diverse,Duomatic,Eichfahrzeug,Eichgerätewagen," +
                   "Eigenkonstruktion,Einbau,Einsätze,einsetzbar," +
                   "Einzelteile,Eisenbahnen,Eisenbahn-Journal,EL16," +
                   "Elektronik,eMail,entwickelt,Erfahrungsberichte," +
                   "erfordern,erkennbar,erkennen,fahrbare,Fahrzeugbau," +
                   "Fahrzeuge,Fahrzeugselbstbau,Fäkalienwagen," +
                   "Fertigmodelle,findet,Fotos/Zeichnungen,FREMO,fürs,G10," +
                   "GDS145,geätzt,Gebiet,gedacht,gefahren,Gehäuse," +
                   "geleistet,Gelenk-O-Busses,geschaffen,gezeichnet,GGths," +
                   "Ghs,github,Gleisstopfmaschine,Gms256,Großen,großes," +
                   "Güterzugsteuerwagen,gutes,halbe,Hauptsache,Hilfe," +
                   "Hilfsmittel,Hinweis,Hinweise,Hobby,hoffentlich," +
                   "Höhenlehre,Impressum,Informationen,Infos/sachdienliche," +
                   "Inhalt,interessante,interessieren,inzwischen," +
                   "Jahresmodell,Kanal,Kanalüberführung,Karlsruhe," +
                   "Kastentender,kaufen,Kesselwagen,Kla01,kleine,Kleinen," +
                   "kleines,Klick,Kran,Krümelbahn,Krupp-Ardelt,Kupplungs," +
                   "Kupplungslehre,Kurve,Ladestation,Lenkachse,Links," +
                   "Literatur,Mercedes-Benz,Messingteil,Michelstadt," +
                   "Michelstädter,Modellbahn,Modellbahnaktivitäten," +
                   "Modellbahn-Aktivitäten,Modelle,Modellfahrzeuge," +
                   "modularer,Modulbau,Modulen,Nachbau,Nachfrage," +
                   "Navigation,Norm,öffnet,Ölhilfszug,Öltankzug,Oppeln," +
                   "Originalstromabnehmer,PDF-Datei,Pirmasens,Projekte," +
                   "Pufferlehre,Radsatztransportwagen,Res687," +
                   "Rollenprüfstand,Rottenkraftwagen-Anhänger,Sache," +
                   "Saemann-Ätztechnik,sagen,Schneepflüge,Seiten," +
                   "Seitenanfang,Selbstbau,Skizze,Solingen,Spalte," +
                   "Spurlehre,Stadtwerke,Startseite,Stationierungen," +
                   "Strassenbahnzuges,suche,Suchen,Teil,Teile,Thema," +
                   "Um/Nach/Selbstbauten,Umbau,Umbauten,umgerüstet," +
                   "Umrißmeßwagen,Unbedingt,Unkrautvertilgungszug," +
                   "unschätzbare,unschwer,Verbindung,verfügbar,versucht," +
                   "Vorbild,vorgestellten,Wannentender,Werkstattwagen," +
                   "Werkzeug,Werkzeuge,Wiking,Zeichnungen,Zimmermann," +
                   "Zusatzkomponenten";
       seite[ 4] = "bahn.htm";
beschreibung[ 4] = "Kr&uuml;melbahn - Modellbahnaktivit&auml;ten";
     begriff[ 5] = "abgegrenzt,ausgerüstet,Auszug,Bahnanlagen,Bahnen," +
                   "Bahnhof,Bahnhöfe,Bahnhofskürzel,Bahnhofsteile,Bahnnetz," +
                   "Bahnsinniges,Bahnübergänge,beginnen,Bereich,Bhf," +
                   "bplaced,Brücke,circle,detailreiche,Dezember,Direkt," +
                   "DS100,Duisburg,dürfen,Düsseldorf,Einschränkung," +
                   "Einstiegsseite,enden,erhaltene,Eröffnung,ex206e,fahren," +
                   "Fahrzeuge,Februar,ferngesteuert,fill,Foto," +
                   "gegeneinander,Gesamtgewicht,Geschwindigkeit," +
                   "Gleiswechselbetrieb,Gruiten,Hagen,halten,Haltepunkt," +
                   "Haltepunkte,Hauptbahnhof,Hilden,hover,http,Impressum," +
                   "informative,Inhalt,Januar,Juli,KBS450,KBS455,KBS458," +
                   "KBS-Nummer,Klartext,Klicke,km/h,Köln,kreuzen," +
                   "Krümelbahn,KSG,KSGR,KSM,KSN,KSO,KSS,KSV,KSW," +
                   "Kursbuchstrecke,Lage,Lichtraumprofil,Links,Literatur," +
                   "Lokstation,LZB,Mai,März,maximale,Meterlast,Modellbahn," +
                   "Müngstener,Navigation,nein,net,November,NRW," +
                   "nrwbahnarchiv,Oberstromgrenze,Ohligs,Ohligs-Wald," +
                   "Oktober,opacity,Opladen,planmäßig,PZB,Radsatzlast," +
                   "Rangieren,RB47,RB48,RE7,rect,Remscheid,Richtlinie," +
                   "SaddleBrown,Schienennetz-Benutzungsbedingungen," +
                   "Seitenanfang,September,SGL,Signale,SNB,Solingen," +
                   "Solingen-Gräfrath,Solingen-Grünewald," +
                   "SolingenHauptbahnhof,Solingen-Hauptbahnhof," +
                   "Solingen-Hbf,Solingen-Landwehr,SolingenMitte," +
                   "Solingen-Mitte,Solingen-Nord,Solingen-Ohligs," +
                   "Solingen-Schaberg,Solingen-Vogelpark,Solingen-Wald," +
                   "Startseite,Stellwerke,Stellwerkszentrale,Stilllegung," +
                   "Strecke,Strecken,Streckeninformationen,Streckenklasse," +
                   "Streckenneigung,Streckennummer,Streckenübersicht," +
                   "Suchen,Südbahnhof,SWB,t/m,überholen,Übersetzung," +
                   "Umbenennung,unterteilt,Weiche,Weichen,wenden," +
                   "Weyersberg,Wikipedia,Wirbelstrombremse,Wuppertal," +
                   "WuppertalVohwinkel,Züge,zugelassen,zul,Zwischensignale";
       seite[ 5] = "bahnhof.htm";
beschreibung[ 5] = "Kr&uuml;melbahn - Bahnh&ouml;fe in " +
                   "SolingenStreckenkarte rund um " +
                   "SolingenSolingen-VogelparkSolingen-LandwehrSolingen-SchabergSolingen-OhligsSolingen-WaldSolingen-Gr&auml;frathSolingen-HauptbahnhofSolingen-Gr&uuml;newaldSolingen-NordSolingen-MitteUmgehungsbahnKorkenzieherbahnM&uuml;ngstener " +
                   "Br&uuml;cke";
     begriff[ 6] = "anno,Bahnen,Bahnhöfe,Bahnsinniges,Bergisch-Märkische," +
                   "circle,Direkt,Eisenbahngesellschaft,Eisenbahnstrecken," +
                   "entsprechende,erhaltene,Fahrzeuge,fill,herum,hover," +
                   "Impressum,Inhalt,Klick," +
                   "Köln-Mindener-Eisenbahngesellschaft,Krümelbahn,Links," +
                   "Literatur,Modellbahn,Navigation,öffnet,opacity,path," +
                   "rect,SaddleBrown,Seite,Solingen,Startseite,Strecken," +
                   "Streckenkarte,Suchen,Wikipedia";
       seite[ 6] = "bahnwelt.htm";
beschreibung[ 6] = "Kr&uuml;melbahn - Bahnen im WikipediaStreckenkarte im " +
                   "Bergischen " +
                   "LandSolingen-OhligsSolingen-HauptbahnhofAusbesserungswerk " +
                   "OpladenM&uuml;ngstener Br&uuml;ckeBahnstrecke " +
                   "Solingen–Remscheid-WuppertalBahnstrecke " +
                   "Solingen–Remscheid-WuppertalBahnstrecke " +
                   "Solingen–Remscheid-WuppertalWippertal-BahnBalkanexpressWuppertal-BahnBurgholzbahnKorkenzieherbahnBahnstrecke " +
                   "M&uuml;lheim-Speldorf–TroisdorfSteilrampe " +
                   "Erkrath-HochdahlBahnstrecke " +
                   "D&uuml;sseldorf-Derendorf–Dortmund S&uuml;dBahnstrecke " +
                   "D&uuml;sseldorf-Derendorf–Dortmund S&uuml;dBahnstrecke " +
                   "D&uuml;sseldorf–ElberfeldBahnstrecke " +
                   "Wuppertal-Vohwinkel–Essen-&Uuml;berruhrBahnstrecke " +
                   "Elberfeld–DortmundBahnstrecke " +
                   "Haan-Gruiten–K&ouml;ln-DeutzBahnstrecke " +
                   "Haan-Gruiten–K&ouml;ln-DeutzBahnstrecke " +
                   "Haan-Gruiten–K&ouml;ln-DeutzBahnstrecke " +
                   "K&ouml;ln–DuisburgBahnstrecke " +
                   "K&ouml;ln-M&uuml;lheim–LindlarBahnstrecke " +
                   "K&ouml;ln–DuisburgRuhrtalbahnBahnstrecke " +
                   "D&uuml;sseldorf–SolingenAggertal-BahnLinksniederrheinische " +
                   "Strecke";
     begriff[ 7] = "A14,abgebildet,Abgebremst,abgeklebt,abgeschalteter," +
                   "Abschleppwagen,Abschluss,Abtrocknen,Aceton,Achsabstand," +
                   "Achsanordnung,Achsen,Achslagern,Achsstand,AEG," +
                   "Ah-Bleibatterie,ahrzeug,Akkuschleppfahrzeugs," +
                   "Aktivitäten,Allgemeine,Alternative,Anbauteile,Änderung," +
                   "Änderungen,Andreas,Anfahr,anfordern,Anfrage,angebracht," +
                   "angegebenen,angelötet,angeordnet,angepasst,Anlage," +
                   "Anlagengestaltung,Anreibebuchstaben,Anschließend," +
                   "anschließenden,anstelle,Antrieb,Antwort,Anzahl," +
                   "anzubringen,ASF,ASF109,ASF-Verschiebegeräte,aufgebaut," +
                   "aufgelötet,aufgeschraubtem,aufmerksam,ausdauernd," +
                   "Ausdruck,Ausführung,Ausgabeformat,Ausgabegröße," +
                   "ausgeführt,Auskuppeln,Außenkanten,Bahnanschluss," +
                   "Bahnbetriebswerke,Bahnbetriebswerken,Bahnen," +
                   "Bahnsinniges,Batterien,Batterie-Schleppfahrzeug,Bau," +
                   "Baubeschreibung,Bauelemente,Baugröße,Bausatz," +
                   "Bauteilliste,Bauvorhaben,Bauzeit,Bedarf,bedeuten," +
                   "Bedien,beginnen,beide,beiden,bekannt,Bekohlungs," +
                   "Beleuchung,Bemerkungen,Benennung,benötigte,Berechnung," +
                   "Bereiche,Berichte,Berichten,Beschriftung,Best,besten," +
                   "betätigt,beträgt,Betrieb,Betriebsgeschwindigkeit," +
                   "bewegen,Biegekanten,biegen,bietet,Bildern,Blattfedern," +
                   "blau-weiß,bleiben,blieb,brachte,Breite," +
                   "Brückenprüfwagen,Buch,CAD-Programm,Chemnitz,chlepp," +
                   "chromoxidgrün,CMT-Info,Dach,Dachhaken,dass,Daten," +
                   "Dauerfahrstufen,DCC,Decal,defektem,Deutschland,dienen," +
                   "Dienstmasse,Digitalbetrieb,Digitale,Direkt,dk4mm," +
                   "Drehschalter,Eichfahrzeuge,Eigenkonstruktion,eignet," +
                   "eingefräst/gesägt,eingeklebt,eingelötet,eingesetzt," +
                   "einlöten,Einsatz,Einsatzmöglichkeiten,einstellen," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Kurier,EL16," +
                   "Elektronik,Elektropfeil,Elektropfeile,eMail,empfohlen," +
                   "Enden,Endgeschwindigkeit,Energie,entfernen,Entfetten," +
                   "enthält,entsprechenden,Entwurf,Epoche,Erfolg,erfolglos," +
                   "erfolgte,erforderlichen,erschienen,ersichtlich," +
                   "erstellt,exakte,existiert,Fahnen,Fahren,Fahrgestell," +
                   "Fahrleitung,Fahrmotoren,Fahrspannung,Fahrt," +
                   "Fahrtrichtung,Fahrwerk,Fahrwerkblock,Fahrwerke," +
                   "Fahrwerkes,Fahrzeug,Fahrzeugbau,Fahrzeuges,Fahrzeugs," +
                   "Fäkalienwagen,Farbe,farbig,Faulhaber,Federbronze," +
                   "fehlender,Fenster,Fenstern,Fertigmodell,Film,Folge," +
                   "Folgende,Fotos,Frontseiten,Frontteile,Führerhaus," +
                   "Führerstandsbeleuchtung,Fußhebel,gab,geätzt,gebaute," +
                   "gebogen,geforderten,Gegenüber,Gehäuse," +
                   "Gehäuse-Ätzplatte,Gehäusefrontteile,Gehäusekanten," +
                   "Gehäuses,Gehäuseseiten,Gehäuseseitenteil," +
                   "Gehäusevorbauten,gelötet,gemacht,genommen,genutzt," +
                   "geschnitten,Geschwindigkeit,Geschwindigkeiten," +
                   "gestaltete,gesucht,getestet,Getriebeberechnung," +
                   "Getriebeblock,Getriebes,Getriebeübersetzung,gewählten," +
                   "gewinkelt,GI-Modell,Gleichspannung,Gleisstopfmaschine," +
                   "Grad,grosser,grün,grundiert,Grundierung,gründlichen," +
                   "Güterzugsteuerwagen,H0-Modell,Haltegriffe," +
                   "Handspindelbremse,hängt,Hausprospekt,hb116,he116,he117," +
                   "Henningsdorf,Henningsdorfer,Hersteller,Herstellers," +
                   "Hilfe,hingegen,hinten,Hinweis,Höchstgeschwindigkeit," +
                   "Höhe,höhere,Holzborn,Hupen,ICE-Farben,III,Impressum," +
                   "Industriebetrieben,Industriemodelle/Bausätze," +
                   "Informationen,Inhalt,Jahresmodell,Kadee,Kastenrahmen," +
                   "Kastentender,kku,Klammern,Klarlack,Klarsichtfolie," +
                   "Kleben,kleineres,km/h,komplett,komplettes,konnte," +
                   "konstruiert,Kontrollgeräte,kräftig,Kran,Krümelbahn," +
                   "kuppeln,Kupplung,Kupplungen,Kuswa,Lackieren,lackiert," +
                   "Lackierung,Ladestation,lang,Länge,Laserdrucker,leicht," +
                   "liefert,linken,Links,Literatur,Literaturhinweise,lösen," +
                   "Löten,Lötfahnen,Markierungsdreiecke,Maßangaben,Maße," +
                   "Maßermittlung,mattem,medium,Mercedes-Benz,Messingblech," +
                   "Messingdraht,Messingdrehteil,Messinggehäuses," +
                   "Messingplatte,Messingplatten,Miba,mittig,mittleren," +
                   "Modell,Modellbahn,Modelleisenbahner,Modellfahrzeuge," +
                   "Modulbau,Motor,Motorbuch,Motorlagerung,muss,musste," +
                   "N012G,nächstes,Navigation,ne116,ne316,Nothaft,nv016," +
                   "Oberseite,offenen,Ölhilfszug,Öltankzug,Opladen,optisch," +
                   "orange,Original,Pack,passen,passend,passt,Probleme," +
                   "Puffer,Pufferöffnungen,Pufferteller,Raddurchmesser," +
                   "Räder,Radius,Radsätze,Radsatztransportwagen," +
                   "Rahmenwange,Rahmenwangen,RAL,Rangierarbeiten," +
                   "Rangierleuchten,Rangiertritte,realisiert,rechten," +
                   "Regenabweiser,Reihenschlussmotoren,Reserveteile,Ritzel," +
                   "Ritzel/Zahnradkombination,Rivarossi,robuste,Roco," +
                   "Rollenkette,rot,Rottenkraftwagen,RP25,Rundung,Saalfeld," +
                   "S-Bahn-Farben,Scheibenwischer,Schienenfahrzeuge," +
                   "Schienentriebfahrzeugen,Schleppfahrzeugs,schließen," +
                   "Schlitze,schmal,Schnecken,schneiden,Schrägzahnrad," +
                   "Schrägzahnräder,Schreiben,Schriften,Schriftzug,Schutz," +
                   "Schweißkonstruktion,schwierig,Schwungmasse,sehen," +
                   "Seiten,Seitenanfang,Seitenteil,Seitenteiles," +
                   "Sekundenkleber/Stabilit,Selbstbau,selbsttätig,selten," +
                   "sichtbar,Signalhörner,Solingen,Spieth," +
                   "Spitzenmarkierungen,Spurweite,Staatsbahnverschubgeräte," +
                   "Stabilität,Stahlwelle,Starkstrom-Nockenfahrschalter," +
                   "Startseite,Steuerung,Stück,Stückzahl,Stundenleistung," +
                   "Stuttgart,stützt,Suchen,symmetrisch,T21,Tag," +
                   "Tatzlagerbauart,te116,te117,Techn,Technische,treiben," +
                   "Treibraddurchmesser,Trittstufen,Türe,Türen,Turmwagen," +
                   "Typskizze,U/min,überhöhte,übernimmt,überstehenden," +
                   "U-Messingprofil,umgerechnet,Umrissmesswagen,Umsetzen," +
                   "unbedingt,Unkrautvertilgungszug,Unterhalb,Unterlagen," +
                   "Unterseite,U-Profil,veranlasst,Verbeck," +
                   "Verbindungstechnik,verbunden,Verladeskizze,Verlag," +
                   "verlustlose,Verschiebe,Verschiebekupplungen,Versuch," +
                   "verwendet,vielfältige,vier,Vorbauten,Vorbautüren," +
                   "Vorbild,Vorbildgeschwindigkeit,vorgenommen,vormontiert," +
                   "vorn,Warnanstrich,Warnanstriche,Warnstreifen,Weinert," +
                   "weiteres,Werkes,Werkstatt,wert,Westen,wiederum," +
                   "Winterdienst,wirkenden,W-Positionsleuchte,z10,z24,z44," +
                   "Zähne,Zahnrad,Zeitschriften,Zubringerdienst," +
                   "Zugeständnis,Zughaken,Zugkraft,Zunächst,zusammenfallen," +
                   "zusammengelötet,Zwischengetriebe";
       seite[ 7] = "bau_asf.htm";
beschreibung[ 7] = "Kr&uuml;melbahn - ASF";
     begriff[ 8] = "abnehmbar,Abstützung,Achsanordnung,Aktivitäten," +
                   "Allgemeine,alten,Anbau,Andreas,anfordern," +
                   "Anlagengestaltung,Antriebsschrank,anzubringen,ASF," +
                   "Aufbau,aufgeklebt,Aufstiegsstufen,ausgelegt,Auspuff," +
                   "Ausschneiden,Aussenkante,BA724,Bahndienst," +
                   "Bahndienstfahrzeuge,Bahnen,Bahnsinniges,Band," +
                   "Basiswagen,Bauart,Baubericht,Baubeschreibung,Baujahr," +
                   "Bausatz,Bauteilliste,Befestigungstellen,beiden," +
                   "bekannte,Bekohlungs,Bemerkungen,Benennung,benötigt," +
                   "Beschriftung,Beschriftungen,besitzt,Besonderheiten," +
                   "Best,Betrieb,Bezug,bleiben,blutorange,bohren,breiten," +
                   "Bremsschläuche,Brücken,Brückenbauwerk,Brückenbogen," +
                   "Brückenprüfungswagen,Brückenprüfwagen," +
                   "Brueckenpruefwagen,Conrad,container,Containers," +
                   "Containerseite,Containerskizze,Daten,DCC,dick,dicken," +
                   "Dienstgüterwagen,Dienstmasse,Digitalbetrieb,Direkt," +
                   "Drehgestellabstand,Eichfahrzeuge,Eigenentwurf," +
                   "eigentlich,eingeklebt,eingesetzt,einzig," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Journal,Elektronik," +
                   "Elze,eMail,entfernen,entfernt,enthält,Epoche," +
                   "erforderlichen,ermöglicht,erschienen,erstellen," +
                   "Fabriknummer,Fahrgestell,Fahrzeug,Fahrzeugbau," +
                   "Fahrzeugkupplung,Fahrzeugnummer,Fäkalienwagen,Farbe," +
                   "Federpuffer,Fenster,Fensterrahmen,Fertigmodell," +
                   "Feuerwehrset,Fleischmann,folgende,gebaute,gebogen," +
                   "gebohrt,gefertigt,geklebt,Geländer,gelb,gelbe,gelötet," +
                   "genug,geschieht,geschnitten,getauscht,glatt," +
                   "Gleisstopfmaschine,goldgelb,Graaff,Grundierung," +
                   "Güterwagenzurüstsatz,Güterzugsteuerwagen,Hakenkupplung," +
                   "herab,Herpa,Hersteller,Hilfseinrichtungen,Hinweis,hohl," +
                   "Hubsteiger,Hülsen,Impressum,Industriemodelle/Bausätze," +
                   "Informationen,Inhalt,Jahresmodell,kant,Karlsruhe," +
                   "Kastentender,Klarsichtfolie,kleine,kommt,Kran," +
                   "Kranausleger,Krümelbahn,Kunststoff,Kunststoffplatte," +
                   "Kunststoffstreifen,Lackieren,lackiert,Lackierung," +
                   "Ladestation,Länge,langen,Last,linken,Links,Literatur," +
                   "Literaturhinweis,Literaturhinweise,Lüftungsfenster," +
                   "Maße,Mercedes-Benz,Messingdraht,Messingprofil,mittig," +
                   "mm-Draht,mm-Löcher,Modellbahn,Modellbahn-Kurier," +
                   "Modellfahrzeuge,Modulbau,Navigation,Neonleuchte," +
                   "Nothaft,Öffnungen,Ölhilfszug,Öltankzug,Pack,Palfinger," +
                   "passenden,Platte,Prinzip,Puffer,Pufferbohle," +
                   "Puffersockelplatten,Radsatztransportwagen,RAL," +
                   "Rechteckpuffer,rechten,Res687,Robel,Röhre,Rollos," +
                   "Rottenkraftwagen,Rundstab,Rundumleuchte,schwarz,Seite," +
                   "Seiten,Seitenanfang,Seitenwände,Seltene,Signalhorn," +
                   "silbernen,Skizze,Solingen,Spezialwagen,Spurweite," +
                   "Startseite,steht,Stirnseite,Streifen,Stückzahl,Suchen," +
                   "T21,Techn,Technische,Teileskizze,Teleskoparm,tief," +
                   "Tunnelprüfwagen,Türe,Türen,Türenausschnitte,Türöffnung," +
                   "Türscharniere,Türseite,Umrissmesswagen," +
                   "Unkrautvertilgungszug,untergebracht,untersuchen," +
                   "verschließen,verschlossen,verwendet,Vierkant-Profilen," +
                   "vorhandenen,Wagen,Wagenboden,Wagenseite,Wand,Weinert," +
                   "weißaluminium,wendet,Winterdienst,zerlegt,Zugangstüre," +
                   "Zusammenbau,Zweck";
       seite[ 8] = "bau_brue.htm";
beschreibung[ 8] = "Kr&uuml;melbahn - Br&uuml;ckenpr&uuml;fwagen";
     begriff[ 9] = "Action,Aktivitäten,Allgemeine,anfordern,angeboten," +
                   "Anlagengestaltung,Antrieb,Antriebe,ASF,B-16050,Bahnen," +
                   "Bahnsinniges,Bau,Baubeschreibung,Bausatz,Bekohlungs," +
                   "Bemerkungen,Beschreibungen,Beschriftungssatz,Best," +
                   "Betrieb,Brückenprüfwagen,Conrad,DCC,Digitalbetrieb," +
                   "Direkt,Duomatic,Eichfahrzeuge,Eisenbahn-Kurier," +
                   "Eisenbahn-Magazin,Elektronik,eMail,Epoche,erschienen," +
                   "Expressgang,Fahrzeugbau,Fahrzeuges,Fäkalienwagen," +
                   "Fertigmodell,Firma,Gleis,Gleis-Nivellier-Stopfmaschine," +
                   "Gleisstopfexpress,Gleisstopfmaschine," +
                   "Gleisstopf-Maschine,Gleisstopfmaschinen,Gröditz,große," +
                   "Güterzugsteuerwagen,H0-Bausatz,Hersteller," +
                   "Hobby-Eisenbahner,Impressum,Industriemodelle/Bausätze," +
                   "Informationen,Inhalt,Interest,Jahresmodell,Kap," +
                   "Kastentender,Kibri,Kibris,Kissingen,Klunker,Kossak," +
                   "Kran,Krümelbahn,Ladestation,Liliput,Links,Literatur," +
                   "Literaturhinweise,mbs,Mercedes-Benz,Miba,Modell," +
                   "Modellbahn,Modellbahnindustrie,Modelleisenbahner," +
                   "Modellfahrzeuge,Modulbau,motorisiert,Motorisierung," +
                   "Motorisierungsbausätze,Navigation,Ölhilfszug,Öltankzug," +
                   "Plasser,Praxis-Handbuch,Radsatztransportwagen," +
                   "Rottenkraftwagen,SB-Modellbau,Seite,Seitenanfang," +
                   "Solingen,Startseite,Stopfexpress,Suchen,T21,Teil,übers," +
                   "Umfangreiche,Umrissmesswagen,unbekannt," +
                   "Unkrautvertilgungszug,unmotorisiert,Verlag,Vorbild," +
                   "Willy,Winterdienst";
       seite[ 9] = "bau_duo.htm";
beschreibung[ 9] = "Kr&uuml;melbahn - Plasser Duomatic 07-32";
     begriff[10] = "Abschließend,achs,Achsanordnung,Aktivitäten,ALBA," +
                   "Allgemeine,Anbau,anfordern,angebracht," +
                   "Anlagengestaltung,Anleitung,anschließend,Artikel,ASF," +
                   "Ätzplatte,Aufgaben,ausführlicher,ausgebildet," +
                   "ausgefahren,BA751,BA752,BA753,BA761,BA762,BA764,Bahn," +
                   "Bahnbetriebswerk,bahneigener,Bahnen,Bahnsinniges," +
                   "Basisfahrzeuge,Baubeschreibung,Bausatz,Bauteilliste," +
                   "Bedarf,Bekohlungs,Bemerkungen,Benennung,benötigt," +
                   "Bericht,Beschreibung,beschrieben,Beschriftung," +
                   "Besonderheiten,Best,besteht,Betrieb,Bremsschläuche," +
                   "Brückenprüfwagen,chromoxidgrün,Dampflokzeit,Daten,DCC," +
                   "dienen,Dienstfahrzeuge,Dienstmasse,Digitalbetrieb," +
                   "Direkt,Eich,eichen,Eichfahrzeug,Eichfahrzeuge," +
                   "Eichgerätefahrzeuge,Eichgerätewagen,Eichgewicht," +
                   "Eichgewichte,Eichnormale,Eichwagen,Eichzug,Eigenbau," +
                   "Einsatzgebiet,eisenbahndienstfahrzeuge," +
                   "Eisenbahn-Kurier,Eisenbahn-Magazin,eisengrau," +
                   "Elektronik,eMail,Entfetten,enthält,entsteht,Epoche," +
                   "erfolgen,erfolgt,Erwähnt,Esn,Fahrgestell,Fahrwerk," +
                   "Fahrwerkbefestigung,Fahrwerkblock,Fahrwerksblock," +
                   "Fahrzeug,Fahrzeugbau,Fahrzeuge,Fahrzeugkupplung," +
                   "Fahrzeugumbau,Fäkalienwagen,Farbe,fehlen,Fertigmodell," +
                   "Fichtenberg,finden,Fixierung,Füllstücke,gebaute," +
                   "gedeckter,gedreht,Gehäuse,Gehäuse-Ätzplatte," +
                   "Gerätewagen,Geschwindigkeit,Gewicht,Gewichtsrollen," +
                   "gewohnt,glatt,Gleisstopfmaschine,Gleiswaage," +
                   "Gleiswaagen,grau,Griffe,Griffstangen,grundiert," +
                   "Grundierung,gründlichen,Gs213,Güterwagen," +
                   "Güterzugsteuerwagen,H0-Modell,Hakenkupplung,Hersteller," +
                   "Hinweis,hinzuzufügen,Hmb,höher,HP1,III,Impressum," +
                   "Industriemodelle/Bausätze,Informationen,Inhalt," +
                   "Inneneinrichtung,Jahresmodell,Jungs,Kar,Kastentender," +
                   "Klarlack,km/h,Komplett-Beschriftungssatz,kompletter," +
                   "komplettes,Kran,Kranbahn,Krefeld,Krüger-Modellbau," +
                   "Krümelbahn,Ksl,lackiert,Lackierung,Ladestation,Länge," +
                   "Langträgerverstärkung,leeres,leicht,Links,Literatur," +
                   "Literaturhinweise,Märklin,Maße,massiv,mattem," +
                   "Mercedes-Benz,Messfahrt,Messing,Messingdraht," +
                   "Messingprofil,Miba-Report,mitgeführt,Modell,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Montage,montierten,Mutter," +
                   "Navigation,Nbg,Oberseite,öffnenden,Oldtimer-Waage," +
                   "Ölhilfszug,Öltankzug,Pack,Prüfwagen,Puffer,Radsatz," +
                   "Radsatztransportwagen,RAG,RAL,Roco,Rottenkraftwagen," +
                   "RP25,Rückseite,Rundmaterial,Rundstab,Schraube," +
                   "Schriften,Schutz,schwarz,Schwere,schweren," +
                   "Schwergewichtler,Seite,Seitenanfang,Seitenkästen," +
                   "Selbstbau,Signalscheibenhalter,Skizze,Solingen," +
                   "Spurweite,Stahlrolle,Startseite,Stelle,Stg," +
                   "stirnseitige,Stirnwand,Stirnwänden,Streckenklassen," +
                   "Stückzahl,Suchen,T21,Techn,Technische,Teil,Teile,Türen," +
                   "Überprüfen,umgekehrt,Umrissmesswagen," +
                   "Unkrautvertilgungszug,Unterseite,uschen,verfahren," +
                   "verfügt,Verkehrsgeschichte,vielfältige,Vorderseite," +
                   "Waagen,Wägehäuschen,Wagen,Weinert,Winterdienst," +
                   "Wuppertal-Steinbeck,zugelassen,zul,zunächst," +
                   "Zurüstteile,Zusatzlast,zusätzliche";
       seite[10] = "bau_eich.htm";
beschreibung[10] = "Kr&uuml;melbahn - Eichzug";
     begriff[11] = "Abflussrohr,Aktivitäten,Allgemeine,Anbau,Andreas," +
                   "anfordern,angegossenen,Anlagengestaltung,ASF," +
                   "aufmerksam,Auslassstutzen,BA117,Bahndienst,Bahnen," +
                   "Bahnsinniges,Band,Basiswagen,Baubeschreibung," +
                   "Bauteilliste,Bavaria-Modellbahnen,beiden,bekannt," +
                   "Bekohlungs,Benennung,benötigt,Berichte,Beschriftung," +
                   "Best,Betrieb,Betriebswerk,Bezug,blättern,BR50," +
                   "Bremsschläuche,brennbare,Brückenprüfwagen," +
                   "chromoxidgrün,Dach,Daten,DCC,Diener,Dienstfahrzeuge," +
                   "Dienstgüterwagen,Digitalbetrieb,Direkt,diverse," +
                   "Drehscheibe-Online,Dünger,Eichfahrzeuge,Eigenentwurf," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Journal," +
                   "Eisenbahn-Magazin,eisengrau,Elektronik,eMail,entfernt," +
                   "enthält,Fahrgestell,Fahrzeug,Fahrzeugbau," +
                   "Fahrzeugkupplung,Fahrzeugs,Fäkalienwagen,Farbe," +
                   "Flüssigkeiten,Folgende,G10,Gehäuse,gekröpft,glatt," +
                   "Gleisstopfmaschine,Gold,Grundierung,Güterwagen," +
                   "Güterwagenwände,Güterwagenzurüstsatz," +
                   "Güterzugsteuerwagen,Hakenkupplung,Hinweis,Impressum," +
                   "Industriemodelle/Bausätze,Informationen,Inhalt," +
                   "Jahresmodell,Jauche,Joswood,Kastentender,Kesselwagen," +
                   "Kran,Krümelbahn,Kunststoffplatte,Kunststoffprofil," +
                   "Lackierung,Ladestation,Länderbahnen,Langlebige," +
                   "Latrinenwagen,Links,Literatur,Literaturhinweise," +
                   "Mercedes-Benz,Messingprofil,Miba-Report,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Moe24001,Navigation,Nothaft," +
                   "Notwendigkeit,Ölhilfszug,Öltankzug,Pack,Profile," +
                   "Profilsatz,Puffer,Pufferbohlen,Puffersockelplatten," +
                   "Radsatztransportwagen,Rahmen,RAL,Rangiertritte," +
                   "Recherchen,Rechteck-Profil,Rheinbrück,Roco,Rohr," +
                   "Rottenkraftwagen,Rund,schwarz,Seite,Seiten," +
                   "Seitenanfang,Selbstbau,selten,Signalscheibenhalter," +
                   "Solingen,Spezialwagen,Spritzenkanüle,Startseite," +
                   "Stinkendes,Stinker,Stückzahl,Suche,Suchen,T21,Tank," +
                   "Tankende,Techn,Teile,Tiefere,Umrissmesswagen," +
                   "Umstellhebel,Universal,Unkrautvertilgungszug,unteren," +
                   "Verfeinerungswunsch,verwendet,vorhalten," +
                   "Vorsatzschneepflug,Wagen,Wagenboden,Weinert," +
                   "weißaluminium,Winterdienst,Wuppertal,Württembergische," +
                   "x30,zeigten,Zeitschriften,Zettelkästen,Zweck";
       seite[11] = "bau_jauch.htm";
beschreibung[11] = "Kr&uuml;melbahn - F&auml;kalienwagen";
     begriff[12] = "#501,Achsen,ähnliche,Aktivitäten,Allgemeinen,alten," +
                   "Alternativ,Anbau,anfordern,Anlagengestaltung,Artikelnr," +
                   "ASF,aufgeführt,Ausführungen,Bahnen,Bahnsinniges,Basis," +
                   "Basisfahrzeuge,Bekohlungs,bekommen,Benennung,benötigt," +
                   "besseren,Best,beträgt,Bochum-Dahlhausen,Börsen,BR38," +
                   "Bremsschläuche,Brückenprüfwagen,Dampflokomotiven,Daten," +
                   "DB-Einheitslaternen,DCC,Detaillierung,Dienstfahrzeuge," +
                   "dient,Digitalbetrieb,Direkt,Drehgestell," +
                   "Drehgestellblende,Eichfahrzeuge,eigentlich," +
                   "Einzeldarstellungen,Eisenbahnmuseum,Elektronik,eMail," +
                   "enthaltenen,entsprechenden,ergänzen,Ersatzteile," +
                   "Fahrzeugbau,Fahrzeugkupplung,Fäkalienwagen,fallen," +
                   "falsch,falschen,Firma,Franckh,gekröpft,Gerard,glatt," +
                   "Gleisstopfmaschine,Griffstangen,Griffstangenhalter," +
                   "Güterwagenzurüstsatz,Güterzugsteuerwagen,Hakenkupplung," +
                   "hinten,Hinweis,Hinweise,Impressum,Informationen,Inhalt," +
                   "ISBN,Jahresmodell,Kadee-Drehgestell,Kastentender,kommt," +
                   "komplett,kompletten,Kran,Krümelbahn,Ladestation," +
                   "Liliput,Links,Liste,Literatur,Literaturhinweise," +
                   "Lok3098,Lok43216,Lokunbekannt,Märklin,Mercedes-Benz," +
                   "Messerschmidt,Messingdraht,Mitte,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Navigation,Ölhilfszug," +
                   "Öltankzug,Original,Originaldurchmesser,Pack,Puffer," +
                   "Pufferbohle,Puffersockelplatten,Rad,Räder,Radsatz," +
                   "radsätze,Radsatztransportwagen,Roco,Rottenkraftwagen," +
                   "Rückwand,sche,Schneepflug,Seite,Seitenanfang," +
                   "Signalscheibenhalter,Solingen,Speichen,Startseite," +
                   "Stückzahl,Stuttgart,Suchen,T21,Techn,Tender," +
                   "Tenderrückansicht,Tenderrückwand,Tenders,Übersicht," +
                   "Umbau,Umbauarbeiten,Umbaubeschreibung,Umbauseiten," +
                   "Umrissmesswagen,Unkrautsprengwagen," +
                   "Unkrautvertilgungszug,Verlagshandlung,verwendet," +
                   "Weinert,Winterdienst,Wolfgang,Zurüstteile,Zurüstteilen," +
                   "Zusammenstellung";
       seite[12] = "bau_kate.htm";
beschreibung[12] = "Kr&uuml;melbahn - Kastentender 2'2'T21.5";
     begriff[13] = "abnehmbaren,Achsanordnung,Achsstand,Aktivitäten," +
                   "Allgemeine,alte,anfordern,angebracht,angehangen," +
                   "Anhänger,Anlagengestaltung,Anmerkung,ASF,Atlaskran," +
                   "aufgebaut,aufzuwerten,ausgetauscht,Bahnen,Bahnsinniges," +
                   "Baubeschreibung,Baumaterial,Bausatz,Bauteilliste," +
                   "Bekohlungs,Bemerkungen,Benennung,Beschreibung,Betrieb," +
                   "Bleiblock,Bochum-Dahlhausen,Bordwände,Brawa," +
                   "Brückenprüfwagen,Daten,DCC,Detailzeichnung,Deutschen," +
                   "dient,Digitalbetrieb,Direkt,Draisinen," +
                   "Draisinenfahrzeugen,Eichfahrzeuge," +
                   "eisenbahndienstfahrzeuge,Eisenbahnfreunde," +
                   "Eisenbahnmuseum,Elektronik,eMail,Ende,entfernen," +
                   "entfernt,entschloss,Epoche,erhalten,Erweiterung," +
                   "Fahrzeugbau,Fahrzeuges,Fahrzeugseiten,Fäkalienwagen," +
                   "Fensteröffnungen,Fertigmodell,finden,Frontscheibe," +
                   "gelötet,Gleisanlagen,Gleisstopfmaschine," +
                   "Güterzugsteuerwagen,halbiertem,Halterungen,Hersteller," +
                   "I-Form,III,Impressum,Industriemodelle/Bausätze," +
                   "Informationen,Inhalt,interessante,Jahresmodell,John," +
                   "Kastentender,Kla,Kla01,Klv51,komplett,Kran,Krümelbahn," +
                   "Kupplung,Kupplungsdeichsel,lackiert,Lackierung," +
                   "Ladefläche,Ladekran,Ladestation,Länge,Längsseiten," +
                   "Leergewicht,leicht,Links,Literatur,Literaturhinweise," +
                   "Maße,Mercedes-Benz,Messingblech,Messingplatte," +
                   "Messingprofil,Messingteilen,Milchglashaube,Modell," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,montiert,mühsam," +
                   "Museumsbahnen,Nachbau,Navigation,Ölhilfszug,Öltankzug," +
                   "Pack,Plexiglasscheiben,Puffer,Querseite,Querseiten," +
                   "Raddurchmesser,Radsatztransportwagen,Rahmen,Rechteck," +
                   "Rechteck-Messingprofil,Rockingerkupplung," +
                   "Rockinger-LKW-Kupplung,Rottenkraftwagen,Rundmessing," +
                   "Rundstab,Sammlung,Scheibenwischer,Schienenfahrrad," +
                   "schwere,Seitenanfang,Solingen,Spurweite,Startseite," +
                   "Stefan,Steinbockkran,Suchen,T21,Techn,Technische," +
                   "Transport,Transportkapazitäten,Trittstufe,Trittstufen," +
                   "Turmtriebwagen,Typ,U-Form,Umrissmesswagen," +
                   "Unkrautvertilgungszug,Unterhaltung,U-Profil," +
                   "verschlossen,Weinert,Wetterau,Winterdienst";
       seite[13] = "bau_kla.htm";
beschreibung[13] = "Kr&uuml;melbahn - Kla01";
     begriff[14] = "achsiger,Aktivitäten,ALBA,Allgemeine,Allround-Talent," +
                   "Andreas,anfordern,Anlagengestaltung,Ardelt,ASF,Aufbau," +
                   "Auslegerstützw,B-16000,B-16010,B-19600," +
                   "Bahnbetriebswerke,Bahnen,Bahnsinniges,Baubeschreibung," +
                   "Bausatz,beiden,Bekohlungs,Bemerkungen,Berichte," +
                   "Beschreibung,Beschreibungen,Beschriftung," +
                   "Beschriftungssatz,Betrieb,Bildung,Blechausleger," +
                   "Brocken,Brückenprüfwagen,Brüder,Dampfkran,DCC," +
                   "Digitalbetrieb,Direkt,DRG,ehemaliger,Eichfahrzeuge," +
                   "eigentlichen,eignen,eisenbahndienstfahrzeuge," +
                   "Eisenbahnkran,Eisenbahn-Kurier,Eisenbahn-Magazin," +
                   "Elektronik,eMail,Epoche,erschienen,Fahrzeugbau," +
                   "Fahrzeuge,Fäkalienwagen,Fertigmodell,Fleischmann,Fulda," +
                   "G07,Gassner,Gegengewicht,Gegengewichtewagen," +
                   "Gegengewichtswagen,gehören,gemeinsamen,Gepäckwagen," +
                   "Gerätewagen,Gleisbauschienenkran,Gleisstopfmaschine," +
                   "Goliath,Gottwald,Gottwald-Kran,Gottwald-Teleskopkran," +
                   "GS100,Güterzugsteuerwagen,Gützold,Hängt,Hannover," +
                   "Hersteller,Hilfswagenset,Hilfszug,Hochausleger,höher," +
                   "III,Impressum,Industriemodelle/Bausätze,Informationen," +
                   "Inhalt,Jahresmodell,Kastentender,Kibri,Kohle," +
                   "Kohle/Wasser,Kohlenkran,Kohlenversorgung," +
                   "Komplettbeschriftung,Komplettes,Komplettset,Kraftpaket," +
                   "Kraftprotz,Kran,Kran100,Kran57,Kran75," +
                   "Kranausleger-Stützwagen,Kranbegleitwagen," +
                   "Kranbelastungswagen,KranGS100,Kranschutzw," +
                   "Kranschutzwagen,Kranwagen,Kranwagenzug,Kranzug," +
                   "Kranzug-Beiwagen,Kranzuges,Krüger-Modellbau,Krümelbahn," +
                   "Krupp-Ardelt,L383811,Ladestation,Liliput,Links," +
                   "Literatur,Literaturhinweise,Mannschaftswagen,Märklin," +
                   "Märklins,Maßstab,Mercedes-Benz,MIBA,Miniaturbahnen," +
                   "Modell,Modellbahn,Modellbahnpraxis,Modellfahrzeuge," +
                   "Modulbau,Navigation,NEM-Räder,Nothaft,Ölhilfszug," +
                   "Öltankzug,Personen,Personenwagen,R10," +
                   "Radsatztransportwagen,Regelspurkräne,Roco,Rolle," +
                   "Rottenkraftwagen,RP25-Räder,Schutzwagen,Schwerer,Seite," +
                   "Seiten,Seitenanfang,Solingen,Solingen-Hauptbahnhof," +
                   "solo,Spezial,Startseite,Stuttgart,Stützwagen,Suchen," +
                   "T21,Tender,t-Kran,t-Krans,t-Kranwagen,Tonnen," +
                   "Tonnen-Dampfkran,Tragende,Trix,umfangreiche,umgebauter," +
                   "Umrissmesswagen,Unkrautvertilgungszug,unmotorisiert," +
                   "verpflichtet,Vorbild,Vorratstender,Wagen,Wannen,Wasser," +
                   "Wasserwagen,Weinert,Weinerts,Werkstattwagen,West," +
                   "Winterdienst,Wohnwagen,X05,zugeteilt";
       seite[14] = "bau_kran.htm";
beschreibung[14] = "Kr&uuml;melbahn - (Bekohlungs-)Kran";
     begriff[15] = "abgeschnitten,abgesichert,abgestellt,achsig,achsigem," +
                   "A-Gleichrichter,Akkublitz,Akku-Diener,Akku-Ladestation," +
                   "Akkutriebwagen,Akkutriebwagenbetriebes,Aktivitäten," +
                   "Allgemeine,alten,Andeutung,Andreas,anfordern," +
                   "angebracht,angeschlossen,Anlagengestaltung," +
                   "anschließend,Arbeitslampen,ASF,auffälligsten,aufgebaut," +
                   "aufgeklebt,aufgestellt,Außenbeleuchtung,Außentreppe," +
                   "Bahndienst,Bahnen,Bahnsinniges,Band,Batterie," +
                   "Batteriekapazität,Baubeschreibung,Bausatz,Bauteilliste," +
                   "befestigt,beiden,Bekohlungs,Bemerkungen,Benennung," +
                   "Bericht,Beschriftung,Beschriftungen,besitzt,Best," +
                   "bestehen,bestehend,besten,Betrieb,beweglich,Bild," +
                   "Bleche,bleiben,Bohrungen,Bremsschläuche," +
                   "Brückenprüfwagen,chromoxidgrün,Conrad,Dachaufbauten," +
                   "Daches,Daten,DB-Lampen,DB-Zeichen,DCC,Dienstgüterwagen," +
                   "Digitalbetrieb,Direkt,Drehscheibe,dünne,Eichfahrzeuge," +
                   "Eigenbau,eingeklebt,eingesetzt,Einsatz,Einzelteile," +
                   "Eisenbahn-Journal,Eisenbahn-Kurier,Eisenbahn-Magazin," +
                   "Elektronik,Elektropfeil,Elektropfeile,eMail,entfernt," +
                   "Entfetten,entspricht,Epoche,erreicht,ersetzt,ETA," +
                   "ETA-Endstationen,ETA-Ladeanlagen,ETA-Ladestation," +
                   "Fahrgestell,Fahrzeug,Fahrzeugbau,Fahrzeugkupplung," +
                   "Fäkalienwagen,Farbe,farblich,Federpuffer,Fenster," +
                   "Fensteröffnungen,Fertigmodell,Fleischmann,Foto,Fotos," +
                   "Furnierholz,Furnierholzbrettchen,G05,G10,gebohrt," +
                   "Gehäuse,geklebt,glatt,gleiches,Gleichrichterwagens," +
                   "Gleisfeldbeleuchtung,Gleisfeldleuchte," +
                   "Gleisstopfmaschine,grundiert,Grundierung,gründlichen," +
                   "Güterwagenzurüstteile,Güterzugsteuerwagen," +
                   "Hakenkupplung,Haube,Hauben,Hemmschuhen,Hersteller," +
                   "heruntergekommen,Herzstück,Heulboje," +
                   "Hochspannungsisolatoren,I/92,III,Impressum," +
                   "Industriemodelle/Bausätze,Informationen,Inhalt," +
                   "I-Profil,Jahren,Jahresmodell,jahrzehntelang," +
                   "Kastentender,Klarlack,Klarsichtfolie,kleine," +
                   "Komplettbeschriftung,komplettes,Kran,Krümelbahn," +
                   "Kunststoffplatte,Kunststoffplatten,Kupplungen," +
                   "kV-Einspeisung,Lack,Lackieren,lackiert,Lackierung," +
                   "Ladeanlagen,Ladesäulen,Ladestation,Ladestationen," +
                   "Länderbahngüterwagen,LC99150,Lemke,letzten,Links," +
                   "Literatur,Literaturhinweise,Löcher,Lüftungsgitter," +
                   "Magazin,markanten,Mast,mattem,meisten,Mercedes-Benz," +
                   "Messingdraht,Messinggestell,Miba,Microlampen,Mitte," +
                   "mittels,Modell,Modellbahn,Modellfahrzeuge,Modulbau," +
                   "montiert,nachgebildet,Nachtstunden,Navigation,N-Bahn," +
                   "Nothaft,Oberhausen,Ölhilfszug,Öltankzug,Ösen,Pack," +
                   "passend,Puffer,Pufferbohlen,Pufferplatten,Radsätze," +
                   "Radsatztransportwagen,RAL,Rangiertritte," +
                   "Reichsbahngüterwagen,Roco,Rottenkraftwagen,RP25," +
                   "Schaltbild,Schiebetüren,schneiden,Schriften,Schriftzug," +
                   "Schutz,schwarz,Schwellenkreuz,Seite,Seiten," +
                   "Seitenanfang,Sh2-Signalen,Signalhörner," +
                   "Signalscheibenhalter,Sinne,Solingen,Sommerfeldt," +
                   "Sonderheft,Spezial,Spezialwagen,Spieth,Spur,stand," +
                   "Startseite,Stecker,Stelle,Stellen,Stirnseiten," +
                   "Stirntüren,Streben,streifen,Strom,Stromtankstellen," +
                   "Stromversorgung,Stückzahl,Suchen,T21,Techn,Technische," +
                   "Teile,Triebwagen,Trittbretter,Trix,Türen,Über," +
                   "Übergangsbleche,Umfeldgestaltung,Umformwagen,umgebaute," +
                   "Umrissmesswagen,Unkrautvertilgungszug,Unterbringung," +
                   "unterhalb,V/15mA,verleiteten,verschlossen,volle," +
                   "Vorbild,vorhandene,Wagen,Wagenkasten,Wagenkastenende," +
                   "Wagenkastens,Wagenlängsseite,Wagenübergangsbleche," +
                   "wahrsten,Weinert,weiteren,weitestgehend,Winterdienst," +
                   "Worms,Wortes,zerlegt,Zettelkästen,Zigarre,Zugangstüre," +
                   "Zugangstüren,Zugbildungen,zunächst,zusammengebaut," +
                   "Zweck";
       seite[15] = "bau_lad.htm";
beschreibung[15] = "Kr&uuml;melbahn - Akku-Ladestation";
     begriff[16] = "abgelösten,Adapter,Aktivitäten,Allgemeine,alte,alten," +
                   "anfordern,angefügt,Anlagengestaltung,Anlässlich,Anm," +
                   "ASF,Axel,Baden,Badischen,Bahnen,Bahnfeuerwehren," +
                   "Bahnhofswagen,Bahnsinniges,Band,basierend,Bauart," +
                   "Baubeschreibung,Bausatz,Bdwg64674,behielt,beiden," +
                   "Bekohlungs,Bemerkungen,Benennung,Beschreibung," +
                   "Beschreibungen,Beschriftungssatz,Best,bestand,besteht," +
                   "Betrieb,Bfwg64052,Bfwg64053,Bfwg64054,Bfwg64674," +
                   "Bildunterschrift,blieb,BR52,Brückenprüfwagen," +
                   "Bühnenende,Bunkeröl,Bz6a,Dach,DCC,DGEG,Dienste," +
                   "Dienstfahrzeuge,Digitalbetrieb,Direkt,D-Modell," +
                   "ehemaliger,Eichfahrzeuge,eignet," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Magazin,Elektronik," +
                   "eMail,Entfernung,entworfen,Epoche,erfolgte,erfuhr," +
                   "Ergänzung,erhalten,erhielten,Ersatz,erschienen,erwähnt," +
                   "Fahrzeugbau,Fahrzeuge,Fäkalienwagen,fand,Federpuffer," +
                   "Fertigmodell,Feuerwehr,früheren,gab,gedeckter,gelbem," +
                   "Gerätewagen,Gleisstopfmaschine,Gls,Gls205,Gms256,Gms54," +
                   "goldgelbe,goldgelben,Griffstangenhalter," +
                   "Großherzoglichen,grünen,Güterwagen,Güterzugsteuerwagen," +
                   "handelt,Heizöl,Helfen,herangezogen,Hersteller," +
                   "Hilfsgerätewagen,Hilfskesselwagen,Hilfszug,Hilfszüge," +
                   "hinterstellte,III,Impressum,Industriemodelle/Bausätze," +
                   "Informationen,Inhalt,ISBN,Jahresmodell,kam,Karlsruhe," +
                   "Kastentender,Kesselwagen,Kleid,Kohelkasten," +
                   "Kohlekastens,Kombination,konnte,Kran,Krümelbahn," +
                   "Kupplungsadapter,L240131,Lackierung,Ladestation," +
                   "Liliput,Links,Literatur,Magazin,Mannheim,Märklin," +
                   "Mercedes-Benz,Miba-Report,Modell,Modellbahn," +
                   "Modellfahrzeuge,Modernisierung,Modulbau,Navigation,NEM," +
                   "NEM-Schacht,Neustadt,Nummer,Oelhilfszug,Öl-Alarm," +
                   "Ölhilfszug,Öltankzug,Ölunfälle,Ölwehrtender,Oppeln," +
                   "passenden,Podszun,Polnik,Radsätze," +
                   "Radsatztransportwagen,RAL,Rbf,Retten,Roco," +
                   "Rottenkraftwagen,Schiene,Seite,Seitenanfang,Solingen," +
                   "Spieth,Staatseisenbahn,Startseite,Stückliste,Suchen," +
                   "T21,Tankgerätewagen,Tender,Transport,Transportwagen," +
                   "Umbau,Umbauanleitung,Umbaus,Umbausatz,umfangreiche," +
                   "Umrissmesswagen,Umwelt,Unkrautvertilgungszug,verbirgt," +
                   "Verlag,verschrottet,Verwendung,vierachsige,Vorbild," +
                   "vorgefunden,vormals,Wagen,Wannentender,Wannentendern," +
                   "Weinert,Weinstraße,wiederum,Winterdienst,zugeordnet," +
                   "zuletzt,zurückgegriffen,zusammen";
       seite[16] = "bau_oelh.htm";
beschreibung[16] = "Kr&uuml;melbahn - &Ouml;lhilfszug";
     begriff[17] = "achsige,Aktivitäten,Allgemeine,anfordern,angefügt," +
                   "angewiesen,Anlagengestaltung,Artikelnummer,ASF," +
                   "Aufgetankt,Bahn,Bahnbetriebswerke,Bahndienstwagen," +
                   "Bahnen,Bahnsinniges,Bau,Bauanleitungen,Bauart," +
                   "bauart-ähnlicher,Baubeschreibung,Bausatz,Bauzeit,Bebra," +
                   "Bebraner,Bekohlungs,bekommen,benötigte,Beschreibung," +
                   "Beschreibungen,Betankungsrohr,Betrieb,Betriebsnummer," +
                   "bietet,Boxenstopp,Brückenprüfwagen,damaligen," +
                   "Dampflokomotve,Darmstadt-Kranichstein,DCC,Deutz," +
                   "Dienstfahrzeuge,Digitalbetrieb,Direkt,durchgehenden," +
                   "Eichfahrzeuge,eigentlich,Eilige,Einsatz,einsetzen," +
                   "Eisenbahn-Kurier,Elektronik,eMail,enthält,entspricht," +
                   "erhältlich,erhältliche,erschienen,Erwähnt,Fahrzeugbau," +
                   "Fäkalienwagen,Feuerwehr,Firma,fungierte,G02,G10," +
                   "Gebrauchtwarenhändler,Gleisstopfmaschine,Güterwagen," +
                   "Güterzugsteuerwagen,Hannover,Heizölwagen,Impressum," +
                   "Informationen,Inhalt,Jahresmodell,Kastentender,Kessel," +
                   "Kesselwagen,Kran,Krümelbahn,Ladestation,Längsträger," +
                   "Laternen,Laufsteg,Leichtbaudrehgestellkesselwagen," +
                   "Leiter,Liliput,Links,Literatur,ltankzug,lung,Mai," +
                   "Märklin,Mercedes-Benz,Miba-Report,Miba-Spezial,mobile," +
                   "Modell,Modellbahn,Modelleisenbahner,Modellfahrzeuge," +
                   "Modulbau,Museum,Navigation,Nummer,Oeltankzug,offenen," +
                   "öffnenden,Ölhilfszug,Ölkran,Öltankzug,Ölung,Ölwagen," +
                   "Original,passt,Programm,Pumpenwagen," +
                   "Radsatztransportwagen,Rottenkraftwagen,schwenkbaren," +
                   "Seite,Seitenanfang,selbsttragender,Solingen,Spezial," +
                   "Startseite,Stelle,Suchen,T21,Tankstelle,Tankzug," +
                   "Tankzugwagens,Türen,Umbau,umfangreiche,Umlackierung," +
                   "Umrissmesswagen,Unkrautvertilgungszug,verschwiegen," +
                   "verwendet,Vorbild,Wagen,Weinert,Winterdienst,Zuglok," +
                   "Zurüstsatz";
       seite[17] = "bau_oelt.htm";
beschreibung[17] = "Kr&uuml;melbahn - &Ouml;ltankzug";
     begriff[18] = "abdrehen,abgefahren,Abhilfe,Abstand,Achse,Achsen," +
                   "Achslager,Achsstummeln,Aktivitäten,ALBA,Allgemeine," +
                   "alte,alten,Alterung,Anbau,Andreas,anfordern," +
                   "angegossenen,angeordnet,Anlagengestaltung,Anordnung," +
                   "Anschriften,anzuordnen,ASF,Ätzplatte,Ätzteile," +
                   "aufbohren,Außenkante,B104,BA192,Bahnbetriebswerke," +
                   "Bahndienst,Bahnen,Bahnsinniges,BahnSinn-Shop,Band," +
                   "Basis,Basiswagen,Baubeschreibung,bauen,Bausatz," +
                   "Bauteile,Bauteilliste,befestigt,Befestigung,beiden," +
                   "beinhaltet,Bekohlungs,beladen,Beladung,belegt," +
                   "Bemerkungen,Benennung,benötigt,berücksichtigt,beruht," +
                   "beschreibt,Beschriftung,Beschriftungen,besitzen,Best," +
                   "Besten,beträgt,Betrieb,Bohrer,Bremserbühne," +
                   "Bremsschläuche,Bremsumstellhebel,Brückenprüfwagen," +
                   "BTms33,BTms55,Dampflokachse,Dampflokachsen," +
                   "Darmstadt-Kranichstein,Daten,DCC,dezente," +
                   "Dienstfahrzeuge,Dienstgüterwagen,Digitalbetrieb,Direkt," +
                   "drei,Eichfahrzeuge,eigentlich,einbaufertig," +
                   "eingeschraubt,eisenbahndienstfahrzeuge,Elektronik," +
                   "eMail,entfernen,entfernt,enthalten,Epoche,ergänzt," +
                   "erhältlich,ersetzen,Erwähnt,existiert,Fahrgestell," +
                   "Fahrwerken,Fahrzeugbau,Fahrzeugen,Fahrzeugkupplung," +
                   "Fäkalienwagen,falsch,Farbe,Fehl,fehlen,feine," +
                   "Fertigmodell,Fleischmann,Freien,gebogen,gefertigt," +
                   "gegenüber,Gestells,Gewicht,glänzenden,glatt," +
                   "Gleisstopfmaschine,großen,grün,Grundierung," +
                   "Güterwagenzurüstsatz,Güterwagenzurüstsatzes," +
                   "Güterzugsteuerwagen,Hakenkupplung,Hersteller,herum," +
                   "hingewiesen,Hinweis,Hinweise,Holzklötzchen,H-Profil," +
                   "H-Profile,III,Impressum,Industriemodelle/Bausätze," +
                   "Informationen,Inhalt,inzwischen,Jahresmodell," +
                   "Kabelisolierung,Kastentender,kegelförmigen,kleinen," +
                   "Kleinlok,kommt,komplett,Kran,Krüger-Modellbau," +
                   "Krümelbahn,L221511,Lackierung,Ladefähigkeit," +
                   "Ladegestell,Ladegut,Ladestation,Ladung,lang,Länge," +
                   "Lastgrenze,Laufflächen,Liliput,Links,Literatur," +
                   "Literaturhinweise,L-Profil,LüP,markiert,Maßangaben," +
                   "maximal,Mercedes-Benz,Messingdrehteil,Messingprofil," +
                   "Miba-Report,miteinander,Mittelplatte,Mittenabstand," +
                   "Modell,Modellbahn,Modellbahnpraxis,Modellfahrzeuge," +
                   "Modulbau,Montageskizze,Museum,nachgereicht,Navigation," +
                   "Nieten,normalen,Nothaft,Nummer,Ölhilfszug,Öltankzug," +
                   "original,Originalkupplungen,Pack,Platte,Platz," +
                   "poliertem,Profils,Puffer,Pufferbohlen,Pufferplatten," +
                   "Puffersockelplatten,Querschienen,Rad,Radlager,Radsatz," +
                   "Radsätze,Radsatzgestell,Radsatzgestells,Radsatzträger," +
                   "Radsatztransportwagen,Radsatzwagen,Rahmen,RAL," +
                   "Rangieren,Rangiertritte,richtig,Rödeldraht,Röhrchen," +
                   "Rost,rostfarbene,rot,Rottenkraftwagen,Schaken,Schienen," +
                   "Schienenprofil,Schraubgewinde,Schutzhüllen,schwarz," +
                   "Seite,Seitenanfang,Seitenplatten,Selbstbau,setzt," +
                   "Sicherung,sieht,sinnigerweise,Solingen,Sonstige," +
                   "sparsam,Spezial,Spezialwagen,Spieth,Spieth-Bausatz," +
                   "Spitzenlager,springen,Spurkränze,Spurkränzen,Stahl," +
                   "Stange,Startseite,Stelle,Störend,Stückzahl,Suchen,T21," +
                   "Techn,Teile,Teilen,Tillig,T-Profil,Transport," +
                   "Transportaufgaben,transportiert,Transportpalette," +
                   "überhöhten,Umbau,umfassend,Umrissmesswagen," +
                   "Umstellhebel,Unkrautvertilgungszug,unterschiedl," +
                   "unterschiedlichen,U-Profil,U-Profile,verbunden," +
                   "Verfeinerungswunsch,verladen,verwendet,Verwendung," +
                   "vielfältigen,Vorbild,vorliegt,Wagen,wegrollen,Weinert," +
                   "Wem,werkseigenen,wiegt,Winterdienst,wirken,Zeichnungen," +
                   "Zettelkasten,Zettelkästen,zusammengelötet,Zusatz," +
                   "zusätzliche,Zweck,zylinderförmige";
       seite[18] = "bau_rad.htm";
beschreibung[18] = "Kr&uuml;melbahn - Radsatztransportwagen";
     begriff[19] = "abgekickte,abgeschabten,Abschließend,Abstützung,achs," +
                   "achsigen,akribisch,Aktionskünstler,Aktivitäten,aktuell," +
                   "Allgemeine,Altenbeken,Anbau,anbieten,Andreas,anfordern," +
                   "angebracht,angepasst,Anlagengestaltung,anschließend," +
                   "Anspruch,anstelle,Äquivalente,arbeiten,ASF,Ätzplatten," +
                   "aufgebracht,aufgelötet,auflöten,Aufstellung,ausbleiben," +
                   "ausgeschnitten,Autor,B101,B101-A,B101-B,B102,B103,B127," +
                   "B128,B201,B201-A,B202,BA834,BA844,BA845,Bahnalltag," +
                   "Bahnen,Bahnsinniges,Basierend,Basisfahrzeug," +
                   "Basistender,Basiswagen,Bau,Bauart,Baubeschreibung," +
                   "Bausatz,Bayern,beiden,Beispiel,Bekohlungs,Bemerkungen," +
                   "Benennung,benötigt,Berger,Berlin,beruht,beschränkt," +
                   "beschreibt,Beschreibungen,beschrieben,Beschriftung," +
                   "Beschriftungen,Beschriftungsatz,Beschriftungssatz," +
                   "Beschriftungsvorschalg,Beschriftungsvorschlag," +
                   "besonderer,besorgt,Best,besteht,Bestellnummer,besten," +
                   "Besuch,Betrieb,Bezeichnung,Bezug,Bhf,Biegen," +
                   "Bildersuche,Bimmelbahnen,BLS,Bochum-Dahlhausen,Boden," +
                   "Bodengruppe,Bodens,BR41,Bremen,Bremsschläuche,Brett," +
                   "Brilon-Wald,Brückenprüfwagen,Bz5,Celophanfolie," +
                   "chromoxidgrün,Conrad,Dach,Dampflokmuseum,Dampfpfeife," +
                   "Dampfschneeschleuder,Daten,DB-Einheitslaternen,DCC," +
                   "Deutschen,Deutsches,DGEG,Dienstfahrzeuge," +
                   "Digitalbetrieb,Direkt,diverse,DK-Model," +
                   "Drehgestellbefestigungen,Drehscheibe-Online,drei," +
                   "Dreiecken,dünnem,dürftig,E36-Fahrwerk,ebenso,Ecke," +
                   "Eichfahrzeuge,Eigenentwurf,eigentliche,einfacher," +
                   "eingebaut,eingeklebt,eingesetzt,Einsatz,Einzelteile," +
                   "Eisenbahnausbesserungswerk,Eisenbahnbildarchiv," +
                   "eisenbahndienstfahrzeuge,Eisenbahnfreunde," +
                   "Eisenbahn-Kurier,Eisenbahn-Magazin,Eisenbahnmuseum," +
                   "Eisenbahnverein,Elektronik,eMail,empfiehlt,endgültig," +
                   "entfernt,Entfetten,entstand,entsteht,Epoche,erfolgt," +
                   "Ergänzungen,erhält,Erhaltene,erhaltenen,erhältlich," +
                   "erhebt,erkennt,erleiden,Ersatzteile,erschienen," +
                   "ersetzen,ersetzt,erwähnt,Erweiterung,ETB,Exemplare," +
                   "Explosionszeichnungen,Fabriknummer,Fahrgestell," +
                   "Fahrgestelle,Fahrzeug,Fahrzeugbau,Fahrzeuge," +
                   "Fahrzeug-Geschichte,Fahrzeugkupplung,Fahrzeugnummer," +
                   "Fahrzeugtyp,Fäkalienwagen,Farbe,Farbschicht," +
                   "Federpuffer,fehlt,Fenster,Fensterausschnitt," +
                   "Fertigmodell,findet,Firma,fixiert,Fixierung," +
                   "Fleischmann,Form,Forum,Foto,Fotos,Fragen,Führerhaus," +
                   "G10,gab,gebogen,gebracht,gefräst,Gehäuse,gehts," +
                   "gekröpft,gelb,genauer,genauso,geschweißt,gestossen," +
                   "GI-Modell,Glasscheibenersatz,glatt,Gleisstopfmaschine," +
                   "Griffstangen,Griffstangenhalter,grün,grundiert," +
                   "Grundierung,Grundkörpers,gründlichen,Günther," +
                   "Güterwagenzurüstsatz,Güterzugsteuerwagen,H0e,Hagen," +
                   "Hakenkupplung,Halterung,handeln,Hannover,hb179," +
                   "Heilbronn,Heimat-Bw,Henschel,Herrn,Hersteller," +
                   "Hersteller/Lieferant,Hilfe,hilft,hinten,Hinweis," +
                   "Historischen,Homepage,hv179,III,Impressum," +
                   "Industriemodelle/Bausätze,Informationen,Inhalt,inneren," +
                   "insgesamt,interessiert,Internet,Internetquellen," +
                   "I-Profil,ISBN,Jahresmodell,Jünkerath,Kar,Kassel," +
                   "Kastentender,Kastentenders,Klappen,Klarlack,Klarsicht," +
                   "Klarsichtfolie,Klima,Klimaschneepflug," +
                   "Klima-Schneepflug,Kohlenattrappe,Kohlenkasten,kommen," +
                   "komplett,Komplettbeschriftung,komplettes,Königsberg," +
                   "Korrekturen,Kran,Krüger-Modellbau,Krümelbahn," +
                   "Kunststoffplatte,Kunsttstoffprofilen," +
                   "Kupplungsschacht-Klappe,Kurzkupplungskulissen,Kuswa," +
                   "Lackieren,lackiert,Lackierung,Ladestation,Lampen," +
                   "Lauterbach,lebende,Lektüre,liegen,Liliput,Links," +
                   "Literatur,Literaturhinweise,Lokomotive,los,Lötdraht," +
                   "Lötflamme,Lothar,Lötkolben,m13B,Magdeburg,Mai,Märklin," +
                   "mattem,Meiningen,meistens,Mercedes-Benz,Messingbausatz," +
                   "Messingblech,Messingdraht,Messingprofile," +
                   "Messingprofilen,Messingtritte,Miba,Miba-Report,Mitte," +
                   "mm-Rundstab,Modellbahn,Modellfahrzeuge,Modulbau," +
                   "Montage,München,Museen,Museum,Muttern,Nachbau," +
                   "Navigation,NEM-Radsätze,Neubau-Schneepflug," +
                   "Neuenmarkt-Wirsberg,Neustadt,Nieten,Nothaft,Nummer," +
                   "Nummern,nv079,nv179,nv379,ÖBB,Offenburg,Ölhilfszug," +
                   "Öltankzug,Original,Österreich,P8-Kastentender,Pack," +
                   "Passauer,passend,paste,PDF-Datei,Pflug,Pflüge," +
                   "Pflugschar,Pflugscharen,Piko,Plexiglasplatte,Profile," +
                   "Prora,Puffer,Pufferbohle,Puffersockelplatten,Radsätze," +
                   "Radsatztransportwagen,Radschuhe,Rahden,RAILHOO,RAL," +
                   "Rangiergriffe,Rangiertritte,RAW,Rbd,reichen," +
                   "Reihenfolge,Reitz-Modellbau,Resinkleinteile,Riga,Roco," +
                   "rot,rotbraun,Rottenkraftwagen,RP25-Radsätze,Rücken," +
                   "Rückstellung,Rückwand,Rügen,S110f,S139,S16,S18,S28,S39," +
                   "S48,S50,S70,S96,Saalfeld,Sachsen,sächsische," +
                   "Schaufelrad,Schaufelradkasten,Scheibenwischer," +
                   "Schicksal,Schiebebildersatz,Schienen,Schleudergang," +
                   "Schleudern,Schluß,Schmalspurbahnen,Schnee,Schneepflug," +
                   "Schneepflüge,Schneepfluges,Schneepflugliste," +
                   "Schneeräum-Einsatz,Schneeräumfahrzeuge,Schneeschleuder," +
                   "Schneeschleuder-Gehäuse,Schneeschleuder-Tender," +
                   "schneiden,Schrauben,Schriften,Schutz,schwarz," +
                   "Schwenkwände,sehen,Seiten,Seitenanfang,Seitenflügel," +
                   "Seitenwand,Selbstbau,senkrechten,sichern,Signalkasten," +
                   "Signalscheibenhalter,Solingen,Sondereinsätze," +
                   "Sonnenblende,Spanten,spartanischer,Speichenräder," +
                   "Spieth,Spieth-Bausatz,Spieth-Bausätze,Spitzensignal," +
                   "SPM,Spur,SSH,Startseite,Staßfurt,Staßfurter," +
                   "stationiert,Statisten,stellenweise,Stirnwand,Strolche," +
                   "Stückzahl,Stuttgart,Suchen,T16,T20,T21,T26,T31,tb179," +
                   "tb197,tb198,Techn,Technikmuseum,Teil,Teile,Tender," +
                   "Tender-Basis,Tenderboden,Tendergehäuse,Tenderrückwand," +
                   "Terroristen,TEV,Text,Thüringer,Titisee," +
                   "Transpress-Verlag,Trix,trug,Tür,Überblick,Übersicht," +
                   "Ulm,Umbau,Umbauanleitung,Umfangreiche,Umrissmesswagen," +
                   "unbekannt,Unkrautvertilgungszug,verbessern,Verbleib," +
                   "verschrottet,verweist,verwendet,Vollständigkeit," +
                   "vorgegebene,vorhandene,vormals,vormontiert,vorne," +
                   "Vorschlag,Vorsicht,vorteilhaft,Wannentender," +
                   "Wasserkasten,Weg,weggeschabt,Weinert,weißaluminium," +
                   "weiterer,Wen,wichtig,willkommen,Winkelprofile,Winter," +
                   "Winterdienst,wirft,Wolkenstein,Wpt,Wuppertal,Xrot," +
                   "Xrotm,zahlreiche,zerlegt,zierliche,Zittau,Zug," +
                   "zugefeilt,zugehörige,Zugfedern,Zukauf,zunächst," +
                   "Zurüstteile,zusammen,Zusammenbau,Zusammenfassung," +
                   "zusammengebaut";
       seite[19] = "bau_sch.htm";
beschreibung[19] = "Kr&uuml;melbahn - Schneepflug & Schneeschleuder";
     begriff[20] = "abgegeben,Aktivitäten,Allgemeine,Andreas,anfordern," +
                   "Anlagengestaltung,Anm,anzunehmen,April,ASF," +
                   "aufgenommene,Aufnahme,Auftakt,Ausbesserungswerk," +
                   "ausgemustert,ausrüsten,BA634,Bad,Bahnen,Bahnhof," +
                   "Bahnsinniges,Bamberg,Bauart,Baubeschreibung,BDWg," +
                   "beiden,bekannt,Bekohlungs,belegt,Bemerkungen," +
                   "Beschreibung,beschriebenen,Beschriftung,Betrieb," +
                   "Betriebsnummer,Bilddokument,bleiben,Bremen,Bromberg," +
                   "Brückenprüfwagen,Bundesbahndirektion,Daten,DCC," +
                   "deutschen,Diesellokomotiven,Dieselloks,Digitalbetrieb," +
                   "Direkt,Drehbank,Drehgestell,Drehzapfen-Abstand,drei," +
                   "dürfte,dürften,Eichfahrzeuge,Eigengewicht,Einbaus," +
                   "eingebaut,eingefügt,eingenummert,eingesetzt,einmännig," +
                   "Einsatz,Einsätze,einzige,eisenbahndienstfahrzeuge," +
                   "Eisenbahn-Journal,Eisenbahn-Kurier,Eisenbahn-Magazin," +
                   "Eisenbahnstiftung,Elektronik,eMail,Ende,endete,endeten," +
                   "Epoche,erfolgte,erschienen,Erwähnt," +
                   "Expressgut-Kurswagen,Fahrzeug,Fahrzeugbau," +
                   "Fahrzeug-Geschichte,Fäkalienwagen,Fenster," +
                   "Fensterrahmen,Fenstersatz,Foto,Gattung,Gattungsbezirk," +
                   "GDB,GDS,GDS145,gebaut,gedeckte,gefahren,gefräst," +
                   "gemacht,Gerätewagen,gestrichenen,GGhs,GGths," +
                   "Gihms-Wagen,Gleisstopfmaschine,grün," +
                   "Gueterzugsteuerwagen,Güter-Steuerwagen,Güterverkehr," +
                   "Güterwagen,Güterwagen-Komplettbeschriftung,Güterzug," +
                   "Güterzügen,Güterzugsteuerwagen,Güterzug-Steuerwagen," +
                   "Güterzug-Wendezugsteuerwagens,GVS,H0-Umbau,Hann," +
                   "Hannover,Hbf,Herbst,hergerichtet,Hersteller,Hgbf," +
                   "hinterlegte,hinzugefügt,III,illustriert,Impressum," +
                   "Individualisieren,Informationen,Inhalt,Jahres," +
                   "Jahresmodell,Kassel,Kastentender,Klarsichtfolie," +
                   "kompletten,Kran,Kreuztisch,Krümelbahn,kurzgekuppelten," +
                   "Ladefläche,Ladegewicht,Ladelänge,Ladestation,Leig," +
                   "Leig-Verkehr,Leig-Wendezüge,letzte,liefen,Linden," +
                   "Lindner,Links,Literatur,lokbespannten,Loks,Lüp,Mann," +
                   "Mercedes-Benz,Meter-Wagen,mitfahren,mitlief,Mitte," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,Möglichkeiten," +
                   "Monatsleistung,Motorlokbetrieb,München,Münster-Lager," +
                   "nahm,Navigation,Nenndorf,Nothaft,Nürnberg,nützlich," +
                   "offenbar,Offiziell,Ölhilfszug,Öltankzug,Papier," +
                   "Planmäßig,plastischer,Plexiglasplatte,prüfte," +
                   "Radsatztransportwagen,Radstand,Rangierdienst," +
                   "rätselhaft,Regensburg,Reichsbahn,Reichsbahn-Zentralamt," +
                   "Reservelok,richtig,Roco-Bromberg,Rottenkraftwagen,RZA," +
                   "Seite,Seitenanfang,Sicherheitsfahrschaltung," +
                   "Sichtungsbild,Sifa,Solingen,Soltau,späteres,Startseite," +
                   "Station,Stationierungen,Stelle,Steuerabteilen," +
                   "Steuerwagen,Strecken,Stück,Stückgutschnellverkehr," +
                   "Suchen,T21,tauchten,Triebwagen,übernommen," +
                   "Umbauanleitung,Umbauarbeiten,umbenannt,Umfangreiche," +
                   "umgebaut,umgebauten,Umrissmesswagen,Umzeichnung," +
                   "Unkrautvertilgungszug,V36,vermutlich,Versuch," +
                   "versuchsweise,Vierachser-Güterwagen,vorgahalten," +
                   "vorhanden,vorn,Wagen,Wehrmacht,weiteres," +
                   "weiterverwendet,Wendezüge,Wendezug-Führerstände," +
                   "wenigstens,Winterdienst,wirkt,zeigt,Zeitpunkt," +
                   "Zugewiesen,Zusammenlauf,Zweck,Zweiachser-Pärchen," +
                   "zweite,zweiter";
       seite[20] = "bau_stwg.htm";
beschreibung[20] = "Kr&uuml;melbahn - G&uuml;terzugsteuerwagen";
     begriff[21] = "Abbildung,abgehoben,abgesenkt,Achsanordnung,Achse," +
                   "Achsstand,ähnliche,ähnliches,Aktivitäten,Allgemeine," +
                   "Änderungen,andeuten,anfordern,Angaben," +
                   "Anlagengestaltung,Anordnung,Anschließend,Arbeitsbühne," +
                   "Art,ASF,Aufgaben,aufmerksam,Aufnahmen,ausfahrbare," +
                   "Ausgehend,ausklapp,aussehen,BA746,Bahnen,Bahnsinniges," +
                   "Batteriekastens,Bauart,Baubeschreibung,Baureihe," +
                   "Bauteilliste,befestigt,Befestigungsnasen,begegnete," +
                   "beiden,Bekohlungs,Benennung,benötigt,benutzt,bequem," +
                   "Beschriftung,besitzt,Best,besteht,Betrieb,bezogen,Bi29," +
                   "bietet,Bild,bleiben,bleibt,Bochum-Dahlhausen,braunen," +
                   "Bremsgestänge,Bremsschläuche,Bremsventil," +
                   "Brückenprüfwagen,Dach,Dachlüfter,dahinter,Daten,DCC," +
                   "Dienstfahrzeuge,Dienstmasse,Digitalbetrieb,Direkt," +
                   "Drehpunkt,drei,Drittel,ebenso,Eichfahrzeuge," +
                   "eingebracht,einhalten,Einschnitte,Einstiegstüre," +
                   "Einzelteile,eisenbahndienstfahrzeuge,Eisenbahn-Kurier," +
                   "Eisenbahnmuseum,Elektronik,eMail,Ende,entfernt,erfährt," +
                   "erhalten,erPack,Erwähnt,Fahrgestell,Fahrwerk,Fahrzeug," +
                   "Fahrzeugbau,Fahrzeuges,Fäkalienwagen,Farbe,Federpuffer," +
                   "Fenster,Fensteröffnung,Fensters,fertig,Foto," +
                   "Fotografien,Funktionsweise,geändert,gebogen,gedreht," +
                   "gefertigt,Gehäuse,Gehäuseumbau,geklebt,Gerüst," +
                   "geschnitten,glatt,Gleisstopfmaschine,Griffstangen," +
                   "große,guten,Güterwagenzurüstteile,Güterzugsteuerwagen," +
                   "Hakenkupplung,halber,Handbremse,hängt,hinteren," +
                   "hinterlegt,Höhe,imitiert,Impressum,Informationen," +
                   "Inhalt,Jahresmodell,Kastentender,Kenntnis,komplett," +
                   "komplette,korrigiert,Kran,Krepppapier,Krümelbahn," +
                   "Kunststoff,Kunststoffplatte,Lademaß,Ladestation,Lampen," +
                   "Lampensatz,Länge,langen,Lehren,leicht,Leiter,L-Form," +
                   "Lichtraumprofil,Links,Literatur,Literaturhinweise," +
                   "Löcher,Lösezug,Lüftergitter,Lüfterlöcher,Lüftern," +
                   "Luftsauger,Lüftungsgitter,Lüftungsschlitze,markiert," +
                   "Maße,mechanische,Mercedes-Benz,Messachse,Messer," +
                   "Messgerüstes,Messgestell,Messingdraht,Messingprofil," +
                   "Messwagen,Miba-Report,Mitte,mittlere,mittleren,Modell," +
                   "Modellbahn,Modellbahnmagazinen,Modelleisenbahner," +
                   "Modellfahrzeuge,Modulbau,montiert,muss,nachzubauen," +
                   "nachzuempfinden,Nähe,Navigation,Nietenreihen,N-Radsatz," +
                   "offenen,Ölhilfszug,Öltankzug,Plättchen,Preiser,prüft," +
                   "Prüfwagen,Puffer,Pufferbohle,Pufferplatten," +
                   "Raddurchmesser,Radsatz,Radsätze,Radsatztransportwagen," +
                   "rechten,Resultat,richtig,Roco,Rottenkraftwagen,RP25," +
                   "Rundstab,scharfen,schmalen,Schnitte,Schnittstellen," +
                   "sehen,Seite,Seitenanfang,senkrechte,sinngemäß,Solingen," +
                   "Spieth,Spur,Spurweite,Startseite,Steckdose,Steckdosen," +
                   "Stirnseite,Stück,Stückzahl,Suchen,T21,Technische," +
                   "Teilen,Toilettenfenster,Trennstelle,Trennwände," +
                   "Triebwagen,Trittgestell,Trittgestellen,Trittgitter," +
                   "Tunneligel,Tunnels,Türen,Türöffnung,Überblick," +
                   "überflüssigen,U-Form,umgebauter,Umrissmesswagen," +
                   "Umrisswagen,Unkrautvertilgungszug,vergrößert," +
                   "verlängert,verschlossen,versucht,versuchte,vielfältige," +
                   "vorgegebene,vorgestellte,Vorhänge,VT137,Wagen," +
                   "Wagenboden,Wagenkasten,Wagenkastenende," +
                   "Wagenkastenenden,Wagenkastens,Weinert,Weise,weißer," +
                   "Wendler,wesentlichen,Winterdienst,Zeitschriften," +
                   "zerlegt,Zettelkasten,Zettelkästen,Zunächst,Zylinder";
       seite[21] = "bau_um.htm";
beschreibung[21] = "Kr&uuml;melbahn - Umrissmesswagen";
     begriff[22] = "Abbildung,abgedreht,abgeleitet,abgeschnittenen," +
                   "abgestellt,Abschließend,Abschluß,absolvieren," +
                   "Abstandshaltern,abstützen,abweichen,Achsen,achsigen," +
                   "achsiger,Acht,Adapter,Aktivitäten,Allgemeine,alte," +
                   "Alterung,Anbau,Andreas,anfordern,angebracht," +
                   "angebrachten,angegebene,angeklebt,angelötet,angesagt," +
                   "Anlagengestaltung,Anlöten,Anordnung,anschließend,ASF," +
                   "Ätzblech,Ätzbleches,Ätzplatte,Ätzteil,Aufbau," +
                   "Aufbringen,Aufenthaltskabine,Aufenthaltswagen," +
                   "aufgefüllt,aufgelötet,aufgesetzt,Aufnahme,aufnimmt," +
                   "Aufstieg,Aufstiegsleiter,Aufstiegsleitern,aufzulöten," +
                   "auseinandergenommen,Ausfahrt,Ausmusterung," +
                   "Ausnahmefällen,aussen,Aussenrahmen,Aussparung,B3yg," +
                   "BA124,BA234,BA884,BA924,Bahndienst,Bahnen,Bahnhof," +
                   "Bahnhofs,Bahnkörper,Bahnsinniges,Band,Basis," +
                   "Basisfahrzeug,Basisfahrzeuge,Bauanleitung," +
                   "Baubeschreibung,Bausatz,Bauteilliste,Bauzugwagen," +
                   "Bdwg884,Bedarf,Bedienmannschaft,Bedienungskabine," +
                   "Bedingt,Befesitung,befestigen,befestigt,Befestigung," +
                   "Begleitpersonal,Behälter,beide,beiden,beidseitigen," +
                   "beiliegt,beispielsweise,Bekämpfung,bekämpfungs-Wagen," +
                   "Bekohlungs,Bemerkungen,bemessen,Benennung,benötigt," +
                   "beruht,beschaffte,beschreibt,beschrieben,Beschriftung," +
                   "Beschriftungen,Beschriftungssatz,Beseitigung," +
                   "besonderer,besprengen,Best,bestand,bestehenden,besten," +
                   "Betrieb,betriebsgefährdenden,Betriebsstoffwagen,Biegen," +
                   "Bild,Bilder,Biologischen,Blechplatte,Boden,Bodenplatte," +
                   "Bodenventile,Braunschweig,Bremsschläuche,bringen," +
                   "Brückenprüfwagen,Bühnenende,Bühnengitter,Bundesanstalt," +
                   "Bundesbahn,Bz12,Chemikalenvorratswagen,Chemikalien," +
                   "Dach,Dachlüfter,Dampflokomotiven,dass,Daten," +
                   "DB-Einheitslaternen,DCC,Detailierungswunsch,Deutschen," +
                   "Deutz,Dienstfahrzeuge,Dienstgüterwagen," +
                   "Dienstsonderzüge,dient,dienten,Digitalbetrieb,Direkt," +
                   "diverse,D-Modell,Doppelpack,Drehgestellabstand," +
                   "Drehgestellblenden,Drehgestelle,Drehgestelles," +
                   "Drehgestellzapfens,drei,dreiachsige,dreiachsigen," +
                   "Dreilichtspitzensignal,DRG,Druck,Dsts,dünne,dünnen," +
                   "durchgehende,Durchmessers,Düsen,ehemaligen," +
                   "Eichfahrzeuge,Eigengewicht,einfachem,eingeklebt," +
                   "eingesetzt,eingestellt,Einlauföffnungen,Einsatz," +
                   "Einsätzen,Einsatzzweck,einseitig,Einzelteile," +
                   "eisenbahndienstfahrzeuge,Eisenbahn-Magazin,Elektronik," +
                   "eMail,Empfangsgebäudes,Ende,entfernt,Entfernung," +
                   "enthält,enthalten,entsprechen,entstand,entworfen," +
                   "Epoche,erfolgt,erfolgte,erhält,erkennen,erlaubt," +
                   "erlaubten,Ersatz,erstmals,etwa,exakt,existiert," +
                   "Fabrikhalle,fahren,Fahrgeschwindigkeit,Fahrgestell," +
                   "Fahrtrichtung,Fahrwerksbereich,Fahrzeug,Fahrzeugbau," +
                   "Fahrzeuge,Fahrzeugkupplung,Fahrzeugseiten," +
                   "Fäkalienwagen,Fall,fanden,Farbe,Farben,Fässern,fasste," +
                   "Federblechstreifen,Federpuffer,fehlt,feilen,Feldzug," +
                   "Fenster,Fensterrahmen,fertige,Fertigmodell,fertigte," +
                   "Feuerwehrset,fixiert,Fixierung,Flansch,Flanschen," +
                   "flexiblen,Flüssigkeit,Fortsetzung,Fotos,Franckh,Frisch," +
                   "führen,führt,führten,gab,garantiert,gebogen,gebogene," +
                   "gebracht,gedeckten,gedeckter,gefahrlosem,gefertigt," +
                   "geformt,gefräst,geführt,Gegenüberstellung," +
                   "Gehäuse-Ätzplatte,Gehäuseboden,gekuppelten,gekürzt," +
                   "Geländer,gelötet,Gesamterscheinungsbildes,geschehen," +
                   "geschieht,geschlossene,gezielt,gezogen,glatt," +
                   "Gleichstrom/DCC-System,Gleis,Gleisbettung,Gleise," +
                   "Gleispflege,Gleisstopfmaschine,Goldgelb,griffe," +
                   "grundiert,Grundierung,Güterwagen," +
                   "Güterwagenfahrgestelle,Güterzugsteuerwagen,H0e," +
                   "Hakenkupplung,halbiert,Haltebleche,Halterung," +
                   "Handgriffe,Handgriffen,Handläufe,Handrad,hatten,häufig," +
                   "Hauptgleis,Heizleitung,Heizung,hellgraue,Herbizide," +
                   "Herbiziden,Herpa,Hersteller,Hilfreich,hinein,hinten," +
                   "hinteren,hinweg,Hinweis,höchsten,Höchstgeschwindigkeit," +
                   "Höhe,hört,Humusbildung,ige,III,Impressum," +
                   "Industriemodelle/Bausätze,Informationen,Inhalt,innere," +
                   "interessante,Internet,Inzwischen,I-Profil,ISBN," +
                   "isoliert,Jahre,Jahresmodell,Kabine,Kabinenboden," +
                   "Kabinentüren,kamen,kämen,Kasten,Kastentender," +
                   "Kastentenderkabine,Kastentenders,Keramikperle," +
                   "Kesselecke,Kesselecken,Kesselrückwand,Kesselseite," +
                   "Kesselwagen,Kesselwagens,Kesselwagentypen,kg/cm," +
                   "Klarlack,Klarsichtfolie,kleiner,km/h,Kohlenaufsatz," +
                   "Kohlenkasten,kommt,komplett,komplette,Kran,Krümelbahn," +
                   "Kunststoffblock,Kunststoffplatte,Kunststoffplatten," +
                   "Kupplung,Kupplungsadapter,kürzester,L236000,L236490," +
                   "Lackieren,lackiert,Lackierung,Ladestation,lag,längere," +
                   "längs,Längsleitung,Längsrichtung,Laufsteges,Leerfahrt," +
                   "Leitern,liefen,ließen,Liliput,Links,Linkseiten," +
                   "Literatur,Literaturhinweise,Loch,Lösung,L-Profil," +
                   "L-Profilen,Luken,M2-Schraube,M2-Schrauben,Märklin,Maße," +
                   "materials,maximal,Mercedes-Benz,Messerschmidt," +
                   "Messingdraht,Messingprofil,Messingprofilen,Messingrohr," +
                   "Messingstreifen,Miba,Miba-Report,Mineralöl,Mischwagen," +
                   "Mischwagens,mitgeführt,Modell,Modellbahn," +
                   "Modellfahrzeuge,moderne,modernen,Modulbau,möglichst," +
                   "Montage,montiert,m-Typ,muss,Mutter,Nachbildung," +
                   "nachgebildet,nachgelesen,Nachmessen,nachts,Nähe,nahezu," +
                   "Natriumchlorat,Navigation,NEM,Nenninhalt," +
                   "Nietenstreifen,normalspurigen,Nothaft,Nutzvolumen," +
                   "oberen,oberhalb,Oberseite,offen,Öffnung,Ölhilfszug," +
                   "Öltankzug,Oppeln,Originalen,ortsüblichen," +
                   "P8-Kastentender,Pack,passend,passenden,passt," +
                   "Pendelwagen,Piko,Präparatewagen,Profile,Puffer," +
                   "Pufferbohlen,Pufferplatten,quer,Querblech,Querrichtung," +
                   "Radsatztransportwagen,Rahmen,RAL,Rangiertritte," +
                   "realistischen,Rechteck-Profil,rechten,Regel," +
                   "Rekonstruktion,Reserve,Richtlinien,Richtungen," +
                   "Riffelblech,Roco,Rohr,Rohrende,Rohres,Rohrleitung," +
                   "Rohrleitungen,Rohrletungen,Rotbraun,Rottenkraftwagen," +
                   "rückseitige,rudimentäre,Rund,Rundholz,Rundstab,Rundung," +
                   "S74,S76,sche,Scheibenwischer,Schienenoberkante," +
                   "Schläuchen,schleifen,Schleifzüge,Schlitz,schneiden," +
                   "Schraube,sehen,Seite,Seitenanfang,seitlich,seitlichen," +
                   "Selbstbau,Selbstbaudrehgestell,setzte,Signalhorn," +
                   "signalmäßig,Signalscheibenhalter,Solingen,sorgt," +
                   "Spezialwagen,Spieth,Spieth-Beschriftungssatz," +
                   "Spieth-Beschriftungssatzes,Sprengwagen,Sprengzüge," +
                   "Sprengzügen,Sprengzugwagen,Spritzbalken,Spritzbrühe," +
                   "Spritziger,Spritzmittel,Spritzug,Spritzwagen,Spritzzug," +
                   "Sprühwagen,Spurkränze,starke,stärker,Startseite," +
                   "stehend,Steifrahmenfahrwerk,Steigrohr,Steuerung," +
                   "Stichwort,Stirnseiten,Streckenspritzung," +
                   "Streubreiteneinstellung,Stückzahl,Stumpfgleis," +
                   "Stuttgart,Suche,Suchen,T21,Techn,Technik,Technische," +
                   "Teile,Tender,Tenderabdeckung,Tenderabdenkung," +
                   "Tenderaufbauten,Tenderbühne,Tenderdach,Tenderdeckel," +
                   "Tenderende,Tenderfahrgestelle,Tendergehäuse," +
                   "Tenderkabine,Tenderkasten,Tenderkastens,Tendern," +
                   "Tenders,Tenderwanne,tiefen,Tiefschwarz,Tragfähigkeit," +
                   "trägt,Treibstoffwagen,Trittbrett,Türen,Typ,Übergang," +
                   "Übergangsblech,Übergangsbleche,Übergangstüren," +
                   "Übergansgtüre,übrigens,Uerdingen,Umbau,Umbauwagens," +
                   "umgebaut,Umrissmesswagen,Unkrautbekämpfung," +
                   "Unkrautbekämpfungszug,Unkrautbekämpfungszüge," +
                   "Unkrautbeseitigung,Unkrautes,unkrautfrei,Unkrautspreng," +
                   "Unkrautsprengzug,Unkrautsprengzüge,Unkrautspritzzug," +
                   "Unkrautvertilgung,Unkrautvertilgungs," +
                   "Unkrautvertilgungszug,Unkrautvertilgungszuges," +
                   "unterblieb,untereinander,unterhalb,Unterseite," +
                   "unverzichtbar,U-Profil,U-Profile," +
                   "Vegetationskontrollzug,Ventil,Verband,Verbindung," +
                   "vergessen,vergrößert,verkrautetes,Verlagshandlung," +
                   "verlängert,Verlängerung,verlegte,verringert," +
                   "verschlossen,Verschmutzung,versehen,versprühen," +
                   "verstärkt,verwendbar,verwendet,Verwendete,Verwendung," +
                   "vierachsige,vollgetankte,vorbereitet,Vorbild," +
                   "vorbildgerechter,vordere,vorderen,vorhanden,vorhandene," +
                   "Vorräten,Vorratswagen,vorzusehen,Wagen,Wagenkasten," +
                   "Wagens,Wagenseite,Wannen,Wannentender,Wannentenders," +
                   "Wärmeschutz,Wärmeschutzmantel,Wartungsbühne,Wasser," +
                   "Wasserkessel,Wasserkränen,Wasserwagen,Weinert," +
                   "Weißaluminium,weisse,weiteren,Werkzeugkasten," +
                   "Werkzeugkastens,Wert,Westwaggon,Wider,Wildwuchs," +
                   "Wildwuchses,Winkelprofil,Winterdienst,Wohnwagen," +
                   "Wolfgang,Zapfen,zeigen,Zeit,Zeiten,zerlegt,Zug,Zugang," +
                   "zugelassenen,Zugfahrzeug,Zugleiter,Zugnummer,zulässig," +
                   "zunächst,zusammengebaut,zusammengelötet,Zweck," +
                   "zweiachsige,zwölf";
       seite[22] = "bau_unkr.htm";
beschreibung[22] = "Kr&uuml;melbahn - Unkrautvertilgungszug";
     begriff[23] = "Abschnitt,Anspruch,aufgebaut,aufgenommen,Ausbruchdes," +
                   "Ausgangspunkts,Bahn,Bahnen,Bahnlinie,Bahnsinniges," +
                   "Beförderung,benutzte,Berlin,Besetzung,besiegelt,Boxtel," +
                   "Boxteler,Brennpunkt,Buch,Clemens,Dampfer,dankbar," +
                   "deutsche,Deutschlands,DGEG-Medien,Dienstvorschriften," +
                   "Direkt,Duitse,ebenso,eingestellt,Eisenbahn,eMail," +
                   "England,erhebt,Erweiterung,existierende," +
                   "Fernreiseverkehr,Fernverbindung,fertiggestellte," +
                   "festmachten,Freriks,geänderte,gebraucht,Gegenüber," +
                   "genannt,genauer,Gerard,Geschäft,Gleispläne,Großeltern," +
                   "Güterzugfahrpläne,Haan,Haltern,Hamburg,Hans,Hassum,Het," +
                   "Hinweise,Impressum,Inhalt,internationalen,ISBN,Jos,kam," +
                   "Kriegsende,Krümelbahn,Lijntje,Linkliste,Links,Liste," +
                   "Literatur,London,lukratives,Mandos,Mittelpunkt," +
                   "Modellbahn,Münster,musste,Nachschublinie,Navigation," +
                   "NBDS,Niederlande,niederländische,Niederländischen," +
                   "Nord-Brabant-Deutsche,Norden,Norderney,Osnabrück," +
                   "Petersburg,Post,Privatbahn,Reichsbahn,Rheinbrücke," +
                   "Rogmann,rückte,Salching,Sascha,schicken,Schicksal," +
                   "Schlieper,schloss,Seehafen,sogenannte,Solingen," +
                   "StaatsbahnenUnterschlupf,stand,Startseite,Strecke," +
                   "Suchen,Teil,Thema,Truppen,Uedemerbruch,Venloer," +
                   "Verbindungsbahn,Vincent,Vlissingen,Vollständigkeit," +
                   "von/nach,Weltkrieg,Weltkriegs,Wesel,Weseler,westlichen," +
                   "Wikipedia,wohnten,Zentrum,zerstört,Zweiten";
       seite[23] = "boxtel.htm";
beschreibung[23] = "Kr&uuml;melbahn - Het Duitse Lijntje";
     begriff[24] = "Anzahl,Augsburg,Bahnanlagen,Bahnen,Bahnhöfe," +
                   "Bahnsinniges,Bauausführung,Bauherr,Baukosten," +
                   "Bogenschluss,Bogenweite,Brücke,Brückenbau,Deutschlands," +
                   "Direkt,Eisenbahn,Eisenbahnbrücke,Eisenbahndirection," +
                   "Elberfeld,erhaltene,Eröffnung,Fahrzeuge," +
                   "Farbfläche/Farbgewicht,feste,Firma,Friedrich,gebaut," +
                   "gehen,Gesamthöhe,Gewicht,Gustavsburg,hieß,höchste," +
                   "Höchstgeschwindigkeit,Höhe,Impressum,Inhalt," +
                   "interessante,Jahre,Jahren,Kaiser-Wilhelm-Brücke,km/h," +
                   "Königliche,Krümelbahn,Länge,Leopold,Links,Literatur," +
                   "Lokstation,Mark,Maschinenfabrik,Michael,Modellbahn," +
                   "Müngstener,Navigation,Nieten,Normalnull,Nürnberg," +
                   "Planungen,Preußen,Prinz,Remscheid,Seitenanfang," +
                   "Solingen,Solingen-Müngsten,Solingen-Ohligs," +
                   "Sonderpostwertzeichen,Spatenstich,Städte,Startseite," +
                   "Stellwerke,Strecken,Suchen,Tal,tiefe,Überquerung," +
                   "Verbindung,verhinderte,Werk,Wikipedia,Wupper," +
                   "Zimmermann,zunächst,zurück,zweigleisige";
       seite[24] = "bruecke.htm";
beschreibung[24] = "Kr&uuml;melbahn - M&uuml;ngstener Br&uuml;cke";
     begriff[25] = "abgekoppelt,abgerissen,abwickelten,Anfang,angebaut," +
                   "angegliedert,angrenzenden,Anhänger,Anlagen,Anlegen," +
                   "aufgelöst,Auflösung,ausgebaut,Außenstelle,Bahnanlagen," +
                   "Bahnbetriebswerke,Bahnen,Bahnhof,Bahnhöfe,Bahnhofs," +
                   "Bahnmeisterei,Bahnsinniges,Bauarbeiten,Baureihe," +
                   "befanden,befördert,Beginn,beheimatet,beheimatete," +
                   "beheimateten,Beheimatung,Bemerkungen,besaß,Bestehens," +
                   "betreuen,Betriebswerkstätte,bleiben,blieben," +
                   "blob/main/Krümelbahn,bot,Brücke,Dienststelle,diente," +
                   "Direkt,draußen,Drehscheibe,Düsseldorf,Einheitslok," +
                   "Elberfeld,Ende,endet,Ergänzen,erhalten,erhaltene," +
                   "erkennen,erlebte,Eröffnung,ersetzt,fabrikneuen,Fahrt," +
                   "Fahrzeuge,G10,gestellt,githubinfo,Gleise,Gräfrath," +
                   "größeren,hatten,Haupteinsatzgebiet,hauptsächlich," +
                   "Herbst,heruntergestuft,Hilden,Höhepunkt,Impressum,Info," +
                   "Inhalt,Insgesamt,Instandhaltung,Jahre,Jahren,Juli,kam," +
                   "KED,Kla,kleine,Klv,Kohle,Kohlenbühne,Krümelbahn,lang," +
                   "Lennep,Links,Literatur,Lokbahnhof,Lokomotiven," +
                   "Lokomotivnummer,Lokschuppen,Lokschuppens,Lokstation," +
                   "Mai,Maschinenamtes,maximal,m-Drehscheibe,Mitarbeiter," +
                   "Modellbahn,moderne,Müngstener,muss,Navigation," +
                   "offiziell,Ohligs,OhligsWald,Oktober,Opladen,pdf,Platz," +
                   "realisiert,reinen,Remise,Remscheid,renoviert," +
                   "Reparaturaufgaben,Richtung,Rottenkraftwagen,Rückwand," +
                   "schaffen,Schlackengruben,Schuppen,Schuppengleis,sechs," +
                   "Seitenanfang,September,Signale,Solingen," +
                   "Solingen-Ohligs,ständige,Startseite,stationiert," +
                   "stationierte,stationierten,Stationsschlosserei," +
                   "Stellwerke,Strecken,Suchen,T11,T12,T16,Tenderlok-Bw," +
                   "Tenderlokomotiven,Typ,überflüssige,Übersicht,umbenannt," +
                   "Verbleib,Verkehr,verwaltungstechnisch,Vohwinkel," +
                   "Wagen-Ausbesserungswerkstatt,Wagenremise,Wald," +
                   "Wasserturm,Wasservorräte,Weichen,Wenden,Werkstatt," +
                   "wesentlich,Wikipedia,zehn";
       seite[25] = "bwohligs.htm";
beschreibung[25] = "Kr&uuml;melbahn - Bw Solingen-Ohligs";
     begriff[26] = "Ausfahrt,Bahnanlagen,Bahnbetriebswerke,Bahnen,Bahnhof," +
                   "Bahnhöfe,Bahnsinniges,Bau,besaß,Betriebsvorräte," +
                   "blob/main/Krümelbahn,Brücke,Direkt,drehen,Einfachheit," +
                   "Elberfeld,ergänzen,erhaltene,Eröffnung,Fahrzeuge,fiel," +
                   "Fundamentarbeiten,geplanter,geschaffen,gestrichen," +
                   "githubinfo,Gleisanlagen,Impressum,Info,Inhalt,KED," +
                   "Kohlebansen,Kohleladebühne,Korkenzieherbahn,Krümelbahn," +
                   "liegen,Links,Literatur,Lokbehandlung," +
                   "Lokbehandlungsanlage,Lokomotiven,Lokschuppen," +
                   "Lokstation,m-Drehscheibe,Modellbahn,Möglichkeit," +
                   "Müngstener,Navigation,Ohligs,Opfer,pdf,Richtung," +
                   "Rotstift,Seitenanfang,September,Solingen," +
                   "Solingen/Hauptbahnhof,Solingen-Ohligs,Startseite," +
                   "Stellwerke,Strecken,Suchen,Südbahnhof,Südbahnhofes," +
                   "umfangreicher,verdeutlichen,Wasserturm,Weyersberg," +
                   "Weyersberger,Wikipedia,Zweigbahn";
       seite[26] = "bwsoling.htm";
beschreibung[26] = "Kr&uuml;melbahn - Lokstation Solingen";
     begriff[27] = "A/S,Adressierung,Advance,Aktivitäten,AMW,and,Angaben," +
                   "Anlagengestaltung,Appel,Aristo-Crafts,Arnold,Ataras," +
                   "Atlas,A-Train,AuroTrains,Bachmann,Bahnen,Bahnsinniges," +
                   "bestem,Brawa,Brelec,Büro,CML,Coast,Command,Computer," +
                   "Con-com,Control,Controls,Corp,Corporation,CV8,CVP," +
                   "Datentechnik,DCC,Decodereinbauten,Decoders,Design,dez," +
                   "Dialysis,Dietz,Digital,Digitalbetrieb,Digitrax," +
                   "Digsight,Direkt,Do-lt-Yourself,Domain,Dynatrol,ECCO," +
                   "Effects,Electric,Electronic,Electronics,Electronik," +
                   "Elektronik,Elproma,eMail,Engineering,Ergänzung," +
                   "Ergänzungen/Korrekturen,Ernst,Fahrzeugbau,Fleischmann," +
                   "for,formerly,France,Gebr,Gewähr,GITmbH,GmbH,Group,Haas," +
                   "Haber,Heljan,Helper,Hersteller,Herstellercode,hex,HKE," +
                   "hler,Impressum,Inc,Industries,Ing,Inhalt,Intelligent," +
                   "Jahresmodell,JMRI,Junction,KAM,König,Kreischer," +
                   "Krümelbahn,Kuehn,Lehmann,Lenz,LGB,Limited,Links," +
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
     begriff[28] = "#18,Adresse,Adressierung,Adresslänge,Aktivitäten," +
                   "Analogbetrieb,Anlagengestaltung,Bahnen,Bahnsinniges," +
                   "Bitberechnung,CV8,DCC,Decoder,Decodereinbauten,Digital," +
                   "Digitalbetrieb,Direkt,Elektronik,Fahrstufen," +
                   "Fahrtrichtung,Fahrzeugbau,Geschw,Herstellercode," +
                   "Impressum,Inhalt,Jahresmodell,Krümelbahn,lang,Links," +
                   "Literatur,Mercedes-Benz,Modellbahn,Modellfahrzeuge," +
                   "Modulbau,Navigation,nein,Solingen,Startseite,Suchen," +
                   "Tabelle,umkehren,verwendet";
       seite[28] = "cvadr.htm";
beschreibung[28] = "Kr&uuml;melbahn - Adressen in CV 1 / 17,18";
     begriff[29] = "#1020,#112803,#1302,#155001,#17,#177,#18,#208113L," +
                   "#2148,#2227,#30110,#30701,#30801,#322501,#40000,#40154," +
                   "#40300,#4165,#4264S,#43216,#43244,#43306,#43522,#43620," +
                   "#43644,#45242,#45243,#45244,#45248,#456,#460,#4613," +
                   "#4822,#520,#600,#6104,#63010,#63030,#63040,#64404," +
                   "#64434,AB4yg,Abgasstutzen,abgelötet,abgelötet/entfernt," +
                   "abgenommen,abgeschnitten,Abgestellt,Abhilfe,abkleben," +
                   "Abmessungen,Abstand,abzudrehen,abzuziehen,achs,Achsen," +
                   "achsige,achsigen,achsiger,Achslagern,achten,Achtung," +
                   "Adapterschale,Adresse,Adressierung,ähnliches," +
                   "Akkumulator-Triebwagen,Akkutriebwagen,Aktivieren," +
                   "aktiviert,Aktivitäten,Aktuell,aktuelle,Albert," +
                   "allgemeine,alte,ältere,älteren,Alternativ/zusätzlich," +
                   "altroten,Analogbetrieb,Analogbetriebes,analoge," +
                   "analogen,Anbau,and,Andreas,andreas-nothaft,Anfahren," +
                   "anfuhren,Angabe,Angaben,angebenen,angebracht,angelötet," +
                   "angepasst,Angeregt,angeschlossen,angesenkt,angesteuert," +
                   "Anlage,Anlagengestaltung,anlehnen,Anleitung,anlöten," +
                   "Anmerkung,Anode,Anpassungen,Ansatz,anschließend," +
                   "Anschluß,Anschlußdrähte,Anschlüsse,Anschlüssen," +
                   "Anschlußkabel,anstelle,Ansteuerung,Antrieb,Anzahl," +
                   "anzeigen,anzubringen,anzulötende,anzunehmen,anzupassen," +
                   "anzuschließen,Arbeitsleuchte,Arbeitstier,Armin,Arno," +
                   "Art,Artikel,ASF,Asmus,A-Teil,Athearn,Attrappe,ATW," +
                   "Aufbau,Aufgabe,aufgebohrt,aufgefeilt,aufgemöbelt," +
                   "aufgerieben,aufgespielt,Aufnahme,Aufstiegsleiter," +
                   "auftreten,aufzutrennen,Ausfräsung,ausführliche," +
                   "Ausführung,Ausgang,ausgebaut,ausgebauten,ausgelesen," +
                   "ausgelötet,ausgerüstet,ausgetauscht,Ausland,auslöten," +
                   "aussehen,aussen,Aussenseite,Aussichtstriebwagen," +
                   "Aussparung,Aussparungen,Auswahlkriterien,auszufräsen," +
                   "auszulöten,auszuprobieren,auszutauschen,Auwahl,AUX1," +
                   "AUX2,B4yg,Bad,Bahn,Bahnen,Bahnsinniges,BahnWahn," +
                   "Bakelit,Balastgewicht,Balastgewichten,Ballastgewicht," +
                   "Band,Basic,Basisiwiderstand,Batteriewanne,Bauarten," +
                   "Bauch,Bauform,Baugröße,Baujahr,Baureihe,Baureihen," +
                   "Bausatz,Bautiefe,BC337,BDnf,beantwortet,bearbeitet," +
                   "Bedienungsanleitung,beeinträchtigen,beengten,befeilen," +
                   "befeilt,befestigt,Befestigungsschrauben,befindet," +
                   "behoben,beide,beiden,beigelegte,beiliegenden,bekommt," +
                   "belastbar,belasten,belastet,beleuchtet,Beleuchtung," +
                   "Beleuchtungseffekten,benötigt,benötigten," +
                   "benutzerdefinierbaren,benutzerdefinierte,bequem," +
                   "Bereich,Bericht,berichtet,berühren,berührt,beschafft," +
                   "beschreibt,Beschreibung,beschrieben,Beseitigung," +
                   "besitzt,Best,bestehenden,Bestellnummer,bestem,betagtes," +
                   "Betriebsanleitung,beugt,bevorzugt,bewährten," +
                   "bezeichnete,BFD-01,bietet,Bild,Bildern,Bit,Bit4,Bits," +
                   "blaue,blauen,blaues,Bleche,bleibt,Blindstecker," +
                   "Blindsteckers,Bocholter,Boden,bohren,Bohrer,Bohrung," +
                   "Booster/Versorgungsabschnitte,BPw4yg,BR38,BR41,BR50," +
                   "brachte,braucht,braun,braunem,Brawa,Brawa-Köf,Brawas," +
                   "Brekina,Brekina-Platine,Bretschneider,brock," +
                   "Bronzeblech,Bronzestreifen,Brückensteckers,brüniert," +
                   "B-Teil,Bühne,Bühnenreif,Bundesbahn,Bus,bw-rheinbrueck," +
                   "Carl,Christopher,cloud,Code83-Profile,connector,Conrad," +
                   "CV29,CV8,CV-Configuration,CVs,Dach,Dachaufstieg," +
                   "Dampftriebwagen,DasFahrzeug,dass,Dauerstrom,DB29-3," +
                   "DB-Baureihe,DB-Baureihen,Dber,DCC,DCC-CV,DCC-Decoder," +
                   "DCC-Decodereinbauten,dcc-mueller,DCC-Müller," +
                   "DCC-Tempo-Tuning,DDS," +
                   "de/t128163f5-Digitalisieren-von-Brawa-VB," +
                   "de/t134502f2-Fragen-zu-Brawa,Deaktivieren,Deckelplatte," +
                   "Decoder,Decoderanleitung,Decoderanschlussdraht," +
                   "Decoderauswahl,Decoderbeschreibung,Decodereinbau," +
                   "Decodereinbauten,Decodergröße,Decoderkabel,Decodern," +
                   "Decoders,Decoderschaden,Deichsel,dein,Dekoder," +
                   "Dekoderdrähte,Dekoderherstellers,Deodereinbau,derer," +
                   "Dessel,Detailbeschreibungen,Deutsche," +
                   "deutsche-kleinloks,Deutschen,deutscher,DH500Ca," +
                   "dhuenntalbahn,dienen,Dienstfahrzeuge,Diesellokomotiven," +
                   "Diesel-Pärchen,Digital,Digitalbetrieb,Digitale," +
                   "digitalisiert,digitalisierten,Digitalisierung," +
                   "Digitalspannung,Digitalsystem,Digitalumbauten,Dioden," +
                   "Direkt,direkten,Doppellok,doppelseitigen,Draht," +
                   "Drahtbrücke,Drahtdurchführung,Drähte,Drähten," +
                   "Drahtverbindungen,Draisinen,Drehachse,Drehbewegung," +
                   "drehen,Drehgestell,Drehgestellblenden,Drehgestelle," +
                   "Drehgestellen,Drehgestellkontakten,Drehpunkt," +
                   "Drehscheibe-Online,Drehscheibe-Verlag,drei,Drücken," +
                   "drückt,Dummy,dunkelgrau,dunkler,dünnen,dünner,DUO-LED," +
                   "DUO-LEDs,Durchblick,Durchführung,Durchmesser,DW8,E67B," +
                   "E6SG,e94114,Ebel,ebenso,effektive,Egbert,eigenes," +
                   "eigentlich,eigentlichen,eigenwillig,Einbau," +
                   "Einbauanleitungen,Einbauaufwand,Einbaubeschreibung," +
                   "einbauen,Einbaumöglichkeiten,Einbauplatz," +
                   "Einbausituation,einfache,Einfachheit,eingebaut," +
                   "eingebaute,eingebautem,eingebauten,eingebracht," +
                   "eingeführt,eingeklebt,eingelötet,eingeschaltet," +
                   "eingesetzt,eingesetzte,eingesteckt,Eingriffe,Einsatz," +
                   "Einsatzfahrzeuge,Einsatzgeschichte,Einsetzen," +
                   "einstellen,Einstellung,Einteilen,einwandfreise,einzig," +
                   "Eisenbahn,Eisenbahn-Journal,Eisenbahn-Kurier," +
                   "Eisenbahnmagazin,Eisenbahn-Magazin,EL103SURD/S53," +
                   "elastischen,Elektrik,elektrisch,Elektronik," +
                   "Elektronikversender,empfehlen,empfiehlt,Ende,entfallen," +
                   "entfallenen,entfernen,entfernt,enthalten,Entkuppeln," +
                   "entkuppelt,Entkupplungsbügel,entscheidend,entsprechend," +
                   "entsprechende,entsprechenden,entspricht," +
                   "Entstörelemente,entwickelt,Erfahrungen,erfasst," +
                   "erfolgen,erfolgt,erfolgte,erforderlich,ergeben,erhält," +
                   "erhalten,erhältlich,er-Jahren,erkennen,Erleuchtung," +
                   "erlischt,ermittelte,erneuern,erreicht,Ersatz," +
                   "Ersatzmotor,Ersatzteilnummer,erschienen,ersetzen," +
                   "ersetzt,erwähnte,erweitert,erworben,erworbener," +
                   "erzeugte,ESA,ESU,ESU-Soundprojekt,ETA,ETA150,eta180016," +
                   "ETA-Herbst,ETA-Unterhaltung,etwa,eventuelle,Extra," +
                   "fahren,Fahrgäste,Fahrgestell,Fahrgestelles," +
                   "Fahrleitungsmeistereien,Fahrregler,Fahrspannung," +
                   "Fahrspannungsversorgungsdrähten,Fahrtlichtung," +
                   "Fahrtrichtung,fahrtrichtungsunabhängig,Fahrzeug," +
                   "Fahrzeugbau,Fahrzeugbeleuchtung,Fahrzeuge,Fahrzeuges," +
                   "Fahrzeuginnenbeleuchtung,Fahrzeugplatine,Fahrzeugs," +
                   "Fahrzeugseite,Falle,Fällen,farbigen,farblich,FD-R," +
                   "Federbronze,Federdraht,Federkontakte,Fehler,fehlt," +
                   "fehlten,feilen,Fenster,Fenstereinsatz,Fenstereinsätze," +
                   "Fensterrahmen,festgeschraubt,Feuerbüchse,finde,finden," +
                   "findet,fingen,Firma,fixiert,flach,Flachbandkabel," +
                   "Fleischmann,Fliegende,Fliegenden,folgende,folgt,Fotos," +
                   "Frage,Franz,Fräsarbeiten,fräsen,FRED,freiem,freien," +
                   "Friedenseinsätzen,Front,Frontglas,Führerstand," +
                   "Führerstands,Führerstandsbeleuchtung,Führerstandspult," +
                   "führt,Fünf,fünften,fünfter,Funkenstörelemente," +
                   "Funkentstörelemente,Funktionen,Funktionsausgang," +
                   "Funktionsausgänge,Funktionsdekoder,Funktionstaste," +
                   "Funktionstasten,G12,gab,geändert,Geänderte,gebohrt," +
                   "gebraucht,gedreht,geeignet,gefächerten,Gefahr,gefällt," +
                   "gefielen,geführt,gefunden,Gegengewicht,Gegensatz," +
                   "gegönnt,gehalten,Gehäuse,Gehäuses,gehörte,gekauft," +
                   "geklebt,gekürzt,gelangen,gelb,gelbe,gelben,gelbes," +
                   "gelegt,geliefert,gelötet,gemacht,gemeinsame," +
                   "gemeinsamer,gemessene,geneigt,Generationswechsel,genug," +
                   "genüge,genügend,genutzt,gepaart,Gepäckkasten,gerät," +
                   "gering,geringes,gesamten,geschafft,geschah,geschaltet," +
                   "Geschichte,geschnittenes,geschoben,Geschwindigkeit," +
                   "Geschwindigkeiten,Geschwindigkeitsparameter," +
                   "Geschwindigkeitstabele,Geschwindigkeitstabelle,gesetzt," +
                   "gestalten,gestutzt,gesucht,getauscht,geteilt,getrennt," +
                   "Getriebeblock,Gewähr,Gewährleistung,Gewicht,Gewissen," +
                   "gewünscht,gezeigt,gezeigte,gezogen,Gieseler,ging," +
                   "Gläserne,Gleichstrombetrieb,Gleisen,Glühlämpchen," +
                   "Glühlampe,Glühlampen,Gold,GP38-2,grau,grauen,graues," +
                   "Griffstangen,Großdiesellokomotive," +
                   "Großdiesellokomotiven,Große,Größe,großen,grün,Grund," +
                   "grundlegende,grünen,guter,Güterzuggigant," +
                   "h0-modellbahnforum,Haan,Haftreifen,Haftreifenwechsel," +
                   "Haken,hält,Halteloch,Halterung,Hamburger,handelt," +
                   "Handregler,hängt,Hansjürgen,Hans-Peter,hartnäckig," +
                   "hauchdünne,haus,Heck,Heft,Heinz,heiß,heißer,Heitmann," +
                   "helfen,hellbraun,heller,herausnehmbaren,hergestellt," +
                   "Hersteller,Herstellercode,Herstellers,Herstellerseite," +
                   "hinten,Hinterachse,hintere,Hinweis,Hinweise,Hobbytrade," +
                   "hochfrequenten,Högemann,Höhe,hohen,höher,höhere," +
                   "Homepage,Horst,HT75332,html,http,https,Hubbel,Huebsch," +
                   "I/1989,I/2006,Idee,Ideen,identische,I-II-II-V60," +
                   "Impressum,Indes,Informationen,Inhalt,inklusive," +
                   "Innenbeleuchtung,Innenebleuchtung,Innenmaß,Innenraum," +
                   "Innenraumbeleuchtung,Innenraumnachbildung,Innenseite," +
                   "Innovation,insbesondere,Insbesonders,insgesamt," +
                   "Inspiriert,integriert,integriertem,integrierter," +
                   "Internet,Inzwischen,Isolierband,isoliert,isolierte," +
                   "Isolierung,IV/1995,Jahre,Jahren,Jahresmodell,jegliche," +
                   "John,Josef,Jungbrunnen,Jürgen,Justage,Kab,Kabel," +
                   "Kabeldurchführung,Kabelschacht,Kabinenbeleuchtung," +
                   "Kabinentenderbeleuchtung,Kadee,Kadee-Kupplung," +
                   "Kadee-Kupplungskopf,Kadee-System,kam,kamen,Kato," +
                   "Kehrschleifenmodul,Kenning,kennt,Kennung," +
                   "Kesselballastgewicht,Kfz-Flachsteckerhülse,Kittel," +
                   "Kittel-Dampftriebwagen,KK-Köpfe,Klapptreppe,Klasse," +
                   "Klaue,Klebeband,Klebepad,kleine,kleinen,kleinere," +
                   "kleineren,kleines,Kleinlokomotiven,Klv,Klv20,Klv51," +
                   "Klv60,Köf,kOhm,kOhm-Vorwiderstand,Kollektoren,Kölner," +
                   "kommen,kommt,Kompakte,komplett,Konfigurieren,konnte," +
                   "Konrad,Konstantstrom,Kontakt,Kontakte,Kontaktprobleme," +
                   "Kontaktstreifen,Kopf,Köpfen,Koschinski,Krepppapier," +
                   "Krüger-Modellbau,Krümelbahn,Kuehn,Kugelfräser," +
                   "Kunststoffeinsätze,Kunststoffplatte,Kunststoffstreifen," +
                   "Kupferlackdraht,Kupferlaschen,Kuppellinse,Kuppeln," +
                   "Kuppelns/Entkuppelns,Kupplung,Kupplungsadapter," +
                   "Kupplungsadapters,Kupplungshaken,Kupplungskopf," +
                   "Kupplungsmöglichkeit,kürzen,Kuswa,lackieren,Ladefläche," +
                   "laden,lagen,lagern,lagert,Lämpchen,Lampe," +
                   "Lampenhalterung,Lampr,Land,Länderbahnlackierung,Länge," +
                   "langen,langer,längliche,Lasche,Lastregelung,laterne," +
                   "Laternen,Lauscher,lautet,Lautsprecher,LCW,LD-G-7," +
                   "LD-G-8,LE0511D,LE1014E,LE1035A,LE1835,LE1835A,Leben," +
                   "LED,LED-Bauformen,ledernen,LED-Lichtleiste," +
                   "LED-Lichtleisten,LEDs,Leichtleiste,Leistungsgruppen," +
                   "Leiter,Leiterbahnen,Leiterplatten,Lenz,Lenz-Decoder," +
                   "lesen,letzte,leuchten,leuchtet,leuchtete,Leuchtmittel," +
                   "LH10,Licht,Lichtaustrittsöffnungen,lichtdicht,Lichter," +
                   "Lichtleiste,Lichtleiter,Lichtleiterführung," +
                   "Lichtleiterlücke,Lichtsteuerung,Lichtwechsel,liefert," +
                   "Lieferung,liegen,liegend,liegenden,Liliput,Lima,Link," +
                   "linke,linken,Links,Linse,Literatur,Loch,Löcher," +
                   "Logikausgang,Logikausgänge,Lok,Lokbahnhof,Lokdecodern," +
                   "Lokodex,Lokomotive,Lokomotiven,Lokräder,Lokrundschau," +
                   "Loks,Lokteil,Lösung,Lötanschlüsse,Löttgers,Lüfterhaube," +
                   "mäglich,magnetisch,Maier,Maintenance,Malutronik,manche," +
                   "Manfred,Markierungen,Marslight,Masse,massefrei," +
                   "Massepotential,massgeblich,Matthias,maximale,maximalen," +
                   "maximaler,Mehrfachstecker,meisten,Melcher," +
                   "Mercedes-Benz,Messingblech,Messingbleche," +
                   "Messingblechzapfen,Messingglanz,Messingplättchen," +
                   "Messverfahren,Metall,Metall-Kupplung,Miba,Miba-Spezial," +
                   "Microlampe,Microlampen,Microsteckern,mini,minimal," +
                   "Mitleidenschaft,Mittelpunkt,mittig,mittleren,Modell," +
                   "Modellbahn,Modellbauhütte,Modellfahrzeuge," +
                   "Modellumschau,Modulbau,Modulgruppe,möglicher," +
                   "möglicherweise,Montage,Montageskizze,montiert," +
                   "Moosgummi,Motor,Motoranschluss,Motordauerstrom,Motoren," +
                   "Motorersatz,Motorgeräusche,Motorkontakte,Motorplatine," +
                   "Motorschild,Motorstrom,Motorwagen,Motorwelle,MTC," +
                   "MTC-Schnittstelle,Mühl,Müller,musste,MX617,N025,N045," +
                   "N045-P8,Nachfrage,nachmessen,Nachteil,Nägel," +
                   "Nahverkehrs,Nahverkehrssteuerwagen,natürlich," +
                   "Navigation,Nebengleis,nehmen,NEM,NEM-Schacht,net/index," +
                   "Newsletter,niedriger,nimmt,nirgendwo,Nothaft,Null," +
                   "Nummer,Nummern,Nummernschildbeleuchtung,n-Wagen,obere," +
                   "oberen,Oberfläche,Oberleitungsinstandhaltung,Obermayer," +
                   "Öffnen,Ohm,optimal,Optimierung,orange,oranges," +
                   "originale,originalen,Papierstreifen,Pappe,passen," +
                   "Passend,passende,passt,pdf,Peter,Pfeiffer,Piko,Pilot," +
                   "Pionier,PI-Regler,plan,planer,Platine,Platinenbohrung," +
                   "Platinenlöchern,Platz,Platzieren,platziert," +
                   "PLCC-4-Gehäuse,Plexiglasscheibchen,Polarität,polige," +
                   "Position,Prellbock,preußische,Preußisch-Hessischen," +
                   "Prinzip,Privatbahnen,Probleme,Programmieren," +
                   "Programmierung,Projekte,Pufferbohle,Punkte,PVC-Platte," +
                   "Räder,Radsätze,Radschleifer,Radschleiferblech,Rai-Mo," +
                   "RAL1011,RAL3009,RAL6003,RAL7024,ralf-bueker,Rand," +
                   "Rangierdiesel,Rastnasen,Rauchsatz,Rauchzeichen,Rauten," +
                   "Rautenhaus,reagieren,rechte,rechten,Regel," +
                   "Regelturmtriebwagen,Reichelt,Reichsbahn," +
                   "Reichsbahngesellschaft,Reihe,Reinhard,Reisenden," +
                   "remotorisiert,Remotorisierung,Renoviert,Rest," +
                   "Restaurierung,Reststück,Revitalisiert,Rheinland," +
                   "richtiges,Richtung,Richtwert,Risiko,Rittig,Rivarossi," +
                   "Roco,Roco-Kupplungsadapter,Röder,Rolle,Rollendes," +
                   "rollfähigen,rot,rot/weiß,rotbraun,rote,rotem,roten," +
                   "roter,rotes,Rücken,Rudolf,Ruhrpott,S26,S32,S36,S38,S42," +
                   "S44,S46,S50,S52,S54,S55,S56,S70,Sackgasse,Sammlung," +
                   "Schäden,schaffen,schafft,Schaltbild,schaltet,Scherer," +
                   "Schiene,Schienenfahrrad,Schienenomnibusse," +
                   "Schiene-Straße-Bus,Schildersatz,schlecht,Schleif," +
                   "Schleppschalter,Schlusslicht,schmalen,schmaler," +
                   "Schneepflugs,Schneeräum-Einsatz,Schneeräumer," +
                   "Schneeräumers,schnelle,Schnittstelle," +
                   "Schnittstellenbuchse,Schnittstellenstecker,Schöne," +
                   "schräg,Schrauben,schreibt,Schrottfahrzeug," +
                   "schwalbenschwanzförmigen,Schwalbenschwanzführung," +
                   "schwarz,schwarzen,schwarzer,schwarzes,Schwenkbühne," +
                   "schwer,schwierigste,sechs,Seite,Seiten,Seitenanfang," +
                   "seitlich,seitlichen,Sekundenkleber,Selbstbau," +
                   "selbstgedrehte,selbstgefräste,separate,setzen,sieben," +
                   "sieht,Signalbilder,Signale,Silikonschlauch,Sitzbank," +
                   "Sitzbänke,Sitzbankeinsatz,Sitze,sitzen,Sitzgruppe,slip," +
                   "SLX871,SMD-Bauweise,SMD-LED,SMD-LEDs,SMD-Widerständen," +
                   "soeben,sofern,sogleich,Solingen,Sonder,Sonderausgabe," +
                   "Sonderheft,Sound,Spannung,Spannungsbegrenzung," +
                   "Spannungsregler,Spezial,spielt,Spitzenicht," +
                   "Spitzenlicht,Spitzenlichts,Spitzensignal,Spitzenstrom," +
                   "sporadisch,Spurkränze,Spurkranzhöhe,Staatsbahnen," +
                   "Staatsbahn-Rangierlokomotiven,Staatseisenbahnen," +
                   "stahlbahn,Stand,Standard,starre,Startseite,Steckerwahl," +
                   "steckt,Steckverbinder,Stefan,stehen,steht,Stelle," +
                   "stellen,Steuber,Steuerwagen,Steuerwagens,stillgelegt," +
                   "Stirn/Schlußbeleuchtung,Stirnbeleuchtung,Stirnlampen," +
                   "störende,Straße,Straße-Bus,Streifen,Strom,Stromabnahme," +
                   "Stromabnehmer,Stromaufnahme,Stück,Stückchen," +
                   "Stummiforum,Stummi-Forum,Stützkondenstor,Suchen," +
                   "SUSI-Schnittstelle,SVT877,SVT877a,T125,T65,tab,Tams," +
                   "Tasten,Tauschplatine,Technik,Technische,Teil,Tender," +
                   "Tendergewicht,Tenderkupplung,Testgleis,Tests,Text,The," +
                   "Thema,Thomas,Thyssen,tief,Tower-LEDs,Transistor," +
                   "Transistoren,Transistorschaltung,Traube,Trennsteg," +
                   "Trennung,Triebfahrzeuge,Triebwagen,Triebwagen-Beiwagen," +
                   "Triebwagengehäuse,Triebwagen-Steuerwagen,Triebwerks," +
                   "Triebwerksbeleuchtung,Triebzuges,Trix,Troche,Tropfen," +
                   "Tun,Tunneluntersuchungen,Türe,Türen,Turmtriebwagen," +
                   "Turmwagen,Türvorhang,Übersicht,übliche,Übrigens," +
                   "Uerdingen,Uhlen,Uhlenbrock,Ulf,Umbau,Umbauanleitung," +
                   "Umbauanleitungen,Umbaubeschreibung,Umbaubeschreibungen," +
                   "umbauen,Umbau-Klassiker,Umbaumöglichkeiten," +
                   "Umbaumöglichkieten,Umbausatz,Umbauten,Umbauwagen," +
                   "umgebaut,umgeben,umzubauen,unbedingt,Unikat," +
                   "unkontrolliert,unmotiviert,unsaubere,unterblieben," +
                   "unterbrechen,Unterbrechung,Unterbrechungen," +
                   "Unterbringung,untergebracht,unterhalb,Upgrade,V/15mA," +
                   "V/20mA,V100,V15,V188,V200,V23,V300,V36,V60,Variable," +
                   "VB140,VB147,verabschiedete,verantwortlich,verbauen," +
                   "Verbeck,Verbesserung,verbinden,Verbindung,Verbindungen," +
                   "Verbleib,verbleibenden,verbunden,verdrahten,verdrahtet," +
                   "Verdrahtung,vereinfachte,verfügbare,verfügbaren," +
                   "Verfügung,vergessen,Verkabelung,verkorkste,Verlag," +
                   "verläuft,verlegen,verlegt,verlötet,vermeiden," +
                   "Vermutlich,vernünfigen,Verpackung,verschmort,versehen," +
                   "versenkt,versetzen,Version,Versuch,verwendbare," +
                   "verwenden,verwendet,verwendete,verwendeten,Verwendung," +
                   "verzichte,Video,vier,Vierachser,violette,violetten," +
                   "voller,Volt,Vorbau,vorbildgerecht,Vorbildgerechte," +
                   "Vorbildgerechter,Vorbildinformationen,vordere,vorderen," +
                   "Vorgänger,vorgenommen,vorgesehen,vorgesehene," +
                   "vorgesehenen,vorhanden,vorhandenen,Vorkriegswagen,vorn," +
                   "vorne,Vorsatzschneepflugs,Vorschlag,Vorsicht," +
                   "vorsichtig,vorsichtiges,Vorteil,Vorwiderstand,VS145," +
                   "VT/VB-Einheit,VT137,VT70,VT95,waagerecht,waagerechte," +
                   "Wagen,Wagenbeleuchtung,Wagenenden,Wagenkastens,wählen," +
                   "Wände,Wandung,warmweiß,warm-weisse,wartungsfreie," +
                   "wechselnde,Weg,Wehrmacht,wehrt,Weinert,Weisbrod," +
                   "weiss/rot,weisse,weißem,weissen,weiteren,Wenzel," +
                   "werksseitig,Werner,Wichtig,wichtige,Wichtigste," +
                   "wichtigsten,Widerstand,Widerstände,Willhaus,Wissen,WN2," +
                   "Worms,Wormser,Württembergerin,württembergische," +
                   "Württembergs,www,zähle,zahlreiche,zählt,Zapfen,zeigt," +
                   "Zeit,Zentrale,Zentrierhilfe,zerlegen,Zg1,Zg2,Zg4,Zimo," +
                   "ZIMO-Decoder,Züge,zugehörigen,zugelassen,zugeschnitten," +
                   "zugleich,Zugschlussbeleuchtung,Zugschlussignal," +
                   "Zugschlussignale,Zugschlusslicht,Zugschlussscheiben," +
                   "Zugschlußsignal,Zugspitzenbeleuchtung,zumal,zumindest," +
                   "zunächst,zurechtgeschnitten,Zurüst,Zurüstbeutel," +
                   "Zurüstteile,zusammen,Zusammenbau,zusammengeklebt," +
                   "zusammengeschaltet,Zusammenspiel,zusammenzubauen," +
                   "zusätzlich,zusätzliche,zusätzlichen,zusätzlicher," +
                   "Zusatzplatine,Zuweisen,zweimal,zweite,zweiten,zweiter," +
                   "zwischenzeitlich";
       seite[29] = "decoder.htm";
beschreibung[29] = "Kr&uuml;melbahn - DCC-Decodereinbauten";
     begriff[30] = "aktualisieren,aktuell,ändert,anstelle,Bahn,Bahnen," +
                   "Bahnsinniges,bedienen,Beschreibung,Besondere,Betrieb," +
                   "Betrieblich-technische,Betriebsordnung," +
                   "Betriebszentralen,Brandschutz,Bremsen,Dateien," +
                   "Deutschen,Dienstvorschrift,Dienstvorschriften,Direkt," +
                   "Dokument,Duitse,durchführen,eifrige,Einstiegsseite," +
                   "Eisenbahn-Bau,Eisenbahn-Verkehrsordnung,Eisenbahnwesen," +
                   "erreichen,Fahrdienstvorschrift,findet,Fotografieren," +
                   "Fotografiererlaubnis,führen,funktionieren,Gesetz," +
                   "Gesetze,gestellt,Gleispläne,Güterzugfahrpläne,halten," +
                   "helfen,Het,Impressum,Inhalt,interessanten,Internet," +
                   "Krümelbahn,Lijntje,Link,Links,Literatur,Mitteilung," +
                   "Modellbahn,Nachricht,Navigation,Netz,Norderney," +
                   "Notfallmanagement,Offizielle,Rangierfahrten,rechtens," +
                   "Regelwerk,Regelwerke,Regelwerken,relevanten," +
                   "Schienennetz-Benutzungsbedingungen,Seite," +
                   "Serverstrukturen,Signalanlagen,Signalbuch," +
                   "Signalisierten,SNB,Solingen,Startseite,Steilstrecken," +
                   "stellt,Suchen,SZB,Triebfahrzeuge,Übersicht,verbieten," +
                   "Verbot,verfasst,Verfügung,versuche,Verweise,vorhanden," +
                   "Vorschriften,weiteren,wissen,Wortlaut,Zeit,ZLB,Zug," +
                   "Zugbeeinflussungsanlagen,Zugleitbetrieb";
       seite[30] = "dienst_db.htm";
beschreibung[30] = "Kr&uuml;melbahn - Dienstvorschriften der DB";
     begriff[31] = "Aktivitäten,anfordern,Anlage,Anlagengestaltung," +
                   "Anlagenplatte,Anschließend,aufgebohrt,aufstellen," +
                   "Ausgestaltung,Bahnen,Bahnsinniges,befestigen,befestigt," +
                   "Benötigt,Berührung,Bevölkerung,Bild,bohren,Bohrer,DCC," +
                   "Digitalbetrieb,Direkt,Einbau,eingesetzt,einsetzen," +
                   "Elektronik,eMail,Fahrzeugbau,fertig,Figur,Figuren," +
                   "gefragt,gemacht,Hand,heftigere,Hektometertafeln," +
                   "Impressum,Informationen,Inhalt,Jahresmodell," +
                   "Klarsichtplättchen,kleben,kleines,Klöbchen,kommt," +
                   "Krümelbahn,Landschaft,Leben,Leuchtstoffröhren,Links," +
                   "Literatur,Loch,Lösung,ltige,Mercedes-Benz,Merscheider," +
                   "Messingdraht,Modellbahn,Modellfahrzeuge,Modulbau," +
                   "Navigation,Nebenbahnsignale,Preiser,provisorisch,reißt," +
                   "Schacht,Schotter,Seitenanfang,Sieht,Signalen,Sitzbank," +
                   "Solingen,Stabilität,Standbein,standsicher,Startseite," +
                   "Straßenpfosten,Stückchen,Suchen,Teil,umkippen," +
                   "Unsichtbarkeit,vorprogrammiert,vorsichtig";
       seite[31] = "figuren.htm";
beschreibung[31] = "Kr&uuml;melbahn - Anlagengestaltung - Figuren befestigen";
     begriff[32] = "abgeschaltet,Adobe,Ansicht,ausgewählter,Bahn,Bahnen," +
                   "bahnhof,Bahnhöfen,Bahnhofskürzel,Bahnsinniges,benötigt," +
                   "Betriebsstelle,Betriebstellenkürzel,Button,de/apn," +
                   "de/apn/KSO,Deutsche,Dienstvorschriften,Direkt,direkte," +
                   "DS100,Duitse,entsprechende,function,funktionieren," +
                   "Gleispläne,Gleisplanes,Güterzugfahrpläne,Hbf,Het,https," +
                   "Impressum,Inhalt,Internet,KLA,Klartext,KLEL,KOPL," +
                   "Krümelbahn,KSO,Kürzel,Langenfeld,Leichlingen,length," +
                   "Lijntje,Link,Links,Liste,Literatur,Modellbahn," +
                   "Navigation,Norderney,Opladen,PDF-Format,PDF-Viewer," +
                   "plan,Seiten,Solingen,Startseite,steht,stellt,Suchen," +
                   "trassenfinder,Übersetzung,usepdf,Verfügung," +
                   "Zeichenfolge";
       seite[32] = "gleisplan.htm";
beschreibung[32] = "Kr&uuml;melbahn - Gleispl&auml;ne";
     begriff[33] = "Aktuell,altbewärtes,Aufstellung,Bahn,Bahnen,bahnhof," +
                   "Bahnhofs,Bahnsinniges,baut,braucht,com,dbcargo," +
                   "de/bin/db/stboard,Dienstvorschriften,Direkt,Duitse," +
                   "entdecken,erfolgreich,erhielt,exe/dninput," +
                   "Fahrplantafeln,function,gab,Gleispläne,gueterfahrplan," +
                   "Güterzüge,Güterzugfahrpläne,hacon,Het,href,https," +
                   "Impressum,Inhalt,Internet,Krümelbahn,Kürzel,Lijntje," +
                   "Links,Literatur,location,Modellbahn,Navigation," +
                   "Norderney,planner,Reisezüge,Seitenanfang,Solingen," +
                   "standard,Startseite,Suchen,target,var,verkehrenden," +
                   "verschwindet,Webseiten,zug,Zugnummernsuche";
       seite[33] = "gueterzug.htm";
beschreibung[33] = "Kr&uuml;melbahn - G&uuml;terzugfahrpl&auml;ne";
     begriff[34] = "Abstand,Aktivitäten,Anbieter,anfordern,angebracht," +
                   "Anlagenbild,Anlagengestaltung,Ansatz,Anspruch," +
                   "Antworten,Art,Artikel,Auflistung,aufsteigender," +
                   "Ausgangspunkt,ausgeführt,Bahnen,Bahnhof,Bahnsinniges," +
                   "bearbeitet,befestigen,Befinden,befindet,beiden,beleben," +
                   "benannt,Beschreibung,Best,beträgt,Bohrung,Brawa," +
                   "brünieren,brüniert,Busch,DCC,Detail,dienen," +
                   "Digitalbetrieb,Direkt,dreieckige,Einbau,Einsatz," +
                   "Elektronik,eMail,entfernt,Entfernungen,entsprechend," +
                   "erhebt,erlaubt,erstellt,Fahrzeugbau,Figuren,flexibel," +
                   "Fohrmann,Folge,Fragen,Fremo,Fremo-Artikel,geklebt," +
                   "gemacht,gestaltet,gesteckt,gestossen,Gleis,Gleises," +
                   "Gleismitte,größeren,halber,Heft,Hektometersteine," +
                   "Hektometertafel,Hektometertafeln,Hersteller,Hp1,Hülse," +
                   "Impressum,Informationen,Inhalt,insbesondere," +
                   "Jahresmodell,Kastens,Kilometerbereich,Kilometerstein," +
                   "Kilometertafel,Kilometrierung,klären,kleine," +
                   "Kleinigkeiten,kommen,kommt,Krümelbahn," +
                   "Kunststoffstreifen,Länge,Leuchtstoffröhren,liefert," +
                   "Links,Literatur,Loch,Lösung,maßgeblich,MBZ," +
                   "Mercedes-Benz,Merscheider,Messingbraun,Messingdraht," +
                   "Messingröhrchen,Mitte,Modellbahn,Modellfahrzeuge,Modul," +
                   "Modulbau,Moduleinsatz,Modulen,Montagelehre," +
                   "Nachbarmodulen,Navigation,Nebenbahnsignale,nette," +
                   "optischer,Orientierung,passenden,platziert,problemlose," +
                   "Punkten,Richtung,RST-Modellbau,Schacht,Schotter,Seiten," +
                   "Seitenanfang,sieht,Signalen,Sitzbank,Solingen," +
                   "standsicher,Startseite,steckbar,steckbare," +
                   "Steckmöglichkeit,Steckmöglichkeiten,stehen," +
                   "Straßenpfosten,Strecke,Streckenentfernung," +
                   "Streckengleises,Streckenzeichen,Stück,Suchen,Tafeln," +
                   "unabhängig,untere,Unterseite,Vollständigkeit," +
                   "Weiterführung,Zeitschrift";
       seite[34] = "hekto.htm";
beschreibung[34] = "Kr&uuml;melbahn - Anlagengestaltung - Hektometertafeln";
     begriff[35] = "anfordern,Angabe,auftreten,ausschließlich,Bahnen," +
                   "Bahnsinniges,benötigt,bestehende,Betreiber,Buchenstr," +
                   "Commercial,Cookies,D-42699,Darstellungsprobleme,Daten," +
                   "DCC-/LocoNET,Deeplinks,dient,Direkt,eMail," +
                   "eMail-Message,erwarten,existieren,existierende,externe," +
                   "Firmennamen,Format,geänderte,genannt,Gerät,Geräten," +
                   "Gerätes,geschieht,gewünschten,github,Haftung,Hinweise," +
                   "Hobbies,Homepage,Homepages,Impressum,Info,Inhalt," +
                   "inhaltlicher,interessante,Interessen,keinerlei," +
                   "kommerziellen,Kontakte,Kontrolle,Krümelbahn,Links," +
                   "Literatur,Marken,Meinung,Michael,Modellbahn,nachbauen," +
                   "Navigation,nichtgewerblicher,Nutzer,Nutzung,Offer," +
                   "personenbezogenen,Pflege,Platinenlayouts,private," +
                   "privater,Projekte,rein,Rücksicht,Schaltplanzeichnungen," +
                   "Schutzrechte,Seiten,Solingen,sorgfältiger,Startseite," +
                   "Suchen,Suppe,Target,übernehme,Unterlagen," +
                   "Verantwortlich,verfügbar,verlinkten,verweise,verwendet," +
                   "wider,willkommen,WWW,Zimmermann,zugehörigen";
       seite[35] = "impressum.htm";
beschreibung[35] = "Kr&uuml;melbahn - Impressum";
     begriff[36] = "Anfänger,Bahn,Bahnen,Bahnsinniges,blob/main/Krümelbahn," +
                   "Broschüren,cher,cloud,DCC,digital,Direkt," +
                   "Fahrzeugselbstbau,github,githubinfo,große,Guten," +
                   "Impressum,Info,Informationen,Inhalt,Interessante," +
                   "kleine,Krümelbahn,Kurzanleitung,Links,Literatur," +
                   "main_public,Michael,Michelstadt,Modell,Modellbahn," +
                   "Modellbahnelektronik,Modulbau,Navigation,new,pdf," +
                   "Projekte,Reihe,rund,Solingen,Suchen,Termine,Themen," +
                   "Übersicht,Umgang,verfügbar,vergangene,veröffentlicht," +
                   "Videos,wichtige,Zimmermann";
       seite[36] = "index.htm";
beschreibung[36] = "Kr&uuml;melbahn";
     begriff[37] = "Abeler,achs,achs/2achs,achs/3achs,achs/4achs,achsig," +
                   "Actros,Actros18,Aktivitäten,Angaben,Anlagengestaltung," +
                   "Anlass,Anspruch,AROCS,Aufdruck,aufgelistet,Auflieger," +
                   "Autodesign,Autotransporter-Hängerzug,Bahnen," +
                   "Bahnsinniges,Balkhauser,Basismodelle,begrüßen," +
                   "Bergische,Bergischen,beziehen,Bigspace,Brücke,Burg," +
                   "cool,dankbar,DCC,Deutsches,Digitalbetrieb,Direkt," +
                   "Duoplex,Elektronik,eMail,Engels,Ergänzungen,erhältlich," +
                   "erhebt,Erweiterung,Eurokoffer-Sattelzugauflieger," +
                   "Fahrzeug,Fahrzeugbau,Fahrzeuge,Fall,Faszination,Fauna," +
                   "Friedrich,Galileum,Gesenkschmiede,Gigaspace," +
                   "Glastransporter-Sattelzug,Glüder,Hendrichs,Herpa," +
                   "Hersteller,Holzkiste,Impressum,Industriemuseum,Inhalt," +
                   "Innovation,irgendwie,Jahr,Jahre,Jahresmodell," +
                   "Johannisberg,Jumbogardinenplanen-Sattelzugauflieger," +
                   "Junior,Katalognummer,Katalognummern," +
                   "Kempfkipper-Sattelzug,Klammern,Klingenmuseum," +
                   "Kofferauflieger,Koffersattelzug,Korrekturhinweise," +
                   "Kotten,Krone,Krümelbahn,Land,Liner,Links,Liste," +
                   "Literatur,Mercedes-Benz,Mercedes-Benz-Niederlassung," +
                   "Meusberger,Meuseburgerauflieger,Mobilität,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,MP2,MP3,MP4,MP5,Müngstener," +
                   "Museumsbahnen,Navigation,neuer,Niederlassung," +
                   "Nordbahntrasse,Plagiarius,Remscheid,Rheinisches,Ring," +
                   "Ronsdorfer,Röntgenmuseum,Sammlerobjekte,Sammlung," +
                   "Sattelzug,Sattelzugmaschine,schicken,Schloß," +
                   "Schwebebahn,schwer,Seitenanfang,SEL,SLT,Solingen," +
                   "Solingen-Remscheid-Wuppertal,Solinger,Stadthalle," +
                   "Stadtwappen,Startseite,Suchen,Tafel,Talsperre,Taxi," +
                   "Tiefbettauflieger,Tierheim,Uhrenmuseum,Uni," +
                   "Vollständigkeit,W198,Werkzeugmuseum,Wülfrath,Wupper," +
                   "Wuppertal,Wuppertal/Solingen/Remscheid," +
                   "Wuppertalbewegung,Wuppertaler,Wuppertruck,Zeittunnel," +
                   "Zoo,Zugmaschine";
       seite[37] = "jahreswg.htm";
beschreibung[37] = "Kr&uuml;melbahn - Mercedes-Benz Jahresmodell";
     begriff[38] = "A46,alte,anschließend,Bahnanlagen,Bahndämme,Bahnen," +
                   "Bahnhof,Bahnhöfe,Bahnsinniges,Bau,befahren,beliebter," +
                   "Brücken,demontiert,Dezember,Direkt,ebenso,eingestellt," +
                   "endet,endgültig,erhaltene,eröffnet,Fahrzeuge,Februar," +
                   "genannt,geographisch,Gräfrath,Güterverkehr,Güterzug," +
                   "Haltepunkt,Hauptbahnhof,heutigen,Impressum,Inhalt," +
                   "insgesamt,interessanteste,Juni,Korkenzieherbahn," +
                   "Krümelbahn,lang,letzte,Linienverlauf,Links,Literatur," +
                   "März,Modellbahn,Navigation,November,offiziell," +
                   "Personenverkehr,Reste,restliche,Seitenanfang,Skizze," +
                   "Solingen,Solingen-Gräfrath,Solingen-Mitte," +
                   "Solingen-Nord,Solingen-Wald,Solinger,Stadtgebiet," +
                   "Stadtteil,Startseite,Strecke,Strecken,Streckenverlauf," +
                   "Suchen,Südbahnhof,Teilstrecke,umgehend,Umgehungsbahn," +
                   "ursprünglichen,verbindet,Verkehr,verkehrte,verlagert," +
                   "verlängerte,Vohwinkel,Wald,Wanderweg,Wikipedia," +
                   "Wuppertal-Vohwinkel,zeigt,Zeit,Zug";
       seite[38] = "korkbahn.htm";
beschreibung[38] = "Kr&uuml;melbahn - Korkenzieherbahn";
     begriff[39] = "Abdeckung,abschneiden,Aktivitäten,aneinander,anfordern," +
                   "angelehnt,Anlagengestaltung,Anschluss,Anschlussdraht," +
                   "Ansteuerelektronik,ansteuern,axialem,Bahnen," +
                   "Bahnsinniges,Bahnsteigleuchte,Bedarf,befestigen," +
                   "Betankungsanlage,Birnchen,dauerhaftere,DCC,dient," +
                   "Dieseltankstelle,Digitalbetrieb,Direkt,Drahtanschluss," +
                   "drei,durchgebrannt,Durchmesser,Einbau,Elektronik,eMail," +
                   "Ersatz,erwischt,Fahrzeugbau,Fertig,Figuren,gefallen," +
                   "gelötet,gemacht,gewünschter,Glaskuppel,halbieren," +
                   "halbiert,Halbschalen,Hektometertafeln,hergestellt,Idee," +
                   "Impressum,Informationen,Inhalt,Jahresmodell,kaltweiß," +
                   "Kenner,kOhm,Krümelbahn,Kunststoffröhrchen," +
                   "Kupferlackdraht,Kupferlackdrähte,Länge,langes," +
                   "LC10-Leuchtstoffröhren-Simulator,LEDs,letzten," +
                   "Leuchtdioden,leuchteten,Leuchtstofflampe," +
                   "Leuchtstofflampen-Simulator,Leuchtstoffröhre," +
                   "Leuchtstoffröhren,Leuchtstoffröhrenimitation,Links," +
                   "Literatur,Literaturhinweise,Lösung,Mercedes-Benz," +
                   "Merscheider,Miba,Michelstadt,Mikrobirnchen,milchig," +
                   "milchige,Mitte,Modell,Modellbahn,Modellfahrzeuge," +
                   "Modulbau,Moduleinsatz,möglichst,musste,nachbilden," +
                   "natürlich,Navigation,Nebenbahnsignale,Neonröhren,passt," +
                   "Reihe,Röhrchen,Schacht,Schotter,Schritte,Schritten," +
                   "Seite,Seitenanfang,Signalen,Sitzbank,SMD-Leds,Solingen," +
                   "standsicher,Startseite,Straßenpfosten,Stück,Suchen," +
                   "Tams,vergessen,verwendeten,Viessmann,Vordach,vorhanden," +
                   "Vorwiderstand,warmweiß,Wattestäbchen,weißem,wissen," +
                   "zusammengelötet";
       seite[39] = "leuchtr.htm";
beschreibung[39] = "Kr&uuml;melbahn - Anlagengestaltung - " +
                   "Leuchtstoffr&ouml;hren";
     begriff[40] = "American,amerikanische,Andreas,Anita,Anspruch,Arnold," +
                   "Artitec,Artmaster,ASOA,Association,Ätzschilder," +
                   "Ätztechnik,aufgenommen,Auhagen,Ausbesserungswerk,Autos," +
                   "Bahn,Bahnen,Bahnen/Clubs/Museen,Bahnen/Förderverein," +
                   "Bahnsinniges,Bäume,Bausätze,Bayrisches,BDEF," +
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
                   "Erweiterung,Europäischer,Europas,existierende," +
                   "Fahrzeuge,Faller,Figuren,finden,Firmen,Fleischmann," +
                   "Fohrmann,Förderverein,FREMO,Freunde,Freundeskreis," +
                   "Führerstandsimulation,Gahler,Gassner,geänderte,Gebäude," +
                   "Gipsbauformen,Günther,Haan,Heico,Heki,Heris,Herpa," +
                   "Hersteller,Herstellerübersichten,Hinweise,historische," +
                   "Historischer,Hobby-Ecke,Hölscher,IGM,IIm,Impressum," +
                   "IMT-Frowein,Inhalt,Interessengemeinschaft,Japan," +
                   "Joswood,Kaarst,Kadee,Kantoor,Kato,Kibri," +
                   "Kleinbahn-Museum,Kleinserien-Fahrzeuge,Koblenz," +
                   "Krümelbahn,Kupplungen,Kuswa,Lahnstein-Koblenz," +
                   "Länderbahnforum,Landschaftsgestaltung,LaserCut-Modelle," +
                   "Lauer,Lemke,Lenz,Leuchten,LGB,Liliput,Lima,Linkliste," +
                   "Links,Liste,Listen,Literatur,Lok-Magazin,Lok-Report," +
                   "Lokschuppen,Magazin,Märklin,Mber,MBZ,MEC,Meiningen," +
                   "Menden,Messingbausätze,Messing-Präzisionsmodelle,MIBA," +
                   "MiBa-Herstellerübersicht,Micro-Metakit,Militär," +
                   "MKB-Modelle,MK-Schilderversand,MOBA,Modell,Modellbahn," +
                   "Modellbahnen,Modellbahner,Modellbahnprodukte," +
                   "Modellbahnverband,Modellbau-Joachim,Modellbauzubehör," +
                   "Modelleisenbahnclub,Modelleisenbahner,Model-Loco," +
                   "Modulbau,MoeBo,MOROP,Motorisierungen,Museumsbahnen," +
                   "Navigation,N-Bahn,NEM,Neuenmarkt-Wirsberg," +
                   "Neustadt/Weinstraße,Niedersächsisches,NMRA,Nördlingen," +
                   "Normen,North,Nothaft,Nürnberg,Oberleitungen," +
                   "Organisationen,Ostmodell,Peco,Peddinghaus-Decals,Petau," +
                   "Peter,Piko,Pola,Preiser,RailCommunity,Railroad,RCN," +
                   "Regional,Rheinland,Rietze,Rivarossi,Roco,Saemann,Samba," +
                   "SB-Modellbau,schicken,Schienen,Schienenbus," +
                   "Schienenverkehr,Schiffe,Schotter,Schuhmacher," +
                   "Schwarzwaldbahn,Seilzugkanäle,Seitenanfang," +
                   "Selfkantbahn,Signale,Signaltechnik,Solingen," +
                   "Sommerfeldt,Sonstiges,Spörle,Startseite,Stellwerke," +
                   "Stellwerkssimulation,Suchen,SWR,Technikmuseum," +
                   "TE-Miniatur-Shop,Themen,Tillig,TL-Decals,Trix," +
                   "Überregional,Übersicht,Umbauten,Umfangreiche,USA," +
                   "Verband,Verkehrsmuseum,Vertrieb,Viessmann,Vohwinkel," +
                   "Vollmer,Vollständigkeit,Vorbild,Vulkan-Express,Weinert," +
                   "Werkstatt,Werkzeug,Wiking,WinRail,Wipperfürth," +
                   "Wupperschiene,Wuppertal,Württemberg,Württembergische," +
                   "Zeitschriften,Zubehör,ZuSi";
       seite[40] = "link_bn.htm";
beschreibung[40] = "Kr&uuml;melbahn - Eisenbahnlinks";
     begriff[41] = "amerikanische,Anspruch,ATMEL,aufgenommen,Bahnen," +
                   "Bahnsinniges,Bormann,dankbar,DCC,DCC-Voltmeter,Deloof," +
                   "DIAMEX,Digital,DigiTrax,Direkt,DownLoads,Ebenso," +
                   "Eisenbahn,eMail,eMailAndGithub,erheben,Erweiterung,ESU," +
                   "existierende,finden,Fragen,Frankenzentrale," +
                   "Franken-Zentrale,Franz,FRED,FREDI,Fremo,geänderte," +
                   "genannten,Grundlagen,Handregler,Hans,Hardware," +
                   "Hersteller,Hilfsmittel,Hinweise,Impressum," +
                   "Informationen,Inhalt,JMRI,komfortabler,Krümelbahn,Lenz," +
                   "Linkliste,Links,Liste,Listen,Literatur,LocoBuffer," +
                   "LocoNET,LocoNET-Kabeltester,LocoNET-Monitor," +
                   "LocoNET-PC-Interface,LocoNET-Pegeltester," +
                   "LocoNET-Pull-Up,LocoNET-Spezifikation,LocoNET-Uhr," +
                   "LocoNET-Verstärker,MicroChip,Microcontroller," +
                   "Modellbahn,MS-SH,Müller,Navigation,Nebenuhr,offizielle," +
                   "OpenDCC,over,PIC-Brenner,PICs,PolEi,Polungsprüfer," +
                   "Processoren,Programmiergeräte,PROG-S2E,Reinhard," +
                   "RocRail,RSCLD,schicken,Seiten,Seitenanfang,sicherlich," +
                   "Software,Solingen,Spax-Booster,Startseite,Stefan," +
                   "Suchen,Tams,TCP,Thema,Themen,Treiber,Uhlenbrock," +
                   "Uhrendecoder-Franz,Uhrenzentrale,USB-AVR-PROG," +
                   "Vollständigkeit,wiFred,WinAVR,WLAN,WWW,Zimo";
       seite[41] = "link_dcc.htm";
beschreibung[41] = "Kr&uuml;melbahn - Digitallinks";
     begriff[42] = "Abracadata,Accurail,american,amerikanische,Association," +
                   "Athearn,Atlas,Bachmann,Bahnen,Bahnsinniges,CAD-Rail," +
                   "Casting,change,club,Clubs,complete,DCC,Digital,Direkt," +
                   "Dorado,Eisenbahn,eMail,engineer,feel,for,free,happy," +
                   "have,Hersteller,Impressum,Inc,Inhalt,Kadee,Kato," +
                   "Krümelbahn,Life-Like,linklist,Links,Lionel,list,lists," +
                   "Literatur,Magazines,Manufacturer,manufacturers,may," +
                   "mistake,Model,Modellbahn,Modelrailroader,MRR," +
                   "Navigation,NMRA,North,not,notification,Others,page," +
                   "PlanIt,Products,Railroad,receive,remarks,retailer," +
                   "Roundhouse,RR-Track,same,Sandia,Scenics,send,Software," +
                   "Solingen,Startseite,Suchen,taken,the,there,This,Top," +
                   "Train,Trains,usa,Walthers,want,way,Woodland,you";
       seite[42] = "link_usa.htm";
beschreibung[42] = "Kr&uuml;melbahn - Links to american manufacturers";
     begriff[43] = "Adolf,alte,Anspruch,Anton,Arbeit,Arbeitsheft," +
                   "Arbeitskreis,Artikel,Auflage,Aufnahme,Aufstellung," +
                   "außergewöhnliche,Autorenteam,Bahnbetriebswerk," +
                   "Bahnbetriebswerke,Bahndienstfahrzeuge,Bahnen," +
                   "Bahngeschehen,Bahnhofswandel,Bahnlinie,Bahnsinniges," +
                   "Balkanexpress,Band,bbecke,Beiträge,Belz,bemühen,Bendig," +
                   "Benrath,Berg,Bergische,Bergischen,Bergisches," +
                   "Bergisch-Märkische,Bergisch-Märkischen,Berichte,Beruf," +
                   "Betriebsmaschienendienst,bietet,Bildern," +
                   "Bochum-Dahlhausen,Boll,Bonn,Born-Verlag,Brinker,Brücke," +
                   "Brückenfest,Brückenschlag,Brügge,Büchern,Buchhandlung," +
                   "Bundesbahn,Christian,Dampf,Dampfeisenbahn,dankbar," +
                   "Denkmäler,Deutsche,Deutschland,Deutschlands," +
                   "Dieringhausen,Dieter,Direkt,Dirk,Dirlam,DVD," +
                   "Eckehard/Reimann,Eidam,eingestellt,Eisenbahn," +
                   "Eisenbahn-Ausbesserungswerk,Eisenbahnbrücke," +
                   "Eisenbahnchronik,Eisenbahnen,Eisenbahnfilme," +
                   "Eisenbahnfotograf,Eisenbahnfreunde,Eisenbahngeschichte," +
                   "Eisenbahn-Journal,Eisenbahn-Kurier,Eisenbahnliteratur," +
                   "Eisenbahnverbindung,Elektrischen,eMail,Entlang,Erfurt," +
                   "Ergänzungen,erhebt,Ernst,Erscheinen,Erweiterung,Fall," +
                   "Faszination,FILM,Filme,finden,folgenden," +
                   "Fotodokumentation,Frank,Freiburg,Frenz,frühes,Galunder," +
                   "gebaut,GeraMond,Geschichte,gesperrt,Große,Güterzüge," +
                   "Harald,Hauptsache,Hbf,Heft,Hehl,Heimatkunde,Helmut," +
                   "Henning,Heßler,Heuschele,Hinweise,HISTORIC,Historie," +
                   "historische,höchste,Hoffnungsträger,Höltge," +
                   "Horst/Reimann,Hundertjährig,Impressum,industriellen," +
                   "Inhalt,Inkeller,ISBN,Jahre,jung,Jürgen,Jürgen/Reimann," +
                   "Kaiß,Kampen,Karl-Wilhelm,Kenning,Kierdorf,Klassiker," +
                   "Klee,Kohl,Köln,Korkenzieherbahn,Korkenziehertrasse," +
                   "Korrekturhinweise,Krümelbahn,Künftig,Kurt," +
                   "Kurt/Zimmermann,Land,Landeskonservator,Lebenslauf," +
                   "Lehmann,Leichlingen,Links,Liste,Literatur," +
                   "Literaturliste,Lok-Report,Mackensen,Magazin,Manfred," +
                   "Mark,Markus,Martina,Menninghaus/Krause/van,Michael," +
                   "mittleren,Modellbahn,Monika,Müngsten,Müngstener," +
                   "Münster,Museumsbahnen,Nahverkehrsliteratur,Navigation," +
                   "N-Bahn,Nebenbahn,Nebenbahngleisen,Nordbahn,Nordhorn," +
                   "Nümbrecht,Oberbergischen,Obus,O-Bus,Ohligs," +
                   "Ohligs-Lennep,Opladen,Orchester,Periodika,Pillmann," +
                   "Projekt,Prominente,Publikationen,Radevormwald,Ralf," +
                   "Raum,regionale,Reimann,Reiseführer,Remscheid," +
                   "Remscheid-Lennep,Revolution,rga-Buchverlag," +
                   "Rheinbahn-Triebwagenserie,Rheinisch-Bergische," +
                   "Rheinland,Rieppel,Rückblende,Rückblicke,Rudolf,Ruhrtal," +
                   "Sammlung,Sanierungsfall,Säuberlich,Schandfleck," +
                   "Schatten,schicken,Schienen,Schmorleiz/Tappert," +
                   "Schriften,Schwindlefreie,Seitenanfang,Siegerland," +
                   "Soechting,Solingen,Solingen-Ohligs,Solingen-Vohwinkel," +
                   "Solinger,Stadt,Stadtbahnen,Städtedreieck,Städten," +
                   "Stadtgebiet,Startseite,Straßen,Straßenbahn," +
                   "Straßenbahnen,Straßenbahn-Zeitreise,Strecke,Strecken," +
                   "Suchen,Sutton,Sutton-Verlag,Symphonie,Tageblatt," +
                   "Talbrücke,Talquerung,Technik,Technische,Teiltraum," +
                   "Thalbrücke,Thema,Themen,Tram-Revue,überarbeitete," +
                   "Überregionale,Uhle,unterwegs,VDI-Verlag,Verbindung," +
                   "Verkehrsknoten,Verkümmerns,Verlag,VHS-Video,Vogelsang," +
                   "Vohwinkel,Volbild,Vollständigkeit,Walther,Weihrauch," +
                   "Werner,Westf,Wolfgang,Wupper,Wuppergrund,Wuppertal," +
                   "Wuppertalbahn,Wupper-Talbahn,Wuppertaler,Wuppertals," +
                   "Wuppertal-Steinbeck,zahlreichen,Zeitschriften,Zeno," +
                   "Zwischenhalt";
       seite[43] = "literat.htm";
beschreibung[43] = "Kr&uuml;melbahn - Solingen-Literatur";
     begriff[44] = "Anspruch,Arend,Aufgaben,Axel,Bad,Bahndienst," +
                   "Bahndienstfahrzeuge,Bahndienst-Güterwagen," +
                   "Bahndienst-Triebfahrzeuge,Bahndienstwagen,Bahnen," +
                   "Bahnfeuerwehren,Bahnpostwagen,Bahnsinniges,Band," +
                   "Baureihen,Best,Betrieb,Boldt,Carstens," +
                   "Culemeyer-Fahrzeuge,dankbar,Deppmeyer,Deutsche," +
                   "Deutschen,deutscher,Dienstfahrzeuge,Dienstgüterwagen," +
                   "Direkt,Draisinen-Katalog,Driesch,Eigenverlag," +
                   "eisenbahndienstfahrzeuge,Eisenbahnen,Eisenbahnfreunde," +
                   "Eisenbahngeschichte,Eisenbahn-Kurier,eMail,Ergänzungen," +
                   "erhebt,Erweiterung,Estler,Fall,Feuerwehr,Gleisbau," +
                   "Gleisbaufahrzeuge,Goliath,Gülzow,Güterwagenbauart,Henn," +
                   "Herkules,Hilfszüge,Impressum,Infrastruktur,Inhalt,ISBN," +
                   "John,Kandler,Kirsch,Kleine,Klv01,Klv98," +
                   "Korrekturhinweise,Krümelbahn,Links,Liste,Literatur," +
                   "Literaturliste,Lokrundschau,Miba,Modell,Modellbahn," +
                   "Modellbahn-Kurier,Motorbuch-Verlag,Nauheim,Navigation," +
                   "Nebenfahrzeuge,Peter,Plasser,Podszun-Verlag,Polnik," +
                   "Publikationen,Regel,Reichsbahn,Report,Rettungszüge," +
                   "Rheinisch-Bergische,Sammlung,schfahrzeuge,schicken," +
                   "Schiene,Schienenfahrrad,Schnellumbauzug," +
                   "Schwerlasteinsatz,Solingen,Spezialwagen,Spitzhacke," +
                   "Startseite,Stefan,Stepputats,Straßenroller,Suchen," +
                   "Technik,Thomas,Turmtriebwagen,Typenkompass,Typenkunde," +
                   "Übersicht,Udo,Verlag,Versorgung,Vollständigkeit,Wagner," +
                   "Wetterau,Wolfgang,Zugmaschinen,Zweck,Zwischenhalt";
       seite[44] = "literatd.htm";
beschreibung[44] = "Kr&uuml;melbahn - Literatur Bahndienstfahrzeuge";
     begriff[45] = "aktualisierte,Armin,Auflage,Bahnbetriebswerk," +
                   "Bahndienstfahrzeuge,Bahnen,Bahnlinie,Bahnsinniges," +
                   "Balkanexpress,Brückenschlag,Brügge,Cronenberg,Direkt," +
                   "Eisenbahnen,Eisenbahngeschichte,Eisenbahnlinie," +
                   "Eisenbahnverbindung,Elberfeld,erweitere,Filiale,Hasten," +
                   "Hbf,Heft,Impressum,Inhalt,Inkeller,ISBN,Kaiß," +
                   "Korkenzieherbahn,Krümelbahn,Kurt,Kurt/Kugel," +
                   "Kurt/Peplies,Kurt/Zimmermann,Leichlingen,Lennep,Links," +
                   "Literatur,Michael,Modellbahn,Müngsten,Navigation," +
                   "Nebenbahn,Nebenbahngleisen,Neuauflage,Oberbergische," +
                   "Opladen,Pillmann,Publikationen,Radevormwald,Remscheid," +
                   "Remscheid-Lennep,Rheinisch-Bergische,Rudolf,Samba," +
                   "Seitenanfang,Solingen,Startseite,Stichbahn,Suchen," +
                   "Thomas/Peplies,überarbeitete,Verlag,Vohwinkel,Westf," +
                   "Wuppertal,Wuppertalbahn,Zeno/Schürings,Zwischenhalt";
       seite[45] = "literatr.htm";
beschreibung[45] = "Kr&uuml;melbahn - Rheinisch-Bergische " +
                   "Eisenbahngeschichte";
     begriff[46] = "Bahnbetriebswerk,Bahndienstfahrzeuge,Bahnen,Bahnhof," +
                   "Bahnsinniges,Blumenberg,Bördedorf,Direkt,Eisenbahn," +
                   "Eisenbahnen,Eisenbahngeschichte,Impressum,Inhalt," +
                   "Inkeller,ISBN,Kaiß,Kleinbahn,Krümelbahn,Kurt," +
                   "Leichlingen,Links,Literatur,Lützenkirchen,Modellbahn," +
                   "Navigation,Ohligs,Opladen,Publikationen," +
                   "Rheinisch-Bergische,Rudolf,Solingen,Startseite,Suchen," +
                   "Verlag,Wandel,Zeit,Zwischenhalt";
       seite[46] = "literatz.htm";
beschreibung[46] = "Kr&uuml;melbahn - Zwischenhalt";
     begriff[47] = "Abbildung,Abteiweg,achs,Actros,Aktien-Brauerei," +
                   "Aktivitäten,Albedo,Alt,Angaben,Anlagengestaltung," +
                   "Anmerkungen,Anspruch,Aufderhöhe,Aufdruck," +
                   "Aufdruck/Anlass,aufgelistet,Aufkleber,Automodelle,AWM," +
                   "Bahnen,Bahnhof,Bahnsinniges,Balkhauser,Basis4473," +
                   "Basis4481,Basismodelle,Baugröße,Baugrößen,Baumschule," +
                   "Baustoffe,Bauverein,Beckes,Beckmann,Benz,Bergisch," +
                   "Bergischen,Berufsfeuerwehr,Besitz,beziehen,Bier," +
                   "Bierlastwagen,Bigspace,braun,Brawa,Brekina,Brücke,Burg," +
                   "Burger,Bus,Busch,Busdepot,Bus-Nr,Citaro,C-Klasse,Com," +
                   "Crossley,Dampflastwagen,dankbar,DCC,Decals,Design," +
                   "Design-RTW,Deutsches,Digitalbetrieb,Diller,Direkt,DLA," +
                   "DLK,Drehleiter,dreiteilig,Dreizackwerk," +
                   "Einsatzfahrzeuge,Eisenbahn,Eisenbahnwagen,elasto," +
                   "Elektronik,eMail,Emil,Ergänzungen,erhältlich,erhebt," +
                   "erkennbar,Erweiterung,Fahrzeug,Fahrzeugbau,Fahrzeuge," +
                   "Fall,Faller,Fauna,Feinkostfabrik,Feuerwehr," +
                   "Feuerwehrfahrzeugen,FJ/2104,Fleischmann,Foden,Ford," +
                   "form,Fortwo,FuRW,G10,Galileum,geänderte,gelb," +
                   "Gesenkschmiede,Gigaspace,Gittern,Glasdach,Glr22,Glüder," +
                   "GMC,Gms30,Golf,Gr20,Gräfrath,Grafweg," +
                   "Graf-Wilhelm-Platz,Großwäscherei,grün,grünem,GT-HD," +
                   "H0-N-Z,Haan-SG,Hahn,Hängerzug,Hanns,Haribo," +
                   "Hauptbahnhof,Heinen,Henckels,Hendrichs,Henschel,Herpa," +
                   "Hersteller,Hess,Hillers,historische,Holden,Ichqrs," +
                   "Ichqrs377,III,Impressum,Industriemuseum,Informationen," +
                   "Inhalt,Item,IVECO,Jahr,Jahre,Jahresmodell,Kaffee," +
                   "Kasten,Katalognr,Katalognummern,KatS,Keull,Klammern," +
                   "Klingen,Klingenmuseum,Klinikum,Kmmgks58,Knirps," +
                   "Koffersattelzug,Kohlsberg,Koll,Kombi,Korrekturhinweise," +
                   "Kotten,Krankentransport,Kreuz,Kronprinz-Räder," +
                   "Krümelbahn,Krups,KTW,KTW4,Kuga,L1500S,L408G,L4500," +
                   "Lamellendach,Land,LF20/10,LF20/16,LF25,LF8,Links,Liste," +
                   "Literatur,Löhmers,Luchtenberg,M32L-AS,Mack,made," +
                   "Magirus,Malteser,Malz,Mangenberg,Märklin,Matchbox," +
                   "MEC-Wuppertal,Meisen,meisten,Mercedes,Mercedes-Benz," +
                   "Merscheid,Meuseburgerauflieger,Minichamps,Minitrix," +
                   "Mitteltüren,Möbel,Möbelhaus,mobil,Modellbahn,Modellbau," +
                   "Modelle,Modellfahrzeuge,Modellfahrzeugliste,Modulbau," +
                   "moosgrün,Morris,MP5,Müngstener,Museumswagen,muss,N-3," +
                   "Navigation,NEF,neutral,Niederlassung,Notfallseelsorge," +
                   "O302-11,O305,O405,O405N,O530,OBI,Obus,O-Bus," +
                   "O-Bus-Anhänger,Obusmodelle,Obus-Museum,Ohligs,Ohligser," +
                   "Oldtimerfreunde,Orion,Ortsbezug,Panel,patiniert," +
                   "PCX871073,Pfefferminz,PHZ,Pils,Plagiarius,Preiser," +
                   "Pritsche,Pritschenwagen,Qualität,Quality,RAL,Reifen," +
                   "Rheinisches,Rietze,Rlmms,Rmmso,Roco,Roskopf,Rotes,Rstn," +
                   "RTW,Rundhauber,S328DT,Samba,Sammlerobjekte,Sammlung," +
                   "Sattelzug,Scania,scharf,schicken,Schlingmann,Schloß," +
                   "Schloß-Burg,Schmidt,Schnug,Schokolade,Schuco,schwer," +
                   "Seilbahn,Seitenanfang,Set,Setra-Bus,SG-2030,SG-2032," +
                   "SG-2068,SG-2074,SG-2075,SG-2121,SG-2306,SG-2311," +
                   "SG-2328,SG-2330,SG-2345,SG-2391,SG-267,SG-283,SG-SG," +
                   "SG-SW,Sharan,Siepmann,Siku,SL172,Smart,Solingen," +
                   "Solinger,Spar,Spedition,Sprinter,SSk07,Stadtsparkasse," +
                   "Stadtwappen,Stadtwerke,Startseite,Streifen,Suchen," +
                   "SwissTrolley3,Sword,SWS,Tageblatt,Termingerecht,TGM," +
                   "Tierheim,Tierpark,Tk01,TLF,TLF16,Transit,Transporter," +
                   "TroLf,U5000,ÜHIIIs,Uhs,Van,Variant,Veltins," +
                   "Verkehrsaufsicht,Vito,VK-Modelle,Volksbank,Volkswagen," +
                   "Vollständigkeit,VW-Kasten,Wagen,Walbusch,Wald,WDV," +
                   "weiß/rot,Weltruf,Werbedruck,Werbung,Wiedenhoff,Wiegand," +
                   "WIETMARSCHER,Wiking,Wilkinson,Wilkinson/Grell," +
                   "Wilkinson-Quattro,WP100,WP101,Wupper," +
                   "Wuppertal-Solingen-Remscheid,Wüsthof,Wüsthoff-Dreizack," +
                   "W-Vohwinkel,YEX-04,YFE05-SA,YHN01/SC,YSG-01,YSG-02," +
                   "YSG-03,YSG-04,YSG-05,Zwilling";
       seite[47] = "modelle.htm";
beschreibung[47] = "Kr&uuml;melbahn - Eisenbahn- und Modellfahrzeuge aus " +
                   "Solingen";
     begriff[48] = "Ablage,Ablagen,Abmessung,abzweigender,Akkutriebwagen," +
                   "Aktivitäten,aktuelle,anfordern,Angaben,angeschlossene," +
                   "angrenzende,Anlagengestaltung,Anlehnung,Attraktiver," +
                   "August,Ausbau,Ausflugspunkt,Außen,Ausstellungen,B02," +
                   "B96,Bahnbetriebswerk,Bahndamms,Bahnen,bahnhof," +
                   "Bahnhofsdatenblatt,Bahnsinniges,Batterien,baue," +
                   "Bausätze,Begrasungsgerät,beherrschen,benötigte,Bereich," +
                   "Betrieb,Betriebes,bewährt,bietet,Bild," +
                   "blob/main/Krümelbahn,Bogen,Brosch,chronologisch,cloud," +
                   "cmt,Cronenberger,Dampflokomotiven,DCC,Details," +
                   "Diesellokomotiven,Dieselzugförderung,Digitalbetrieb," +
                   "Dioramen,Direkt,Download,DRK-Wersten,ebenso," +
                   "Eigeninitiative,eigentlich,elektrischen,Elektronik," +
                   "eMail,eMailAndCloud,entsprechende,Entwicklung,Epoche," +
                   "erforderlich,Erkrath-Hochdahl,erleichtert,erstellen," +
                   "existieren,Fahrzeug,Fahrzeugbau,Fahrzeuge," +
                   "Fahrzeugkarte,Fahrzeugpark,Fahrzeugparkes," +
                   "FdE-Burscheid,Februar,fiktives,Frachtaufträge,Frage," +
                   "Fred,fred_ablage,FRED-Karten,Fremo-Kopf,FREMO-Norm," +
                   "füllen,gehalten,geignet,genauer,gestaltet,Gewähr," +
                   "gewünscht,Gipsabdrücken,githubinfo,gleichgültig," +
                   "Güterumschlag,H0-Bergprofil,H0-Europa,Haan," +
                   "Haaner-Sommer,Hafen,handelt,Handregler,Harald," +
                   "Hauptblütezeit,Heft,helfen,Herstellung,Hinweis,III," +
                   "Impressum,Info,Informationen,Infos,Inhalt," +
                   "Internationale,inzwischen,irgendwann,ISBN,Jahren," +
                   "Jahresmodell,Juli,Juni,Kanal,Kanalüberquerung,Karten," +
                   "Kern,Klein-Bahnbetriebswerk,kleine,kleinster,komplett," +
                   "Kopfprofil,Krieg,Krümelbahn,Kurvenmodul,Lahnstein," +
                   "Landschaftsgestaltung,Langerfeld,lege,Leichlinger," +
                   "leicht,Leverkusen,linke,Links,Literatur,Lok," +
                   "Lokschuppen,Mai,März,MEC,Mercedes-Benz,Miba," +
                   "Michelstadt,Michelstädter,mitbringt,miteinander," +
                   "Modellbahn,Modellbahnausstellung,Modellbahnpraxis," +
                   "Modellbahntage,Modelleisenbahntage,Modellfahrzeuge," +
                   "modernen,Modul,modul_daten,Modulbau,Moduldatenblätter," +
                   "Module,Modulen,Modulenden,Modulseiten,Modultreffen," +
                   "Modulübersicht,muss,N/S-Wender,Nachdenken,nachfragen," +
                   "nächsten,Navigation,Nebenbahnstrecke,November,offenen," +
                   "Oktober,passt,pdf,Profil,Radius,rechte,repräsentieren," +
                   "restaurierte,Römerturm,S/N-Wender,Segmente,sehen," +
                   "Seitenanfang,Sensenhammer,September,sieht,Signal," +
                   "Signale,Signalisierung,Signalkunde,Signalmodul," +
                   "Signalwerkstadt,Silikonformen,Skizze,Solingen,Spezial," +
                   "Spörle,Startseite,stattfand,Steht,stellen,stellt," +
                   "Steuerung,Strecke,Streckenmodul,Stuhl,Suchen,Tag,Tanks," +
                   "technischen,Tisch,Traktionswechsel,Trassenbrett," +
                   "Triebfahrzeuge,tun,Tür,typisches,umgestellt," +
                   "Veranstaltungen,verbindet,Verfügung,verschiedenen," +
                   "Wagen,Wagenkarten,Weichen,weiteren,Werkstatt," +
                   "Wiederaufbau,zugeordnet,zuordnen,zusätzlich,zuständig";
       seite[48] = "modulbau.htm";
beschreibung[48] = "Kr&uuml;melbahn - Modulbau";
     begriff[49] = "abgeschaltet,abhängig,Ablage,abrupt,Abschnitt," +
                   "Abständen,Abweichnung,Adresse,Adressierung,Aktivitäten," +
                   "aktuell,aktuelle,aktuellen,alt,alter,analogen,analoger," +
                   "Änderungen,anfordern,Anforderungen,Angabe,angelehnt," +
                   "angeschlossen,angeschlossenen,angesteuert,anhalten," +
                   "Anlage,Anlagenbetreiber,Anlagengestaltung,Anleitungen," +
                   "anrollende,Anschlußkabel,anstelle,Ansteuerung," +
                   "Antworten,Anzeige,arbeiten,arbeitende,arbeitet," +
                   "Arduino-Plattform,Arrangements,Artikel,Aufbau,Aufgaben," +
                   "aufgeführt,aufwändig,Ausstellungen,Auswahl,auszuführen," +
                   "Bahnen,Bahnhof,Bahnhofsfahrordnung,Bahnhofsfahrordung," +
                   "Bahnsinniges,Bau,Bauvorschlag,Beachten,bearbeiten," +
                   "bedienende,Bedienhandlung,Bedienungsanleitung,bedingt," +
                   "befindet,befindliche,bekannten,bekomme,bekommen," +
                   "belastet,Beleuchtung,benötige,benötigen,benötigt," +
                   "benötigten/verwendeten,Beschreibung,beschrieben," +
                   "bestanden,besteht,Betrieb,Betriebssystem,bewährt," +
                   "Bewährungsprobe,Bild,bilden,bleibt," +
                   "blob/main/Krümelbahn,Blocksteuerung,Booster,bot," +
                   "brems_gen,Bremsgenerator," +
                   "Bremsgenerator/Pendelautomatik,Bremsgeneratoren," +
                   "Bremsgenerators,Bremsweg,bringen,bringt," +
                   "Broadcast-Meldung,cloud,Commercial,CV8," +
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
                   "Erweiterungen,existieren,F12,F13,F16,Fähigkeit,fahre," +
                   "Fahren,Fahrplan,Fahrplandatei,Fahrpläne,Fahrstrom," +
                   "Fahrzeug,Fahrzeugbau,Fahrzeuge,Fahrzeuges," +
                   "Fahrzeuginformationen,Fall,FastClock,FastClock-Decoder," +
                   "Fehler,festgelegt,festzulegen,fill,finden,Firma,fka," +
                   "Format,Fpl2Bfo,FPLEdit,FPL-Format,Fragen," +
                   "Frankenzentrale,Franz,FRED,FREDI,FREDI-Diagnose,FREDIs," +
                   "freie,Fremo,FREMO-Bauvorschlag,FREMO-Regeln," +
                   "FREMO-Telefon,fünf,Funktionen,funktionieren,gab,gebaut," +
                   "Gedanken,geeignet,gehalten,gemacht,genügend,Gerät," +
                   "Geräte,Geräten,Gerätes,geschaltet,gesendet,getätigt," +
                   "getrennt,gewünscht,gewünschten,githubinfo,Gleis," +
                   "Gleisanlagen,großen,größeren,Grundlagen," +
                   "Grundversorgung,Halten,Handregler,Hans,Hardware," +
                   "Hardwarebasis,Hardwareschnittstelle,Hersteller," +
                   "Herstellercode,hilfreich,hinein,höher,hover,Hp0,Hub," +
                   "Huber,identisch,Implementierungen,Impressum," +
                   "Inbetriebnahme,Incremental-FREDIs,infacher,Info," +
                   "Informationen,Inhalt,inklusive,Inkrementalgeber," +
                   "Interessante,Interessenten,interessiert,investieren," +
                   "Inzwischen,Jahresmodell,JMRI,Kabeltester," +
                   "Kabelverbindungen,kam,Kehrschleifenmodul,klare,kleinen," +
                   "kleines,klicken,kommerzielle,kommt,Kompakteinheit," +
                   "Komponenten,Konfiguration,Kontakt,konvertieren," +
                   "Krümelbahn,Lage,längste,Laptop,Laptops,laufen," +
                   "Leitungen,Lenz,Lesen,letztlich,Leuchten,liefert,Links," +
                   "Literatur,LK100,ln_hub,ln_test,LocoBuffer,LocoIO," +
                   "LocoIO-Beschreibung,LocoIO-Editor,LocoIO-Module," +
                   "LocoIO-Platinen,LocoNET,LocoNET-HubSupply," +
                   "LocoNET-Nebenuhr,LocoNET-Tester,Lok,Lokadresse,Lokmaus," +
                   "Lösung,Lösungen,Manuel,mA-Stromquelle,meines," +
                   "Mercedes-Benz,mittels,Modellbahn,Modellbahnzeit," +
                   "Modellfahrzeuge,modifiziertes,Modulaufbau,Modulbau," +
                   "Modulen,Möglichkeit,Monitor,Nachbau,nachbauen," +
                   "nachempfunden,nachfolgenden,nachlesen,Nachrüstung," +
                   "Navigation,Nebenuhr,Nebenuhren,nkremental,normalen," +
                   "Null,Offer,OLED,opacity,OPC_IMM_PACKET,OPC_LOCO_F912," +
                   "OPC_UHLI_FUN,OpenDCC,OpenDCC-Zentrale," +
                   "OpenDCC-Zusammenbau,Open-Source-Komponente,over," +
                   "parallele,paralleler,passende,passt,pdf,Pegeltester," +
                   "pendel,Pendelautomatik,PiLocoBuffer,Platinenlayouts," +
                   "PolEi,polig,Polungsprüfer,praktikable,Prinzip,Problem," +
                   "Problemstellung,Programm,QR-Code,QR-Code-Leser," +
                   "RaspBerry,reagiert,realisiert,rect,redesignten,Regel," +
                   "regelmäßigen,rehregler,Reichelt,Reparatur,richtet,RJ12," +
                   "Roco,Roco-Format,Roco-Lokmaus2,Roco-System,RocRail,rot," +
                   "RS232-Schnittstelle,RS232-USB-Wandler,RSCLD," +
                   "SaddleBrown,Saft,Schaltplanzeichnungen,scheitert," +
                   "Schienen,schnellere,Schnittstelle,Schreiben,schwach," +
                   "schwieriger,Seite,Seitenanfang,selbständig," +
                   "selbstverständlich,sende,serielle,serieller,Servos," +
                   "Shift-Taste,sieht,Signal,Signalabschnitt,Signale," +
                   "Signalen,simpel,Skizze,Software,Software-Version," +
                   "Solingen,Spannungs,Spaxbooster,spezielle,speziellen," +
                   "spezieller,Spezifikation,Startseite,Steckverbinder," +
                   "stehen,stellen,Stellvorgänge,Steuern,Steuerung," +
                   "Steuerungsprogramm,Steuerungssoftware,Strommessgerät," +
                   "Suche,Suchen,SWD-FREDI,System,Tabelle,Taktgeber,Tams," +
                   "Target,TCP,Telefonanlage,Telegrammen,Testen,Testgeräte," +
                   "teuer,Thema,Throttle,Trennung,Triebfahrzeug," +
                   "Triebfahrzeuge,überall,überflüssig,übernommen," +
                   "Übersicht,übertragen,Uhlenbrock,Uhr,Uhrendecoder," +
                   "Uhrenzentrale,Umstellung,unbedingt,unbekannt,unendlich," +
                   "uninteressant,universellen,Unterlagen,unterschiedliche," +
                   "unterstützt,uordnungsbox,uralt,USB,USB-Isolator," +
                   "USB-Leitung,Variante,Verbesserung,Verbindung," +
                   "Verdrahtung,Verfügung,Vergangenheit,verschiedenen," +
                   "Version,Versionen,Verstärker,Verteilerboxen,Verwaltung," +
                   "verwende,verwenden,verwendet,verwendete,verwendeten," +
                   "volle,Vorgehensweise,vorhanden,Vorraussetzung,Vorsicht," +
                   "Wege,Weicheneinbau,Weiten,weiterentwickelt,weiteres," +
                   "weiterführende,weitläufige,wiFRED,windows-basierten," +
                   "wiThrottle-Server,WSK,WWW,x6-6,XPressNet-Protokoll," +
                   "zahlreiche,zeigenden,zeigt,Zeit,Zenrale,Zentrale," +
                   "Zentralen-Konzept,Zubehör,zufährt,Zug,Zugegeben," +
                   "zugehörigen,zugewiesen,Zugführer,Zugriff,Zukunft," +
                   "zukunftsfähig,Zuordnung,zusammen,Zusammenbau," +
                   "Zusammenfassung,zusammengefasst,zuständig,Zuweisung," +
                   "zuzuweisen,zweiten,zwingend";
       seite[49] = "modulbau-digital.htm";
beschreibung[49] = "Kr&uuml;melbahn - " +
                   "Modulbau-DigitalVerdrahtungs&uuml;bersichtZentraleLaptop " +
                   "/ PCLocoNETDCCDecodereinbautenFred / Fredi / " +
                   "wiFredDispa (fka Franz)Uhrenzentrale und " +
                   "NebenuhrBoosterBremsgeneratorLocoIO";
     begriff[50] = "abgestellt,Aufenthaltsräume,aufgestellt,Aufstellung," +
                   "August,Auslieferung,Bahnen,Bahnfahrzeuge," +
                   "Bahnfahrzeugen,Bahnhof,Bahnhöfe,Bahnsinniges,Bau," +
                   "Bauart,Baujahr,B-dm,begonnen,benachbarten,Bn2t," +
                   "Breitspurgüterwagen,Breslau,britischen,Buckau,Bygkr," +
                   "Corps,Cyklop,dienen,diente,dienten,Direkt,ehemalige," +
                   "eingestellt,Engelsberger,erhalten,erhaltene,erhaltenen," +
                   "Eugen,Fabrik-Nummer,Fahrgestell,Fahrzeuge,Fahrzeugen," +
                   "Fahrzeugnummer,Fahrzeugnummern,Firma,Fuhr,Gbs,gebaut," +
                   "gebauten,gedeckte,Geschichte,Gesenkschmiede,gespielt," +
                   "Getränkehandler,Gewicht,GmbH,Grevenbroich,Güterwagen," +
                   "Hannover,Hattingen,Hebebühnen,Hersteller,Hof,Hywema," +
                   "Impressum,Inhalt,insgesamt,inzwischen,jahrzehntelang," +
                   "Jung-Jungenthal,kamen,Kirchen/Sieg,Kletterlok," +
                   "Korkenziehertrasse,Kronprinz,Krümelbahn,Krupp,Lager," +
                   "Lazarettzugwagen,Leistung,Lieferung," +
                   "Linke-Hoffmann-Busch,Links,Literatur,Lokgattung," +
                   "Lokomotiv-Farbrik,Lüp,Mannesmann,Marine,Maschinen," +
                   "Maschinenfabrik,Maschinentechnik,Modellbahn," +
                   "Mönchengladbach-Rheindahlen,nahezu,Navigation,nebem," +
                   "Ort,ortsansässigen,Raddurchmesser,Radstand,Railway,RCT," +
                   "Recycling,Renovierung,Reuschling,Rheinarmee," +
                   "Röhrenwerke,Royal,russischer,Scalabrin,Schmalzgrube," +
                   "Schutzgittern,Seitenanfang,September," +
                   "Sicherheitsgründen,Signalmeisterei,Solingen," +
                   "Solingen-Nord,Solingen-Wald,Solinger,spätere," +
                   "Spielplatz,Squadron,Stadtgebiet,Stadtteil-Cafe," +
                   "Startseite,steht,Strecken,Suchen,Transport,Treffpunkt," +
                   "Typ,umgezogen,unbekannt,unfallfrei,Verbleib," +
                   "verschiedensten,verschrotten,verschrottet,verunstaltet," +
                   "VN234,vorhanden,Vorortbahn,Wagen,Werbelokomotive," +
                   "Werftbahn,Westfälische,Wikipedia,Wilhelmshaven,WLH," +
                   "Wohnwerkstattwagen,Wohn-Werkstattwagen,Wolf," +
                   "zugänglichen,zuletzt,Zwecken";
       seite[50] = "museal.htm";
beschreibung[50] = "Kr&uuml;melbahn - erhaltene Fahrzeuge";
     begriff[51] = "Abbildung,Abstand,Aderendhülse,Aktivitäten,akustisch," +
                   "Alternative,anfordern,Ankleben,Anlagengestaltung," +
                   "Anlagenspannung,anschließend,Anschluss,Ansicht," +
                   "Anspruch,anstelle,Antrieb,Arbeit,Artikel,Auflistung," +
                   "Aufstellen,Aufstellort,Auftrag,aufweicht,ausgedruckt," +
                   "ausgerüstete,ausprobieren,ausschließlich," +
                   "Außendurchmesser,auszurüsten,Bahnen,Bahnhof," +
                   "Bahnsinniges,Batterie,Baugröße,Baum,befestigen,beiden," +
                   "Benötigt,benötigte,benötigten,berechnet,besten," +
                   "Betriebsspannung,Betriebsstelle,bietet,Bild," +
                   "Bildbearbeitungsprogramm,Bodenplatte,BRD,brünierten," +
                   "Conrad,dass,DCC,definiert,Dicke,Digitalbetrieb,Direkt," +
                   "Draht,Drähte,Drähten,DS301,dünner,echtes,Einbau," +
                   "einfacher,Einfahrt,Einfahrtsignal,eingefeilt," +
                   "Eisenbahn-Magazin,Elektronik,eMail,eMailAndCloud,Ende," +
                   "entfernt,entsprechend,Entwicklung,Erfahrungen,erfolgen," +
                   "erfolgreich,erfolgt,erhält,erhalten,erhältlich,erhebt," +
                   "erhöhter,erkennen,Ersatz,erschienen,fahren,Fahrzeugbau," +
                   "Farbdrucker,Farbe,Feierabendbastelei,fertigt,Figuren," +
                   "finden,floodland,folgt,Gebäude,gedruckt,geeignet," +
                   "gefädelt,gefädelten,geführt,gegeben,geklebt,gekürzt," +
                   "gekürzte,gelötet,gemacht,geschehen,geschieht,gesteuert," +
                   "gestreiftem,gewerbliche,gezeichnet,Gleis,Gleismitte," +
                   "Glühlampe,Glühlampen,Glühlampenlänge,größere,halten," +
                   "Hauch,Hektometertafeln,herzustellen,hrender,htm,https," +
                   "Impressum,info_opschriften_borden_1,Informationen," +
                   "Inhalt,interessanter,Jahresmodell,Karton,Kartonpappe," +
                   "Kartons,Kennlicht,Kennzeichnung,Klebt,kleine,Klick," +
                   "klitzekleinen,Konsequenz,Kostenfaktor,Krümelbahn," +
                   "kurzes,lackiert,Lampe,lang,Länge,langes,leicht,letzte," +
                   "letzten,Leuchtstoffröhren,Leuchttest," +
                   "Lichtsignalisierung,Lichtzeichen,Link,Links,Literatur," +
                   "LM317,Logische,Lokführer,Lokomotive,Lüsterklemme,Maße," +
                   "Mast,Mastschild,Mercedes-Benz,Merscheider,Messing," +
                   "Messingdraht,Messingrohr,Miba,Mikroglühlampe," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,Module,Modulen," +
                   "Modulplatte,montiert,muss,nachgerüstet,nächstes," +
                   "nächsthöherer,Navigation,Ne1,Nebenbahn,Nebenbahnen," +
                   "Nebenbahnsignal,Nebenbahnsignale,Nebenbahnsignalen," +
                   "Nebenbahnsignaltafeln,nl/aim,Normwert,Nothaft,nutzbar," +
                   "Nutzung,oberen,Öffnung,Ohm,Paketen,passen,passend,PDF," +
                   "PDF-Format,Pfahl,Pinsel,polige,Preiser,preisgünstige," +
                   "Privatgebrauch,Problem,Punkt,RAL,Rand,Regel,richtige," +
                   "Rubrik,Schacht,Schilder,Schotter,schräg,schreibt," +
                   "Schutzrohr,schwarz,schwarzem,sehen,Seite,Seitenanfang," +
                   "Sekundenkleber,Selbstbau,Signal,Signalbuch,Signale," +
                   "Signalen,Signaltafeln,Signalwerkstatt,Sitzbank," +
                   "Solingen,Sortiment,Spannungsbegrenzung,Spurweiten," +
                   "Stahlstifte,standsicher,Stärke,Startseite,stehenden," +
                   "steht,Stelle,stellen,stellte,Straßenpfosten," +
                   "Straßenschilder,Streckenbereich,Suche,Suchen,Teil," +
                   "teuer,Tipps,Trapeztafel,Trocknen,Tropfen,typische,Über," +
                   "untere,untersagt,V/15mA,vergessen," +
                   "Verkleinern/Vergrößern,verlassen,verlaufendem,verlötet," +
                   "versehen,Vollständigkeit,vordere,vorne,Vorsicht," +
                   "Vorwiderstand,Wagenwerk,Wechsel,Weinert,weiße,Weiterer," +
                   "www,Zahnstocher,Zeichnung,Zeit,zementgrau,Zp11,Zug," +
                   "Züge,zugeordneten,Zunächst,zutraut,zweimal," +
                   "Zwischenzeit";
       seite[51] = "ne1.htm";
beschreibung[51] = "Kr&uuml;melbahn - Anlagengestaltung - Nebenbahnsignale";
     begriff[52] = "Anspruch,aufgenommen,Bahnen,Bahnsinniges,beschaulichen," +
                   "Bestehens,dankbar,Dienstvorschriften,diente,Direkt," +
                   "Duitse,Ebenso,ehemaligen,eigentlich,Eisenbahn,eMail," +
                   "erhebt,Erweiterung,existierende,gab,geänderte,gefahren," +
                   "gefunden,Geschichtliche,glauben,Gleis," +
                   "Gleismannsbahnhof,Gleispläne,Gotha,Güterzugfahrpläne," +
                   "Het,Hinweise,Impressum,Inhalt,Inselbahn,Insel-Bahn," +
                   "Juister,Krümelbahn,Lijntje,Linkliste,Links,Liste," +
                   "Literatur,Marinebahn,Militärbahn,militärischen," +
                   "Modellbahn,Navigation,Norderney,Norderneyer," +
                   "Nordseeinsel,Portrait,Rastatt,schicken,Seite,Solingen," +
                   "Startseite,Suchen,Thema,Triebwagen,Überblicke," +
                   "Verwendung,Vollständigkeit,Wikipedia,Yachthafen,Zeit," +
                   "Zwecken";
       seite[52] = "norderney.htm";
beschreibung[52] = "Kr&uuml;melbahn - Norderney";
     begriff[53] = "abgeschnittene,abschneiden,Acrylfarbe,Aktivitäten," +
                   "anbringen,anfasen,anfordern,Anlagengestaltung," +
                   "anschließend,Anspruch,Art,Auflistung,Aufmerksamkeit," +
                   "Bahnen,Bahnsinniges,befestigen,Betrachters,Boden,DCC," +
                   "Digitalbetrieb,Direkt,Dremel,Einbau,eingesetzt," +
                   "Elektronik,eMail,Ende,entfernt,erhebt,erwecken," +
                   "Fahrbahnrandes,Fahrzeugbau,Farbe,färben,fertig,Figuren," +
                   "fünf,gemacht,Gleisisolierung,Grenzzeichen," +
                   "Hektometertafeln,hergestellt,hergestellte,Herstellung," +
                   "hervor,Impressum,individuell,Informationen,Inhalt," +
                   "Isolierzeichen,Jahresmodell,kaufen,Kennzeichnung," +
                   "Krümelbahn,Leit,Leuchtstoffröhren,Links,Literatur," +
                   "Markierung,Mercedes-Benz,Merscheider,Messer,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Natürlich,Navigation," +
                   "Nebenbahnsignale,nehme,obere,oberen,Pfosten," +
                   "Planschleifen,Positionierung,Preiser,preisgünstiger," +
                   "Proxxon,Ra12,Ra13,Ring,Schacht,scharfen,schauen," +
                   "Schleifscheibe,Schotter,Schritte,Schritten,schwarzer," +
                   "sehen,Seitenanfang,Selbstbau,Signalen,Sitzbank," +
                   "Solingen,Spitze,standsicher,Startseite,Straßen," +
                   "Straßenpfosten,Straßenrand,Suchen,Vollständigkeit," +
                   "Weichenbereich,Weichengrenzeichen,Weichengrenzzeichen," +
                   "Weinert,Weise,weißen,Zahnstocher,Zahnstochers,zutraut";
       seite[53] = "pfosten.htm";
beschreibung[53] = "Kr&uuml;melbahn - Anlagengestaltung - " +
                   "Stra&szlig;enpfosten";
     begriff[54] = "Aktivitäten,anfordern,Anlage,Anlagengestaltung,Antrieb," +
                   "Austausch,Bahnen,Bahnsinniges,befestigen," +
                   "betriebssicher,blob/main/Krümelbahn,DCC,Digitalbetrieb," +
                   "digitalen,Direkt,Einbau,einfache,einfacher,Einheit," +
                   "Elektronik,eMailAndCloud,erweitertes,Fahrzeugbau," +
                   "Fehlerfall,Figuren,gemacht,gestoßen,githubinfo,handelt," +
                   "Hektometertafeln,Impressum,Info,Informationen,Inhalt," +
                   "Jahresmodell,kleinen,Krümelbahn,Leuchtstoffröhren," +
                   "Links,Literatur,Mercedes-Benz,Merscheider,Modellbahn," +
                   "Modellfahrzeuge,Modulbau,Module,Modulen,Montage," +
                   "montiert,Navigation,Nebenbahnsignale,pdf,Prinzip," +
                   "Schacht,schließlich,Schnick-Schnack,Schotter," +
                   "Seitenanfang,Servoansteuerung,Signal,signal_schacht," +
                   "Signale,Signalen,Signals,Sitzbank,Solingen,standsicher," +
                   "Startseite,Straßenpfosten,Suche,Suchen,Tisch,versenkt," +
                   "verwende,Vorteil,Wattenscheider";
       seite[54] = "schacht.htm";
beschreibung[54] = "Kr&uuml;melbahn - Anlagengestaltung - Merscheider " +
                   "Schacht";
     begriff[55] = "abgewaschen,achten,Aktivitäten,alte,Alternativmaterial," +
                   "anfordern,angestellt,Anlagengestaltung,anschließend," +
                   "Antrocknen,Aufbringen,auftupfen,Aufwand,ausspülen," +
                   "Bahnen,Bahnsinniges,Basalt,Basaltschotter," +
                   "Basaltsteinchen,Baumarkt,Bedarf,befestigen,befeuchten," +
                   "befeuchtet,Befeuchtung,benötigt,Bild,Borstenpinsel," +
                   "Brauch,brechen,dass,DCC,dient,Digitalbetrieb,Direkt," +
                   "direkte,Döschen,dunkelt,eigenem,EILE,Einbau," +
                   "einfallende,Einkehrsand,Einschottern,einzig,Elektronik," +
                   "eMail,engen,entfernen,Entfernung,enthält,enthaltenen," +
                   "entspanntem,Entspannung,Ergebnis,erledigt,Fahrzeugbau," +
                   "Fahrzeuge,fallen,Farbe,farbliche,Figuren,Film,Finger," +
                   "Flasche,freibleiben,Fugen,führen,gebliebenen,gemacht," +
                   "gemahlen,geschottert,gesiebt,gestossen,getrocknet," +
                   "Gewinnung,gewonnene,gleichmäßig,Gleis,Gleisbett,Gleise," +
                   "Gleisen,grau/schwarz,Grenzen,größere,großzügig," +
                   "gründlich,guter,halten,handelsüblichen,Hauptsache," +
                   "Hektometertafeln,Herzstücke,hierauf,Hilfe,Hinweis," +
                   "humpeln,Impressum,Informationen,Inhalt,insbesondere," +
                   "interessant,Jahresmodell,JASS,kg-Sack,Kleben,Kleber," +
                   "Klebers,Kleineisen,kleinen,kleiner,klumpt,Körnung," +
                   "Kosten,Kostenfaktor,kostet,Kraterbildung,kriecht," +
                   "Krümelbahn,Lage,langen,Leuchtstoffröhren,Licht,Links," +
                   "Literatur,Löffel,Material,Materialbedarf,Mercedes-Benz," +
                   "Merscheider,Metall,Meter,Methode,Minuten,mischen," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,Mundwasser," +
                   "Nachbehandlung,nachbessern,natürlich,Navigation,Nebel," +
                   "Nebenbahnsignale,Netz,niederregnet,Nullanteile,Odol," +
                   "örtlichen,Pipette,Ponal,Radlenker,Reiniger,richtet," +
                   "Schacht,schließe,Schotter,Schotterbett,Schotterkleber," +
                   "Schottermühle,Schottern,Schotters,Schottersteine," +
                   "Schwellen,schwört,sehen,Seitenanfang,Sieb,Signalen," +
                   "Sitzbank,sofern,Solingen,sonderlich,Spurweiten,Stand," +
                   "standsicher,Startseite,Staub,Staubpartikel,Steine," +
                   "Straßenpfosten,Strecken,Stunde,Stunden,Suche,Suchen," +
                   "Teil,Teile,Teilen,teuren,Tipp,Tipps,Tricks,trocknen," +
                   "Tropfen,Über,überschüssigen,Übrigens,umrühren," +
                   "ungeschickt,verändern,verdünnen,Vergnügen,Verhältnis," +
                   "Verkleben,verklebt,verläuft,Verteilen,verteilt," +
                   "verwendet,Verwendung,vorhanden,Wahre,waschen,Wasser," +
                   "Wassers,Wasserzerstäuber,Wattestäbchen,Weichenbereich," +
                   "WEILE,Weißleim,Werkzeugliste,wiegt,Zeit,Zerstäubers," +
                   "zugeben,zunächst,Zungen,zusammen";
       seite[55] = "schottern.htm";
beschreibung[55] = "Kr&uuml;melbahn - Anlagengestaltung - Schottern";
     begriff[56] = "Aktivitäten,alternative,anfordern,angesteuert," +
                   "Anlagengestaltung,Ansteuerung,Antriebstechnik,Arduino," +
                   "Artikelreihe,AVR-Sound,Bahnen,Bahnsinniges,bekommen," +
                   "benötigen,benötigt,Bereich," +
                   "Bremsgenerator/Pendelautomatik,Commercial,Controller," +
                   "DCC,Digitalbetrieb,digitalen,Digitalsysteme,Direkt," +
                   "DISPA,Drehen,Einfach-Ansteuerung,einsetzen,Elektronik," +
                   "Elektronikteile,eMailAndGithub,Endlage," +
                   "Endlagenansteuerung,Endlagenanzeige," +
                   "Endlageneinstellung,erreicht,Fahrzeugbau," +
                   "Faller-CarSystem,FRANZ,fügt,gängigen,geänderter,gebaut," +
                   "gefragt,Hard,harmonisch,herberts-n-projekt," +
                   "Herzstückpolarisierung,https,Ideen,Impressum," +
                   "Impulsansteuerung,Informationen,Inhalt,Jahresmodell," +
                   "Kosten,Krümelbahn,lässt,LED,Links,Literatur," +
                   "Mercedes-Benz,Miba,Mitgedreht,Modellbahn," +
                   "modellbahn-dortmund,Modellfahrzeuge,Modul,Modulbau," +
                   "Move,nachzulesen,Navigation,Offer,Paket,PIC,Preise," +
                   "Rückmeldeausgang,Rückmeldung,schaltet,Schaltungen," +
                   "Schnick-Schnack,Schrankenantrieb,Seite,Seitenanfang," +
                   "Selbstbau,Servo,Servo2,Servoansteuerung," +
                   "Servobefestigungen,Servos,Servostellung,sicherlich," +
                   "Signalantrieb,Signal-Z,Software,Solingen,Stand," +
                   "Startseite,Suchen,Taster,Teil,teuer,Thema,Torantrieb," +
                   "Trimmer,unabhängig,Variante,vereinfacht,Verwendung," +
                   "vielfältig,voneinander,Weiche,Weichen," +
                   "Weichenansteuerung,Weichenantrieb,Weichenlaternen," +
                   "Weiten,weiteren,WWW,zusammen,zweifach," +
                   "Zweifach-Ansteuerung,Zweifach-Servoansteuerung";
       seite[56] = "servo.htm";
beschreibung[56] = "Kr&uuml;melbahn - Elektronik - Servoansteuerung";
     begriff[57] = "Aktivitäten,anfordern,angeschlossen,Anlagengestaltung," +
                   "Anlass,anstelle,Ansteuerung,Arduino,aufgebaut," +
                   "AVR-Sound,Bahnen,Bahnsinniges,Beeinflussung,billiger," +
                   "bistabile,Blockfunktionalität," +
                   "Bremsgenerator/Pendelautomatik,cloud,Commercial,DCC," +
                   "Digitalbetrieb,Direkt,DISPA,Ebenso,einfacher," +
                   "Elektronik,Elektronikentwicklung,eMailAndGithub," +
                   "erfolgen,erfordert,erscheinen,Fahrspannung,Fahrzeugbau," +
                   "FRANZ,gehen,Geld,gespeichert,Gleiskontakt," +
                   "Halteabschnitt,Hauptsignal,Herausgekommen,Hersteller," +
                   "Herstellers,Hp0,Hp00,Hp1,Hp2,Impressum,Informationen," +
                   "Inhalt,insbesondere,Jahresmodell,kleine,Kosten," +
                   "Kostenersparnis,Krümelbahn,Lichthauptsignals," +
                   "Lichtsignalen,Links,Literatur,Mercedes-Benz," +
                   "Merscheider,Modellbahn,Modellfahrzeuge,Modulbau,muss," +
                   "namhafter,natürlich,Navigation,Offer,original," +
                   "Originalkomponenten,passend,PIC,Platine,Preise,Relais," +
                   "Schacht,Schlappe,schön,Seitenanfang,Servoansteuerung," +
                   "Sh1,Signal,signal_z,Signalansteuerung,Signalbilder," +
                   "Signals,Signalschirm,Signal-Z,Solingen,Stand," +
                   "Startseite,Stellen,Stellpulten,stolze,Suchen," +
                   "Tastenansteuerung,Tastendruck,Umschaltsperre," +
                   "verhindern,verlangt,vorhanden,Vorsignal,zugehörige," +
                   "zurückgestellt";
       seite[57] = "signalz.htm";
beschreibung[57] = "Kr&uuml;melbahn - Elektronik - Signal-Z";
     begriff[58] = "Achse,Aktivitäten,alt,alten,älter,Alterungsmethode," +
                   "anfordern,Anlagengestaltung,ausruhen,aussieht,Bahnen," +
                   "Bahnsinniges,befestigen,besseren,Dampfbahn,DCC,dienen," +
                   "Digitalbetrieb,Direkt,Einbau,Eisenbahn-Tour,Elektronik," +
                   "eMail,Enden,Fahrzeugbau,fertig,Figuren,Fränkische," +
                   "Furnierholzstreifen,gebadet,gefunden,geklebt,gemacht," +
                   "Geschmack,Hauptsache,Hektometertafeln,Impressum," +
                   "Informationen,Inhalt,Jahresmodell,Juli,Krümelbahn," +
                   "lasiert,ler,Leuchtstoffröhren,Links,Literatur," +
                   "Mercedes-Benz,Merscheider,Messingbraun,Mittagspause," +
                   "Modellbahn,Modellfahrzeuge,Modulbau,möglichst,muss," +
                   "Navigation,Nebenbahnsignale,nehme,Optik,passend,Räder," +
                   "Radsatz,rostig,RP25,Rückenlehne,Schacht,Schotter," +
                   "Schweiz,Seitenanfang,Selbstbau,sieht,Signalen,Sitz," +
                   "Sitzbank,Solingen,Spitzen,standsicher,Startseite," +
                   "Straßenpfosten,Suchen,tausche,zurechtgeschnittene," +
                   "zylindrischem";
       seite[58] = "sitzbank.htm";
beschreibung[58] = "Kr&uuml;melbahn - Anlagengestaltung - Sitzbank";
     begriff[59] = "abzuspielen,Aktivitäten,anfordern,Anforderungen," +
                   "Anlagengestaltung,ansteuerbar,ansteuert,Anwendung," +
                   "Arduino,ATMEGA,ATMEL,AVR-Sound,AVR-Sound-FRED,Bahnen," +
                   "Bahnsinniges,Basis,blieb," +
                   "Bremsgenerator/Pendelautomatik,Commercial,DCC,DFPlayer," +
                   "Digitalbetrieb,Direkt,DISPA,Elektronik,eMailAndGithub," +
                   "entsprechendes,Entwicklungsumgebung,erweiterungsfähig," +
                   "Fahrzeugbau,Feuerwehr,FRANZ,FRED-Gehäuse,Geräte," +
                   "gespeichert,Ideen,Impressum,Informationen,Inhalt," +
                   "integrierten,Jahresmodell,Kanalbrücke,kommerzielle," +
                   "kommt,kostengünstig,Krümelbahn,ladbar,Links,LiPo-Akku," +
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
     begriff[60] = "abgerissen,Ablaufberg,Ablösung,Abriss,Abzw,Abzweig," +
                   "alten,anschließenden,aufgestellt,August,Ausfahrt," +
                   "ausgerüstet,ausschließlich,außer,Außerdienststellung," +
                   "Bahnanlagen,Bahnen,Bahnhöfe,Bahnsinniges,Bahnsteig," +
                   "Bahnsteigüberdachung,Bahnübergänge,Batterie,Bauart," +
                   "Baujahr,Baukosten,bedient,Bedienung,benötigte,Berliner," +
                   "beschrankten,Betriebsübernahme,Betriebszentrale," +
                   "blob/main/Krümelbahn,Blockverdichtung,Brücke,Daten," +
                   "Dienst,diente,Dieselaggregat,Direkt,Duisburg," +
                   "ehemaligen,eigenes,Einrichtungen,Empfangsgebäude," +
                   "erfolgte,erhaltene,ertüchtigt,ESTW-UZ,etwa,Euro," +
                   "Fahrstrom,Fahrzeuge,Fallerslebenweg,Februar,Feldern," +
                   "ferngesteuerte,Fernsteuerung,Firma,gebaut,gegenüber," +
                   "Gesamtfläche,githubinfo,Gleis,Gleisdreieck,Gleise," +
                   "Gleislänge,Gleissperren,Gleiswechselbetrieb,Gräfrath," +
                   "Gruiten,Haan,Haltepunkt,Hauptbahnhof,Hauptsignale,Hbf," +
                   "Hilden,Impressum,Inbetriebnahme,Indusi,Info,Inhalt," +
                   "insgesamt,Januar,Köln,Köln-Mülheim,Korkenzieherbahn," +
                   "Krümelbahn,L84,Leichlingen,Leitungsgruppen,Links," +
                   "Literatur,lokalen,Lokstation,Lorenz,löst,Magnete,Mill," +
                   "Millionen,Modellbahn,Müngstener,Navigation,Nordbahnhof," +
                   "Notbedienplatz,Notbetrieb,Ohl,Opladen,pdf,Radaranlagen," +
                   "Rangierbetriebes,Rangierbewegungen,Rangierstraßen," +
                   "Remscheid,Richtung,Schnittert,Seitenanfang,September," +
                   "Siemens,Signale,Signalsteuerkabel,Sno,Sof,Solingen," +
                   "Solingen/Fahrdienstleiter,Solingen-Gräfrath," +
                   "Solingen-Hauptbahnhof,Solingen-Mitte,Solingen-Nord," +
                   "Solingen-Ohligs,Solingen-Ohligs/Fahrdienstleiter," +
                   "Solingen-Vogelpark,Solingen-Wald,Solingen-West,Som,Son," +
                   "sonstige,Sot,SpDrL30,Sperrsignale," +
                   "Spurplandrucktastenstellwerk,stand,Startseite,steht," +
                   "Stellbereich,Stelle,Stelltisch,Stellwerk,Stellwerke," +
                   "Steuerung,Straße,Strecke,Strecken," +
                   "Stromversorgungskabel,Suchen,technisch,Technische," +
                   "Überwachung,verlegte,Vorsignale,Wärterstellwerk,Weg," +
                   "Weichen,werktäglich,Wikipedia,Wilzhaus,Wilzhauser," +
                   "Wuppertal,x80cm,zahlreiche,Zugfahrten,Zughilfsstraßen," +
                   "Zugstraßen,zurückgebaut";
       seite[60] = "stellwrk.htm";
beschreibung[60] = "Kr&uuml;melbahn - Stellwerke";
     begriff[61] = "Bahnen,Bahnsinniges,berücksichtigen,Betätigen,Direkt," +
                   "Eingabetaste,Gross-/Kleinschreibung,Homepage,Impressum," +
                   "Inhalt,Krümelbahn,Links,Literatur,Modellbahn," +
                   "Navigation,Solingen,startet,Startseite,Suchbegriff," +
                   "Suche,suchen,Wortanfänge";
       seite[61] = "suchen.htm";
beschreibung[61] = "Kr&uuml;melbahn - Suchen";
     begriff[62] = "abgerissen,Abschnitten,Abzweig,August,Bahnanlagen," +
                   "Bahnen,Bahnlinie,Bahnsinniges,Bahnstrecke,Bau,benötigt," +
                   "benötigten,benutzen,benutzt,bestehende,bewilligt," +
                   "Brücke,Brücken,Brückenreste,Busch,Bussche-Kessel-Weg," +
                   "demontiert,Direkt,Dortmund," +
                   "Eisenbahner-Kleingartensiedlung,Eisenbahnverwaltung," +
                   "entlang,erahnen,erfolgte,erhaltene,Fahrzeuge," +
                   "Flakgeschützen,geblieben,gehenst,Gelder,Gleise," +
                   "Hackhauser,heutigen,Höhe,Impressum,Inhalt,Jahr,Köln," +
                   "Korkenzieherbahn,Krümelbahn,kuriose,Links,Literatur," +
                   "Modellbahn,Mühlenstraße,mündete,Navigation,Ohligs," +
                   "Pläne,planmäßige,Projektierung,renoviert,riesige," +
                   "Scharrenbergerdamm,Schnellverbindung,Schwelm," +
                   "Seitenanfang,Solingen,Startseite,Strecke,Strecken," +
                   "Streckenabschnitte,Suchen,tauchen,umfassend," +
                   "Umgehungsbahn,unterquerte,verkehrten,Verlängerung," +
                   "Verlauf,verschrottet,Viadukt,Viehbachtalstraße,Weiche," +
                   "weitest,Weltkrieg,Wiefeldickerstraße,Wikipedia,Witten," +
                   "wollte,zerstört,Zeugenaussagen,Züge,zweiten";
       seite[62] = "umgehung.htm";
beschreibung[62] = "Kr&uuml;melbahn - Umgehungsbahn";
     begriff[63] = "anfordern,Auflage,Bahndienstfahrzeuge,Bahnen,Bahnhofs," +
                   "Bahnsinniges,Becher,Buchveröffentlichung,Direkt," +
                   "Dokumentationen,Eisenbahnen,Eisenbahngeschichte,eMail," +
                   "erbeten,Format,gab,Heft,Impressum,Info,Informationen," +
                   "Inhalt,ISBN,Jahre,Kaiß,Korkenzieherbahn,Krümelbahn," +
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
        '<span><a href="index.html">Startseite</a> | <a href="impressum.htm">Impressum</a></span>' +
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