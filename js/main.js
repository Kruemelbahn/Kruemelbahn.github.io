<!-- // last edit 30.01.2026

  function address()
  {
    var p = "BwMichelstadt";
    var d = "gmx.de";
    return (p + '@' + d);
  }

  function eMail(subject, begriff)
  {
    document.write('<img alt="Emailaufruf" src="images/mail.gif"/>');
    document.write('<a href="mailto:' + address() + '?subject=' + subject + '">' + begriff + '</a>');
  }

  function getUrl(url)
  {
    switch(url)
    {
      case 'bahnhof'        : return 'Xf9BwLM2zRYR9Gx'; // Öffentlich\Modellbau\Modulbau\Bahnhofsdatenblatt - BW Michelstadt.pdf
      case 'brems_gen'      : return 'AKNNqHY9sHxxaBb'; // Öffentlich\Modellbau\Digitalbetrieb (DCC)\Bremsgenerator
      case 'e7_de'          : return 'KPBRR3TBZGjczz3'; // Öffentlich\Modellbau\Digitalbetrieb (DCC)\Roco Lokmaus 2\Roco-Lokmaus-FehlerE7.pdf
      case 'e7_en'          : return 'aDgayMsmrkzy8Rw'; // Öffentlich\Modellbau\Digitalbetrieb (DCC)\Roco Lokmaus 2\Roco-Lokmaus-FehlerE7(en).pdf
      case 'esp_shield'     : return 'otr2685tFXxT4ZF'; // Öffentlich\Modellbau\Modulbau\Elektronik\Sonstiges\ESP8266-Shield
      case 'fahrzeuge'      : return 'Qs4kto8BCqCCspS'; // Öffentlich\Modellbau\Digitalbetrieb (DCC)\Triebfahrzeuge.pdf
      case 'fred_ablage'    : return '4mATg4Qqn6HnySN'; // Öffentlich\Modellbau\Modulbau\Fred(I)-Ablage.pdf
      case 'licht_shield'   : return 'g5aej9NktmQ6kTT'; // Öffentlich\Modellbau\Modulbau\Elektronik\Sonstiges\Licht-Shield
      case 'lichtleiste'    : return '73sztg7gfATmwEX'; // Öffentlich\Modellbau\Modulbau\Elektronik\Sonstiges\LED-Leiste (2x4fach).pdf
      case 'ln_hub'         : return 'BHHPsCtDCj6DPFF'; // Öffentlich\Modellbau\Digitalbetrieb (DCC)\LocoNET (div)\LocoNET-HubBooster.pdf
      case 'ln_test'        : return 'b3W893nkX5jX8CZ'; // Öffentlich\Modellbau\Digitalbetrieb (DCC)\LocoNET (div)\LocoNET-U-I-Tester.pdf
      case 'main_public'    : return '6434ZDP4DweTPLp'; // Öffentlich
      case 'modul_daten'    : return 'BLj64kk3gSy5x8x'; // Öffentlich\Modellbau\Modulbau\Moduldatenblätter - Michelstädter Module.pdf
      case 'pendel'         : return 'awRXmqJEqKY5MTg'; // Öffentlich\Modellbau\Digitalbetrieb (DCC)\Bremsgenerator\Pendelautomatik
      case 'schilder'       : return 'eNJs5peKwrF4nJg'; // Öffentlich\Modellbau\Anlagengestaltung\Nebenbahnsignale\Schilder_komplett.pdf
      default               : return '';
    }
    return '';
  }

  function cloud(url)
  {
    var par = getUrl(url);
    if (par != "")
      document.write('<a href="https://magentacloud.de/s/' + par + '" target="_blank"><img alt="Cloudaufruf" src="images/cloud.png"/>Link in meine MagentaCloud</a>');
  }

  function cloud_2()
  {
    var par = getUrl('main_public');
    if (par != "")
      document.write('<a href="https://magentacloud.de/s/' + par + '" target="_blank"><img alt="MagentaCloud" src="images/m_logo.png"/></a>');
  }

  function eMailAndCloud(subject, begriff, url)
  {
    eMail(subject, begriff);
    var par = getUrl(url);
    if (par != "")
    {
      document.write(' (');
      cloud(url);
      document.write(')');
    }
  }

  function github()
  {
    document.write('<a href="https://github.com/Kruemelbahn/" target="_blank"><img alt="Githubaufruf" src="images/github.png"/>GitHub</a>');
  }

  function githubRepository(name, url)
  {
    document.write(' <a href="https://github.com/Kruemelbahn/' + url + '" target="_blank"><img alt="Githubaufruf" src="images/github.png"/>' + name + '</a> ');
  }

  function githubinfo(name, url)
  {
    document.write(' <a href="https://github.com/Kruemelbahn/Infoletter' + url + '" target="_blank"><img alt="Githubaufruf" src="images/github.png"/>' + name + '</a> ');
  }

  function eMailAndGithub(subject, begriff, url)
  {
    eMail(subject, begriff);
    document.write(' (<a href="https://github.com/Kruemelbahn/' + url + '" target="_blank"><img alt="Githubaufruf" src="images/github.png"/>GitHub</a>) ');
  }

  function getUrlEDF(url)
  {
    switch(url)
    {
      case 'ASF'            : return 'sammelsurium/asf/ASFframeset.htm';
      case 'BA117'          : return '___BDW_DB/bdwDB/117faekalwg/117faekalwg.htm';
      case 'BA124'          : return '___BDW_DB/bdwDB/124-pendelwg/124-pendelwg.htm';
      case 'BA192'          : return 'bdw/192-radsatztransportwg/radsatztransportwg.htm';
      case 'BA234'          : return '___BDW_DB/bdwDB/234-259-262/234-259-262-loeschwagen.htm';
      case 'BA634'          : return 'bdw/634-geraetewg/634-geraetewg.htm#006';
      case 'BA724'          : return '___BDW_DB/bdwDB/724-brueckenprwg/724-brueckenprwg.htm';
      case 'BA746'          : return 'bdw/746-umrisswg/746-umrisswg.htm';
      case 'BA751'          : return 'bdw/751-eichgeraetewg/751-eichgeraetewg.htm';
      case 'BA752'          : return 'bdw/752-eichgeraetewg/752-eichgeraetewg.htm';
      case 'BA753'          : return 'bdw/753-eichgeraetewg/753-eichgeraetewg.htm';
      case 'BA761'          : return '___BDW_DB/bdwDB/761-Eichwg/761-eichwagen.htm';
      case 'BA762'          : return '___BDW_DB/bdwDB/762-eichwg/762-eichwg.htm';
      case 'BA764'          : return 'bdw/764-eichwg/764-eichwg.htm';
      case 'BA834'          : return 'winterdienst/schneeschleuder-henschel/schneeschleuder-henschel.htm';
      case 'BA844'          : return 'winterdienst/schneepflug-844/schneepflug-844.htm';
      case 'BA845'          : return 'winterdienst/schneepflug-845/845-schneepflug-bauart-klima.htm';
      case 'BA884'          : return '___BDW_DB/bdwDB/884-unkrautspritzzug-db/884-unkrautspritzzug-db.htm';
      case 'Bdwg884'        : return 'bdw/884-unkrautspritzzug-db/unkrautsprengzug.htm';
      case 'BA924'          : return '___BDW_DB/bdwDB/924-wasserwg/924-wasserwg.htm';
      case 'Bdwg64674'      : return '___BDW_DB/bdwDB/234-259-262/234-259-262-loeschwagen.htm#64674';
      case 'Bfwg64052'      : return '___bf-wg/bfwg/64-BD-Karlsruhe/64-BD-Karlsruhe.htm#64052';
      case 'Bfwg64053'      : return '___bf-wg/bfwg/64-BD-Karlsruhe/64-BD-Karlsruhe.htm#64053';
      case 'Bfwg64054'      : return '___bf-wg/bfwg/64-BD-Karlsruhe/64-BD-Karlsruhe.htm#64054';
      case 'Bfwg64674'      : return '___bf-wg/bfwg/64-BD-Karlsruhe/64-BD-Karlsruhe.htm#64674';
      case 'Duomatic08'     : return 'stopfen/plasser2/07/07-fset/07-fset.htm';
      case 'Klv51'          : return 'klv/klv51/klv51.htm';
      case 'Kran57'         : return 'kranwagen/krupp-ardelt/kran-57t/kran-57t.htm';
      case 'Kran75'         : return 'kranwagen/kran_ardelt/kran-ardelt_75t/kran-ardelt_75t.htm';
      case 'Kran100'        : return 'kranwagen/krupp-ardelt/kran100/kran100.htm';
      case 'KranGS100'      : return 'kranwagen/kran-gottwald/krango-gs100_06/krango-gs100_06.htm';
      default               : return '';
    }
  }

  function eisenbahndienstfahrzeuge(url, text)
  {
    document.write('<a href="https://web.archive.org/web/20220812035529/http://www.eisenbahndienstfahrzeuge.de/' + getUrlEDF(url) + '" target="_blank">' + text + ' auf Eisenbahndienstfahrzeuge.de [Inhalt aus <i>archive.org</i>]</a>');
  }

  function Copyright()
  {
    document.write('<img alt="Seitenende" src="images/zg2.gif" /> &copy; 1997-');
    var today = new Date();
    document.write(today.getFullYear());
    document.write(' by Michael Zimmermann, letzte &Auml;nderung dieser Seite: ');
    var date = new Date(document.lastModified);
    document.write(date.toLocaleString());
  }

  function PrintDate()
  {
    document.write('<br/><p style="text-align:right">&copy; 1997-');
    var today = new Date();
    document.write(today.getFullYear());
    document.write(' by Michael Zimmermann, Ausdruck vom: ');
    document.write(today.toLocaleString());
    document.write(' <img alt="Seitenende" src="images/zg2.gif" /></p>');
  }

  function Kommentar(DateidatumJaNein)
  {
     var Text = "Leider -noch- kein Link bekannt !?"
     if (DateidatumJaNein==0)
        window.alert(Text);
     else
        window.alert(Text + '\n\nletzte Aktualisierung dieser Seite : ' + document.lastModified);
  }

  function openWindow(url)
  {
    window.open(url, 'image_window', 'resizable=yes,dependent=yes,width=500,height=350,left=150,top=150')
  }

  function Commercial()
  {
    document.write('<br/><font color=#800080><b><u>Hinweis:</u></b> Ich freue mich, wenn Ihnen ein Fahrzeug oder eine Schaltung gef&auml;llt und dies nachgebaut wird. Ich weise aber ausdr&uuml;cklich darauf hin, dass jeder Nachbau nur f&uuml;r den Eigenbedarf zul&auml;ssig ist, eine kommerzielle Nutzung bedarf meiner schriftlichen Zustimmung.<br/></font><br/>');
  }

  function Offer()
  {
    document.write('<font color=#800080>Anfragen zu Platinen (Privatverkauf), Preise und Lieferzeit, auch f&uuml;r programmierte &mu;-Prozessoren nehme ich gerne entgegen.</font><br/>');
  }

  function signalbuch()
  {
    document.write('<a href="https://www.dbinfrago.com/resource/blob/13174940/cb13a4d1ee7bc79e64ecad219bbd91c4/Ril-301-INB-2026-data.pdf" target="_blank">Signalbuch (SB, Ril301)</a>');
  }

  function snb()
  {
    document.write('<a href="https://www.db-regionetz.de/infrastruktur/schienennutzungsbedingungen" target="_blank">Schienennutzungsbedingungen (SNB)</a>');
  }
//-->