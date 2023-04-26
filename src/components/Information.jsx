import React from 'react';

export default function Information(props) {
    return (
        <div className="informationMenu" style={{ margin: '2rem' }}>
            {props.selectedOption === "defaultOption" && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam ea dolor vero earum temporibus minus accusamus quibusdam facere eum, commodi nostrum rem, ad iure, officiis in corrupti. Quaerat quam cumque eligendi laborum, dignissimos quos neque dolorum odit, tempora tenetur eius exercitationem? Repudiandae sunt officia cupiditate et natus eveniet eius voluptates laborum repellendus autem in quos delectus corporis, praesentium sint odio porro totam placeat reprehenderit incidunt quibusdam aliquid corrupti sed amet. Unde quis corrupti nihil quo aspernatur hic, atque obcaecati explicabo quibusdam est, sed doloremque vitae ad quisquam! Molestiae nulla mollitia possimus consectetur. Libero soluta facilis dicta numquam et quaerat!</p>}

            {props.selectedOption === "option2" && <p>CSS, or Cascading Style Sheets, is a styling language used for web pages. It is used to describe the presentation of a document written in HTML or XML, including the layout, colors, fonts, and other visual aspects. CSS works by using selectors to target specific elements in a web page, and then applying styling rules to those elements. For example, you might use a selector to target all of the headings in a document, and then use CSS rules to set the font size, color, and weight for those headings.</p>}

            {props.selectedOption === "option3" && <p>JavaScript is a programming language that is used to add interactivity and dynamic behavior to web pages. It is a client-side language, meaning that it runs on the user's computer or device, rather than on the server that is serving the web page. JS is supported by all modern web browsers, including Chrome, Firefox, Safari, and Edge. JS allows developers to add functionality to web pages in a variety of ways. For example, it can be used to create dynamic effects like animations and scrolling text, to validate user input in forms, to manipulate the content of web pages in response to user actions, and to communicate with servers to fetch or send data.</p>}

            {props.selectedOption === "option4" && <p>ReactJS is a JavaScript library for building user interfaces (UIs). It was developed by Facebook and is now maintained by a community of developers. ReactJS allows developers to build reusable UI components that can be easily composed to create complex user interfaces. The core idea behind ReactJS is that it represents the UI as a function of state. This means that, based on the current state of the application, ReactJS can efficiently update the UI to reflect the changes. ReactJS uses a virtual DOM (Document Object Model) which is a lightweight representation of the actual DOM, and this allows ReactJS to make updates to the UI without needing to manipulate the actual DOM, which is a computationally expensive operation.</p>}
        </div>
    )
}