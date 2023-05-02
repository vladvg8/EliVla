let xmlHHTP = new XMLHttpRequest();
alert(1)
        xmlHHTP.open('GET', "../errorpages.xml", false)
        xmlHHTP.send()
        let xmlDoc = xmlHHTP.responseXML
        alert(xmlDoc)