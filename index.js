
   console.log(document.head)
//    console.log(document.title)
   console.log(document.body)
//    console.log(document.HTML)
   //------------------------------------------------------------------------------//
    // console.log(document.images)
    document.title= "DOM"
    console.log(document.title)

    //---------------------------------------------------------------------------------//
    
    
    let links = document.links
    console.log(links)
    // for  (i=0, i<links.length, i++);{
        
    //     console.log(links[i])
    // } 
      

//-----------------------------------------------------------------------------//

let div= document.createElement('div')
let Mainheading =document.createElement('h1')
Mainheading.innerText = "Every Tag Is A Object"
let subheading =document.createElement('h2')
subheading.innerText="DOM"
div.appendChild(Mainheading);
div.appendChild(subheading);
document.body.appendChild(div);
Mainheading.className="text1"
console.log(Mainheading)
subheading.className="text2"
console.log(subheading)

//------------------------------------------------------------------------------//

let ul= document.createElement('ul')
let list1= document.createElement('li')
list1.innerText='dairymilk'
let list2= document.createElement('li')
list2.innerText='kitkat'
let list3= document.createElement('li')
list3.innerText='5star'
ul.appendChild(list1)
ul.appendChild(list2)
ul.appendChild(list3)
document.body.appendChild(ul);
ul.className="table"
console.log(ul)

//--------------------------------------------------------------------------//
list1.className="table1"
  const table = document.createElement('table');


  const row1 = document.createElement('tr');
  
  
  const cell1_1 = document.createElement('td');
  cell1_1.innerText = 'id, name';

  const cell1_2 = document.createElement('td');
  cell1_2.innerText = '1, choti';

  row1.appendChild(cell1_1);
  row1.appendChild(cell1_2);


  const row2 = document.createElement('tr');

 
  const cell2_1 = document.createElement('td');
  cell2_1.innerText = 'id, name';

  const cell2_2 = document.createElement('td');
  cell2_2.innerText = '2, chotu';

  row2.appendChild(cell2_1);
  row2.appendChild(cell2_2);

  table.appendChild(row1);
  table.appendChild(row2);

 
  document.body.appendChild(table);
 
//-----------------------------------------------------------------//

  let div_1 = document.createElement("div")
  let img = document.createElement("img")
  let p = document.createElement("p")
  div_1.className="d"
  img.className='im'
  p.innerText="FOODIE";
  img.src="2.avif"
  img.alt="mot found"
  div_1.append(img,p)
  document.body.append(div)

div_1.append(img, p);
document.body.appendChild(div_1);

//---------------------------------------------------------//

let o1M = document.createElement("ol");
let olS = document.createElement("ol");
let l1 = document.createElement("li");
let l2 = document.createElement("li");
let lS = document.createElement("li");
o1M.innerText = "Main Order list";
olS.innerText = "Sub Order list";
l1.innerText="main ordered list item-1"
l2.innerText = "main ordered list item-2"
lS.innerText = "inside ordered list item-1"
olS.appendChild(lS);
l2.appendChild(olS);
o1M.append(l1,l2)
document.body.appendChild(o1M)


//---------------------------------------------------------------------------//

let section = document.createElement("section");
let h2 = document.createElement("h2");
let p_1 = document.createElement("p");
section.className = "sec";
h2.innerText="Heading of section tag";
p_1.innerText = "Paragarph tag";
section.append(h2, p_1);
document.body.appendChild(section);

//---------------------------------------------------------------------------//

let  dl = document.createElement("dl");

let dt1 = document.createElement("dt");
let dt2 = document.createElement("dt");
let dt3 = document.createElement("dt");

let dd1 = document.createElement("dd");
let dd2 = document.createElement("dd");
let dd3 = document.createElement("dd");

dt1.innerText = "dt1";
dt2.innerText = "dt2";
dt3.innerText = "dt3";

dd1.innerText = "dd1";
dd2.innerText = "dd2";
dd3.innerText = "dd3";

dt1.appendChild(dd1);
dt2.appendChild(dd2);
dt3.appendChild(dd3);

dl.append(dt1,dt2,dt3);
document.body.appendChild(dl);

//--------------------------------------------------------------------------------------//


let div_2 = document.createElement("div");
let blockquote = document.createElement("blockquote");

blockquote.innerText = "blockquote text";
div_2.innerText = "div text";

div_2.appendChild(blockquote);
document.body.appendChild(div_2);

//------------------------------------------------------------------------------------//

let div_4 = document.createElement("div");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

p1.innerText = "Paragraph tag 1";
p2.innerText = "Paragraph tag 2";
p3.innerText = "Paragraph tag 3";

div_4.innerHTML = "div tag";

div_4.append(p1,p2,p3);

document.body.appendChild(div_4)