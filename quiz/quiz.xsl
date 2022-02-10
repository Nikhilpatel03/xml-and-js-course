<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table border="1">
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Available Sizes</td>
                        <td>Price</td>
                    </tr>
                    <xsl:for-each select="products/product">
                        <tr>
                            <td>
                                <xsl:value-of select="@id"/>
                            </td>
                            <td>
                                <xsl:value-of select="productName"/>
                            </td>
                            <td>
                                <xsl:for-each select="availableSizes/size">
                                    <p style="text-transform:capitalize;">
                                        <xsl:value-of select="@description"></xsl:value-of>
                                        <span> - </span>
                                        <xsl:value-of select="current()"></xsl:value-of>
                                    </p>
                                </xsl:for-each>
                            </td>
                            <td>
                                <xsl:for-each select="prices/price">
                                    <p>
                                        <xsl:value-of select="current()"></xsl:value-of>
                                    </p>
                                </xsl:for-each>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>