import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            

            <h1 className='bg-light text-danger text-center mt-10'>Questions and Answers</h1>
            <div className="bg-light mt-5 text-justify">

                <h3 className='text-success fw-bold text-left'>Q-1: How will you improve the performance of a React Application?</h3>
                <p className='text-justify'> 
                Ans:     Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.s say you are traveling and you're about to board a flight.
                </p>

                <h3 className='text-success fw-bold text-left'>Q-2: What are the different ways to manage a state in a React application?</h3>
                <p className='text-justify'> 
                    Ans: When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                    There are four main types of state you need to properly manage in your React apps:
                    1. Local state,
                    2. Global state,
                    3. Server state,
                    4. URL state   
                </p>

                <h3 className='text-success fw-bold text-left'>Q-3: How does prototypical inheritance work?</h3>
                <p className='text-justify'> 
                Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>

                <h3 className='text-success fw-bold text-left'>Q-4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p className='text-justify'> 
                    The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)
                    It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.
                </p>

                <h3 className='text-success fw-bold text-left'>Q-5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p className='text-justify'> 
                   Using Find Query
                </p>
                <h3 className='text-success fw-bold text-left'>Q-6: What is a unit test? Why should write unit tests?</h3>
                <p className='text-justify'> 
                Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </p>
        </div>




        </div>
    );
};

export default Blogs;