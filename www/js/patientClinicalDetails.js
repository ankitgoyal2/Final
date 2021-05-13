fetch(`https://connectingit.in/ords/shoppergoldeneye/core/core_get/${window.localStorage.getItem('d_email')}/${window.localStorage.getItem('email')}`)
.then(res=>res.json())
.then(res=>{
    console.log(res.items);
    var i= res.items.length-1
    document.getElementById('diagnosis').value = res.items[i].diagnosis;
    document.getElementById('complaints').value = res.items[i].presenting_complaints;
    document.getElementById('observation').value = res.items[i].clinical_observation;

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

