import Head from "next/head";

export default () => (
  <Head>
    <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/cdts/compiled/soyutils.js"></script>
    <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/cdts/compiled/wet-en.js"></script>


    <script type="text/javascript" dangerouslySetInnerHTML={{
      __html: `
  
    document.write(wet.builder.refTop({
      cdnEnv: 'prod',
      subTheme: 'gcweb',
      jqueryEnv: 'external',
      localPath: '',
      isApplication: true
    }))

    `}}
    />

    {/* <script type="text/javascript" dangerouslySetInnerHTML={{
      __html: `
            function exportResults(lang) {
              var source = window.document.getElementById(lang + "-content").innerHTML;

              var val = htmlToPdfmake(source);
              var dd = {content:val};
              console.log(dd);

              pdfMake.createPdf(dd).download("openfisca-scenarios-" + lang + ".pdf");
            }
          `}}
    /> */}

  </Head>

)