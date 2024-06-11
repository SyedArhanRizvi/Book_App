let cont1 = document.querySelector(".c1");
let cont2 = document.querySelector(".c2");
let cont3 = document.querySelector(".c3");
let cont4 = document.querySelector(".c4");
let cont5 = document.querySelector(".c5");
let cont6 = document.querySelector(".c6");
let cont7 = document.querySelector(".c7");
let cont8 = document.querySelector(".c8");
let cont9 = document.querySelector(".c9");
let cont10 = document.querySelector(".c10");
let cont11 = document.querySelector(".c11");
let cont12 = document.querySelector(".c12");
let cont13 = document.querySelector(".c13");
let cont14 = document.querySelector(".c14");
let cont15 = document.querySelector(".c15");
let cont16 = document.querySelector(".c16");
let cont17 = document.querySelector(".c17");
let cont18 = document.querySelector(".c18");

// console.log(cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11, cont12, cont13, cont14, cont15, cont16, cont17, cont18);


let showAllBooks = async ()=>{
    let rawMaterial = await fetch("https://books-backend.p.goit.global/books/top-books");
    let allData = await rawMaterial.json();
    // console.log(allData);
    for(let i=0; i<allData.length; i++) {
        // console.log(allData[i]);
       let book = allData.slice(0,3);
       console.log(book);
    }
}

window.addEventListener("load", showAllBooks);