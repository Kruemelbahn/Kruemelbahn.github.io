<?xml version="1.0" encoding="iso-8859-1" ?>
<xsl:stylesheet xmlns:xsl="https://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
                <table border="1">
                    <tr>
                        <td style="vertical-align:bottom"><a href="javascript:sort('nummer', true)">Nummer</a></td>
                        <td style="vertical-align:bottom"><a href="javascript:sort('kurztext', true)">Kurzbeschreibung</a></td>
                        <td>min.<br/>Wert</td>
                        <td>max.<br/>Wert</td>
                        <td style="vertical-align:bottom">Format</td>
                    </tr>
                    <xsl:apply-templates select="/CV/text">
                        <xsl:sort select="nummer" order="ascending"/>
                    </xsl:apply-templates>
                </table>
    </xsl:template>

    <xsl:template match="text">
       <tr>
          <td style="vertical-align:top"><xsl:apply-templates select="nummer"/></td>
          <td style="vertical-align:top"><xsl:apply-templates select="kurztext"/></td>
          <td style="vertical-align:top"><xsl:value-of select="minwert"/></td>
          <td style="vertical-align:top"><xsl:value-of select="maxwert"/></td>
          <td style="vertical-align:top"><xsl:apply-templates select="format"/></td>
       </tr>
   </xsl:template>

   <xsl:template match="nummer[@href!='']">
      <a>
        <xsl:attribute name="name">
          <xsl:value-of select="."/>
        </xsl:attribute>
        <xsl:attribute name="href">
          <xsl:value-of select="./@href"/>
        </xsl:attribute>
        <xsl:value-of select="."/>
      </a>
   </xsl:template>
   <xsl:template match="nummer[@href='']">
      <a>
        <xsl:attribute name="name">
          <xsl:value-of select="."/>
        </xsl:attribute>
        <xsl:value-of select="."/>
      </a>
   </xsl:template>

   <xsl:template match="kurztext[@nr!='']">
      <a>
        <xsl:attribute name="href">
          javascript:description('<xsl:value-of select="@nr"/>')
        </xsl:attribute>
        <xsl:value-of select="."/>
      </a>
   </xsl:template>
   <xsl:template match="kurztext[@nr='']">
      <xsl:value-of select="."/>
   </xsl:template>

   <xsl:template match="link">
      <a><xsl:attribute name="href">javascript:description(<xsl:value-of select="."/>)</xsl:attribute><xsl:value-of select="."/></a>
   </xsl:template>

   <xsl:template match="format">
      <xsl:apply-templates/>
   </xsl:template>

   <xsl:template match="B">
      <b><xsl:apply-templates/></b>
   </xsl:template>

   <xsl:template match="BR">
      <br/>
   </xsl:template>

</xsl:stylesheet>