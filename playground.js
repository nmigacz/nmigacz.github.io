


/* Pass the embed mode option here */
const viewerConfig = {
    embedMode: "LIGHT_BOX",
    defaultViewMode: "FIT_PAGE"
};

/* Wait for Adobe Document Services PDF Embed API to be ready and enable the View PDF button */
document.addEventListener("adobe_dc_view_sdk.ready", function () {
  let btnChoice = document.getElementBy().value;
  console.log("Heloow")
    document.getElementById(btnChoice).disabled = false;
});

/* Function to render the file using PDF Embed API. */
function previewFile()
{
    /* Initialize the AdobeDC View object */
    var adobeDCView = new AdobeDC.View({
        /* Pass your registered client id */
        clientId: "0150757769224f6787a0ae67e2698795"
    });

    /* Invoke the file preview API on Adobe DC View object */
    adobeDCView.previewFile({
        /* Pass information on how to access the file */
        content: {
            /* Location of file where it is hosted */
            location: {
              if(btnChoice === "view-pdf-btn"){
                url: "https://dl.dropboxusercontent.com/s/350jqdhkd3kcqgw/conversationPits.pdf"
              } ,
                /*
                If the file URL requires some additional headers, then it can be passed as follows:-
                header: [
                    {
                        key: "<HEADER_KEY>",
                        value: "<HEADER_VALUE>",
                    }
                ]
                */
            },
        },
        /* Pass meta data of file */
        metaData: {
            /* file name */
            fileName: "Conversation Pits.pdf"
        }
    }, viewerConfig);
};
