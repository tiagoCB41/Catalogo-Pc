let link3Rho = "https://www.3rho.com.br/pt-br/produtos/categorias"
let linkAnroi = "https://c123.com.br/anroi"
let linkApex = "https://c123.com.br/apex/"
let linkAplic = "http://c123.com.br/aplic/"
let linkArca = "https://baixecatalogo.com.br/catalogo/arca-retentores"
let linkAtag = "http://c123.com.br/atag/cadini.asp"
let linkBastos = "http://www.c123.com.br/bastos/ "
let linkBauen = "http://www.c123.com.br/bauen/res.asp?l1=93 "
let linkBelAr = "http://c123.com.br/bel-ar/ "
let linkBibi = ""
let linkCipec = "http://www.c123.com.br/cipec/res.asp?idm=&lb=1 "
let linkContinental = "http://aam-southamerica.contitech.de/pages/vehicle-search/vehicle-search_pt.html "
let linkDayco = "https://www.daycogarage.com/catalogue/pt-pt"
let linkDni = "https://www.dni.com.br/pt/automotivo/acessorios-automotivos"
let linkDpl = "http://www.c123.com.br/dpl/res.asp?l1=766&l=2 "
let linkEaton = "http://www.c123.com.br/eaton/cadini.asp?l=1 "
let linkFania = "https://c123.com.br/fania/ "
let linkFarj = "http://c123.com.br/farj/ "
let linkFrasle = "https://catalogo.fras-le.com/FRAS-LE/ "
let linkFremax = "https://www.fremax.com.br/br/catalogo/disco-e-tambor-de-freio/ "
let linkGatesCorreias = "https://www.gatesbrasil.com.br/catalogos.php "
let linkGauss = "https://www.gauss.com.br/ "
let linkGlobo = "https://globopecas.com.br/produtos/ "
let linkHiperFreios = "https://www.hipperfreios.com.br/catalogo/catalogo-hipper-freios.pdf"
let linkIma = "http://ima.ind.br/catalogos/ "
let linkIrb = "http://irbauto.com.br/ "
let linkMagnetiMarelli = "http://www.mmcofap.com.br/catalogo-eletronico-introducao.aspx "
let linkMahle = "https://catalog.mahle-aftermarket.com/br/?home "
let linkMastra = "http://www.mastra.com.br/catalogo "
let linkMaxgear = "https://maxgear.com.br/category/catalogo-e-dicas/ "
let linkMgMangueira = "https://mgmangueiras.com.br/produtos"
let linkMobensani = "http://mobensani.com.br/produtos/ "
let linkManroeAmortecedores = "http://c123.com.br/MonroeAmortecedores/ "
let linkManroeAxios = "http://c123.com.br/MonroeAxios/ "
let linkMteThomson = "https://cate.mte-thomson.com.br "
let linkNakata = "https://www.catalogonakata.com.br/ "
let linkNgk = "https://automotivo.ngkntk.com.br/produtos/"
let linkPerfect = "https://www.perfectautomotive.com/new/catalogo_ideia.asp"
let linkPolo = "http://www.c123.com.br/polo/ "
let linkReparador = "https://reparador.fiat.com.br/ "
let linkRiosulense = "https://catalogo.riosulense.com.br/pt/home/ "
let linkSabo = "https://www.sabo.com.br/catalogo-web/ "
let linkSpall = "http://www.spaal.com.br/catalogos/?viewType=Print&viewClass=Print "
let linkSpicer = "https://baixecatalogo.com.br/catalogo/spicer-brasil "
let linkStahl = "http://www.stahl.com.br/br/produtos/garfos-duplos "
let linkTaranto = "http://c123.com.br/taranto/ "
let linkTecfil = "http://tecfil-catalago.gruposofape.com.br/CatalogoTecfil/index.xhtml "
let linkValclei = "http://www.valclei.com.br/assets/admin/uploads/Catalogo_Valclei_2016_WEB.pdf "
let linkValeo = "https://www.valeoservice.com.br/pt-br/catalogs "
let linkVannucci = "http://c123.com.br/Vannucci/ "
let linkViemar = "https://viemar.com/viemar/newcat/index.jsp "
let linkVisconde = "https://radiadoresvisconde.com.br/catalogo/ "
let linkWega = "https://wegamotors.com/consulta-on-line/ "
let linkWilltec = "http://www.c123.com.br/willtec/ "
let linkZf = "https://webcat.zf.com/?SPR=15 "
let linkZm = "https://www.zm.com.br/catalogo "




