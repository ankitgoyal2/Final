fetch(`https://connectingit.in/ords/shoppergoldeneye/core/COR_REFERREL_GET/${window.localStorage.getItem('email')}`)
.then(res=>res.json())
.then(res=>{
    var size = res.items.length
    var obj = res.items[size-1]

    //obj-->
    // diagnostic_center: "test"
    // dr_id: "gaurav8315@gmail.com"
    // next_ppointment: "01/01/2020"
    // pharmacy: "test"

    console.log(obj)

    document.getElementById('pharmacy').value = obj.pharmacy
    document.getElementById('diagnostic-center').value = obj.diagnostic_center;
    document.getElementById('next-appointment').value = obj.next_ppointment


})

function clearSelection()
{
if (window.getSelection) {window.getSelection().removeAllRanges();}
else if (document.selection) {document.selection.empty();}
}
function copyText(id){
    console.log(id)
 var textArea = document.getElementById(id);
 textArea.disabled=false;
 textArea.select();
 document.execCommand('copy');
 clearSelection();
 textArea.disabled=true;

}