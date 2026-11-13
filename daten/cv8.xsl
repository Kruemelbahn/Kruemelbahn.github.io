<?xml version="1.0" encoding="iso-8859-1" ?>
<xsl:stylesheet xmlns:xsl="https://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
           <table border="1">
               <tr>
                   <td colspan="3" style="text-align:center"><a href="javascript:sort('nummer', true)">Nummer</a></td>
                   <td rowspan="2" style="vertical-align:bottom"><a href="javascript:sort('name', true)">Hersteller</a></td>
               </tr>
               <tr>
                   <td><font color="#8000FF">dez.</font></td>
                   <td><font color="#8000FF">hex.</font></td>
                   <td><font color="#8000FF">bin.</font></td>
               </tr>
               <xsl:apply-templates select="/CV/text">
                   <xsl:sort select="nummer" order="ascending"/>
               </xsl:apply-templates>
           </table>
    </xsl:template>

    <xsl:template match="text">
       <tr>
          <td style="vertical-align:top"><xsl:value-of select="nummer"/></td>
          <td style="vertical-align:top"><xsl:value-of select="hex"/></td>
          <td style="vertical-align:top"><xsl:value-of select="bin"/></td>
          <td style="vertical-align:top"><xsl:apply-templates select="name"/></td>
       </tr>
   </xsl:template>

   <xsl:template match="name[@href!='']">
      <a>
        <xsl:attribute name="href"><xsl:value-of select="./@href"/></xsl:attribute>
        <xsl:attribute name="target">_blank</xsl:attribute>
        <xsl:value-of select="."/>
      </a>
   </xsl:template>

   <xsl:template match="name[@href='']">
      <xsl:value-of select="."/>
   </xsl:template>

</xsl:stylesheet>