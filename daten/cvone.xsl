<?xml version="1.0" encoding="iso-8859-1" ?>
<xsl:stylesheet xmlns:xsl="https://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:param name="number">1</xsl:param>

    <xsl:template match="/">
                <table border="1">
                    <tr>
                        <td style="vertical-align:bottom"><font color="#8000FF">Nummer</font></td>
                        <td style="vertical-align:bottom"><font color="#8000FF">Kurzbeschreibung</font></td>
                        <td><font color="#8000FF">min.<br/>Wert</font></td>
                        <td><font color="#8000FF">max.<br/>Wert</font></td>
                        <td style="vertical-align:bottom"><font color="#8000FF">Format</font></td>
                    </tr>
                    <xsl:apply-templates select="/CV/text[@nr=$number]"/>
                </table>
    </xsl:template>

    <xsl:template match="text">
       <tr>
          <td style="vertical-align:top"><xsl:apply-templates select="nummer"/></td>
          <td style="vertical-align:top"><xsl:value-of select="kurztext"/></td>
          <td style="vertical-align:top"><xsl:value-of select="minwert"/></td>
          <td style="vertical-align:top"><xsl:value-of select="maxwert"/></td>
          <td style="vertical-align:top"><xsl:apply-templates select="format"/></td>
       </tr>
       <tr>
          <td colspan="5" style="vertical-align:top"><xsl:apply-templates select="beschreibung"/></td>
       </tr>
   </xsl:template>

   <xsl:template match="nummer[@href!='']">
      <a>
        <xsl:attribute name="href">
          <xsl:value-of select="./@href"/>
        </xsl:attribute>
        <xsl:value-of select="."/>
      </a>
   </xsl:template>
   <xsl:template match="nummer[@href='']">
      <xsl:value-of select="."/>
   </xsl:template>

   <xsl:template match="link">
      <a><xsl:attribute name="href">javascript:description(<xsl:value-of select="."/>)</xsl:attribute><xsl:value-of select="."/></a>
   </xsl:template>

   <xsl:template match="beschreibung">
      <xsl:apply-templates/>
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