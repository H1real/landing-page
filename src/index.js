
document.addEventListener("DOMContentLoaded", () => {
   
  });

  function changeContent(pageName) {
     // 1 get element by id = "content"
        const contentElement = document.getElementById("content");
        
     //2 get page by name
       const innerHTMLData = getPageByName(pageName);
       console.log(innerHTMLData);
     //3 set content property innerHTML found page
     contentElement.innerHTML = innerHTMLData;
       
  }

  function getPageByName(pageName) {
    const pagesMap = {
        'Home page': `<h3 class="tx">I would like you to try this  <a href="https://www.coolmathgames.com/0-powerline-io?utm_content=CTA_You_Will_Also_Like">link text</a></h3>
        <img class="img" src="img/Powerline_OG-logo.jpg">
        <div>
            <label for="answer">put answer here</label>
            <input type="number" id="answer"/>
            <button>check answer</button>
        </div>`
    }
    return pagesMap[pageName] || '';
  }
