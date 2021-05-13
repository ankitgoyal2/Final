function add(obj, i){
    console.log(obj)
    console.log(i)
    const mName = JSON.parse(obj.medi_name)[i];
    const dosage = JSON.parse(obj.dosage)[i];
    const potency = JSON.parse(obj.potency)[i];
    var b_a_meals = JSON.parse(obj.meals)[i];
    const duration = JSON.parse(obj.duration)[i];
    const remarks = JSON.parse(obj.remarks)[i];

    var trs= $('tr');

    var element = `
    <tr>
      <th scope="row">${trs.length}</th>
      <td>${mName}</td>
      <td>${dosage}</td>
      <td>${potency}</td>
      <td>${b_a_meals}</td>
      <td>${duration}</td>
      <td>${remarks}</td>

    </tr>
    `;
    $("#tableBody").append(element)
}

fetch(`https://connectingit.in/ords/shoppergoldeneye/core/core_medicineget/${window.localStorage.getItem('d_email')}/${window.localStorage.getItem('email')}`)
.then(res=>res.json())
.then(res=>{

//     dosage: "["od","ob","oh"]"
// dr_id: "gaurav8315@gmail.com"
// duration: "["8","7","5"]"
// meals: "["a","b","a"]"
// medi_name: "["penicilin","arsh","deep"]"
// medicine_date: "2020-07-12T10:22:58Z"
// potency: "["12","13","15"]"
// remarks: "["j","good","ok"]"

    var size=res.items.length;
    console.log(res.items[size-1])

    var obj = res.items[size-1];
    size = JSON.parse(obj.dosage).length
    console.log(size)
    for(var i=0;i<size;i++)
    add(obj,i);
})

