import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
        <div>
            <section class="container">
      <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              What is Context API?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <p>
                    Context API can be passed around in global variables. It's a way to effectively produce a React app. The  Context API is also an alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context API is a way to share state across the entire app lightly. Context API provides a way to pass data through the component tree without having to pass props down manually at every level. React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests is able to pass data from parent to child via props.
                </p>
              </div>
            </div>
          </div>
         
          <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                what is semantic tag?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <p>
                  Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. Those elements have accurately described the purpose of the element and the type of content that is inside them. The semantic HTML tags help the search engines and other user devices determine the importance and context of web pages. The pages made with semantic elements are much easier to read. It has greater accessibility. It offers a better user experience.
The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. 


                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                What is difference between block and inline block?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <p>
                  Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not. Compared to display: block, the major difference is that display: inline-block does not add a line break after the element, so the element can sit next to other elements. Compared to display: inline, the major difference is that inline-block allows setting a width and height on the element. Also, with display: inline, top and bottom margins & paddings are not respected, and with display: inline-block they are. Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn’t sit next to other elements.
                  </p>
                </div>
              </div>
            </div>
        </div>
  </section>
        </div>
    );
};

export default Blog;