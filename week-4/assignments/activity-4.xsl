<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/"> 
        <html> 
            <body> 
                <h1>Table 1</h1>
                <table border="1"> 
                    <tr bgcolor="#9acd32"> 
                        <th>Product name</th> 
                        <th>Manufacturer id</th> 
                        <th>Description</th> 
                        <th>USD price</th> 
                    </tr>
                    <xsl:for-each select="products/product"> 
                        <xsl:if test="shippable == 'True'">
                            <tr> 
                                <td><xsl:value-of select="productName"/></td> 
                                <td><xsl:value-of select="manufacturer/@id"/></td> 
                                <td><xsl:value-of select="description"/></td> 
                                <td><xsl:value-of select="prices/price[1]"/></td> 
                            </tr> 
                        </xsl:if>
                    </xsl:for-each> 
                </table> 
                <h1>Table 2</h1>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>   
