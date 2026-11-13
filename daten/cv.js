<!-- // last edit 29.11.2006

    function CheckIE(showerror)
    {
      var pos = navigator.appVersion.indexOf("MSIE");
      var iVersion = (pos > 0 ? parseInt(navigator.appVersion.substr(pos+4)) : 0);
      if (iVersion < 6)
      {
        if(showerror==true)
          window.alert("Diese Seite kann nur mit Microsoft-Internetexplorer, Version 6 oder höher ordnungsgemäß angezeigt werden.\n(Verwendung von XML-Daten).");
        return 0;
      }
      return iVersion;
    }

    var XMLDocument;
    var XSLDocument;
    var XSLDocumentDescription;
    var HTMLtarget;
    var HTMLtargetDescription;
    var sLastSortNode = "nummer";
    var sLastSortOrder = "ascending";

    function initialize(datei)
    {
        HTMLtarget = document.all['targetDIV'];

        XMLDocument = new ActiveXObject('MSXML2.DOMDocument.3.0');
        XMLDocument.validateOnParse = true;
        XMLDocument.load('daten/' + datei + '.xml');
        if (XMLDocument.parseError.errorCode != 0) {
            HTMLtarget.innerHTML = getError(XMLDocument)
            return false;
        }

        XSLDocument = new ActiveXObject('MSXML2.DOMDocument.3.0');
        XSLDocument.validateOnParse = true;
        if(datei == 'cv8')
          XSLDocument.load('daten/cv8.xsl');
        else
          XSLDocument.load('daten/cv.xsl');
        if (XSLDocument.parseError.errorCode != 0) {
            HTMLtarget.innerHTML = getError(XSLDocument)
            return false;
        }
        HTMLtarget.innerHTML = XMLDocument.transformNode(XSLDocument);

        if(datei != 'cv8') {
          HTMLtargetDescription = document.all['targetDESC'];

          XSLDocumentDescription = new ActiveXObject('MSXML2.DOMDocument.3.0');
          XSLDocumentDescription.validateOnParse = true;
          XSLDocumentDescription.load('daten/cvone.xsl');
          if (XSLDocumentDescription.parseError.errorCode != 0) {
              HTMLtargetDescription.innerHTML = getError(XSLDocumentDescription)
              return false;

          HTMLtargetDescription.innerHTML = XMLDocument.transformNode(XSLDocumentDescription);
          }
        }
    }

    function getError(errorObject)
    {
       var Error = new String;
       Error = "Error. " + errorObject.parseError.url + "<br/>"
             + "Line: " + errorObject.parseError.line + "<br/>"
             + "Character: " + errorObject.parseError.linepos + "<br/>"
             + "Description: " + errorObject.parseError.reason;
       return Error;
    }

    function sort(sortNode, toggle)
    {
        var sortOrder = "ascending";
        (XSLDocument.selectSingleNode("//xsl:sort/@select")).nodeValue = sortNode;
        if(toggle && (sortNode == sLastSortNode))
        {
           if(sLastSortOrder == "ascending")
            sortOrder = "descending";
        }
        sLastSortNode = sortNode;
        sLastSortOrder = sortOrder;
        (XSLDocument.selectSingleNode("//xsl:sort/@order")).nodeValue = sortOrder;
        HTMLtarget.innerHTML = XMLDocument.transformNode(XSLDocument);
    }

    function description(number)
    {
      suchnummer.value = number;
      var pos = navigator.appVersion.indexOf("MSIE");
      var iVersion = (pos > 0 ? parseInt(navigator.appVersion.substr(pos+4)) : 0);

      var objXSLT;
//      if(iVersion >= 7) // IE7
         objXSLT = new ActiveXObject('Msxml2.FreeThreadedDOMDocument.5.0');
//      else
//     {
//        if(iVersion >= 6)) // IE6
//           objXSLT = new ActiveXObject('Msxml2.FreeThreadedDOMDocument.4.0');
//        else
//          return;
//      }
      objXSLT.async = false;
      objXSLT.load('daten/cvone.xsl');

      var objCache;
//      if(iVersion >= 7) // IE7
         objCache = new ActiveXObject('Msxml2.XSLTemplate.5.0');
//      else
//      {
//        if(iVersion >= 6)) // IE6
//           objCache = new ActiveXObject('Msxml2.XSLTemplate.4.0');
//        else
//          return;
//      }
      objCache.stylesheet = objXSLT;

      var objXSLTProc = objCache.createProcessor();
      objXSLTProc.input = XMLDocument;
      objXSLTProc.addParameter("number", number, "");
      objXSLTProc.transform();

      var HTMLtargetDescription = document.all['targetDESC'];
      HTMLtargetDescription.innerHTML = objXSLTProc.output;

      window.location.href = "#oben";
    }

//-->