// FUNÇÃO REDIRECIONAR
function redirect() {
    var testRedirect = document.getElementById("pesquisar").value;
    console.log(testRedirect)
    if (testRedirect == "3RHO") {
        window.location.href = link3Rho
    } else if (testRedirect == "ANROI") {
        window.location.href = linkAnroi
    } else if (testRedirect == "APEX") {
        window.location.href = linkApex
    } else if (testRedirect == "APLIC RESOLIT") {
        window.location.href = linkAplic
    } else if (testRedirect == "ARCA RETENTORES") {
        window.location.href = linkArca
    } else if (testRedirect == "ATAG") {
        window.location.href = linkAtag
    } else if (testRedirect == "BASTOS") {
        window.location.href = linkBastos
    } else if (testRedirect == "BAUEN") {
        window.location.href = linkBauen
    } else if (testRedirect == "BEL AR") {
        window.location.href = linkBelAr
    } else if (testRedirect == "BIBI") {
        alert("Catalogo indisponivel")
    } else if (testRedirect == "CIPEC") {
        window.location.href = linkCipec
    } else if (testRedirect == "CONTINENTAL") {
        window.location.href = linkContinental
    } else if (testRedirect == "DAYCO") {
        window.location.href = (linkDayco)
    } else if (testRedirect == "DNI") {
        window.location.href = linkDni
    } else if (testRedirect == "DPL") {
        window.location.href = linkDpl
    } else if (testRedirect == "EATON") {
        window.location.href = linkEaton
    } else if (testRedirect == "FANIA") {
        window.location.href = linkFania
    } else if (testRedirect == "FARJ") {
        window.location.href = linkFarj
    } else if (testRedirect == "FRASLE") {
        window.location.href = linkFrasle
    } else if (testRedirect == "FREMAX") {
        window.location.href = linkFremax
    } else if (testRedirect == "GATES CORREIAS") {
        window.location.href = linkGatesCorreias
    } else if (testRedirect == "GAUSS") {
        window.location.href = linkGauss
    } else if (testRedirect == "GLOBO") {
        window.location.href = linkGlobo
    } else if (testRedirect == "HIPPER FREIOS") {
        window.location.href = linkHiperFreios
    } else if (testRedirect == "IMA") {
        window.location.href = linkIma
    } else if (testRedirect == "IRB") {
        window.location.href = linkIrb
    } else if (testRedirect == "MAGNETI MARELLI") {
        window.location.href = linkMagnetiMarelli
    } else if (testRedirect == "MAHLE") {
        window.location.href = linkMahle
    } else if (testRedirect == "MASTRA") {
        window.location.href = linkMastra
    } else if (testRedirect == "MAXGEAR") {
        window.location.href = linkMaxgear
    } else if (testRedirect == "MG MANGUEIRA") {
        window.location.href = linkMgMangueira
    } else if (testRedirect == "MOBENSANI") {
        window.location.href = linkMobensani
    } else if (testRedirect == "MANROE AMORTECEDORES") {
        window.location.href = linkManroeAmortecedores
    } else if (testRedirect == "MANROE AXIOS") {
        window.location.href = linkManroeAxios
    } else if (testRedirect == "MTE THOMSON") {
        window.location.href = linkMteThomson
    } else if (testRedirect == "NAKATA") {
        window.location.href = linkNakata
    } else if (testRedirect == "NGK") {
        window.location.href = linkNgk
    } else if (testRedirect == "PERFECT") {
        window.location.href = linkPerfect
    } else if (testRedirect == "POLO") {
        window.location.href = linkPolo
    } else if (testRedirect == "REPARADOR") {
        window.location.href = linkReparador
    } else if (testRedirect == "RIOSULENSE") {
        window.location.href = linkRiosulense
    } else if (testRedirect == "SABÓ") {
        window.location.href = linkSabo
    } else if (testRedirect == "SPALL") {
        window.location.href = linkSpall
    } else if (testRedirect == "SPICER") {
        window.location.href = linkSpicer
    } else if (testRedirect == "STAHL") {
        window.location.href = linkStahl
    } else if (testRedirect == "TARANTO") {
        window.location.href = linkTaranto
    } else if (testRedirect == "TECFIL") {
        window.location.href = linkTecfil
    } else if (testRedirect == "VALCLEI") {
        window.location.href = linkValclei
    } else if (testRedirect == "VALEO") {
        window.location.href = linkValeo
    } else if (testRedirect == "VANNUCCI") {
        alert("Catalogo indisponivel.")
            /*window.location.href = linkVannucci*/
    } else if (testRedirect == "VIEMAR") {
        window.location.href = linkViemar
    } else if (testRedirect == "VISCONDE") {
        window.location.href = linkVisconde
    } else if (testRedirect == "WEGA") {
        window.location.href = linkWega
    } else if (testRedirect == "WILLTEC") {
        window.location.href = linkWilltec
    } else if (testRedirect == "ZF") {
        window.location.href = linkZf
    } else if (testRedirect == "ZM") {
        window.location.href = linkZm
    } else { alert("Fornecedor inválido, tente novamente.") }
}