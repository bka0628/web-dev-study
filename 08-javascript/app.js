console.dir(document);

//document.body.children[1].children[0].href = "https://naver.com";

let anchorElent = document.getElementById("external-link");
anchorElent.href = "https://google.com";

anchorElent = document.querySelector("a");
anchorElent.href = "https://youtube.com/";

//
// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.textContent = "This is a link";
newAnchorElement.href = "https://naver.com";

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");

// 3. Inset the new element into the parent element content
firstParagraph.append(newAnchorElement);

//
// REMOVE ELEMENT
// 1. Select the elemaent teat should be removed
let firstH1Element = document.querySelector("h1");

//
// 2. Remove it!!
// firstH1Element.remove();

// 오래된 버전의 브라우저
firstH1Element.parentElement.removeChild(firstH1Element);
// 요소가 DOM에서 제거되었지만, 메모리에서는 여전히 존재할 수 있다.
// 이는 firstH1Element가 다른 변수에 저장되어 있거나, 참조하는 코드가 여전히 있을 수 있기 때문
// 따라서, removeChild() 방법은 메모리 누수(memory leak)를 유발할 수 있다.

//
// M0VE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
console.log(firstParagraph.textContent); // 텍스트만
console.log(firstParagraph.innerHTML); // 모든 HTML 내용

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>.";
