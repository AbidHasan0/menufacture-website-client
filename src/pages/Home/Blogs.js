import React from 'react';

const Blogs = () => {
   return (
      <div className='p-5'>
         <div className='container mt-5'>
            <div className='mb-5'>
               <h2>Q: How will you improve the performance of react application</h2>
               <p>
                  Performance-related problems in web app is not new. Developers have been encountering these issues since a longer period of time. Here's why when any new language originates, developers are bound to face performance issues with it. React is one such example of language. It boasts of a DOM which is very fast. Fast in a way that sometimes, it makes many irrelevant components render the tree. This makes a UI glitch and sometimes developers gets hesitant to continue with the language. However, there are some ways through which developers can solve the performance related problems in React based web app.
               </p>
            </div>
            <div className='mb-5'>
               <h2>Q: What are the difference way to manage a state in a react application</h2>
               <p>
                  Something that may surprise you is that any website or application you build with plain JavaScript already involves state. It's just not obvious where it lives.One significant benefit of using React and why it's in your interest to use React in develop your JavaScript applications is that it gives you much easier patterns for updating your state.
               </p>
            </div>
            <div className='mb-5'>
               <h2>Q: How does Phototypical inheritance work?</h2>
               <p>
                  A prototype is an object that is used as a blueprint for creating other objects. When an object is created using a prototype, the new object inherits all of the properties and methods of the prototype.This object inherits directly from the root object, which is the default object in JavaScript. The root object has no prototype, and therefore, all objects in JavaScript inherit from it.
               </p>
            </div>
            <div className='mb-5'>
               <h2>Q: What is a unit test?Why should write unittest?</h2>
               <p>
                  Unit testing is a software testing method where units the individual components of software are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.We use your sign-up to provide content in ways you've consented to and to improve our understanding of you. This may include adverts from us and 3rd parties based on our understanding.
               </p>
            </div>
            <div className='mb-5'>
               <h2>Q: You have an array of products.each object has a name,price,description.how will you implement a search to find product by name?</h2>
               <p>
                  I know similar questions have been asked before, but this one is a little different. I have an array of unnamed objects which contain an array of named objects, and I need to get the object where "name" is "string 1". Here is an example:
                  const array = [
                  name:"string 1", value:"this", other: "that"
                  name:"string 2", value:"this", other: "that"
                  ];
               </p>
            </div>
         </div>
      </div>
   );
};

export default Blogs;