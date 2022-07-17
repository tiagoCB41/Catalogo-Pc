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
function redirecionar() {
    var testRedirect = document.getElementById("pesquisar").value;
    console.log(testRedirect)
    if (testRedirect == "3RHO" || testRedirect == "RHO" || testRedirect == "3rho" || testRedirect == "rho" || testRedirect == "3-rho") {
        window.open(link3Rho, '_blank')
    } else if (testRedirect == "ANROI" || testRedirect == "anroi") {
        window.open(linkAnroi, '_blank')
    } else if (testRedirect == "APEX" || testRedirect == "apex") {
        window.open(linkApex, '_blank')
    } else if (testRedirect == "APLIC RESOLIT" || testRedirect == "aplic resolit") {
        window.open(linkAplic, '_blank')
    } else if (testRedirect == "ARCA RETENTORES" || testRedirect == "arca retentores") {
        window.open(linkArca, '_blank')
    } else if (testRedirect == "ATAG" || testRedirect == "atag") {
        window.open(linkAtag, '_blank')
    } else if (testRedirect == "BASTOS" || testRedirect == "bastos") {
        window.open(linkBastos, '_blank')
    } else if (testRedirect == "BAUEN" || testRedirect == "bauen") {
        window.open(linkBauen, '_blank')
    } else if (testRedirect == "BEL AR" || testRedirect == "bel ar") {
        window.open(linkBelAr, '_blank')
    } else if (testRedirect == "BIBI" || testRedirect == "bibi") {
        alert("Catalogo indisponivel")
    } else if (testRedirect == "CIPEC" || testRedirect == "cipec") {
        window.open(linkCipec, '_blank')
    } else if (testRedirect == "CONTINENTAL" || testRedirect == "continental") {
        window.open(linkContinental, '_blank')
    } else if (testRedirect == "DAYCO" || testRedirect == "dayco") {
        window.open(linkDayco, '_blank')
    } else if (testRedirect == "DNI" || testRedirect == "dni") {
        window.open(linkDni, '_blank')
    } else if (testRedirect == "DPL" || testRedirect == "dpl") {
        window.open(linkDpl, '_blank')
    } else if (testRedirect == "EATON" || testRedirect == "eaton") {
        window.open(linkEaton, '_blank')
    } else if (testRedirect == "FANIA" || testRedirect == "fania") {
        window.open(linkFania, '_blank')
    } else if (testRedirect == "FARJ" || testRedirect == "farj") {
        window.open(linkFarj, '_blank')
    } else if (testRedirect == "FRASLE" || testRedirect == "frasle") {
        window.open(linkFrasle, '_blank')
    } else if (testRedirect == "FREMAX" || testRedirect == "fremax") {
        window.open(linkFremax, '_blank')
    } else if (testRedirect == "GATES CORREIAS" || testRedirect == "gates correias") {
        window.open(linkGatesCorreias, '_blank')
    } else if (testRedirect == "GAUSS" || testRedirect == "gauss") {
        window.open(linkGauss, '_blank')
    } else if (testRedirect == "GLOBO" || testRedirect == "globo") {
        window.open(linkGlobo, '_blank')
    } else if (testRedirect == "HIPPER FREIOS" || testRedirect == "hipper freios" || testRedirect == "hiper freios") {
        window.open(linkHiperFreios, '_blank')
    } else if (testRedirect == "IMA" || testRedirect == "ima") {
        window.open(linkIma, '_blank')
    } else if (testRedirect == "IRB" || testRedirect == "irb") {
        window.open(linkIrb, '_blank')
    } else if (testRedirect == "MAGNETI MARELLI" || testRedirect == "magneti marelli") {
        window.open(linkMagnetiMarelli, '_blank')
    } else if (testRedirect == "MAHLE" || testRedirect == "mahle") {
        window.open(linkMahle, '_blank')
    } else if (testRedirect == "MASTRA" || testRedirect == "mastra") {
        window.open(linkMastra, '_blank')
    } else if (testRedirect == "MAXGEAR" || testRedirect == "maxgear") {
        window.open(linkMaxgear, '_blank')
    } else if (testRedirect == "MG MANGUEIRA" || testRedirect == "mg mangueira") {
        window.open(linkMgMangueira, '_blank')
    } else if (testRedirect == "MOBENSANI" || testRedirect == "mobensani") {
        window.open(linkMobensani, '_blank')
    } else if (testRedirect == "MANROE AMORTECEDORES" || testRedirect == "manroe amortecedores") {
        window.open(linkManroeAmortecedores, '_blank')
    } else if (testRedirect == "MANROE AXIOS" || testRedirect == "manroe axios" || testRedirect == "manroe" || testRedirect == "axios") {
        window.open(linkManroeAxios, '_blank')
    } else if (testRedirect == "MTE THOMSON" || testRedirect == "mte thomson") {
        window.open(linkMteThomson, '_blank')
    } else if (testRedirect == "NAKATA" || testRedirect == "nakata") {
        window.open(linkNakata, '_blank')
    } else if (testRedirect == "NGK" || testRedirect == "ngk") {
        window.open(linkNgk, '_blank')
    } else if (testRedirect == "PERFECT" || testRedirect == "perfect") {
        window.open(linkPerfect, '_blank')
    } else if (testRedirect == "POLO" || testRedirect == "polo") {
        window.open(linkPolo, '_blank')
    } else if (testRedirect == "REPARADOR" || testRedirect == "reparador") {
        window.open(linkReparador, '_blank')
    } else if (testRedirect == "RIOSULENSE" || testRedirect == "riosulense") {
        window.open(linkRiosulense, '_blank')
    } else if (testRedirect == "SABÓ" || testRedirect == "sabó" || testRedirect == "sabo") {
        window.open(linkSabo, '_blank')
    } else if (testRedirect == "SPALL" || testRedirect == "spall") {
        window.open(linkSpall, '_blank')
    } else if (testRedirect == "SPICER" || testRedirect == "spicer") {
        window.open(linkSpicer, '_blank')
    } else if (testRedirect == "STAHL" || testRedirect == "stahl") {
        window.open(linkStahl, '_blank')
    } else if (testRedirect == "TARANTO" || testRedirect == "taranto") {
        window.open(linkTaranto, '_blank')
    } else if (testRedirect == "TECFIL" || testRedirect == "tecfil") {
        window.open(linkTecfil, '_blank')
    } else if (testRedirect == "VALCLEI" || testRedirect == "valclei") {
        window.open(linkValclei, '_blank')
    } else if (testRedirect == "VALEO" || testRedirect == "valeo") {
        window.open(linkValeo, '_blank')
    } else if (testRedirect == "VANNUCCI" || testRedirect == "vannucci" || testRedirect == "vanuci") {
        alert("Catalogo indisponivel.")
            /*window.open(linkVannucci, '_blank')*/
    } else if (testRedirect == "VIEMAR" || testRedirect == "viemar") {
        window.open(linkViemar, '_blank')
    } else if (testRedirect == "VISCONDE" || testRedirect == "visconde") {
        window.open(linkVisconde, '_blank')
    } else if (testRedirect == "WEGA" || testRedirect == "wega") {
        window.open(linkWega, '_blank')
    } else if (testRedirect == "WILLTEC" || testRedirect == "willtec" || testRedirect == "wiltec") {
        window.open(linkWilltec, '_blank')
    } else if (testRedirect == "ZF" || testRedirect == "zf") {
        window.open(linkZf, '_blank')
    } else if (testRedirect == "ZM" || testRedirect == "zm") {
        window.open(linkZm, '_blank')
    } else { alert("Fornecedor inválido, tente novamente.") }
}