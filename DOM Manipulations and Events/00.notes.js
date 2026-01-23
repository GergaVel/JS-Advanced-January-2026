// --in the browser:
// --creating Ref's --> they are live ref's and can exist only on one place!!!
const elements = Array.from(document.querySelectorAll('p')); // returns fixed list of items (texts list)
const sections = Array.from(document.querySelectorAll('section')); //the whole section --> in this case left and right that we are switching elements from. PARENTS!!!


//appendChild() method -zakachi file
seciton[0].appendChild(elements[2]); //took a paragraph and appended it to the left section. It got attached at the end of the list

//removeChild() - completely deletes and element from the DOM tree but not from the memory, you can find it back. IF you use appendChild() it will be returned
// -- elements are created in the memory - they don;t exist on the page. To see it on the page, we need to append it to the DOM tree

//replaceChild() - first select the parent left - section[0], right - section[1]
// -- first you chose the new element and then which to be replaced with it
sections[1].replaceChild(elements[0], elements[5]);

//replaceChildren() - to replace all children
sections[1].replaceChildren(elements[1], elements[3], elements[4]) 
// -- section[1] is the DESTINATION!!! So you search for these elements wherever they are and put them in section[1]
// -- can be given not as an arr but as individual elements
// --  moved multiple elements from section[0]left to section[1]right

sections[1].replaceChildren(...elements)
// -- took ALL of the elements and moved them to the other parent: from section[0] left to section[1] right

//create new DOM element --> returns a gotov obekt
let p = documnt.createElement('p'); //creates a <p><\p>
let li = document.createElement('li'); //creates a list
// -- when we create a new p, we see 'undefined', because it is not to see on the page. 
// -- we use sections[0].appendChild('p'); and there is an empty paragraph!!!
// -- with p.textContent = 'New paragraph'; we add text to it. HOW COOL!!

//clone/copy elements
let lis = document.getElementById('my-list'); //ignore the s!
let newLi = li.cloneNode(true); // true kopira tsialata erarhia, false samo elements
// -- elements are created in the memory - they don;t exist on the page. To see it on the page, we need to append it to the DOM tree


