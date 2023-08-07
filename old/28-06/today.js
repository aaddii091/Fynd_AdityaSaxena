// // ----------Basic----------
// let text="Hello Students";
// let pattern=/Students/;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;

// ----------Modifiers/Attributes----------
// *********** i **************
// let text="Hello Students";
// let pattern=/students/i;
// // let result=text.match(pattern);
// // let result=pattern.test(text)
// // let result=pattern.ignoreCase;
// let result=pattern.exec(text);
// // let result=text.search(pattern)

// console.log(result);
// document.getElementById('demo').innerHTML=result;


// // *********** g **************
// let text="How Is everyone and what is this?";
// let pattern=/is/gi;
// let result=text.match(pattern);

// // console.log(pattern.toString());
// // console.log(result);
// document.getElementById('demo').innerHTML=result;

// *********** m **************
// ^start and end $
// let text=`Is this
// all there
// is
//  is
// `;
// let pattern=/^is$/gmi;
// let result=text.match(pattern);

// // console.log(pattern.toString());
// // console.log(result);
// document.getElementById('demo').innerHTML=result;



// ----------Groups---------
// *********[abc]**********

// let text="jkjkjkIIIs this but all there is?";
// // let pattern=/[^h]/gi;
// // let pattern=/Is/;
// let pattern=/[A-z]/g;
// let result=text.match(pattern);
// console.log(result);
// document.getElementById('demo').innerHTML=result;


// *********[^abc]**********
// let pattern=/[^h]/gi;


// // *********[0-9]**********
// let text="1234567890";
// let pattern=/[^1-4]/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// *********(X|Y)**********
// let text="re,yellow,red,green,blue,green,gre,red,re,red";
// let pattern=/(red|green)/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;



// -----------Meta Characters-----------
// // ***********\w********
// // A-Z a-z 0-9 _
// let text="Give_100%!$";
// let pattern=/\w/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// // ***********\W********
// // non word characters
// let text="Give_100%!$";
// let pattern=/\W/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// // ***********\d********
// // non word characters
// let text="Give_100%!$";
// let pattern=/\d/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// ***********\D********
// non word characters
// let text="Give_100%!$";
// let pattern=/\D/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;



// -----------Quantifiers-----------
// // ***********+********
// let text="Hellooo Wor ld!  He llo coollege!";
// // let pattern=/o+/g;

// let pattern=/\W+/g;

// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;

//   *
// hohoho
// let text="Hello How are you home hooohoooo heo hoo?";
// let text="Hello How are you hoho home hooohoooo heo hoo?";

// // let pattern=/Ho*oh/gi;
// let pattern=/(ho)+/gi
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


//   ?


// let text="1,10,100, 1000?"
// let pattern=/100?/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// {x,y}
// let text="10,100,1000 or 10000?"
// let pattern=/\d{3,4}/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// {x,}
// let text="10,100,1000 or 10000?"
// let pattern=/\d{3,}/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// {x}
// let text="10,100,1000 or 10000?"
// let text="abcpppppp"
// // let pattern=/\d{3}/g;
// let pattern=/p{3}/g;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;






